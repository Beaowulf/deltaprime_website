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
import AdvisorCard from "../cards/advisorCard";
import JakubImage from "@/public/assets/img/images/avatars/Jakub.png";
import WojciechImage from "@/public/assets/img/images/avatars/Wojciech.png";
import avaxImage from "@/public/assets/img/images/avatars/hn_avax.png";
import Image from "next/image";

const AdvisorCardCarousel = () => {
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
            el: ".custom-swiper-pagination-advisor", // Use advisor-specific class
            clickable: true,
          }}
          className="advisor-swiper-container" // Use advisor-specific class
        >
          <SwiperSlide>
            <AdvisorCard
              imageSrc={avaxImage}
              name="hn_avax"
              position="Cofounder"
              subPosition="Benqi Finance"
              additionalInfo="Head of Strategy Benqi Finance"
              socialMediaLink="https://x.com/hn_avax"
              usesTwitter={true}
            />
          </SwiperSlide>
          <SwiperSlide>
            <AdvisorCard
              imageSrc={JakubImage}
              name="Jakub Wojciechowski"
              position="Founder"
              subPosition="Redstone Finance"
              additionalInfo="Former auditor OpenZeppelin"
              socialMediaLink="https://www.linkedin.com/in/jakub-wojciechowski-5901b68/?originalSubdomain=pl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <AdvisorCard
              imageSrc={WojciechImage}
              name="Wojciech Lugowski"
              position="Managing Partner"
              subPosition="Lawarton"
              additionalInfo="Co-founder & Head of legal at CobinAngels"
              socialMediaLink="https://www.linkedin.com/in/wojciech-lugowski/?originalSubdomain=pl"
            />
          </SwiperSlide>
        </Swiper>

        {/* Custom navigation and pagination */}
        <div className="custom-pagination-container-advisor flex justify-between items-center py-[30px] px-[4rem]">
          <Image
            onClick={handlePrev}
            className="swiper-button-prev custom-arrow-advisor" // Use advisor-specific class
            src={arrowLeftColored}
            alt={"Arrow Left"}
          />
          <div className="custom-swiper-pagination-advisor swiper-pagination"></div>{" "}
          {/* Advisor pagination */}
          <Image
            onClick={handleNext}
            className="swiper-button-next custom-arrow-advisor" // Use advisor-specific class
            src={arrowRightColored}
            alt={"Arrow Right"}
          />
        </div>
      </div>
    </>
  );
};

export default AdvisorCardCarousel;
