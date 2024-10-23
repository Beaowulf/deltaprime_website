import React from "react";
import Link from "next/link";
import { DeltaPurpleButton } from "@/app/components/buttons/mainButton";
import { AnimatedText } from "@/app/ui/animatedText";
import { useCryptoData } from "@/app/context/CryptoDataContext";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"; // Import rich text renderer
import VideoThumbnail from "@/app/components/videoPlayer/video";

// const VideoPlayer = dynamic(
//   () => import("@/app/components/videoPlayer/video"),
//   { ssr: false }
// );

const TextWithPill = ({
  totalTvl,
  totalBorrowedLiquidity,
  SectionDetails,
  options,
}) => {
  return (
    <>
      {/* Left side (text with pill) */}
      <div className="flex flex-col justify-between gap-2 md:gap-10 items-center md:items-start flex-1">
        {/* Text Wrapper */}
        <div className="text-left flex flex-col gap-1 ">
          <h3 className="brightText text-wrap max-w-xl text-3xl md:text-[44px] mb-4 dark:text-white text-[#6B70ED]">
            {SectionDetails?.heading}
          </h3>
          <div className="aboutTypographyparagraphWhite text-wrap  max-w-[25rem] dark:text-white text-[#565AC2]">
            {SectionDetails?.mainText &&
              documentToReactComponents(SectionDetails.mainText.json, options)}
          </div>
        </div>
        {/* Price pill Wrapper */}
        <div className="shadow-deltaRed dark:shadow-deltaWhite rounded-[100px] bg-white flex justify-between w-full md:w-fit md:py-4 sm:px-7 py-2 px-5 gap-5 items-center mt-8 md:mt-0 z-10">
          <div className="flex flex-col items-center text-[#6B70ED] costText w-fit h-[2.75rem]">
            <p
              className="blueText text-[#565AC2] pb-1 text-center sm:text-left !text-nowrap"
              style={{ textWrap: "nowrap" }}
            >
              Protocol Deposits
            </p>
            <AnimatedText targetNumber={totalTvl} duration={2} />
          </div>
          <div className=" bg-[#CED0FF] w-[2px] h-[35px]" />
          <div className="flex flex-col items-center text-[#6B70ED] costText w-fit h-[2.75rem] pl-[0.65rem">
            <p
              className="blueText text-[#565AC2] pb-1 text-center sm:text-left !text-nowrap"
              style={{ textWrap: "nowrap" }}
            >
              Liquidity Unlocked
            </p>
            <AnimatedText targetNumber={totalBorrowedLiquidity} />
          </div>
        </div>
      </div>
    </>
  );
};

const IntroSection = ({ totalTvl, SectionDetails, options }) => {
  const { totalBorrowedLiquidity } = useCryptoData();
  // console.log(SectionDetails);

  return (
    <div className="pagePaddingLarge">
      <div className="mx-auto">
        {/* Top Intro Part (Text and video) */}
        <div className="my-mobile-spacing md:my-desktop-spacing flex flex-col lg:flex-row justify-between gap-10 lg:gap-20 px-4 items-center">
          {/* Left side (text with pill) */}
          <TextWithPill
            totalTvl={totalTvl}
            totalBorrowedLiquidity={totalBorrowedLiquidity}
            SectionDetails={SectionDetails}
            options={options}
          />
          {/* Show this button only on mobile */}
          <div className="fullWidthButtonChildren block sm:hidden">
            <Link href="?modal=true" scroll={false}>
              <DeltaPurpleButton
                label="LAUNCH APP"
                hasArrowRight={true}
                typographyClass="text-[15px]"
              />
            </Link>
          </div>
          {/* Right side (video player) */}
          <div className="w-full max-w-[50rem]">
        
            <VideoThumbnail url={`${SectionDetails?.embedYouTubeLink}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
