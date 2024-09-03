import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTheme } from "next-themes";
import "swiper/css";
import "./logoCarousel.css";
import "swiper/css/autoplay";
import { logoCarouselItems } from "@/app/components/carouselImages/getCarouselData";
import { resolve } from "styled-jsx/css";

const CarouselHeader = () => {
  return (
    <div className="flex flex-row w-full md:mb-20 mb-8 items-center">
      <span className="h-[2px] w-full bg-gradient-to-r dark:from-[#5A2950] dark:to-[#4D3496] from-[#DFE0FF] from-30% via-[#FFE1C2] via-50% to-[#FFD3E0] to-70%" />
      <p className="slightBrightText md:mx-10 mx-4 max-w-fit whitespace-nowrap text-[20px] dark:text-white text-[#6B70ED] font-bold">
        Backed by
      </p>
      <span className="h-[2px] w-full bg-gradient-to-r dark:from-[#5A2950] dark:to-[#4D3496] from-[#DFE0FF] from-30% via-[#FFE1C2] via-50% to-[#FFD3E0] to-70%" />
    </div>
  );
};

const CarouselComponent = () => {
  const { theme, resolvedTheme } = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="ignore_global_spacing relative fadedSides h-full pt-4">
      <Swiper
        loop={true}
        spaceBetween={10}
        a11y={false}
        speed={3000}
        autoplay={{
          delay: 0.75,
          disableOnInteraction: false,
        }}
        breakpoints={{
          150: { slidesPerView: 2, spaceBetween: 10 },
          640: { slidesPerView: 3, spaceBetween: 10 },
          840: { slidesPerView: 5, spaceBetween: 20 },
          1125: { slidesPerView: 6, spaceBetween: 20 },
        }}
        modules={[Autoplay]}
        className="w-full h-[150px] z-0 pt-4"
      >
        {logoCarouselItems.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Link target="_blank" href={`${item.link}`}>
                <div
                  className={`${resolvedTheme === "dark" && "logoBoxWrapper"}`}
                >
                  <div
                    className={`dark:bg-transparent hover:bg-white bg-transparent p-1 md:p-4 rounded-[20px] flex justify-center transition ease-in  ${
                      theme === "dark" ? `` : `carouseItemsWhiteTheme`
                    }`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {resolvedTheme === "dark" ? (
                      <Image
                        className="sm:w-[220px] sm:h-[70px] w-[120px] h-[75px] object-contain"
                        src={hoveredIndex === index ? item.color : item.white}
                        alt={item.alt}
                      />
                    ) : (
                      <Image
                        className="sm:w-[220px] sm:h-[70px] w-[120px] h-[75px] object-contain"
                        src={hoveredIndex === index ? item.bw : item.color}
                        alt={item.alt}
                      />
                    )}
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

const Carousel = () => {
  return (
    <div className="flex flex-col justify-between items-center md:mt-40 mt-10">
      <CarouselHeader />
      <CarouselComponent />
    </div>
  );
};

export default Carousel;
