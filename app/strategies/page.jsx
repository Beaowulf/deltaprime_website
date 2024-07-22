"use client";
import React, { useRef, useCallback } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./strategiesPage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useTheme } from "next-themes";
import Image from "next/image";
import { MainButton } from "@/app/components/buttons/mainButton";
import FlipCard from "@/app/components/flipCard/flipCard";
import strategiesIntroImg from "@/public/assets/img/strategiesIntroImg.png";
import arrowLeftColored from "@/public/assets/icons/arrowLeftColored.svg";
import arrowRightColored from "@/public/assets/icons/arrowRightColored.svg";
import UnlockPotentialContainer from "@/app/components/unlockPotentialContainer/unlockPotentialContainer";
import ContactForm from "@/app/ui/contactForm/contactForm";

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

function ArrowButtonCarousel({ onClick, left }) {
  const { theme } = useTheme();
  return (
    <>
      <button onClick={onClick} className="arrowButtonBG w-fit h-fit">
        <div
          className={`rounded-[65px] w-[70px] h-[40px] flex justify-center items-center ${
            theme === "dark" ? "bg-arrowButtonDarkGradient" : "bg-[#F4F4FF]"
          }`}
        >
          {left ? (
            <Image
              className={"size-5 fill-white"}
              src={arrowLeftColored}
              alt={"Arrow Right"}
            />
          ) : (
            <Image
              className={"size-5 fill-white"}
              src={arrowRightColored}
              alt={"Arrow Right"}
            />
          )}
        </div>
      </button>
    </>
  );
}

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
              return `<div class="${className}"></div>`;
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
        <div className="custom-pagination-container flex justify-between items-center py-[30px] px-[4rem]">
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

const StrategiesPage = () => {
  return (
    <div className="px-4 md:px-[6%] lg:px-[8%] 2xl:px-[12%]">
      {/* intro */}
      <div className="flex md:flex-row flex-col justify-center items-center w-full gap-20 mb-40">
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
            <MainButton
              className="w-[100%] md:w-fit"
              label="LAUNCH APP"
              hasArrowRight={true}
            />
          </div>
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

        {/* Unlock full potential button reponsive component */}
        <div>
          <UnlockPotentialContainer hasMarginTop={false} />
          {/* Show this button only on mobile */}
          <div className="fullWidthButtonChildren h-[60px] md:h-full block md:hidden my-10 w-full text-center">
            <MainButton
              className="mx-auto"
              label="LAUNCH APP"
              hasArrowRight={true}
            />
          </div>
        </div>

        {/* other text */}
        <div className="flex md:flex-row flex-col justify-center items-center w-full gap-20 my-10 md:my-40">
          {/* Text Wrapper */}
          <div className="flex flex-col md:mb-8 mb-0 justify-between items-center md:items-start h-fit">
            <div className="text-left flex flex-col gap-8 dark:text-white text-[#6B70ED]">
              <p className="brightText text-wrap max-w-xl mb-4 text-3xl md:text-[44px]">
                Strategies
              </p>
              <p className="whiteMainText text-wrap max-w-[35rem] text-[15px] md:text-[17px] md:leading-[25.5px] leading-5 mb-10 ">
                DeltaPrime allows for a range of new and unique strategies.
                Every strategy is accompanied by a practical example, getting
                deeper into the risk and rewards of the specific strategy.
              </p>
            </div>
            <div className="fullWidthButtonChildren h-[60px] md:h-full hidden my-10 w-full text-left">
              <MainButton
                className=""
                label="LEARN MORE"
                hasArrowRight={true}
              />
            </div>
          </div>
          {/* Image burd */}
          <div className="w-fit">
            <Image src={strategiesIntroImg} alt="deltaprime_mascot_img" />
          </div>
        </div>

        {/* Unlock full potential button reponsive component */}
        <div className="mb-40">
          <UnlockPotentialContainer hasMarginTop={false} />
        </div>

        <ContactForm />
      </div>
    </div>
  );
};

export default StrategiesPage;
