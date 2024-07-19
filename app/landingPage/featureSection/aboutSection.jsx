import { AboutButtonDarkBG } from "@/app/components/buttons/mainButton";
import React from "react";
import aboutSectionIMG from "@/public/assets/img/aboutSectionIMG.png";
import Image from "next/image";

function AboutSection() {
  return (
    <div className="aboutSectionBG flex flex-wrap items-center justify-center bg-cover bg-no-repeat px-4 pb-10 sm:px-6 md:px-[8%] lg:px-[10%] 2xl:px-[15%]">
      {/* Left Side */}
      <div className="w-full md:w-1/2">
        <h4 className="pt-24  aboutTypographytitle">OUR STORY</h4>
        <h1 className="aboutTypographysubtitle">About Us</h1>
        <p className="pt-8 pb-14 aboutTypographyparagraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
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
        <Image src={aboutSectionIMG} alt="about_section_img" />
      </div>
    </div>
  );
}

export default AboutSection;
