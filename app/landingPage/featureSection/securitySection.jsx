import React from "react";
import Image from "next/image";
// Box Logos
import svgg from "@/public/assets/icons/svgg.svg";
import Group from "@/public/assets/icons/Group.svg";
import Group5853 from "@/public/assets/icons/Group5853.svg";
import Group5854 from "@/public/assets/icons/Group5854.svg";
import Logo_atomica from "@/public/assets/icons/Logo_atomica.svg";
import { MainButton } from "@/app/components/buttons/mainButton";

const FeatureHeader = ({ title, subTitle, paragraph }) => {
  return (
    <div className="flex flex-col items-center dark:text-white text-[#252948] mb-14 text-center">
      <h4 className="uppercase mb-3 featureTitle">{title}</h4>
      <h1 className="mb-8 featureSubtitle">{subTitle}</h1>
      <p className="featureParagraph max-w-xl">{paragraph}</p>
    </div>
  );
};

const AboutSection = ({ aboutimg }) => {
  return (
    <div className="rounded-[20px] p-4 parentColoredBorderWrapper">
      <div className="securitySection bg-[#1B153C] rounded-[20px] ">
        <div className="rounded-[20px] h-full w-full flex place-items-center">
          <Image src={aboutimg} alt="aboutimg" />
        </div>
      </div>
    </div>
  );
};

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

function SecuritySection() {
  return (
    <div className="mt-14">
      <FeatureHeader
        title="Our Features"
        subTitle="Security"
        paragraph="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu  fugiat nulla pariatur."
      />
      <div className="items-center pb-16 flex flex-wrap justify-center gap-5">
        <AboutSection aboutimg={svgg} />
        <AboutSection aboutimg={Group} />
        <AboutSection aboutimg={Group5853} />
        <AboutSection aboutimg={Group5854} />
        <AboutSection aboutimg={Logo_atomica} />
      </div>
      <div className="lg:block hidden">
        <IntroTextBtnContainer />
      </div>
    </div>
  );
}

export default SecuritySection;
