import React from "react";
import { useTheme } from "next-themes";
import { MainButton } from "@/app/components/buttons/mainButton";
import Header from "@/app/components/header/header";

function OurTokenSection() {
  const { theme } = useTheme;
  return (
    <div className="mb-32 mt-20">
      <Header
        title="Our Features"
        subTitle="Our Tokens"
        paragraph="Our tradeable and utility tokens feature majority ownership for the community as well as access to advanced platform features & revenue sharing.  "
      />
      <div className="flex flex-wrap justify-center flex-col md:flex-row gap-4">
        {/* Left Card */}
        <div
          className={`rounded-[20px] flex-1 p-4 ${
            theme === "dark"
              ? "featureBorderWrapDarkTheme"
              : "featureBorderWrapLightTheme"
          }`}
        >
          <div className="rounded-[20px] px-8 md:px-10 lg:px-18 z-20 pb-12 dark:bg-[#252948] bg-[#E8E8F2] h-full">
            <div className="flex flex-col h-full">
              <h4 className="featureTitle  pt-10 md:pt-24 text-[12px] sm:text-[15px] dark:text-[#FFF5F0] font-bold text-[#252948]">
                OUR TOKENS
              </h4>
              <h1 className="featureSubtitle text-[17px] sm:text-[34px] dark:text-[#FFF5F0] text-[#252948]">
                $sPRIME
              </h1>
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
                  typographyClass="text-[12px] md:text-[18px] px-[20px] text-[#1B153C] md:mx-auto"
                  hasArrowRight={true}
                  label={"LEARN MORE"}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Right Card */}
        <div
          className={`rounded-[20px] flex-1 p-4 ${
            theme === "dark"
              ? "featureBorderWrapDarkTheme"
              : "featureBorderWrapLightTheme"
          }`}
        >
          <div className="rounded-[20px] px-8 md:px-10 lg:px-18 z-20 pb-12 dark:bg-[#252948] bg-[#E8E8F2] h-full">
            <div className="flex flex-col h-full">
              <h4 className="featureTitle pt-10 md:pt-24 text-[12px] sm:text-[15px] dark:text-[#FFF5F0] font-bold text-[#252948]">
                OUR TOKENS
              </h4>
              <h1 className="featureSubtitle text-[17px] sm:text-[34px] dark:text-[#FFF5F0] text-[#252948]">
                $sPRIME
              </h1>
              <p className="mt-8 featureParagraph mb-20 text-[12px] sm:text-[17px] dark:text-[#FFF5F0] text-[#252948]">
                Utility token for Liquidity Providers and Active Users.
                <br />
                - Pay with for PRIME features
                <br />
                - Earn 33% of protocol revenue.
                <br />- Earn governance power points.
              </p>
              <div className="mt-auto">
                <MainButton
                  typographyClass="text-[12px] md:text-[18px] px-[20px] text-[#1B153C] md:mx-auto"
                  hasArrowRight={true}
                  label={"LEARN MORE"}
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
