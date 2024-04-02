"use client";
import FAQs from "@/components/LandingPage/FAQs";
import Footer from "@/components/LandingPage/Footer";
import KYC from "@/components/LandingPage/KYC";
import Navbar from "@/components/LandingPage/Navbar";
import PreSaleCard from "@/components/LandingPage/PreSaleCard";
import PresaleKeySteps from "@/components/LandingPage/PresaleKeySteps";
import Tokenomics from "@/components/LandingPage/Tokenomics";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="landing_wrapper overflow-x-hidden">
      <Navbar />
      <section className="relative py-14 after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-shape-bg after:bg-cover after:opacity-50 after:-z-10">
        <div className="landing_container">
          <div className="grid grid-cols-2 items-center gap-8">
            <div className="relative col-span-1 max-lg:col-span-2">
              <h1 className="text-3xl max-lg:text-xl font-semibold mb-4 leading-normal uppercase">
                Decentralized Banking!
              </h1>
              <p className="mb-3">
                $ENTY token are an completely decentralized ERC20 utility token
                on Polygon Network for high-end use cases by the upcoming
                decentralized mobile Crypto Web3 Neobank called{" "}
                <Link href="https://enterapp.io/" className="text-white">
                  enter<span className="text-primary">app</span>.io
                </Link>{" "}
                by end of this year!
              </p>
              <p className="font-semibold text-white">
                The Fact’s of the $ENTY TOKEN Presale:
              </p>
              <ul className="ps-6 list-disc text-white text-sm mb-3 leading-6">
                <li>Seamless & Trustless Sale!</li>
                <li>No Team Token!</li>
                <li>Vesting Schedule mechanism</li>
                <li>Whale protected!</li>
                <li>Secure and clear through KYC verification by investors!</li>
              </ul>
              <p className="mb-3">
                Join our different Airdrop and Bounty Campaigns through the
                whole presale! Our upcoming Staking Dapp{" "}
                <Link href="https://enterapp.io/" className="text-white">
                  enter<span className="text-primary">app</span>.io
                </Link>{" "}
                will give all stakers very lucrative Rewards
              </p>
              <div className="relative flex items-center gap-5 flex-wrap my-4">
                <Link
                  href="https://enterapp.io/"
                  target="_blank"
                  rel="noreferrer"
                  className="block relative lowercase py-2.5 px-6 text-sm border-2 border-white bg-white text-black rounded-badge font-medium hover:text-white hover:bg-light-blue hover:border-light-blue transition duration-300"
                >
                  enterapp.io
                </Link>
                <Link
                  href="https://entylabs.gitbook.io/presale.enterapp.io/"
                  target="_blank"
                  rel="noreferrer"
                  className="block relative py-2.5 px-6 text-sm border-2 border-white text-white rounded-badge font-medium hover:text-black hover:bg-white transition duration-300"
                >
                  Introduction
                </Link>
              </div>
              <div className="relative">
                <p className="text-sm font-medium">
                  Follow and subscribe to our Social Media channels to be a part
                  of our Presale:
                </p>
                <div className="flex items-center max-lg:justify-center flex-wrap gap-4 mt-4">
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
                  <Link
                    href="https://coinmarketcap.com/community/profile/EntyLabs/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center w-9 h-9 rounded-full overflow-hidden"
                  >
                    <Image
                      src="/images/icons/social/coinmarketcap.png"
                      alt=""
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <Link
                    href="https://bitcointalk.org/index.php?topic=5479876.0"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center w-9 h-9 rounded-full overflow-hidden"
                  >
                    <Image
                      src="/images/icons/social/bitcoin.png"
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
      <PresaleKeySteps />
      <Tokenomics />
      {/* <KYC /> */}
      <FAQs />
      <Footer />

      {/* DESIGN ELEMENTS */}
      <div className="fixed bottom-0 right-10 w-80 h-80 rounded-full bg-light-blue blur-3xl -z-50 opacity-50"></div>
    </div>
  );
}
