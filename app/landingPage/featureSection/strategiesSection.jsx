import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { MainButton } from "@/app/components/buttons/mainButton";
// Images
import strategies_burd from "@/public/assets/img/strategiesImg.png";

const Strategies = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`rounded-[20px] w-full h-full ${
        theme === "dark"
          ? "featureBorderWrapDarkTheme"
          : "featureBorderWrapLightTheme"
      } z-10 mt-24  md:mt-52`}
    >
      <div className="flex items-center md:flex-row flex-col justify-between rounded-[20px] md:pl-20 pl-10 py-6 pr-6 z-20 dark:bg-[#252948] bg-[#E8E8F2] overflow-hidden ">
        {/* Left */}
        <div className="flex flex-col items-start dark:text-white text-[#252948] mb-14 max-w-96">
          <h4 className="uppercase mb-2 featureTitle md:text-[15px] text-[12 px] text-center text-gray-400 leading-6">
            STRATEGIES
          </h4>
          <h1 className="mb-6 featureSubtitle text-[24px]">
            Strategies For Any Risk Appetite
          </h1>
          <p className="featureParagraph max-w-xl text-[13px] md:leading-6 sm:text-[17px] leading-4">
            Join Burd and discover strategies to boost your earnings. From
            simple to advanced, find the perfect fit for your style.
          </p>
          <div className="mt-10 md:w-fit w-full">
            <MainButton hasArrowRight={true} label={"EXPLORE STRATEGIES"} />
          </div>
        </div>
        {/* Right */}
        <div className="mr-8 md:mr-0">
          <Image src={strategies_burd} alt="burd_mascot_with_bubbles" />
        </div>
      </div>
    </div>
  );
};

export default Strategies;
