"use client";
import FAQs from "@/components/LandingPage/FAQs";
import Footer from "@/components/LandingPage/Footer";
import KYC from "@/components/LandingPage/KYC";
import Navbar from "@/components/LandingPage/Navbar";
import PreSaleCard from "@/components/LandingPage/PreSaleCard";
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
                  className="block relative lowercase py-2.5 px-6 text-sm border-2 border-white bg-white text-black rounded-badge font-medium hover:text-white hover:bg-[#6A97FF] hover:border-[#6A97FF] transition duration-300"
                >
                  enterapp.io
                </Link>
                <Link
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  className="block relative py-2.5 px-6 text-sm border-2 border-white text-white rounded-badge font-medium hover:text-black hover:bg-white transition duration-300"
                >
                  View Presale Contract
                </Link>
              </div>
              <div className="relative">
                <p className="font-medium">
                  Follow and subscribe to our Social Media channels to be a part
                  of our upcoming Presale:
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
                    href="https://bitcointalk.org/index.php?action=profile;u=3585597;sa=forumProfile"
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
      <Tokenomics />
      {/* <KYC /> */}
      <FAQs />
      <Footer />

      {/* DESIGN ELEMENTS */}
      <div className="fixed bottom-0 right-10 w-80 h-80 rounded-full bg-[#6A97FF] blur-3xl -z-50 opacity-50"></div>
    </div>
  );
}
