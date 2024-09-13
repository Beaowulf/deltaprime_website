"use client";
import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { BlogCardButton } from "@/app/components/buttons/mainButton";
import Header from "@/app/components/header/header";
import primePurpleLogo from "@/public/assets/icons/purpleTokenPrime.svg";
import whiteTokenPrime from "@/public/assets/icons/whiteTokenPrime.svg";

function OurTokenSection() {
  const { theme } = useTheme;

  return (
    <div className="lg:mb-32 mb-10 mt-14">
      <Header
        subTitle="Our Tokens"
        paragraph="Our tradeable and utility tokens feature majority ownership for the community as well as access to advanced platform features.  "
      />
      <div className="flex flex-wrap justify-center flex-col md:flex-row gap-4">
        {/* Left Card */}
        <div
          className={`rounded-[20px] flex-1 p-4 w-full ${
            theme === "dark"
              ? "featureBorderWrapDarkTheme"
              : "featureBorderWrapLightTheme"
          }`}
        >
          <div className="rounded-[25px] px-8 md:px-10 lg:px-18 z-20 pb-12 h-full w-full dark:bg-deltaDarkBlueBG bg-deltaWhiteLinearBG">
            <div className="flex flex-col h-full">
              <div className="flex flex-row pt-2 md:pt-24 justify-start gap-4 items-center">
                <div>
                  <Image
                    src={primePurpleLogo}
                    alt="prime_Token_Logo"
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <h3 className="featureSubtitle text-[17px] sm:text-[34px] dark:text-[#FFF5F0] text-[#6B70ED]">
                    PRIME
                  </h3>
                </div>
              </div>
              <p className="mt-8 aboutTypographyparagraphWhite mb-20 dark:text-[#FFF5F0] text-[#565AC2]">
                A tradeable token, to hold or use within DeFi
                <br />
                - Primed with adaptive emissions.
                <br />
                - Community-centered tokenomics.
                <br />- Aimed at reducing high volatility and inflation.
              </p>
              <div className="mt-auto">
                <BlogCardButton
                  isLink={true}
                  className="w-full sm:w-fit"
                  typographyClass="md:mx-auto"
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
          className={`rounded-[20px] flex-1 p-4 w-full ${
            theme === "dark"
              ? "featureBorderWrapDarkTheme"
              : "featureBorderWrapLightTheme"
          }`}
        >
          <div className="rounded-[25px] px-8 md:px-10 lg:px-18 z-20 pb-12 dark:bg-deltaDarkBlueBG bg-deltaWhiteLinearBG h-full ">
            <div className="flex flex-col h-full">
              <div className="flex flex-row pt-2 md:pt-24 justify-start gap-4 items-center">
                <div>
                  <Image
                    src={whiteTokenPrime}
                    alt="prime_Token_Logo"
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <h3 className="featureSubtitle text-[17px] sm:text-[34px] dark:text-[#FFF5F0] text-[#6B70ED]">
                    sPRIME
                  </h3>
                </div>
              </div>
              <p className="mt-8 aboutTypographyparagraphWhite mb-20 dark:text-[#FFF5F0] text-[#565AC2]">
                The main currency and utility token:
                <br />
                - Pay with for PRIME features.
                <br />- Earn governance power points.
                <br />- Get a share of the liquidation fees.
              </p>
              <div className="mt-auto">
                <BlogCardButton
                  isLink={true}
                  className="w-full sm:w-fit"
                  typographyClass="md:mx-auto"
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
