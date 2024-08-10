import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { MainButton } from "@/app/components/buttons/mainButton";
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
          <div className="rounded-[20px] px-8 md:px-10 lg:px-18 z-20 pb-12 dark:bg-[#252948] bg-[#E8E8F2] h-full w-full">
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
                  <h1 className="featureSubtitle text-[17px] sm:text-[34px] dark:text-[#FFF5F0] text-[#252948]">
                    $PRIME
                  </h1>
                </div>
              </div>
              <p className="mt-8 featureParagraph mb-20 text-[12px] sm:text-[17px] dark:text-[#FFF5F0] text-[#252948]">
                Store of value, tradeable ERC20 token.
                <br />
                - Primed with adaptive emissions.
                <br />
                - Community-centered tokenomics
                <br />- Aimed at reducing high volatility and inflation
              </p>
              <div className="mt-auto">
                <MainButton
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
          <div className="rounded-[20px] px-8 md:px-10 lg:px-18 z-20 pb-12 dark:bg-[#252948] bg-[#E8E8F2] h-full ">
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
                  <h1 className="featureSubtitle text-[17px] sm:text-[34px] dark:text-[#FFF5F0] text-[#252948]">
                    $sPRIME
                  </h1>
                </div>
              </div>
              <p className="mt-8 featureParagraph mb-20 text-[12px] sm:text-[17px] dark:text-[#FFF5F0] text-[#252948]">
                Utility token for Liquidity Providers and Active Users.
                <br />
                - Pay with for PRIME features
                <br />- Earn governance power points.
              </p>
              <div className="mt-auto">
                <MainButton
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
