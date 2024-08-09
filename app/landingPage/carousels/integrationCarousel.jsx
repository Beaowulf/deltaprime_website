import React from "react";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTheme } from "next-themes";
import "swiper/css";
import "swiper/css/autoplay";
import { integrationData } from "@/app/components/carouselImages/getCarouselData";

const DarkBoxWrapper = ({ srcImg }) => {
  return (
    <div className="rounded-[20px] p-4 parentColoredBorderWrapper ">
      <div className="bg-[#1D2943] rounded-[20px] ">
        <div className="rounded-[20px] flex justify-center items-center md:px-4 md:py-2 ">
          <Image
            className="md:w-[195px] md:h-[75px] w-[175px] h-[60px] sm:p-0 p-4"
            src={srcImg}
            alt="aboutimg"
          />
        </div>
      </div>
    </div>
  );
};

const CarouselComponent = () => {
  const { theme } = useTheme();

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
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          840: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay]}
        className="z-0 pt-4"
      >
        {integrationData.map((data, index) => {
          return (
            <SwiperSlide className="w-fit h-fit" key={index}>
              <DarkBoxWrapper srcImg={data.imageUrl} alt={data.alt} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-28 h-full bg-gradient-to-r from-[#1D2943] to-transparent pointer-events-none z-10"></div>
      <div className="absolute top-0 right-0 w-28 h-full bg-gradient-to-l from-[#1D2943] to-transparent pointer-events-none z-10"></div>
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
