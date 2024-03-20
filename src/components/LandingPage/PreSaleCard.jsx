import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import PurchaseHistoryModal from "../modals/PurchaseHistoryModal/PurchaseHistoryModal";

const PreSaleCard = () => {
  const [amountType, setAmountType] = useState("MATIC");
  return (
    <React.Fragment>
      <div className="relative rounded-3xl border-2 border-white">
        <div className="relative p-5">
          <div className="relative text-center">
            <h2 className="text-xl font-bold">PRESALE STAGE 1 BEGINS IN</h2>
            <div className="flex items-center justify-evenly gap-4 max-sm:gap-1 my-8">
              <div className="relative w-full min-w-16 py-1 border-2 border-white rounded-lg shadow-full-inner">
                <h4 className="text-2xl font-semibold">45</h4>
                <p className="text-xs">Days</p>
              </div>
              <div className="relative w-full min-w-16 py-1 border-2 border-white rounded-lg shadow-full-inner">
                <h4 className="text-2xl font-semibold">11</h4>
                <p className="text-xs">Hours</p>
              </div>
              <div className="relative w-full min-w-16 py-1 border-2 border-white rounded-lg shadow-full-inner">
                <h4 className="text-2xl font-semibold">30</h4>
                <p className="text-xs">Minutes</p>
              </div>
              <div className="relative w-full min-w-16 py-1 border-2 border-white rounded-lg shadow-full-inner">
                <h4 className="text-2xl font-semibold">20</h4>
                <p className="text-xs">Seconds</p>
              </div>
            </div>
            <p className="text-sm">Stage 1 Price: $0.0010 USDT</p>
          </div>
          <div className="relative my-5">
            <div
              data-title="Public Sale Listing Price: $0,050"
              className="relative flex justify-center mb-5 h-5 w-full before:absolute before:left-0 before:top-[50%] before:translate-y-[-50%] before:w-full before:h-1 before:rounded-full before:bg-white after:content-[attr(data-title)] after:relative after:text-sm after:bg-[#032B88] after:px-3"
            ></div>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <button
                type="button"
                className={`inline-flex items-center justify-center gap-2 relative min-w-32 h-full py-2 px-5 text-xs border-2 border-white rounded-badge leading-none font-semibold hover:text-black hover:bg-white transition duration-300 ${
                  amountType === "MATIC" ? "bg-white text-black" : ""
                }`}
                onClick={() => setAmountType("MATIC")}
              >
                <Image
                  src="/images/icons/matic-circle.svg"
                  alt=""
                  width={100}
                  height={100}
                  className="w-6 h-6"
                />
                <span>MATIC</span>
              </button>
              <button
                type="button"
                className={`inline-flex items-center justify-center gap-2 relative min-w-32 h-full py-2 px-5 text-xs border-2 border-white rounded-badge leading-none font-semibold hover:text-black hover:bg-white transition duration-300 ${
                  amountType === "USDT" ? "bg-white text-black" : ""
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
                className={`inline-flex items-center justify-center gap-2 relative min-w-32 h-full py-2 px-5 text-xs border-2 border-white rounded-badge leading-none font-semibold hover:text-black hover:bg-white transition duration-300 ${
                  amountType === "USDC" ? "bg-white text-black" : ""
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
              <div className="grid grid-cols-3 gap-3">
                <div className="relative col-span-1 max-sm:col-span-3 max-lg:col-span-1 max-xl:col-span-3">
                  <button
                    type="button"
                    className="block relative w-full text-center py-2.5 px-6 text-sm bg-white text-black rounded-badge font-medium hover:text-white hover:bg-[#6A97FF] transition duration-300"
                  >
                    Buy Tokens
                  </button>
                </div>
                <div className="relative col-span-1 max-sm:col-span-3 max-lg:col-span-1 max-xl:col-span-3">
                  <button
                    type="button"
                    className="block relative w-full text-center py-2.5 px-6 text-sm bg-white text-black rounded-badge font-medium hover:text-white hover:bg-[#6A97FF] transition duration-300"
                    onClick={() =>
                      document.getElementById("purchaseHistoryModal").showModal()
                    }
                  >
                    Purchase History
                  </button>
                </div>
                <div className="relative col-span-1 max-sm:col-span-3 max-lg:col-span-1 max-xl:col-span-3">
                  <Link
                    href="https://entylabs.gitbook.io/enterapp.io/overview/ico-presale/how-to-buy"
                    target="_blank"
                    rel="noreferrer"
                    className="block relative w-full text-center py-2.5 px-6 text-sm bg-white text-black rounded-badge font-medium hover:text-white hover:bg-[#6A97FF] transition duration-300"
                  >
                    How To Buy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PurchaseHistoryModal />
    </React.Fragment>
  );
};

export default PreSaleCard;
