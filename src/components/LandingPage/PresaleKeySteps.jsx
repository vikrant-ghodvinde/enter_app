import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const PresaleKeySteps = () => {
  return (
    <section className="relative py-14" id="">
      <div className="landing_container">
        <div className="text-center mb-10">
          <h2
            data-title="Presale Key Steps"
            className="relative uppercase text-4xl max-lg:text-2xl font-bold z-10 before:content-[attr(data-title)]  before:absolute before:left-[50%] before:translate-x-[-50%] before:top-[50%] before:translate-y-[-50%] before:text-[100px] before:text-[#6A97FF] before:-z-10 before:opacity-5 before:whitespace-nowrap"
          >
            $ENTY Token Launchpad Presale Key Steps
          </h2>
        </div>
        <Swiper
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="group">
            <div className="grid grid-cols-12 items-center gap-5">
              <div className="relative col-span-5 max-md:col-span-12">
                <Image
                  src="/images/login.png"
                  alt=""
                  width={500}
                  height={500}
                  className="w-full h-full max-w-sm mx-auto"
                />
              </div>
              <div className="relative col-span-7 max-md:col-span-12">
                <div className="relative max-w-xl">
                  <h2 className="text-3xl uppercase font-bold mb-3">
                    1. Register and KYC
                  </h2>
                  <p className="mb-3">
                    In order to participate in presales to buy $ENTY Token, you
                    must sign up through clicking the Buy Token button and then
                    go through the short KYC verification first. During the
                    registration period, you must confirm your interest in the
                    $ENTY Token presale!
                  </p>
                  <div className="inline-block">
                    <button
                      type="button"
                      className="inline-block relative w-full text-center py-2.5 px-6 text-sm bg-white text-black rounded-badge font-medium hover:text-white hover:bg-[#6A97FF] transition duration-300"
                    >
                      Buy Token
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="group">
            <div className="grid grid-cols-12 items-center gap-5">
              <div className="relative col-span-5 max-md:col-span-12">
                <Image
                  src="/images/money-wallet.png"
                  alt=""
                  width={500}
                  height={500}
                  className="w-full h-full max-w-sm mx-auto"
                />
              </div>
              <div className="relative col-span-7 max-md:col-span-12">
                <div className="relative max-w-xl">
                  <h2 className="text-3xl uppercase font-bold mb-3">
                    2. Connect Wallet
                  </h2>
                  <p className="mb-3">
                    Once you have successfully completed your KYC verification,
                    you can verify your wallet by going to connect wallet and
                    selecting your wallet and switching to Polygon Network! Add
                    $ENTY Token to your wallet
                  </p>
                  <div className="inline-block">
                    <button
                      type="button"
                      className="inline-block relative w-full text-center py-2.5 px-6 text-sm bg-white text-black rounded-badge font-medium hover:text-white hover:bg-[#6A97FF] transition duration-300"
                    >
                      Polygonscan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="group">
            <div className="grid grid-cols-12 items-center gap-5">
              <div className="relative col-span-5 max-md:col-span-12">
                <Image
                  src="/images/shopping-cart.png"
                  alt=""
                  width={500}
                  height={500}
                  className="w-full h-full max-w-sm mx-auto"
                />
              </div>
              <div className="relative col-span-7 max-md:col-span-12">
                <div className="relative max-w-xl">
                  <h2 className="text-3xl uppercase font-bold mb-3">
                    3. Ready to buy!
                  </h2>
                  <p className="mb-3">
                    Use the presale dapp application on the right and you can
                    purchase your $ENTY tokens with your wallet with MATIC, USDT
                    or USDC
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default PresaleKeySteps;
