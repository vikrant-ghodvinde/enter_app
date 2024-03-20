import { MenuScale, Wallet } from "iconoir-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
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
              <ul className="menus overflow-y-auto">
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
                    href="/#tokenomics"
                    className="block relative p-2 text-sm font-medium hover:text-[#6A97FF] transition duration-300"
                  >
                    Tokenomics
                  </Link>
                </li>
                <li className="relative mx-3 max-lg:my-1">
                  <Link
                    href="/#faqs"
                    className="block relative p-2 text-sm font-medium hover:text-[#6A97FF] transition duration-300"
                  >
                    FAQ
                  </Link>
                </li>
                <li className="relative mx-3 max-lg:my-1">
                  <Link
                    href="https://polygonscan.com/token/0x25b70fa255fb51b40e82a73b1661e95d8c568870"
                    target="_blank"
                    rel="noreferrer"
                    className="block relative p-2 text-sm font-medium hover:text-[#6A97FF] transition duration-300"
                  >
                    Verified
                  </Link>
                </li>
                <li className="relative mx-3 max-lg:my-1">
                  <Link
                    href="https://200945230-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FZyAZDjtHZ37ZUKB08GmT%2Fuploads%2Foju7d5kqho9zXBsGpHJo%2FEntyToken%20Security%20Audit%20Report.pdf?alt=media&token=eab1aa52-97c4-46b4-9d2b-cfdb43b11c5a"
                    target="_blank"
                    rel="noreferrer"
                    className="block relative p-2 text-sm font-medium hover:text-[#6A97FF] transition duration-300"
                  >
                    Audit
                  </Link>
                </li>
                <li className="relative mx-3 max-lg:my-1">
                  <Link
                    href="https://entylabs.gitbook.io/enterapp.io/roadmap"
                    target="_blank"
                    rel="noreferrer"
                    className="block relative p-2 text-sm font-medium hover:text-[#6A97FF] transition duration-300"
                  >
                    Roadmap
                  </Link>
                </li>
                <li className="relative mx-3 max-lg:my-1">
                  <Link
                    href="https://entylabs.gitbook.io/enterapp.io/overview/welcome-introduction-of-enterapp.io"
                    target="_blank"
                    rel="noreferrer"
                    className="block relative p-2 text-sm font-medium hover:text-[#6A97FF] transition duration-300"
                  >
                    Whitepaper
                  </Link>
                </li>
                <li className="relative mx-3 max-lg:my-1">
                    <Link
                      href="https://github.com/EntyLabs"
                      target="_blank"
                      rel="noreferrer"
                      className="block relative p-2 text-sm font-medium hover:text-[#6A97FF] transition duration-300"
                    >
                      GitHub
                    </Link>
                  </li>
              </ul>
            </div>
            <div className="relative flex items-center gap-3">
              <button
                type="button"
                className="block relative py-2 px-6 text-sm bg-white text-black rounded-badge font-medium hover:text-white hover:bg-[#6A97FF] transition duration-300"
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
  );
};

export default Navbar;
