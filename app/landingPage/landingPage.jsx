"use client";
import React from "react";
import dynamic from "next/dynamic";
import { MainButton } from "@/app/components/buttons/mainButton";
import "./landingPage.css";

// Sections
import Carousel from "./carouselSection/carousel";
import FeaturePrimeAccount from "@/app/landingPage/featureSection/featureSection";

const VideoPlayer = dynamic(
  () => import("@/app/components/videoPlayer/video"),
  {
    ssr: false,
  }
);
const TextWithPill = () => {
  return (
    <>
      {/* Left side (text with pill) */}
      <div className="flex flex-col md:mb-8 mb-0 justify-between md:w-1/2 w-full sm:items-center md:items-center">
        {/* Text Wrapper */}
        <div className="text-left flex flex-col gap-8">
          <p className="brightText dark:text-white text-[#252948] text-wrap max-w-lg text-3xl md:text-[44px]">
            Be The Whale.
          </p>
          <p className="whiteMainText text-wrap max-w-[25rem] text-base md:text-lg dark:text-white text-[#252948]">
            Your trustless & transparent prime brokerage on Avalanche and
            Arbitrum.
            <br />
            <br />
            Deposit, lend, and securely earn high APYs. Borrow up to 5x your
            collateral. Action a wide variety of investment strategies.
          </p>
        </div>
        {/* Price pill Wrapper */}
        <div className="rounded-[100px] bg-white flex justify-between w-fit md:py-4 sm:px-6 py-1 px-4 gap-5 items-center mt-8 md:mt-0 z-10">
          <div className="flex flex-col items-center sm:items-start">
            <p className="blueText text-center sm:text-left">
              Protocol Deposits
            </p>
            {/* Maybe a small animation of costs also API call? todo: API CALL? */}
            <p className="costText text-center sm:text-left">$42,302,325.53</p>
          </div>
          <div className="bg-[#2b203f] w-[2px] h-[35px]" />
          <div className="flex flex-col items-center sm:items-start">
            <p className="blueText text-center sm:text-left">
              Liquidity Unlocked
            </p>
            {/* Maybe a small animation of costs also API call? todo: API CALL? */}
            <p className="costText text-center sm:text-left">$20,950,943.39</p>
          </div>
        </div>
      </div>
    </>
  );
};

// unlock your potential
const IntroTextBtnContainer = () => {
  return (
    // Adding a parent div thats behind the main content to have the linear gradient border effect.
    <div className="hidden sm:block parentColoredBorderWrapper mt-20">
      <div className="introTextBtnContainer flex items-center justify-center">
        {/* Button Container */}
        <div className="flex items-center justify-between px-8 py-4 w-full">
          <p className="largeText">Unlock the full potential of your capital</p>
          <MainButton label="LAUNCH APP" hasArrowRight={true} />
        </div>
      </div>
    </div>
  );
};

const LandingPage = () => {
  return (
    <div className="mx-auto">
      {/* Top Intro Part (Text and video) */}
      <div className="flex flex-col md:flex-row justify-between gap-8 p-4 ">
        {/* Left side (text with pill) */}
        <TextWithPill />
        {/* Show this button only on mobile */}
        <div className="fullWidthButtonChildren block sm:hidden">
          <MainButton label="LAUNCH APP" hasArrowRight={true} />
        </div>
        {/* Right side (video player) */}
        <VideoPlayer />
      </div>
      {/* Bottom Intro Part (Unlock the full potential of your capital Launch app) */}
      <IntroTextBtnContainer />
      {/* Carousel Section */}
      <Carousel />
      {/* Feature Section */}
      <FeaturePrimeAccount />
    </div>
  );
};

export default LandingPage;
