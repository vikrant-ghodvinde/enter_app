import {
  BitcoinCircle,
  Discord,
  Facebook,
  Linkedin,
  Medium,
  Telegram,
  X,
  Youtube,
} from "iconoir-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative py-14 border-t border-[#6A97FF]">
      <div className="landing_container">
        <div className="grid grid-cols-12 gap-x-14 max-md:gap-x-0 gap-y-8">
          <div className="relative col-span-3 max-md:col-span-12 max-lg:col-span-4">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="enterapp"
                width={200}
                height={200}
                className="w-12 h-12"
              />
            </Link>
            <p className="my-3">
              <span className="text-white">enterapp.io</span> <br /> is a
              project by <br />
              GlobalEntyLabs s.r.o <br /> aka EntyLabs <br /> Czech Republic,
              Europe
            </p>
            <p className="my-3">
              The financial Analytical Office (FAU) <br /> Czech National Bank
              (CNB) <br />
              Virtual Asset VASP License
            </p>
            <div className="flex items-center flex-wrap gap-4">
              <Image
                src="/images/comp-logo-1.png"
                alt=""
                width={200}
                height={200}
                className="w-24"
              />
              <Image
                src="/images/comp-logo-2.png"
                alt=""
                width={200}
                height={200}
                className="w-24"
              />
            </div>
          </div>
          <div className="relative col-span-3 max-md:col-span-12 max-lg:col-span-4">
            <h5 className="text-md font-semibold mb-5 max-md:mb-2">Project</h5>
            <ul>
              <li>
                <Link
                  href="https://polygonscan.com/token/0x25b70fa255fb51b40e82a73b1661e95d8c568870"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-sm text-paragraph py-1.5 hover:text-[#6A97FF] transition duration-300"
                >
                  Verified
                </Link>
              </li>
              <li>
                <Link
                  href="https://200945230-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FZyAZDjtHZ37ZUKB08GmT%2Fuploads%2Foju7d5kqho9zXBsGpHJo%2FEntyToken%20Security%20Audit%20Report.pdf?alt=media&token=eab1aa52-97c4-46b4-9d2b-cfdb43b11c5a"
                  rel="noreferrer"
                  target="_blank"
                  className="inline-block text-sm text-paragraph py-1.5 hover:text-[#6A97FF] transition duration-300"
                >
                  Audit
                </Link>
              </li>
              <li>
                <Link
                  href="https://entylabs.gitbook.io/enterapp.io/roadmap"
                  target="_blank"
                  className="inline-block text-sm text-paragraph py-1.5 hover:text-[#6A97FF] transition duration-300"
                >
                  Roadmap
                </Link>
              </li>
              <li>
                <Link
                  href="https://entylabs.gitbook.io/enterapp.io/overview/welcome-introduction-of-enterapp.io"
                  target="_blank"
                  className="inline-block text-sm text-paragraph py-1.5 hover:text-[#6A97FF] transition duration-300"
                >
                  Whitepaper
                </Link>
              </li>
              <li>
                <Link
                  href="https://enterapp.io/"
                  target="_blank"
                  className="inline-block text-sm text-paragraph py-1.5 hover:text-[#6A97FF] transition duration-300"
                >
                  enterapp.io
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.enterapp.io/#tokenomics"
                  target="_blank"
                  className="inline-block text-sm text-paragraph py-1.5 hover:text-[#6A97FF] transition duration-300"
                >
                  Tokenomics
                </Link>
              </li>
              <li>
                <Link
                  href="https://entylabs.gitbook.io/enterapp.io/fundamentals/faqs"
                  target="_blank"
                  className="inline-block text-sm text-paragraph py-1.5 hover:text-[#6A97FF] transition duration-300"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  target="_blank"
                  className="inline-block text-sm text-paragraph py-1.5 hover:text-[#6A97FF] transition duration-300"
                >
                  View Presale Contract
                </Link>
              </li>
            </ul>
          </div>
          <div className="relative col-span-3 max-md:col-span-12 max-lg:col-span-4">
            <h5 className="text-md font-semibold mb-5 max-md:mb-2">ICO - Presale Disclaimer</h5>
            <ul>
              <li>
                <Link
                  href="https://entylabs.gitbook.io/enterapp.io/overview/ico-presale/ico-presale-disclaimer/privacy-policy"
                  className="inline-block text-sm text-paragraph py-1.5 hover:text-[#6A97FF] transition duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="https://entylabs.gitbook.io/enterapp.io/overview/ico-presale/ico-presale-disclaimer/terms-and-conditions"
                  className="inline-block text-sm text-paragraph py-1.5 hover:text-[#6A97FF] transition duration-300"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="https://entylabs.gitbook.io/enterapp.io/overview/ico-presale/ico-presale-disclaimer"
                  className="inline-block text-sm text-paragraph py-1.5 hover:text-[#6A97FF] transition duration-300"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
          <div className="relative col-span-3 max-lg:col-span-12">
            <h5 className="text-md max-lg:text-center font-semibold mb-5">
              Stay connected and be our Fan
            </h5>
            <div className="flex items-center max-lg:justify-center flex-wrap gap-7">
              <Link
                href="https://twitter.com/Enterapp_io"
                target="_blank"
                rel="noreferrer"
                className="block text-md hover:opacity-60 transition duration-300"
              >
                <X />
              </Link>
              <Link
                href="https://t.me/enterapp_io"
                target="_blank"
                rel="noreferrer"
                className="block text-md hover:opacity-60 transition duration-300"
              >
                <Telegram />
              </Link>
              <Link
                href="https://t.me/enterapp_group"
                target="_blank"
                rel="noreferrer"
                className="block text-md hover:opacity-60 transition duration-300"
              >
                <Telegram />
              </Link>
              <Link
                href="https://www.facebook.com/enterapp.io"
                target="_blank"
                rel="noreferrer"
                className="block text-md hover:opacity-60 transition duration-300"
              >
                <Facebook />
              </Link>
              <Link
                href="https://www.youtube.com/@EntyLabs"
                target="_blank"
                rel="noreferrer"
                className="block text-md hover:opacity-60 transition duration-300"
              >
                <Youtube />
              </Link>
              <Link
                href="https://discord.gg/Fw4uCRCDek"
                target="_blank"
                rel="noreferrer"
                className="block text-md hover:opacity-60 transition duration-300"
              >
                <Discord />
              </Link>
              <Link
                href="https://www.linkedin.com/company/enterapp-io/?viewAsMember=true"
                target="_blank"
                rel="noreferrer"
                className="block text-md hover:opacity-60 transition duration-300"
              >
                <Linkedin />
              </Link>
              <Link
                href="https://medium.com/@entylabs"
                target="_blank"
                rel="noreferrer"
                className="block text-md hover:opacity-60 transition duration-300"
              >
                <Medium />
              </Link>
              <Link
                href="https://coinmarketcap.com/community/profile/EntyLabs/"
                target="_blank"
                rel="noreferrer"
                className="block text-md hover:opacity-60 transition duration-300"
              >
                <Image
                  src="/images/icons/social/coinmarketcap.svg"
                  alt=""
                  width={100}
                  height={100}
                  className="w-6 h-6"
                />
              </Link>
              <Link
                href="https://bitcointalk.org/index.php?topic=5479876.0"
                target="_blank"
                rel="noreferrer"
                className="block text-md hover:opacity-60 transition duration-300"
              >
                <BitcoinCircle />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          {/* <ul className="flex items-center justify-center flex-wrap mb-5">
            <li>
              <Link
                href="/"
                className="block text-sm text-paragraph hover:text-[#6A97FF] p-2 transition duration-300"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="block text-sm text-paragraph hover:text-[#6A97FF] p-2 transition duration-300"
              >
                Legal use
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="block text-sm text-paragraph hover:text-[#6A97FF] p-2 transition duration-300"
              >
                Term of use
              </Link>
            </li>
          </ul> */}
          <p className="text-sm">
            Copyright &copy; 2024. All Rights Reserved by GlobalEntyLabs s.r.o,
            CZ, Europe
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
