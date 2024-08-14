"use client";
import React, { useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import FlipCard from "@/app/components/flipCard/flipCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./strategiesPage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useTheme } from "next-themes";
import arrowLeftColored from "@/public/assets/icons/arrowBtnLeftColored.svg";
import arrowRightColored from "@/public/assets/icons/arrowBtnRightColored.svg";
import Header from "@/app/components/header/header";

const ListText = ({ strategyID }) => {
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
      <div className="mt-3">
        <Link
          href={`/strategies/${strategyID}`}
          className="font-semibold pt-4 underline !z-50"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export const StratDesktopFlipCards = ({ strategies }) => {
  return (
    <div className="hidden md:block mx-auto p-5 lg:p-10">
      {/* This component is hidden until the desired breakpoint */}
      <div>
        <Header
          subTitle={"Choose Your Strategy"}
          paragraph={
            "We invite you to explore a broad range of strategies. Keep an eye on this space as more strategies are added as they are discovered and tested by our community"
          }
        />
      </div>
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {strategies.map((strategy, index) => (
          <div key={strategy.strategyID} className="card w-full">
            <FlipCard
              titleFront={strategy.strategyTitle}
              descriptionFront={strategy.strategyDescription}
              difficultyLevel={strategy.difficultyLevel}
              isFirstCard={index === 0}
              listTextBack={<ListText strategyID={strategy.strategyID} />}
              titleBack={strategy.strategyTitle}
              strategyImage={strategy.strategyImage?.fields?.file?.url} // Pass the image URL here
            />
          </div>
        ))}
        {/* <div className="card p-4">
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
        </div> */}
      </div>
    </div>
  );
};

export const FlipCardMobileCarousel = ({ strategies }) => {
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
          loop={true}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: (index, className) => {
              return `<div class="${className}"></div>`;
            },
          }}
          className="swiper-container"
        >
          {strategies.map((strategy) => (
            <SwiperSlide key={strategy.strategyID}>
              <FlipCard
                titleFront={strategy.strategyTitle}
                titleBack={strategy.strategyTitle}
                descriptionFront={strategy.strategyDescription}
                difficultyLevel={strategy.difficultyLevel}
                listTextBack={<ListText strategyID={strategy.strategyID} />}
                strategyImage={strategy.strategyImage?.fields?.file?.url} // Pass the image URL here
              />
            </SwiperSlide>
          ))}
          {/* <SwiperSlide>
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
          </SwiperSlide> */}
        </Swiper>

        {/* Custom navigation and pagination */}
        <div className="custom-pagination-container flex justify-between items-center py-[30px] px-[4rem] mb-5">
          <Image
            onClick={handlePrev}
            className="size-5 swiper-button-prev custom-arrow"
            src={arrowLeftColored}
            alt={"Arrow Right"}
          />
          <div className="swiper-pagination"></div>
          <Image
            onClick={handleNext}
            className="size-5 swiper-button-next custom-arrow"
            src={arrowRightColored}
            alt={"Arrow Right"}
          />
        </div>
      </div>
    </>
  );
};

export const DesktopCardCarousel = ({ strategies }) => {
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
      <div className="flex flex-col gap-5 hidden md:block">
        <Swiper
          ref={sliderRef}
          modules={[Pagination]}
          spaceBetween={10}
          slidesPerView={3}
          slidesPerGroup={3}
          loop={true}
          pagination={{
            el: ".swiper-pagination-desktop",
            clickable: true,
            renderBullet: (index, className) => {
              return `<div class="${className}"></div>`;
            },
          }}
          className="swiper-container"
        >
          {strategies.map((strategy) => (
            <SwiperSlide key={strategy.strategyID}>
              <FlipCard
                titleFront={strategy.strategyTitle}
                titleBack={strategy.strategyTitle}
                descriptionFront={strategy.strategyDescription}
                difficultyLevel={strategy.difficultyLevel}
                listTextBack={<ListText strategyID={strategy.strategyID} />}
                strategyImage={strategy.strategyImage?.fields?.file?.url} // Pass the image URL here
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation and pagination */}
        <div className="custom-pagination-container-desktop flex justify-between items-center py-[30px] px-[4rem]">
          <Image
            onClick={handlePrev}
            className="size-5 swiper-button-prev-desktop custom-arrow"
            src={arrowLeftColored}
            alt={"Arrow Left"}
          />
          <div className="swiper-pagination-desktop"></div>

          <Image
            onClick={handleNext}
            className="size-5 swiper-button-next-desktop custom-arrow"
            src={arrowRightColored}
            alt={"Arrow Right"}
          />
        </div>
      </div>
    </>
  );
};
