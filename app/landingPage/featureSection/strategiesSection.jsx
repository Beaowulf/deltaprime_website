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
      } z-10 mt-52`}
    >
      <div className="flex items-end justify-between rounded-[20px] pl-20 py-6 pr-6  z-20 dark:bg-[#252948] bg-[#E8E8F2] overflow-hidden">
        {/* Left */}
        <div className="flex flex-col items-start dark:text-white text-[#252948] mb-14 md:w-1/3 w-full">
          <h4 className="uppercase mb-3 featureTitle">STRATEGIES</h4>
          <h1 className="mb-8 featureSubtitle">
            Strategies For Any Risk Appetite
          </h1>
          <p className="featureParagraph max-w-xl">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
          <div className="mt-10">
            <MainButton hasArrowRight={true} label={"EXPLORE STRATEGIES"} />
          </div>
        </div>
        {/* Right */}
        <div>
          <Image src={strategies_burd} alt="burd_mascot_with_bubbles" />
        </div>
      </div>
    </div>
  );
};

export default Strategies;
