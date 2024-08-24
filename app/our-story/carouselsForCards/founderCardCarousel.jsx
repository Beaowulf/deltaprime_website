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
              title="CEO"
              description="Piotr Duda is the Chief Executive Officer (CEO) of DeltaPrime, where he seamlessly bridges deep business and technical expertise to drive the platform’s success. Under his leadership, DeltaPrime has emerged as a major player in the DeFi space, trusted by thousands of users and managing millions in assets. Piotr’s focus on operational efficiency and cross-team collaboration ensures the protocol’s continuous growth and innovation."
              socialMediaLink="https://www.linkedin.com/in/piotr-duda-62b66b63/?originalSubdomain=pl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <FounderCard
              imageSrc={KamilImage}
              name="Kamil Muca"
              title="CTO"
              description="Kamil Muca is the Chief Technology Officer (CTO) of DeltaPrime, a seasoned developer who began coding at the age of 7. Before co-founding DeltaPrime, he honed his leadership and technical skills as the head of a 20-member IT team at HSBC. Kamil is the architect behind the platform’s innovative Diamond Beacon Proxy pattern, a key advancement that enables DeltaPrime to scale rapidly and efficiently while minimizing costs."
              socialMediaLink="https://www.linkedin.com/in/mucakamil/?originalSubdomain=pl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <FounderCard
              imageSrc={gavinImage}
              name="Gavin Hasselbaink"
              title="CBDO"
              description="Gavin Hasselbaink is the Chief Business Development Officer (CBDO) of DeltaPrime, where he drives innovation and strategic partnerships. His leadership has been pivotal in expanding DeltaPrime’s reach, facilitating over $1.5 billion in transactions, and securing $70 million in total value locked. Gavin’s focus on building alliances and integrating with DeFi protocols has been instrumental in the platform’s impressive growth."
              socialMediaLink="https://www.linkedin.com/in/gavinhasselbaink/?originalSubdomain=nl"
            />
          </SwiperSlide>
        </Swiper>

        {/* Custom navigation and pagination */}
        <div className="custom-pagination-container-founder flex justify-between items-center py-[30px] px-[4rem]">
          <Image
            onClick={handlePrev}
            className="swiper-button-prev custom-arrow-founder z-50" // Use founder-specific class
            src={arrowLeftColored}
            alt={"Arrow Left"}
          />
          <div className="custom-swiper-pagination-founder swiper-pagination"></div>{" "}
          {/* Founder pagination */}
          <Image
            onClick={handleNext}
            className="swiper-button-next custom-arrow-founder z-50" // Use founder-specific class
            src={arrowRightColored}
            alt={"Arrow Right"}
          />
        </div>
      </div>
    </>
  );
};

export default FounderCardCarousel;
