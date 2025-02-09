"use client";
import React, { useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import FlipCard from "@/app/components/flipCard/flipCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./howToVideosPage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { useTheme } from "next-themes";
import arrowLeftColored from "@/public/assets/icons/arrowBtnLeftColored.svg";
import arrowRightColored from "@/public/assets/icons/arrowBtnRightColored.svg";
import HowToVideoCard from "../components/howToVideoCard/howToVideoCard";

export const VideosDesktopFlipCards = ({ videos }) => {
  return (
    <div className="hidden md:block mx-auto">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {videos.map((video, index) => (
          <div
            key={video.howToVideosID}
            className="card p-4 w-full cursor-pointer flex item-center justify-center"
          >
            <HowToVideoCard
              video={video}
              imageThumbnail={
                video?.howToVideoDescriptionImage?.fields?.file?.url
              }
              imageTitle={
                video?.howToVideoDescriptionImage?.fields?.file?.title
              }
              imageBigThumbnail={
                video?.howToVideosBigThumbnail?.fields?.file?.url
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export const FlipCardMobileCarousel = ({ videos }) => {
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
      <div className="flex flex-col md:hidden my-10 md:my-0">
        <Swiper
          ref={sliderRef}
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{
            el: ".custom-swiper-pagination", // Target your custom pagination container
            clickable: true,
          }}
          className="swiper-container"
        >
          {videos.map((video) => (
            <SwiperSlide key={video.howToVideosID}>
              <HowToVideoCard
                video={video}
                imageThumbnail={
                  video?.howToVideoDescriptionImage?.fields?.file?.url
                }
                imageTitle={
                  video?.howToVideoDescriptionImage?.fields?.file?.title
                }
                imageBigThumbnail={
                  video?.howToVideosBigThumbnail?.fields?.file?.url
                }
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation and pagination */}
        <div className="custom-pagination-container flex justify-between items-center py-[30px] px-[5rem]">
          <Image
            width={30}
            height={30}
            onClick={handlePrev}
            className="swiper-button-prev custom-arrow"
            src={arrowLeftColored}
            alt={"Arrow Left"}
          />
          <div className="custom-swiper-pagination swiper-pagination"></div>{" "}
          {/* Custom pagination element */}
          <Image
            width={30}
            height={30}
            onClick={handleNext}
            className="swiper-button-next custom-arrow"
            src={arrowRightColored}
            alt={"Arrow Right"}
          />
        </div>
      </div>
    </>
  );
};

export const FlipDesktopCarousel = ({ strategies }) => {
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
    <div className="flex flex-col gap-10 w-full mb-10 justify-center items-center">
      <div className="w-full xl:w-[40rem]">
        <Swiper
          ref={sliderRef}
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={false} // Set loop to false to avoid unexpected behaviors
          breakpoints={{
            640: { slidesPerView: 1 }, // 1 slide for mobile devices
            768: { slidesPerView: 2 }, // 2 slides for tablets
            1024: { slidesPerView: 1 }, // 3 slides for desktops
          }}
          pagination={{
            el: ".custom-swiper-pagination",
            clickable: true,
          }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
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
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation and pagination */}
        <div className="custom-pagination-container flex justify-between items-center py-[30px] px-[4rem] w-full">
          <Image
            width={30}
            height={30}
            onClick={handlePrev}
            className="swiper-button-prev custom-arrow"
            src={arrowLeftColored}
            alt={"Arrow Left"}
          />
          <div className="custom-swiper-pagination swiper-pagination"></div>
          <Image
            width={30}
            height={30}
            onClick={handleNext}
            className="swiper-button-next custom-arrow"
            src={arrowRightColored}
            alt={"Arrow Right"}
          />
        </div>
      </div>
    </div>
  );
};
