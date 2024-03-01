"use client";
import Footer from "@/components/LandingPage/Footer";
import Navbar from "@/components/LandingPage/Navbar";
import Link from "next/link";
import React from "react";

const HowToBuy = () => {
  return (
    <div className="landing_wrapper overflow-x-hidden">
      <Navbar />
      <section className="relative py-14">
        <div className="landing_container">
          <div className="text-center mb-10">
            <h2
              data-title="How To Buy"
              className="relative uppercase text-4xl max-lg:text-2xl font-bold z-10 before:content-[attr(data-title)] before:absolute before:left-[50%] before:translate-x-[-50%] before:top-[50%] before:translate-y-[-50%] before:text-[100px] before:text-[#6A97FF] before:-z-10 before:opacity-5 before:whitespace-nowrap"
            >
              How To Buy
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="relative col-span-2">
              <div className="text-center">
                <h3 className="text-2xl font-bold">
                  For Desktop & Laptop Users
                </h3>
              </div>
            </div>
            <div className="relative col-span-1 max-md:col-span-2">
              <div className="relative text-justify">
                <p className="text-sm font-medium uppercase">Step 1</p>
                <h4 className="text-xl font-semibold mb-4">
                  Install MetaMask on your browser
                </h4>
                <p>
                  To begin your journey in the web3 world, you need to install a
                  decentralized wallet that only you have control over. One of
                  the most widely used wallets is MetaMask. To install MetaMask,
                  visit the official{" "}
                  <Link
                    href="https://metamask.io/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4"
                  >
                    MetaMask website
                  </Link>{" "}
                  and select the browser you would like to use, such as Chrome
                  or Firefox.
                </p>
              </div>
            </div>
            <div className="relative col-span-1 max-md:col-span-2">
              <div className="relative text-justify">
                <p className="text-sm font-medium uppercase">Step 2</p>
                <h4 className="text-xl font-semibold mb-4">
                  Create your wallet
                </h4>
                <p>
                  Once installed, click on the &apos;Create a Wallet&apos;
                  button to create your MetaMask wallet. Your wallet&apos;s
                  public is a unique identifier on the blockchain and is
                  generated randomly.
                </p>
              </div>
            </div>
            <div className="relative col-span-1 max-md:col-span-2">
              <div className="relative text-justify">
                <p className="text-sm font-medium uppercase">Step 3</p>
                <h4 className="text-xl font-semibold mb-4">
                  Set a wallet password
                </h4>
                <p>
                  MetaMask will prompt you to set a password for your wallet. It
                  is essential to choose a strong password that cannot be easily
                  guessed.
                </p>
              </div>
            </div>
            <div className="relative col-span-1 max-md:col-span-2">
              <div className="relative text-justify">
                <p className="text-sm font-medium uppercase">Step 4</p>
                <h4 className="text-xl font-semibold mb-4">
                  Write down recovery phrase
                </h4>
                <p>
                  It is crucial to write down your 12-word recovery phrase on a
                  piece of paper and keep it safe. Please do it on your PC as it
                  may be vulnerable to cyber-attacks. This recovery phrase is
                  necessary, without this you could lose access to your wallet.
                </p>
              </div>
            </div>
            <div className="relative col-span-1 max-md:col-span-2">
              <div className="relative text-justify">
                <p className="text-sm font-medium uppercase">Step 5</p>
                <h4 className="text-xl font-semibold mb-4">
                  Connect to the Ethereum network
                </h4>
                <p>
                  By default, MetaMask is set to transact with the Ethereum
                  network, which means there is no need to change the network
                  settings within the wallet to engage with the CoHomies token.
                </p>
              </div>
            </div>
            <div className="relative col-span-1 max-md:col-span-2">
              <div className="relative text-justify">
                <p className="text-sm font-medium uppercase">Step 6</p>
                <h4 className="text-xl font-semibold mb-4">
                  Import CoHomies to MetaMask
                </h4>
                <p>
                  Import CoHomies to MetaMask To view your balance, import $CHM
                  to your MetaMask wallet. Click on ‘Import Tokens’ and paste in
                  the contract address:
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-20">
            <div className="relative col-span-2">
              <div className="text-center">
                <h3 className="text-2xl font-bold">
                  For Mobile & Tablet Users
                </h3>
              </div>
            </div>
            <div className="relative col-span-1 max-md:col-span-2">
              <div className="relative text-justify">
                <p className="text-sm font-medium uppercase">Step 1</p>
                <h4 className="text-xl font-semibold mb-4">
                  Download Trust Wallet app
                </h4>
                <p>
                  To begin, download the Trust Wallet mobile application. Trust
                  Wallet is supported by the popular Binance exchange and can be
                  accessed via the Binance website or the App Store and Google
                  Play.
                </p>
              </div>
            </div>
            <div className="relative col-span-1 max-md:col-span-2">
              <div className="relative text-justify">
                <p className="text-sm font-medium uppercase">Step 2</p>
                <h4 className="text-xl font-semibold mb-4">
                  Create your wallet
                </h4>
                <p>
                  Once downloaded, you will be prompted to either create a new
                  Trust Wallet or sign in to an existing one. Click on the
                  &apos;Create a Wallet&apos; button to generate a new wallet.
                </p>
              </div>
            </div>
            <div className="relative col-span-1 max-md:col-span-2">
              <div className="relative text-justify">
                <p className="text-sm font-medium uppercase">Step 3</p>
                <h4 className="text-xl font-semibold mb-4">
                  Backup your passphrase
                </h4>
                <p>
                  It is crucial to backup your 12-word passphrase carefully.
                  Trust Wallet will require you to manually enter these 12 words
                  in the correct order to confirm that the backup passphrase is
                  accurately recorded.
                </p>
              </div>
            </div>
            <div className="relative col-span-1 max-md:col-span-2">
              <div className="relative text-justify">
                <p className="text-sm font-medium uppercase">Step 4</p>
                <h4 className="text-xl font-semibold mb-4">
                  Add CoHomies token
                </h4>
                <p>
                  With Trust Wallet set up on your mobile device, you can add
                  the CoHomies token ($CHM) by selecting the button at the
                  top-right of the screen and choosing &apos;Add Custom
                  Token&apos;.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HowToBuy;
