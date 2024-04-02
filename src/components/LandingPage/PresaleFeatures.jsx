import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const PresaleFeatures = () => {
  return (
    <section className="relative py-14" id="presaleFeatures">
      <div className="landing_container">
        <div className="text-center mb-20">
          <h2
            data-title="Features"
            className="relative uppercase text-4xl max-lg:text-2xl font-bold z-10 before:content-[attr(data-title)]  before:absolute before:left-[50%] before:translate-x-[-50%] before:top-[50%] before:translate-y-[-50%] before:text-[100px] before:text-light-blue before:-z-10 before:opacity-5 before:whitespace-nowrap"
          >
            $ENTY Token Launchpad Presale Key Features
          </h2>
        </div>
        <Swiper
          loop={true}
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide className="group">
            <div className="grid grid-cols-1 gap-2">
              <div className="relative bg-white text-black rounded-lg">
                <div className="relative p-5">
                  <h4 className="text-lg font-semibold text-center mb-3">
                    Presale Stage (Round 1)
                  </h4>
                  <ul className="ps-4 mb-4 list-disc text-sm">
                    <li>500,000,000 $ENTY</li>
                    <li>Token allocation: 5,00%</li>
                    <li>Token Price: 0,001$</li>
                  </ul>
                  <div className="relative">
                    <h6 className="font-semibold">Token Vesting</h6>
                    <ul className="ps-4 list-disc text-sm">
                      <li>Cliff Period: 6 Month</li>
                      <li>TGE/Month: 12,5%</li>
                      <li>Max Free Token / Month: 62,5 M</li>
                      <li>Linear Vesting Period: 8 Month</li>
                      <li>Max Amount $ / Wallet: 1000$</li>
                    </ul>
                  </div>
                  <div className="relative rounded-lg bg-light-blue mt-5">
                    <div className="relative text-center p-4">
                      <h4 className="text-md font-semibold text-white mb-3">
                        Benefits
                      </h4>
                      <p className="text-white text-sm">
                        Guaranteed Rewards by 50x for all early investors by
                        presale stage 1 on their investment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="group">
            <div className="grid grid-cols-1 gap-2">
              <div className="relative bg-white text-black rounded-lg">
                <div className="relative p-5">
                  <h4 className="text-lg font-semibold text-center mb-3">
                    Presale Stage (Round 2)
                  </h4>
                  <ul className="ps-4 mb-4 list-disc text-sm">
                    <li>200,000,000 $ENTY</li>
                    <li>Token allocation: 2,00%</li>
                    <li>Token Price: 0,005$</li>
                  </ul>
                  <div className="relative">
                    <h6 className="font-semibold">Token Vesting</h6>
                    <ul className="ps-4 list-disc text-sm">
                      <li>Cliff Period: 5 Month</li>
                      <li>TGE/Month: 12,5%</li>
                      <li>Max Free Token / Month: 25 M</li>
                      <li>Linear Vesting Period: 8 Month</li>
                      <li>Max Amount $ / Wallet: 2500$</li>
                    </ul>
                  </div>
                  <div className="relative rounded-lg bg-light-blue mt-5">
                    <div className="relative text-center p-4">
                      <h4 className="text-md font-semibold text-white mb-3">
                        Benefits
                      </h4>
                      <p className="text-white text-sm">
                        Guaranteed Rewards by 10x for all early investors by
                        presale stage 2 on their investment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="group">
            <div className="grid grid-cols-1 gap-2">
              <div className="relative bg-white text-black rounded-lg">
                <div className="relative p-5">
                  <h4 className="text-lg font-semibold text-center mb-3">
                    Presale Stage (Round 3)
                  </h4>
                  <ul className="ps-4 mb-4 list-disc text-sm">
                    <li>120,000,000 $ENTY</li>
                    <li>Token allocation: 1,20%</li>
                    <li>Token Price: 0,010$</li>
                  </ul>
                  <div className="relative">
                    <h6 className="font-semibold">Token Vesting</h6>
                    <ul className="ps-4 list-disc text-sm">
                      <li>Cliff Period: 4 Month</li>
                      <li>TGE/Month: 12,5%</li>
                      <li>Max Free Token / Month: 15 M</li>
                      <li>Linear Vesting Period: 8 Month</li>
                      <li>Max Amount $ / Wallet: 5000$</li>
                    </ul>
                  </div>
                  <div className="relative rounded-lg bg-light-blue mt-5">
                    <div className="relative text-center p-4">
                      <h4 className="text-md font-semibold text-white mb-3">
                        Benefits
                      </h4>
                      <p className="text-white text-sm">
                        Guaranteed Rewards by 5x for all early investors by
                        presale stage 3 on their investment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="group">
            <div className="grid grid-cols-1 gap-2">
              <div className="relative bg-white min-h-[428px] text-black rounded-lg">
                <div className="relative p-5">
                  <h4 className="text-lg font-semibold text-center mb-3">
                    Public Sale
                  </h4>
                  <ul className="ps-4 mb-4 list-disc text-sm">
                    <li>100,000,000 $ENTY</li>
                    <li>Token allocation: 1,00%</li>
                    <li>Token Price: 0,050$</li>
                  </ul>
                  <div className="relative text-center">
                    <h6 className="font-semibold">
                      Freely tradable on the future DEX/CEX-es!
                    </h6>
                  </div>
                </div>
              </div>
              {/* <div className="relative rounded-lg overflow-hidden z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-light-blue before:backdrop-blur-md before:opacity-10 before:-z-10">
                <div className="relative text-center p-5">
                  <h4 className="text-md font-semibold mb-3">Benefits</h4>
                  <p className="text-white text-sm">
                    Guaranteed Rewards by 50x for all early investors by presale
                    stage 1 on their investment
                  </p>
                </div>
              </div> */}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default PresaleFeatures;
