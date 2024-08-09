"use client";
import React, { useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./cards.css";
import arrowLeftColored from "@/public/assets/icons/arrowBtnLeftColored.svg";
import arrowRightColored from "@/public/assets/icons/arrowBtnRightColored.svg";
import FounderCard from "../cards/founderCard";
import KamilImage from "@/public/assets/img/images/avatars/Kamil.jpeg";
import PiotrImage from "@/public/assets/img/images/avatars/Piotr.png";
import gavinImage from "@/public/assets/img/images/avatars/Gavin.png";
import Image from "next/image";

const FounderCardCarousel = () => {
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
            el: ".custom-swiper-pagination-founder", // Use founder-specific class
            clickable: true,
          }}
          className="founder-swiper-container" // Use founder-specific class
        >
          <SwiperSlide>
            <FounderCard
              imageSrc={PiotrImage}
              name="Piotr Duda"
              title="Pack Lead"
              description="With a combination of programming/business experience, this wolf leads the pack. Previously he led teams at Faurecia and worked at InsurTech. A FinTech company providing insurance for Lloyd’s applications."
              socialMediaLink="https://www.linkedin.com/in/piotr-duda-62b66b63/?originalSubdomain=pl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <FounderCard
              imageSrc={KamilImage}
              name="Kamil Muca"
              title="Tech Wolf"
              description="Wolf Muca wrote his first line of code at the age of 7. Since then he developed his way up, to eventually leading a 20-headed IT team at HSBC. As a true coding wizard he now creates the security and efficiency in DeltaPrime’s architecture."
              socialMediaLink="https://www.linkedin.com/in/mucakamil/?originalSubdomain=pl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <FounderCard
              imageSrc={gavinImage}
              name="Gavin Hasselbaink"
              title="Biz Wolf"
              description="This one is the business wolf. With a communication/trading background, he’ll help you exactly understand how to best use DeltaPrime. Additionally he’ll see to it you have access to the best strategies that DeFi offers."
              socialMediaLink="https://www.linkedin.com/in/gavinhasselbaink/?originalSubdomain=nl"
            />
          </SwiperSlide>
        </Swiper>

        {/* Custom navigation and pagination */}
        <div className="custom-pagination-container-founder flex justify-between items-center py-[30px] px-[4rem]">
          <Image
            onClick={handlePrev}
            className="swiper-button-prev custom-arrow-founder" // Use founder-specific class
            src={arrowLeftColored}
            alt={"Arrow Left"}
          />
          <div className="custom-swiper-pagination-founder swiper-pagination"></div>{" "}
          {/* Founder pagination */}
          <Image
            onClick={handleNext}
            className="swiper-button-next custom-arrow-founder" // Use founder-specific class
            src={arrowRightColored}
            alt={"Arrow Right"}
          />
        </div>
      </div>
    </>
  );
};

export default FounderCardCarousel;
