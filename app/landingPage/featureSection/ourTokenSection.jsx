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
    <div className="lg:mb-32 mb-10 mt-40">
      {seventhSection && (
        <Header
          hasSeperator={true}
          subTitle={seventhSection.fields.heading}
          paragraph={documentToReactComponents(seventhSection.fields.mainText, options)}
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
                {eighthSection?.fields?.media && (
                  <Image
                    src={`https:${eighthSection.fields.media.fields.file.url}`}
                    alt={eighthSection.fields.media.fields.title}
                    width={100}
                    height={100}
                  />
                )}
                </div>
                <div>
                  <h3 className="featureSubtitle text-[17px] sm:text-[34px] dark:text-[#FFF5F0] text-[#6B70ED]">
                    {eighthSection?.fields?.heading}
                  </h3>
                </div>
              </div>
              <div className="mt-8 aboutTypographyparagraphWhite mb-20 dark:text-[#FFF5F0] text-[#565AC2]">
                {eighthSection?.fields?.mainText &&
                  documentToReactComponents(eighthSection.fields.mainText, options)}
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
                {ninthSection?.fields?.media && (
                  <Image
                    src={`https:${ninthSection.fields.media.fields.file.url}`}
                    alt={ninthSection.fields.media.fields.title}
                    width={100}
                    height={100}
                  />
                )}
                </div>
                <div>
                  <h3 className="featureSubtitle text-[17px] sm:text-[34px] dark:text-[#FFF5F0] text-[#6B70ED]">
                    {ninthSection?.fields?.heading}
                  </h3>
                </div>
              </div>
              <div className="mt-8 aboutTypographyparagraphWhite mb-20 dark:text-[#FFF5F0] text-[#565AC2]">
                {ninthSection?.fields?.mainText &&
                  documentToReactComponents(ninthSection.fields.mainText, options)}
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
