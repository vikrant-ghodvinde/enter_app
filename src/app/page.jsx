"use client";
import PreSaleCard from "@/components/PreSaleCard";
import {
  Discord,
  Facebook,
  Linkedin,
  Medium,
  MenuScale,
  Telegram,
  Wallet,
  X,
  Youtube,
} from "iconoir-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <div className="landing_wrapper overflow-x-hidden">
      <header className="relative z-[9999]">
        <div className="landing_container">
          <div className="flex items-center justify-between gap-5 py-3">
            <Link href="/" className="block">
              <Image
                src="/images/logo.png"
                alt="enterapp"
                width={200}
                height={200}
                className="w-14 h-14"
              />
            </Link>
            <div className="flex items-center gap-2">
              <div className={`menu-wrapper ${menuToggle ? "active" : ""}`}>
                <div
                  className="menu-backdrop"
                  onClick={() => setMenuToggle(!menuToggle)}
                ></div>
                <ul className="menus">
                  <li className="relative hidden max-lg:block mb-6">
                    <Link href="/">
                      <Image
                        src="/images/logo.png"
                        alt="enterapp"
                        width={200}
                        height={200}
                        className="w-20 h-20"
                      />
                    </Link>
                  </li>
                  <li className="relative mx-3 max-lg:my-1">
                    <Link
                      href="https://polygonscan.com/token/0x25b70fa255fb51b40e82a73b1661e95d8c568870"
                      target="_blank"
                      rel="noreferrer"
                      className="block relative p-2 text-sm font-medium hover:text-[#1773ea] transition duration-300"
                    >
                      Verified
                    </Link>
                  </li>
                  <li className="relative mx-3 max-lg:my-1">
                    <Link
                      href="https://200945230-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FZyAZDjtHZ37ZUKB08GmT%2Fuploads%2Foju7d5kqho9zXBsGpHJo%2FEntyToken%20Security%20Audit%20Report.pdf?alt=media&token=eab1aa52-97c4-46b4-9d2b-cfdb43b11c5a"
                      target="_blank"
                      rel="noreferrer"
                      className="block relative p-2 text-sm font-medium hover:text-[#1773ea] transition duration-300"
                    >
                      Audit
                    </Link>
                  </li>
                  <li className="relative mx-3 max-lg:my-1">
                    <Link
                      href="https://entylabs.gitbook.io/enterapp.io/roadmap"
                      target="_blank"
                      rel="noreferrer"
                      className="block relative p-2 text-sm font-medium hover:text-[#1773ea] transition duration-300"
                    >
                      Roadmap
                    </Link>
                  </li>
                  <li className="relative mx-3 max-lg:my-1">
                    <Link
                      href="https://entylabs.gitbook.io/enterapp.io/overview/welcome-introduction-of-enterapp.io"
                      target="_blank"
                      rel="noreferrer"
                      className="block relative p-2 text-sm font-medium hover:text-[#1773ea] transition duration-300"
                    >
                      Whitepaper
                    </Link>
                  </li>
                  <li className="relative mx-3 max-lg:my-1">
                    <Link
                      href="https://enterapp.io/"
                      target="_blank"
                      rel="noreferrer"
                      className="block relative py-2 px-6 text-sm bg-white text-black rounded-badge font-medium hover:text-white hover:bg-[#1773ea] transition duration-300"
                    >
                      enterapp.io
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="relative flex items-center gap-3">
                <button
                  type="button"
                  className="block relative py-2 px-6 text-sm bg-white text-black rounded-badge font-medium hover:text-white hover:bg-[#1773ea] transition duration-300"
                >
                  <span className="inline-block max-md:hidden">
                    Connect Wallet
                  </span>{" "}
                  <Wallet className="hidden max-md:inline-block" />
                </button>
                <button
                  type="button"
                  className="p-2 hidden max-lg:inline-block"
                  onClick={() => setMenuToggle(!menuToggle)}
                >
                  <MenuScale />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
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
              <div className="relative flex items-center gap-5 flex-wrap my-10">
                <button
                  type="button"
                  className="block relative uppercase py-2.5 px-6 text-sm border-2 border-white bg-white text-black rounded-badge font-medium hover:text-white hover:bg-[#1773ea] hover:border-[#1773ea] transition duration-300"
                >
                  Pre-Sale
                </button>
                <button
                  type="button"
                  className="block relative uppercase py-2.5 px-6 text-sm border-2 border-[#1773ea] text-white rounded-badge font-medium hover:text-white hover:bg-[#1773ea] transition duration-300"
                >
                  WhitePaper
                </button>
              </div>
              <div className="flex items-center max-lg:justify-center flex-wrap gap-5">
                <Link
                  href="https://twitter.com/Enterapp_io"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-sm hover:text-[#1773ea] transition duration-300"
                >
                  <X />
                </Link>
                <Link
                  href="https://t.me/enterapp_io"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-sm hover:text-[#1773ea] transition duration-300"
                >
                  <Telegram />
                </Link>
                <Link
                  href="https://t.me/enterapp_group"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-sm hover:text-[#1773ea] transition duration-300"
                >
                  <Telegram />
                </Link>
                <Link
                  href="https://www.facebook.com/enterapp.io"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-sm hover:text-[#1773ea] transition duration-300"
                >
                  <Facebook />
                </Link>
                <Link
                  href="https://www.youtube.com/@EntyLabs"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-sm hover:text-[#1773ea] transition duration-300"
                >
                  <Youtube />
                </Link>
                <Link
                  href="https://discord.gg/Fw4uCRCDek"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-sm hover:text-[#1773ea] transition duration-300"
                >
                  <Discord />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/enterapp-io/?viewAsMember=true"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-sm hover:text-[#1773ea] transition duration-300"
                >
                  <Linkedin />
                </Link>
                <Link
                  href="https://medium.com/@entylabs"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-sm hover:text-[#1773ea] transition duration-300"
                >
                  <Medium />
                </Link>
              </div>
            </div>
            <div className="relative col-span-1 max-lg:col-span-2">
              <PreSaleCard />
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-14">
        <div className="landing_container">
          <div className="text-center mb-10">
            <h2
              data-title="Tokenomics"
              className="relative uppercase text-4xl max-lg:text-2xl font-bold z-10 before:content-[attr(data-title)]  before:absolute before:left-[50%] before:translate-x-[-50%] before:top-[50%] before:translate-y-[-50%] before:text-[100px] before:text-[#1773ea] before:-z-10 before:opacity-5"
            >
              Tokenomics
            </h2>
          </div>
          <div className="grid grid-cols-12 gap-y-8 gap-x-5">
            <div className="relative col-span-3 max-lg:col-span-4 max-md:col-span-6 max-sm:col-span-12 py-2 px-5 before:absolute before:left-0 before:top-0 before:w-1.5 before:h-full before:bg-[#1773ea] before:rounded-badge">
              <p className="text-sm font-semibold uppercase mb-2">PreSale</p>
              <h4 className="text-xl font-bold">8.20%</h4>
            </div>
            <div className="relative col-span-3 max-lg:col-span-4 max-md:col-span-6 max-sm:col-span-12 py-2 px-5 before:absolute before:left-0 before:top-0 before:w-1.5 before:h-full before:bg-[#1773ea] before:rounded-badge">
              <p className="text-sm font-semibold uppercase mb-2">
                Public sale
              </p>
              <h4 className="text-xl font-bold">1.00%</h4>
            </div>
            <div className="relative col-span-3 max-lg:col-span-4 max-md:col-span-6 max-sm:col-span-12 py-2 px-5 before:absolute before:left-0 before:top-0 before:w-1.5 before:h-full before:bg-[#1773ea] before:rounded-badge">
              <p className="text-sm font-semibold uppercase mb-2">
                Treasury Locked
              </p>
              <h4 className="text-xl font-bold">43.40%</h4>
            </div>
            <div className="relative col-span-3 max-lg:col-span-4 max-md:col-span-6 max-sm:col-span-12 py-2 px-5 before:absolute before:left-0 before:top-0 before:w-1.5 before:h-full before:bg-[#1773ea] before:rounded-badge">
              <p className="text-sm font-semibold uppercase mb-2">
                Liquidity Locked
              </p>
              <h4 className="text-xl font-bold">8.20%</h4>
            </div>
            <div className="relative col-span-3 max-lg:col-span-4 max-md:col-span-6 max-sm:col-span-12 py-2 px-5 before:absolute before:left-0 before:top-0 before:w-1.5 before:h-full before:bg-[#1773ea] before:rounded-badge">
              <p className="text-sm font-semibold uppercase mb-2">
                Marketing, Airdrop & Bounty Program
              </p>
              <h4 className="text-xl font-bold">1.00%</h4>
            </div>
            <div className="relative col-span-3 max-lg:col-span-4 max-md:col-span-6 max-sm:col-span-12 py-2 px-5 before:absolute before:left-0 before:top-0 before:w-1.5 before:h-full before:bg-[#1773ea] before:rounded-badge">
              <p className="text-sm font-semibold uppercase mb-2">
                Staking Rewards/Cashback
              </p>
              <h4 className="text-xl font-bold">3.00%</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-14">
        <div className="landing_container">
          <div className="text-center mb-20">
            <h2
              data-title="FAQs"
              className="relative uppercase text-4xl max-lg:text-2xl font-bold z-10 before:content-[attr(data-title)]  before:absolute before:left-[50%] before:translate-x-[-50%] before:top-[50%] before:translate-y-[-50%] before:text-[100px] before:text-[#1773ea] before:-z-10 before:opacity-5"
            >
              FAQs
            </h2>
          </div>
          <div className="join join-vertical w-full">
            <div className="collapse collapse-arrow join-item border border-white">
              <input type="radio" name="my-accordion" defaultChecked />
              <div className="collapse-title font-medium">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </div>
              <div className="collapse-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  sint, harum quidem necessitatibus maiores, nisi cupiditate
                  officiis officia rerum vel libero dolores adipisci provident
                  aliquid porro iste ex ea consectetur!
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-white">
              <input type="radio" name="my-accordion" />
              <div className="collapse-title font-medium">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </div>
              <div className="collapse-content">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
                  natus accusamus, sunt esse libero quasi, maiores veritatis in
                  quo non dolorem corrupti! Tenetur, aspernatur quod? Dicta
                  inventore quasi vel assumenda.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-white">
              <input type="radio" name="my-accordion" />
              <div className="collapse-title font-medium">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </div>
              <div className="collapse-content">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
                  natus accusamus, sunt esse libero quasi, maiores veritatis in
                  quo non dolorem corrupti! Tenetur, aspernatur quod? Dicta
                  inventore quasi vel assumenda.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-white">
              <input type="radio" name="my-accordion" />
              <div className="collapse-title font-medium">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </div>
              <div className="collapse-content">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
                  natus accusamus, sunt esse libero quasi, maiores veritatis in
                  quo non dolorem corrupti! Tenetur, aspernatur quod? Dicta
                  inventore quasi vel assumenda.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-white">
              <input type="radio" name="my-accordion" />
              <div className="collapse-title font-medium">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </div>
              <div className="collapse-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti reiciendis qui rerum quaerat amet ut adipisci enim
                  consectetur praesentium! Optio itaque, dolorum voluptate
                  voluptates aspernatur nam ratione architecto nesciunt
                  recusandae.
                </p>
              </div>
            </div>
          </div>
          <div className="relative text-center mt-5">
            <Link
              href="https://entylabs.gitbook.io/enterapp.io/roadmap"
              target="_blank"
              rel="noreferrer"
              className="inline-block relative py-2 px-6 text-sm bg-white text-black rounded-badge font-medium hover:text-white hover:bg-[#1773ea] transition duration-300"
            >
              More FAQs
            </Link>
          </div>
        </div>
      </section>
      <footer className="relative py-10">
        <div className="landing_container">
          <div className="relative flex max-lg:flex-col items-center justify-between gap-5">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="enterapp"
                width={200}
                height={200}
                className="w-12 h-12"
              />
            </Link>
            <div className="flex items-center max-lg:justify-center flex-wrap gap-5">
              <Link
                href="https://twitter.com/Enterapp_io"
                target="_blank"
                rel="noreferrer"
                className="block text-sm hover:text-[#1773ea] transition duration-300"
              >
                <X />
              </Link>
              <Link
                href="https://t.me/enterapp_io"
                target="_blank"
                rel="noreferrer"
                className="block text-sm hover:text-[#1773ea] transition duration-300"
              >
                <Telegram />
              </Link>
              <Link
                href="https://t.me/enterapp_group"
                target="_blank"
                rel="noreferrer"
                className="block text-sm hover:text-[#1773ea] transition duration-300"
              >
                <Telegram />
              </Link>
              <Link
                href="https://www.facebook.com/enterapp.io"
                target="_blank"
                rel="noreferrer"
                className="block text-sm hover:text-[#1773ea] transition duration-300"
              >
                <Facebook />
              </Link>
              <Link
                href="https://www.youtube.com/@EntyLabs"
                target="_blank"
                rel="noreferrer"
                className="block text-sm hover:text-[#1773ea] transition duration-300"
              >
                <Youtube />
              </Link>
              <Link
                href="https://discord.gg/Fw4uCRCDek"
                target="_blank"
                rel="noreferrer"
                className="block text-sm hover:text-[#1773ea] transition duration-300"
              >
                <Discord />
              </Link>
              <Link
                href="https://www.linkedin.com/company/enterapp-io/?viewAsMember=true"
                target="_blank"
                rel="noreferrer"
                className="block text-sm hover:text-[#1773ea] transition duration-300"
              >
                <Linkedin />
              </Link>
              <Link
                href="https://medium.com/@entylabs"
                target="_blank"
                rel="noreferrer"
                className="block text-sm hover:text-[#1773ea] transition duration-300"
              >
                <Medium />
              </Link>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-sm">
              Copyright &copy; 2024. All Rights Reserved by GlobalEntyLabs
              s.r.o, CZ, Europe
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
