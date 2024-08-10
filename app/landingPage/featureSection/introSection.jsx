// pages/playground.js (or wherever your component is located)

import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { CTAButton } from "@/app/components/buttons/mainButton";
import UnlockPotentialContainer from "@/app/components/unlockPotentialContainer/unlockPotentialContainer";
import { AnimatedText } from "@/app/ui/animatedText";

const VideoPlayer = dynamic(
  () => import("@/app/components/videoPlayer/video"),
  { ssr: false }
);

const TextWithPill = ({ totalTvl }) => {
  return (
    <>
      {/* Left side (text with pill) */}
      <div className="flex flex-col md:mb-8 mb-0 justify-between gap-20 items-center md:items-start flex-1">
        {/* Text Wrapper */}
        <div className="text-left flex flex-col gap-8 dark:text-white text-[#252948]">
          <p className="brightText text-wrap max-w-xl text-3xl md:text-[44px]">
            Be The Whale.
          </p>
          <p className="whiteMainText text-wrap max-w-[25rem] text-[13px] sm:text-lg sm:leading-6 leading-5 ">
            Your trustless & transparent prime brokerage on Avalanche and
            Arbitrum.
            <br />
            <br />
            Deposit, lend, and securely earn high APYs. Borrow up to 5x your
            collateral. Action a wide variety of investment strategies.
          </p>
        </div>
        {/* Price pill Wrapper */}
        <div className="shadow-deltaRed dark:shadow-none rounded-[100px] bg-white flex justify-between w-full md:w-fit md:py-4 sm:px-6 py-1 px-4 gap-5 items-center mt-8 md:mt-0 z-10">
          <div className="flex flex-col items-center sm:items-start">
            <p className="blueText text-center sm:text-left text-nowrap">
              Protocol Deposits
            </p>
            <AnimatedText targetNumber={totalTvl} duration={2} />
          </div>
          <div className="dark:bg-[#2b203f] bg-[#CED0FF] w-[2px] h-[35px]" />
          <div className="flex flex-col items-center sm:items-start">
            <p className="blueText text-center sm:text-left text-nowrap">
              Liquidity Unlocked
            </p>
            <AnimatedText targetNumber={20950943.39} />
          </div>
        </div>
      </div>
    </>
  );
};

const IntroSection = ({ totalTvl }) => {
  return (
    <div className="pagePaddingLarge">
      <div className="mx-auto">
        {/* Top Intro Part (Text and video) */}
        <div className="flex flex-col lg:flex-row justify-between gap-20 p-4 items-center">
          {/* Left side (text with pill) */}
          <TextWithPill totalTvl={totalTvl} />
          {/* Show this button only on mobile */}
          <div className="fullWidthButtonChildren block sm:hidden">
            <Link href="?modal=true">
              <CTAButton
                label="LAUNCH APP"
                hasArrowRight={true}
                className="py-5"
                typographyClass="text-[15px]"
              />
            </Link>
          </div>
          {/* Right side (video player) */}
          <div className="">
            <VideoPlayer />
          </div>
        </div>
        {/* Bottom Intro Part ( full potential of your capital Launch app) */}
        <UnlockPotentialContainer />
      </div>
    </div>
  );
};

export default IntroSection;
