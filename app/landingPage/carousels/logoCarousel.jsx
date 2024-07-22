import React from "react";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTheme } from "next-themes";
import "swiper/css";
import "swiper/css/autoplay";

import { logoCarouselItems } from "@/app/components/carouselImages/getCarouselData";

const CarouselHeader = () => {
  return (
    <div className="flex flex-row w-full md:mb-20 mb-8 items-center">
      {/* Carousel Title */}
      {/* line */}
      <span className="h-[2px] w-full bg-gradient-to-r from-[#5A2950] to-[#4D3496] " />
      {/* header */}
      <p className="slightBrightText md:mx-10 mx-4 max-w-fit whitespace-nowrap text-[20px]">
        Backed by
      </p>
      {/* line */}
      <span className="h-[2px] w-full bg-gradient-to-r from-[#5A2950] to-[#4D3496] " />
    </div>
  );
};

const CarouselComponent = () => {
  const { theme } = useTheme();
  return (
    <div className="ignore_global_spacing relative fadedSides h-full pt-4">
      <Swiper
        loop={true}
        spaceBetween={10}
        grabCursor={true}
        a11y={false}
        freeMode={true}
        allowTouchMove={true}
        speed={11000}
        autoplay={{
          delay: 0.5,
          disableOnInteraction: false,
        }}
        breakpoints={{
          150: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          840: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 8,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay]}
        className="w-full h-[150px] z-0 pt-4"
      >
        {logoCarouselItems.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                className={`bg-[white] p-1 md:p-4 rounded-[20px] flex justify-center  ${
                  theme === "dark"
                    ? `carouselItemsDarkTheme`
                    : `carouseItemsWhiteTheme`
                }`}
              >
                <Image
                  className="sm:w-[220px] sm:h-[70px] w-[120px] h-[75px] object-contain"
                  src={image.imageUrl}
                  alt={image.alt}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

const Carousel = () => {
  return (
    <>
      {/* Carousel Wrapper */}
      <div className="flex flex-col justify-between items-center md:mt-40 mt-10 w-full">
        {/* Carousel Header */}
        <CarouselHeader />
        {/* Carousel */}
        <CarouselComponent />
      </div>
    </>
  );
};

export default Carousel;
