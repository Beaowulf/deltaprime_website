"use client";
import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { BlogCardButton } from "@/app/components/buttons/mainButton";
import Header from "@/app/components/header/header";
import primePurpleLogo from "@/public/assets/icons/purpleTokenPrime.svg";
import whiteTokenPrime from "@/public/assets/icons/whiteTokenPrime.svg";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function OurTokenSection({seventhSection, eighthSection, ninthSection, options}) {
  const { theme } = useTheme;

  return (
    <div className="my-mobile-spacing md:my-desktop-spacing ">
      {seventhSection && (
        <Header
          hasSeperator={true}
          subTitle={seventhSection.heading}
          paragraph={documentToReactComponents(seventhSection.mainText.json, options)}
        />
      )}
      <div className="flex flex-wrap justify-center flex-col md:flex-row gap-4">
        {/* Left Card */}
        <div
          className={`rounded-[25px] flex-1 p-4 w-full ${
            theme === "dark"
              ? "featureBorderWrapDarkTheme"
              : "featureBorderDarkerTheme"
          }`}
        >
          <div className="rounded-[25px] px-8 md:px-10 lg:px-18 z-20 pb-12 h-full w-full dark:bg-deltaDarkBlueBG bg-deltaWhiteLinearBG">
            <div className="flex flex-col h-full">
              <div className="flex flex-row pt-2 md:pt-24 justify-start gap-4 items-center">
                <div>
                {eighthSection?.media && (
                  <Image
                    src={eighthSection.media.url}
                    alt={eighthSection.media.title}
                    width={100}
                    height={100}
                  />
                )}
                </div>
                <div>
                  <h3 className="featureSubtitle text-[17px] sm:text-[34px] dark:text-[#FFF5F0] text-[#6B70ED]">
                    {eighthSection?.heading}
                  </h3>
                </div>
              </div>
              <div className="mt-8 aboutTypographyparagraphWhite mb-20 dark:text-[#FFF5F0] text-[#565AC2]">
                {eighthSection?.mainText &&
                  documentToReactComponents(eighthSection.mainText.json, options)}
              </div>
              <div className="mt-auto">
                <BlogCardButton
                  isLink={true}
                  className="w-full sm:w-fit"
                  hasArrowRight={true}
                  label={"LEARN MORE"}
                  href={"/tokenomics"}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Right Card */}
        <div
          className={`rounded-[25px] flex-1 p-4 w-full ${
            theme === "dark"
              ? "featureBorderWrapDarkTheme"
              : "featureBorderDarkerTheme"
          }`}
        >
          <div className="rounded-[25px] px-8 md:px-10 lg:px-18 z-20 pb-12 dark:bg-deltaDarkBlueBG bg-deltaWhiteLinearBG h-full ">
            <div className="flex flex-col h-full">
              <div className="flex flex-row pt-2 md:pt-24 justify-start gap-4 items-center">
                <div>
                {ninthSection?.media && (
                  <Image
                    src={ninthSection.media.url}
                    alt={ninthSection.media.title}
                    width={100}
                    height={100}
                  />
                )}
                </div>
                <div>
                  <h3 className="featureSubtitle text-[17px] sm:text-[34px] dark:text-[#FFF5F0] text-[#6B70ED]">
                    {ninthSection?.heading}
                  </h3>
                </div>
              </div>
              <div className="mt-8 aboutTypographyparagraphWhite mb-20 dark:text-[#FFF5F0] text-[#565AC2]">
                {ninthSection?.mainText &&
                  documentToReactComponents(ninthSection.mainText.json, options)}
              </div>
              <div className="mt-auto">
                <BlogCardButton
                  isLink={true}
                  className="w-full sm:w-fit"
                  hasArrowRight={true}
                  label={"LEARN MORE"}
                  href={"/tokenomics"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTokenSection;
