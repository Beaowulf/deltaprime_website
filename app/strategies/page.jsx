import React from "react";
import { MainButton } from "@/app/components/buttons/mainButton";
import Image from "next/image";
import strategiesIntroImg from "@/public/assets/img/strategiesIntroImg.png";
import FlipCard from "@/app/components/flipCard/flipCard";

// need 2 layouts for the cards
// Dektop will have the 6 cards displayed
// mobile will have the carousel that the user can flip
// Both have the flip card so that will be its own component

const StrategiesPage = () => {
  return (
    <div className="px-4 sm:px-[5%] md:px-[8%] lg:px-[10%] 2xl:px-[15%]">
      {/* intro */}
      <div className="flex md:flex-row flex-col justify-center items-center w-full gap-20">
        {/* Text Wrapper */}
        <div className="flex flex-col md:mb-8 mb-0 justify-between items-center md:items-start h-fit">
          <div className="text-left flex flex-col gap-8 dark:text-white text-[#6B70ED]">
            <p className="brightText text-wrap max-w-xl mb-4 text-3xl md:text-[44px]">
              Strategies
            </p>
            <p className="whiteMainText text-wrap max-w-[35rem] text-[15px] md:text-[17px] md:leading-[25.5px] leading-5 mb-10 ">
              DeltaPrime allows for a range of new and unique strategies. Every
              strategy is accompanied by a practical example, getting deeper
              into the risk and rewards of the specific strategy.
            </p>
          </div>
          <MainButton
            className="w-full md:w-fit"
            label="LAUNCH APP"
            hasArrowRight={true}
          />
        </div>
        {/* Image burd */}
        <div className="w-fit">
          <Image src={strategiesIntroImg} alt="deltaprime_mascot_img" />
        </div>
      </div>

      <div>
        <FlipCard />
      </div>
      {/* cards */}
      <div>
        <div className="hidden md:block mx-auto p-4">
          {/* This component is hidden until the desired breakpoint */}
          <div className="mb-4 p-4 bg-gray-200">
            Component to show on lg and higher screens
          </div>
          <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            <div className="card p-4 bg-blue-200">Card 1</div>
            <div className="card p-4 bg-green-200">Card 2</div>
            <div className="card p-4 bg-yellow-200">Card 3</div>
            <div className="card p-4 bg-red-200">Card 4</div>
            <div className="card p-4 bg-purple-200">Card 5</div>
            <div className="card p-4 bg-pink-200">Card 6</div>
          </div>
        </div>
        export default ResponsiveGrid;
      </div>
    </div>
  );
};

export default StrategiesPage;
