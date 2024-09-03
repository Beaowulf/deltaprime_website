import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { CTAButton } from "@/app/components/buttons/mainButton";
import UnlockPotentialContainer from "@/app/components/unlockPotentialContainer/unlockPotentialContainer";
import { AnimatedText } from "@/app/ui/animatedText";
import { useCryptoData } from "@/app/context/CryptoDataContext";

const VideoPlayer = dynamic(
  () => import("@/app/components/videoPlayer/video"),
  { ssr: false }
);

const TextWithPill = ({ totalTvl, totalBorrowedLiquidity }) => {
  return (
    <>
      {/* Left side (text with pill) */}
      <div className="flex flex-col md:mb-8 mb-0 justify-between gap-2 md:gap-20 items-center md:items-start flex-1">
        {/* Text Wrapper */}
        <div className="text-left flex flex-col gap-1 ">
          <p className="brightText text-wrap max-w-xl text-3xl md:text-[44px] mb-4 dark:text-white text-[#6B70ED]">
            Be The Whale.
          </p>
          <p className="aboutTypographyparagraphWhite text-wrap  max-w-[25rem] dark:text-white text-[#565AC2]">
            Your trustless, transparent, prime brokerage on Avalanche and
            Arbitrum.
            <br />
            Deposit and securely earn high APYs. Borrow up to 5x your
            collateral, explore intuitive investment strategies and unlock your
            capital's full potential.
          </p>
        </div>
        {/* Price pill Wrapper */}
        <div className="shadow-deltaRed dark:shadow-deltaWhite rounded-[100px] bg-white flex justify-between w-full md:w-fit md:py-4 sm:px-7 py-2 px-5 gap-5 items-center mt-8 md:mt-0 z-10">
          <div className="flex flex-col items-center text-[#6B70ED] costText w-fit h-[2.75rem]">
            <p className="blueText text-[#565AC2] pb-1 text-center sm:text-left text-nowrap">
              Protocol Deposits
            </p>
            <AnimatedText targetNumber={totalTvl} duration={2} />
          </div>
          <div className=" bg-[#CED0FF] w-[2px] h-[35px]" />
          <div className="flex flex-col items-center text-[#6B70ED] costText w-fit h-[2.75rem] pl-[0.65rem">
            <p className="blueText text-[#565AC2] pb-1 text-center sm:text-left text-nowrap">
              Liquidity Unlocked
            </p>
            <AnimatedText targetNumber={totalBorrowedLiquidity} />
          </div>
        </div>
      </div>
    </>
  );
};

const IntroSection = ({ totalTvl }) => {
  const { totalBorrowedLiquidity } = useCryptoData();

  return (
    <div className="pagePaddingLarge">
      <div className="mx-auto">
        {/* Top Intro Part (Text and video) */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20 p-4 items-center">
          {/* Left side (text with pill) */}
          <TextWithPill
            totalTvl={totalTvl}
            totalBorrowedLiquidity={totalBorrowedLiquidity}
          />
          {/* Show this button only on mobile */}
          <div className="fullWidthButtonChildren block sm:hidden">
            <Link href="?modal=true" scroll={false}>
              <CTAButton
                label="LAUNCH APP"
                hasArrowRight={true}
                className="py-5"
                typographyClass="text-[15px]"
              />
            </Link>
          </div>
          {/* Right side (video player) */}
          <div className="w-full max-w-[50rem]">
            <VideoPlayer url={"https://youtu.be/2nJLhZ33lno"} />
          </div>
        </div>
        {/* Bottom Intro Part ( full potential of your capital Launch app) */}
        <UnlockPotentialContainer />
      </div>
    </div>
  );
};

export default IntroSection;
