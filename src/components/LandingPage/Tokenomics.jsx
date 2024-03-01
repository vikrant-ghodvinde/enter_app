import Image from "next/image";
import React from "react";

const Tokenomics = () => {
  return (
    <section className="relative py-14" id="tokenomics">
      <div className="landing_container">
        <div className="text-center mb-10">
          <h2
            data-title="Tokenomics"
            className="relative uppercase text-4xl max-lg:text-2xl font-bold z-10 before:content-[attr(data-title)]  before:absolute before:left-[50%] before:translate-x-[-50%] before:top-[50%] before:translate-y-[-50%] before:text-[100px] before:text-[#6A97FF] before:-z-10 before:opacity-5 before:whitespace-nowrap"
          >
            Tokenomics
          </h2>
          <p className="max-w-3xl mx-auto mt-5">
            The ENTY token is burnable and fully decentralized EVM compatible
          </p>
        </div>
        <div className="relative grid grid-cols-12 gap-5 items-center mb-14">
          <div className="relative col-span-5 max-lg:col-span-12">
            <Image
              src="/images/enty-token.webp"
              alt=""
              width={500}
              height={500}
              className="w-full h-full max-w-sm mx-auto"
            />
          </div>
          <div className="relative col-span-7 max-lg:col-span-12">
            <div className="grid items-center gap-5 grid-cols-2">
              <div className="relative col-span-1 max-md:col-span-2">
                <div className="relative p-5 rounded-lg overflow-hidden z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#6A97FF] before:backdrop-blur-md before:opacity-10 before:-z-10">
                  <p className="text-md font-semibold uppercase mb-2">
                    Token Name
                  </p>
                  <h4 className="text-xl font-bold">ENTY Token (Utility)</h4>
                </div>
              </div>
              <div className="relative col-span-1 max-md:col-span-2">
                <div className="relative p-5 rounded-lg overflow-hidden z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#6A97FF] before:backdrop-blur-md before:opacity-10 before:-z-10">
                  <p className="text-md font-semibold uppercase mb-2">
                    Ticker symbol
                  </p>
                  <h4 className="text-xl font-bold">EENTY</h4>
                </div>
              </div>
              <div className="relative col-span-1 max-md:col-span-2">
                <div className="relative p-5 rounded-lg overflow-hidden z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#6A97FF] before:backdrop-blur-md before:opacity-10 before:-z-10">
                  <p className="text-md font-semibold uppercase mb-2">
                    Total supply
                  </p>
                  <h4 className="text-xl font-bold">10 trillion tokens</h4>
                </div>
              </div>
              <div className="relative col-span-1 max-md:col-span-2">
                <div className="relative p-5 rounded-lg overflow-hidden z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#6A97FF] before:backdrop-blur-md before:opacity-10 before:-z-10">
                  <p className="text-md font-semibold uppercase mb-2">
                    Network
                  </p>
                  <h4 className="text-xl font-bold">Polygon (ERC20)</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-y-10 gap-x-5">
          <div className="relative col-span-4 max-lg:col-span-4 max-md:col-span-6 max-sm:col-span-12 py-2 px-5 before:absolute before:left-0 before:top-0 before:w-1.5 before:h-full before:bg-white before:rounded-badge">
            <p className="text-sm font-semibold uppercase mb-2">PreSale</p>
            <h4 className="text-xl font-bold">8.20%</h4>
            <h6 className="text-sm font-semibold">820.000.000 ENTY Token</h6>
          </div>
          <div className="relative col-span-4 max-lg:col-span-4 max-md:col-span-6 max-sm:col-span-12 py-2 px-5 before:absolute before:left-0 before:top-0 before:w-1.5 before:h-full before:bg-white before:rounded-badge">
            <p className="text-sm font-semibold uppercase mb-2">Public sale</p>
            <h4 className="text-xl font-bold">1.00%</h4>
            <h6 className="text-sm font-semibold">100.000.000 ENTY Token</h6>
          </div>
          <div className="relative col-span-4 max-lg:col-span-4 max-md:col-span-6 max-sm:col-span-12 py-2 px-5 before:absolute before:left-0 before:top-0 before:w-1.5 before:h-full before:bg-white before:rounded-badge">
            <p className="text-sm font-semibold uppercase mb-2">
              Treasury Locked
            </p>
            <h4 className="text-xl font-bold">43.40%</h4>
            <h6 className="text-sm font-semibold">4.34.000.000 ENTY Token</h6>
          </div>
          <div className="relative col-span-4 max-lg:col-span-4 max-md:col-span-6 max-sm:col-span-12 py-2 px-5 before:absolute before:left-0 before:top-0 before:w-1.5 before:h-full before:bg-white before:rounded-badge">
            <p className="text-sm font-semibold uppercase mb-2">
              Liquidity Locked
            </p>
            <h4 className="text-xl font-bold">43.40%</h4>
            <h6 className="text-sm font-semibold">4.34.000.000 ENTY Token</h6>
          </div>
          <div className="relative col-span-4 max-lg:col-span-4 max-md:col-span-6 max-sm:col-span-12 py-2 px-5 before:absolute before:left-0 before:top-0 before:w-1.5 before:h-full before:bg-white before:rounded-badge">
            <p className="text-sm font-semibold uppercase mb-2">
              Marketing, Airdrop & Bounty Program
            </p>
            <h4 className="text-xl font-bold">1.00%</h4>
            <h6 className="text-sm font-semibold">100.000.000 ENTY Token</h6>
          </div>
          <div className="relative col-span-4 max-lg:col-span-4 max-md:col-span-6 max-sm:col-span-12 py-2 px-5 before:absolute before:left-0 before:top-0 before:w-1.5 before:h-full before:bg-white before:rounded-badge">
            <p className="text-sm font-semibold uppercase mb-2">
              Staking Rewards/Cashback
            </p>
            <h4 className="text-xl font-bold">3.00%</h4>
            <h6 className="text-sm font-semibold">300.000.000 ENTY Token</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
