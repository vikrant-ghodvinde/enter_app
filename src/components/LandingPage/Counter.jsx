"use client";
import { useEffect, useState } from "react";

const Counter = () => {
  const [targetDate] = useState(new Date("2024-12-31").getTime());
  const [remainingDays, setRemainingDays] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      days = days < 10 ? "0" + days : days;
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      setRemainingDays({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });

      if (distance < 0) {
        setRemainingDays({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex items-center justify-evenly gap-4 max-sm:gap-1 my-8">
      <div className="relative w-full min-w-16 py-1 border-2 border-white rounded-lg shadow-full-inner">
        <h4 className="text-2xl font-semibold">{remainingDays.days}</h4>
        <p className="text-xs">Days</p>
      </div>
      <div className="relative w-full min-w-16 py-1 border-2 border-white rounded-lg shadow-full-inner">
        <h4 className="text-2xl font-semibold">{remainingDays.hours}</h4>
        <p className="text-xs">Hours</p>
      </div>
      <div className="relative w-full min-w-16 py-1 border-2 border-white rounded-lg shadow-full-inner">
        <h4 className="text-2xl font-semibold">{remainingDays.minutes}</h4>
        <p className="text-xs">Minutes</p>
      </div>
      <div className="relative w-full min-w-16 py-1 border-2 border-white rounded-lg shadow-full-inner">
        <h4 className="text-2xl font-semibold">{remainingDays.seconds}</h4>
        <p className="text-xs">Seconds</p>
      </div>
    </div>
  );
};

export default Counter;
