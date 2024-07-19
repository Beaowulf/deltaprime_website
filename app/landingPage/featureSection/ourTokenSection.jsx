import React from "react";
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

function OurTokenSection() {
  return (
    <div className="mb-10">
      <FeatureHeader
        title="Our Features"
        subTitle="Our Tokens"
        paragraph="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu  fugiat nulla pariatur."
      />
      <div className="flex flex-wrap justify-center flex-col md:flex-row gap-4">
        {/* Left Card */}
        <div className="rounded-[20px] flex-1 p-4 featureBorderWrapDarkTheme h-full">
          <div className="rounded-[20px] px-8 md:px-10 lg:px-24 z-20 pb-12 bg-[#252948]">
            <div className="">
              <h4 className="featureTitle pt-24">OUR TOKENS</h4>
              <h1 className="featureSubtitle">$sPRIME</h1>
              <p className="mt-3 featureParagraph text-[#FFF5F0] mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <MainButton
                typographyClass="mx-auto px-[20px] text-[#1B153C]"
                hasArrowRight={true}
                label={"LEARN MORE"}
              />
            </div>
          </div>
        </div>

        {/* Right Card */}
        <div className="rounded-[20px] flex-1 p-4 featureBorderWrapDarkTheme h-full">
          <div className="rounded-[20px] px-8 md:px-10 lg:px-24 z-20 pb-12 bg-[#252948]">
            <div className="">
              <h4 className="featureTitle pt-24">OUR TOKENS</h4>
              <h1 className="featureSubtitle">$sPRIME</h1>
              <p className="mt-3 featureParagraph text-[#FFF5F0] mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <MainButton
                typographyClass="mx-auto px-[20px] text-[#1B153C]"
                hasArrowRight={true}
                label={"LEARN MORE"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTokenSection;
