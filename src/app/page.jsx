"use client";
import FAQs from "@/components/LandingPage/FAQs";
import Footer from "@/components/LandingPage/Footer";
import KYC from "@/components/LandingPage/KYC";
import Navbar from "@/components/LandingPage/Navbar";
import PreSaleCard from "@/components/LandingPage/PreSaleCard";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="landing_wrapper overflow-x-hidden">
      <Navbar />
      <section className="relative py-14">
        <div className="landing_container">
          <div className="grid grid-cols-2 items-center gap-8">
            <div className="relative col-span-1 max-lg:col-span-2">
              <h1 className="text-3xl max-lg:text-xl font-semibold mb-4 leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam enim fuga perferendis praesentium qui.!
              </h1>
              <p className="font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
                veniam consectetur reprehenderit autem blanditiis quam? Tempora,
                ipsum repellendus expedita voluptatum velit nesciunt, libero in
                rem adipisci modi, iure voluptate eveniet laboriosam
                consequuntur assumenda. Numquam, iusto.
              </p>
              <div className="relative flex items-center gap-5 flex-wrap my-8">
                <Link
                  href="https://enterapp.io/"
                  target="_blank"
                  rel="noreferrer"
                  className="block relative lowercase py-2.5 px-6 text-sm border-2 border-white bg-white text-black rounded-badge font-medium hover:text-white hover:bg-[#1773ea] hover:border-[#1773ea] transition duration-300"
                >
                  enterapp.io
                </Link>
                <Link
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  className="block relative uppercase py-2.5 px-6 text-sm border-2 border-white text-white rounded-badge font-medium hover:text-black hover:bg-white transition duration-300"
                >
                  View Presale Contract
                </Link>
              </div>
              <div className="relative">
                <p className="font-medium">
                  Follow and subscribe to our Social Media channels to be a part
                  of our upcoming Presale:
                </p>
                <div className="flex items-center max-lg:justify-center flex-wrap gap-5 mt-4">
                  <Link
                    href="https://twitter.com/Enterapp_io"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center w-9 h-9 rounded-full overflow-hidden"
                  >
                    <Image
                      src="/images/icons/social/twitter.png"
                      alt=""
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <Link
                    href="https://t.me/enterapp_io"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center w-9 h-9 rounded-full overflow-hidden"
                  >
                    <Image
                      src="/images/icons/social/telegram.png"
                      alt=""
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <Link
                    href="https://t.me/enterapp_group"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center w-9 h-9 rounded-full overflow-hidden"
                  >
                    <Image
                      src="/images/icons/social/telegram.png"
                      alt=""
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <Link
                    href="https://www.facebook.com/enterapp.io"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center w-9 h-9 rounded-full overflow-hidden"
                  >
                    <Image
                      src="/images/icons/social/facebook.png"
                      alt=""
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <Link
                    href="https://www.youtube.com/@EntyLabs"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center w-9 h-9 rounded-full overflow-hidden"
                  >
                    <Image
                      src="/images/icons/social/youtube.png"
                      alt=""
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <Link
                    href="https://discord.gg/Fw4uCRCDek"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center w-9 h-9 rounded-full overflow-hidden"
                  >
                    <Image
                      src="/images/icons/social/discord.png"
                      alt=""
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/enterapp-io/?viewAsMember=true"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center w-9 h-9 rounded-full overflow-hidden"
                  >
                    <Image
                      src="/images/icons/social/linkedin.png"
                      alt=""
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <Link
                    href="https://medium.com/@entylabs"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center w-9 h-9 rounded-full overflow-hidden"
                  >
                    <Image
                      src="/images/icons/social/medium.png"
                      alt=""
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative col-span-1 max-lg:col-span-2">
              <PreSaleCard />
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-14" id="tokenomics">
        <div className="landing_container">
          <div className="text-center mb-10">
            <h2
              data-title="Tokenomics"
              className="relative uppercase text-4xl max-lg:text-2xl font-bold z-10 before:content-[attr(data-title)]  before:absolute before:left-[50%] before:translate-x-[-50%] before:top-[50%] before:translate-y-[-50%] before:text-[100px] before:text-[#1773ea] before:-z-10 before:opacity-5 before:whitespace-nowrap"
            >
              Tokenomics
            </h2>
            <p className="max-w-3xl mx-auto mt-5">
              The ENTY token is burnable and fully decentralized EVM compatible
            </p>
          </div>
          <div className="relative mb-14">
            <div className="grid items-center gap-4 grid-cols-2">
              <div className="relative text-center col-span-1 max-lg:col-span-2">
                Token Name:{" "}
                <span className="font-bold">ENTY Token (Utility)</span>
              </div>
              <div className="relative text-center col-span-1 max-lg:col-span-2">
                Ticker symbol: <span className="font-bold">ENTY</span>
              </div>
              <div className="relative text-center col-span-1 max-lg:col-span-2">
                Total supply:{" "}
                <span className="font-bold">10 trillion tokens</span>
              </div>
              <div className="relative text-center col-span-1 max-lg:col-span-2">
                Network: <span className="font-bold">Polygon (ERC20)</span>
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
              <p className="text-sm font-semibold uppercase mb-2">
                Public sale
              </p>
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
              <h4 className="text-xl font-bold">8.20%</h4>
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
      {/* <KYC /> */}
      <FAQs />
      <Footer />
    </div>
  );
}
