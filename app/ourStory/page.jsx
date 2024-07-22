import React from "react";
import Image from "next/image";
import { MainButton } from "@/app/components/buttons/mainButton";
import ourStoryIntroImg from "@/public/assets/img/introOurStoryImage.png";

const OurStory = () => {
  return (
    <div className="sm:px-[5%] md:px-[8%] lg:px-[10%] 2xl:px-[15%] px-4">
      {/* intro */}
      <div className="flex md:flex-row flex-col justify-center items-center w-full gap-20 my-40">
        {/* Text Wrapper */}
        <div className="flex flex-col md:mb-8 mb-0 justify-between items-center md:items-start h-fit">
          <div className="text-left flex flex-col gap-8 dark:text-white text-[#6B70ED]">
            <p className="brightText text-wrap max-w-xl mb-4 text-3xl md:text-[44px]">
              Our Story
            </p>
            <p className="whiteMainText text-wrap max-w-[35rem] text-[15px] md:text-[17px] md:leading-[25.5px] leading-5 mb-10 ">
              After 18 months of development, DeltaPrime launchedon January 10,
              2022 on Avalanche. On September 20, 2024, DeltaPrime launched on
              Arbitrum.
            </p>
            <div className="fullWidthButtonChildren h-[60px] md:h-full hidden md:block my-10 w-full text-left">
              <MainButton
                className="w-[100%] md:w-fit"
                label="LAUNCH APP"
                hasArrowRight={true}
              />
            </div>
          </div>
        </div>
        {/* Image burd */}
        <div className="w-fit mb-10">
          <Image
            className="h-[490px] w-[430px]"
            src={ourStoryIntroImg}
            alt="deltaprime_mascot_img"
          />
        </div>
      </div>

      {/* other text */}
      <div className="flex md:flex-row flex-col justify-center items-center w-full md:gap-20 gap-5 my-10 md:my-40">
        {/* Text Wrapper */}
        <div className="flex flex-col md:mb-8 mb-0 justify-between items-center md:items-start h-fit">
          <div className="text-left flex flex-col gap-8 dark:text-white text-[#6B70ED]">
            <div className="flex flex-col items-center dark:text-white text-[#252948] mt-20 mb-10">
              <h4 className="uppercase mb-3 md:text-[15px] w-full font-bold text-[12px] text-left dark:text-gray-400 text-[#252948]">
                Strategies
              </h4>
              <h1 className="mb-8 featureSubtitle md:text-[34px] text-[24px] text text-left">
                Do you want to learn more about strategies?
              </h1>
              <p className="featureParagraph font-medium text-[13px] leading-5 md:text-[17px] md:leading-6 height max-w-xl text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="fullWidthButtonChildren h-[60px] md:h-full hidden md:block my-10 w-full text-left">
            <MainButton className="" label="LEARN MORE" hasArrowRight={true} />
          </div>
        </div>
        {/* Image burd */}
        <div className="w-fit">
          <Image src={rectangleImg} alt="cyberpunk_box_images" />
        </div>
      </div>
    </div>
  );
};

export default OurStory;
