"use client";
import React, { useRef, useCallback } from "react";
import { MainButton } from "@/app/components/buttons/mainButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import strategiesIntroImg from "@/public/assets/img/strategiesIntroImg.png";
import FlipCard from "@/app/components/flipCard/flipCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./strategiesPage.css";

// todo: This will be filled in with data from strategies/page (I dont have this so Im forced to do it like this )
const ListText = () => {
  return (
    <div>
      <h4 className="text-[16px] leading-5 mb-6 font-bold">
        The delta neutral portfolio is perfect for investors who:
      </h4>
      <ul className="flex flex-col gap-2">
        <li>
          <p className="text-[14px] font-semibold leading-[150%]">
            • Are in it for the long-term
          </p>
        </li>
        <li>
          <p className="text-[14px] font-semibold leading-[150%]">
            • Want to profit whether there is a bull- crab- or bear market
          </p>
        </li>
        <li>
          <p className="text-[14px] font-semibold leading-[150%]">
            • Mainly want to benefit from arbitrage opportunities within
            DeltaPrime
          </p>
        </li>
      </ul>
    </div>
  );
};

const FlipCardMobileCarousel = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <>
      {/* Swiper carousel for mobile view */}
      <div className="flex flex-col gap-10 md:hidden ">
        <Swiper
          ref={sliderRef}
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: (index, className) => {
              return `<div class="${className} custom-bullet">${
                index + 1
              }</div>`;
            },
          }}
          className="swiper-container"
        >
          <SwiperSlide>
            <FlipCard
              titleFront="Delta Neutral"
              descriptionFront="Delta neutral portfolios are optimized for loss prevention."
              difficultyLevel={3}
              isFirstCard={true}
              listTextBack={<ListText />}
            />
          </SwiperSlide>
          <SwiperSlide>
            <FlipCard
              titleFront="The Fee Collector"
              descriptionFront="Maximizes yield with limited price exposure"
              difficultyLevel={1}
              listTextBack={<ListText />}
            />
          </SwiperSlide>
          <SwiperSlide>
            <FlipCard
              titleFront="The Carry Trader"
              descriptionFront="Earns yield by depositing in higher-interest pools"
              difficultyLevel={1}
              listTextBack={<ListText />}
            />
          </SwiperSlide>
          <SwiperSlide>
            <FlipCard
              titleFront="The Yielding Bull"
              descriptionFront="Goes long on assets while accumulating yield"
              difficultyLevel={3}
              listTextBack={<ListText />}
            />
          </SwiperSlide>
          <SwiperSlide>
            <FlipCard
              titleFront="The Fee Collector"
              descriptionFront="Maximizes yield with limited price exposure"
              difficultyLevel={1}
              listTextBack={<ListText />}
            />
          </SwiperSlide>
          <SwiperSlide>
            <FlipCard
              titleFront="The Carry Trader"
              descriptionFront="Earns yield by depositing in higher-interest pools"
              difficultyLevel={1}
              listTextBack={<ListText />}
            />
          </SwiperSlide>
        </Swiper>

        {/* Custom navigation and pagination */}
        <div className="custom-pagination-container flex justify-between items-center mt-4">
          <div className="swiper-button-prev custom-arrow" onClick={handlePrev}>
            ←
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-next custom-arrow" onClick={handleNext}>
            →
          </div>
        </div>
      </div>
    </>
  );
};

const StrategiesPage = () => {
  return (
    <div className="px-4 md:px-[6%] lg:px-[8%] 2xl:px-[12%]">
      {/* intro */}
      <div className="flex md:flex-row flex-col justify-center items-center w-full gap-20">
        {/* Text Wrapper */}
        <div className="flex flex-col md:mb-8 mb-0 justify-between items-center md:items-start h-fit">
          <div className="text-left flex flex-col gap-8 dark:text-white text-[#6B70ED]">
            <p className="brightText text-wrap max-w-xl mb-4 text-3xl md:text-[44px]">
              Strategies
            </p>
            <p className="whiteMainText text-wrap max-w-[35rem] text-[15px] md:text-[17px] md:leading-[25.5px] leading-5 mb-10 ">
              DeltaPrime allows for a range of new and unique strategies. Every
              strategy is accompanied by a practical example, getting deeper
              into the risk and rewards of the specific strategy.
            </p>
          </div>
          <MainButton
            className="w-full md:w-fit"
            label="LAUNCH APP"
            hasArrowRight={true}
          />
        </div>
        {/* Image burd */}
        <div className="w-fit">
          <Image src={strategiesIntroImg} alt="deltaprime_mascot_img" />
        </div>
      </div>

      {/* cards */}
      <div>
        {/* Dektop Cards */}
        <div className="hidden md:block mx-auto p-4">
          {/* This component is hidden until the desired breakpoint */}
          <div className="mb-4 p-4 bg-gray-200">
            Component to show on lg and higher screens
          </div>
          <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            <div className="card p-4">
              <FlipCard
                titleFront="Delta Neutral"
                descriptionFront="Delta neutral portfolios are optimized for loss prevention."
                difficultyLevel={3}
                isFirstCard={true}
                listTextBack={<ListText />}
              />
            </div>
            <div className="card p-4">
              <FlipCard
                titleFront="The Fee Collector"
                descriptionFront="Maximizes yield with limited price exposure"
                difficultyLevel={1}
                listTextBack={<ListText />}
              />
            </div>
            <div className="card p-4">
              <FlipCard
                titleFront="The Carry Trader"
                descriptionFront="Earns yield by depositing in higher-interest pools"
                difficultyLevel={1}
                listTextBack={<ListText />}
              />
            </div>
            <div className="card p-4">
              <FlipCard
                titleFront="The Yielding Bull"
                descriptionFront="Goes long on assets while accumulating yield"
                difficultyLevel={3}
                listTextBack={<ListText />}
              />
            </div>
            <div className="card p-4">
              <FlipCard
                titleFront="The Fee Collector"
                descriptionFront="Maximizes yield with limited price exposure"
                difficultyLevel={1}
                listTextBack={<ListText />}
              />
            </div>
            <div className="card p-4">
              <FlipCard
                titleFront="The Carry Trader"
                descriptionFront="Earns yield by depositing in higher-interest pools"
                difficultyLevel={1}
                listTextBack={<ListText />}
              />
            </div>
          </div>
        </div>
        {/* Mobile Cards */}
        <FlipCardMobileCarousel />
      </div>
    </div>
  );
};

export default StrategiesPage;
