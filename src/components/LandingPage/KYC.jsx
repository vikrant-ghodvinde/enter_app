"use client";
import React, { useState } from "react";

const KYC = () => {
  const [tabType, setTabType] = useState("start");
  return (
    <section className="relative p-5">
      <div className="text-center mb-10">
        <h2 className="text-xl font-bold">Complete Your KYC</h2>
      </div>
      <div className="relative">
        <div
          role="tablist"
          className="w-full flex max-md:flex-col max-lg:flex-row max-xl:flex-col justify-evenly tabs-boxed"
        >
          <button
            type="button"
            role="tab"
            className={`tab block w-full ${
              tabType === "start" ? "tab-active" : ""
            } transition-all duration-300`}
            onClick={() => setTabType("start")}
          >
            Start KYC
          </button>
          <button
            type="button"
            role="tab"
            className={`tab block w-full ${
              tabType === "upload" ? "tab-active" : ""
            } transition-all duration-300`}
            onClick={() => setTabType("upload")}
          >
            Upload Documents
          </button>
          <button
            type="button"
            role="tab"
            className={`tab block w-full ${
              tabType === "complete" ? "tab-active" : ""
            } transition-all duration-300`}
            onClick={() => setTabType("complete")}
          >
            Complete KYC
          </button>
        </div>
        <div className="relative w-full mt-8">
          {tabType === "start" ? (
            <div className="relative text-center">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl max-md:xl font-bold mb-4">Start KYC</h3>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  non quis assumenda porro deleniti. Recusandae omnis reiciendis
                  adipisci, est tempore dolore dolorem harum eos optio repellat
                  enim debitis dolores consequatur.
                </p>
                <button
                  type="button"
                  className="inline-block relative text-center py-2.5 px-6 text-sm bg-white text-black rounded-badge font-medium hover:text-white hover:bg-light-blue transition duration-300"
                  onClick={() => setTabType("upload")}
                >
                  Start KYC
                </button>
              </div>
            </div>
          ) : tabType === "upload" ? (
            <div className="relative">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl max-md:xl font-bold text-center mb-4">
                  Upload Documents
                </h3>
                <div className="grid grid-cols-2 gap-5 mb-5">
                  <div className="relative col-span-1 max-md:col-span-2">
                    <label className="block mb-1.5 text-sm font-medium text-paragraph">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Fist Name"
                      className="relative w-full h-11 p-3 rounded-lg bg-transparent border border-gray-600 focus:border-white outline-none transition-all duration-300"
                    />
                  </div>
                  <div className="relative col-span-1 max-md:col-span-2">
                    <label className="block mb-1.5 text-sm font-medium text-paragraph">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="relative w-full h-11 p-3 rounded-lg bg-transparent border border-gray-600 focus:border-white outline-none transition-all duration-300"
                    />
                  </div>
                  <div className="relative col-span-1 max-md:col-span-2">
                    <label className="block mb-1.5 text-sm font-medium text-paragraph">
                      ID Proof Type
                    </label>
                    <select className="relative w-full h-11 p-3 rounded-lg bg-transparent border border-gray-600 focus:border-white outline-none transition-all duration-300">
                      <option value>Select Type</option>
                    </select>
                  </div>
                  <div className="relative col-span-1 max-md:col-span-2">
                    <label className="block mb-1.5 text-sm font-medium text-paragraph">
                      ID Proof
                    </label>
                    <input
                      type="file"
                      className="file-input file-input-ghost h-11 w-full"
                    />
                  </div>
                  <div className="relative col-span-1 max-md:col-span-2">
                    <label className="block mb-1.5 text-sm font-medium text-paragraph">
                      Address Proof Type
                    </label>
                    <select className="relative w-full h-11 p-3 rounded-lg bg-transparent border border-gray-600 focus:border-white outline-none transition-all duration-300">
                      <option value>Select Type</option>
                    </select>
                  </div>
                  <div className="relative col-span-1 max-md:col-span-2">
                    <label className="block mb-1.5 text-sm font-medium text-paragraph">
                      Address Proof
                    </label>
                    <input
                      type="file"
                      className="file-input file-input-ghost h-11 w-full"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="button"
                    className="inline-block relative text-center py-2.5 px-6 text-sm bg-white text-black rounded-badge font-medium hover:text-white hover:bg-light-blue transition duration-300"
                    onClick={() => setTabType("complete")}
                  >
                    Upload Documents
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl max-md:xl font-bold text-center mb-4">
                  KYC Completed
                </h3>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  obcaecati dolor nostrum tempore in aut sequi at eaque ad
                  numquam.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default KYC;
