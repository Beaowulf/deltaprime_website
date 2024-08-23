import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/autoplay";
import { integrationData } from "@/app/components/carouselImages/getCarouselData";

const DarkBoxWrapper = ({ srcImg, scrURL }) => {
  const { resolvedTheme } = useTheme();
  return (
    <div
      className={`rounded-[20px] p-4 cursor-pointer shadow-md ${
        resolvedTheme === "dark"
          ? "parentColoredBorderWrapperDarkTheme"
          : "parentColoredBorderWrapperLightTheme"
      }`}
    >
      <div className="dark:bg-[#1D2943] dark:hover:bg-[#1D2943] bg-[#6B70ED] hover:bg-[#A28AFF] rounded-[20px] transition ease-linear">
        <div className="rounded-[20px] flex justify-center items-center md:px-4 md:py-2">
          <Link href={`${scrURL}`} target="_blank" className="z-50">
            <Image
              className="md:w-[200px] md:h-[65px] w-[175px] h-[85px] sm:p-0 p-4 object-contain filter grayscale hover:filter-none transition duration-300 ease-in-out"
              src={srcImg}
              alt="aboutimg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

const CarouselComponent = () => {
  return (
    <div className="pt-4 relative">
      <Swiper
        loop={true}
        grabCursor={false}
        speed={3000}
        slidesPerView={5}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        breakpoints={{
          150: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          840: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 25,
          },
        }}
        modules={[Autoplay]}
        className="z-0 pt-4 pb-1"
      >
        {integrationData.map((data, index) => {
          return (
            <SwiperSlide className="w-fit h-fit" key={index}>
              <DarkBoxWrapper
                srcImg={data.imageUrl}
                scrURL={data.link}
                alt={data.alt}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-4 md:w-28 h-full bg-gradient-to-r dark:from-[#1D2943] from-[#f6f6f6] to-transparent pointer-events-none z-10"></div>
      <div className="absolute top-0 right-0 w-4 md:w-28 h-full bg-gradient-to-l dark:from-[#1D2943] from-[#f6f6f6] to-transparent pointer-events-none z-10"></div>
    </div>
  );
};

const IntegrationCarousel = () => {
  return (
    <>
      {/* Carousel Wrapper */}
      <div>
        {/* Carousel */}
        <CarouselComponent />
      </div>
    </>
  );
};

export default IntegrationCarousel;
