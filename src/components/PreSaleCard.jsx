import Image from "next/image";
import React, { useState } from "react";

const PreSaleCard = () => {
  const [amountType, setAmountType] = useState("ETH");
  return (
    <div className="relative rounded-3xl border-2 border-[#1773ea]">
      <div className="relative p-5">
        <div className="relative text-center">
          <h2 className="text-xl font-bold">PRESALE STAGE 1 BEGINS IN</h2>
          <div className="flex items-center justify-evenly gap-5 my-8">
            <div className="relative">
              <h4 className="text-2xl font-semibold">20</h4>
              <p className="text-xs">Days</p>
            </div>
            <div className="relative">
              <h4 className="text-xl font-semibold">20</h4>
              <p className="text-xs">Hours</p>
            </div>
            <div className="relative">
              <h4 className="text-xl font-semibold">20</h4>
              <p className="text-xs">Minutes</p>
            </div>
            <div className="relative">
              <h4 className="text-xl font-semibold">20</h4>
              <p className="text-xs">Seconds</p>
            </div>
          </div>
          <p className="text-sm">Stage 1 Price: $0.0035 USDT</p>
        </div>
        <div className="relative my-5">
          <div data-title="Listing Price: $0.0115 USDT" className="relative mb-5 h-5 w-full before:absolute before:left-0 before:top-[50%] before:translate-y-[-50%] before:w-full before:h-1 before:rounded-full before:bg-[#1773ea] after:content-[attr(data-title)] after:absolute after:left-[50%] after:translate-x-[-50%] after:text-sm after:bg-[#032b88] after:px-5"></div>
          <div className="flex items-center justify-center gap-5 flex-wrap">
            <button
              type="button"
              className={`inline-flex items-center justify-center gap-2 relative min-w-32 h-full py-2 px-6 text-xs border-2 border-[#1773ea] text-white rounded-badge leading-none font-semibold hover:text-white hover:bg-[#1773ea] transition duration-300 ${
                amountType === "ETH" ? "bg-[#1773ea]" : ""
              }`}
              onClick={() => setAmountType("ETH")}
            >
              <Image
                src="/images/icons/eth-circle.svg"
                alt=""
                width={100}
                height={100}
                className="w-6 h-6"
              />
              <span>ETH</span>
            </button>
            <button
              type="button"
              className={`inline-flex items-center justify-center gap-2 relative min-w-32 h-full py-2 px-6 text-xs border-2 border-[#1773ea] text-white rounded-badge leading-none font-semibold hover:text-white hover:bg-[#1773ea] transition duration-300 ${
                amountType === "USDT" ? "bg-[#1773ea]" : ""
              }`}
              onClick={() => setAmountType("USDT")}
            >
              <Image
                src="/images/icons/usdt-circle.svg"
                alt=""
                width={100}
                height={100}
                className="w-6 h-6"
              />
              <div className="relative">
                <span className="block">USDT</span>
                <span className="text-[8px]">ERC20</span>
              </div>
            </button>
            <button
              type="button"
              className={`inline-flex items-center justify-center gap-2 relative min-w-32 h-full py-2 px-6 text-xs border-2 border-[#1773ea] text-white rounded-badge leading-none font-semibold hover:text-white hover:bg-[#1773ea] transition duration-300 ${
                amountType === "USDC" ? "bg-[#1773ea]" : ""
              }`}
              onClick={() => setAmountType("USDC")}
            >
              <Image
                src="/images/icons/usdc-circle.svg"
                alt=""
                width={100}
                height={100}
                className="w-6 h-6"
              />
              <div className="relative">
                <span className="block">USDC</span>
                <span className="text-[8px]">ERC20</span>
              </div>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-3 gap-y-6">
          <div className="relative">
            <div className="relative">
              <label
                htmlFor=""
                className="block mb-1.5 text-sm font-medium text-paragraph"
              >
                Amount in {amountType} You Pay:
              </label>
              <input
                type="number"
                name=""
                id=""
                placeholder="0"
                className="relative w-full h-11 p-3 rounded-lg bg-transparent border border-gray-600 focus:border-white outline-none transition-all duration-300"
              />
            </div>
          </div>
          <div className="relative">
            <div className="relative">
              <label
                htmlFor=""
                className="block mb-1.5 text-sm font-medium text-paragraph"
              >
                Amount in $ENTY You Receive:
              </label>
              <input
                type="number"
                name=""
                id=""
                placeholder="0"
                className="relative w-full h-11 p-3 rounded-lg bg-transparent border border-gray-600 focus:border-white outline-none transition-all duration-300"
              />
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              <div className="relative col-span-1 max-sm:col-span-2">
                <button
                  type="button"
                  className="block relative w-full py-2.5 px-6 text-sm bg-white text-black rounded-badge font-medium hover:text-white hover:bg-[#1773ea] transition duration-300"
                >
                  Buy Tokens
                </button>
              </div>
              <div className="relative col-span-1 max-sm:col-span-2">
                <button
                  type="button"
                  className="block relative w-full py-2.5 px-6 text-sm bg-white text-black rounded-badge font-medium hover:text-white hover:bg-[#1773ea] transition duration-300"
                >
                  How To Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreSaleCard;
