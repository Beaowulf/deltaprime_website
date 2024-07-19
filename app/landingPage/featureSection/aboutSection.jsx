"use client";
import React from "react";
import Image from "next/image";
import aboutSectionIMG from "@/public/assets/img/aboutSectionIMG.png";
import { AboutButtonDarkBG } from "@/app/components/buttons/mainButton";

function AboutSection() {
  return (
    <div className="aboutSectionBG flex flex-wrap items-center justify-center bg-cover bg-no-repeat px-4 pb-10 sm:px-6 md:px-[8%] lg:px-[10%] 2xl:px-[15%]">
      {/* Left Side */}
      <div className="w-full md:w-1/2">
        <h4 className="pt-24  aboutTypographytitle">OUR STORY</h4>
        <h1 className="aboutTypographysubtitle">Lava Doesn’t Melt Diamonds</h1>
        <p className="pt-8 pb-14 aboutTypographyparagraph">
          Our story begins on the foothills of Mount Etna, Europe’s largest
          volcano. It was here that the idea of DeltaPrime was born. A brand on
          a mission to reshape the future of DeFi, forging it in the fires of
          innovation and resilience.
        </p>
        <div className="sm:w-fit w-full featureBorderWrapLightTheme rounded-[20px]">
          <AboutButtonDarkBG
            customClass="w-full"
            hasArrowRight={true}
            label={"LEARN MORE"}
          />
        </div>
      </div>
      {/* Right Side */}
      <div className="px-10 pt-10 w-full md:w-1/2">
        <div className="w-fit">
          <Image className="" src={aboutSectionIMG} alt="about_section_img" />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
