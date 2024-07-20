import React from "react";
import { MainButton } from "@/app/components/buttons/mainButton";
import Header from "@/app/components/header/header";

function OurTokenSection() {
  return (
    <div className="mb-10 mt-20">
      <Header
        title="Our Features"
        subTitle="Our Tokens"
        paragraph="Our tradeable and utility tokens feature majority ownership for the community as well as access to advanced platform features & revenue sharing.  "
      />
      <div className="flex flex-wrap justify-center flex-col md:flex-row gap-4">
        {/* Left Card */}
        <div className="rounded-[20px] flex-1 p-4 featureBorderWrapDarkTheme h-full">
          <div className="rounded-[20px] px-8 md:px-10 lg:px-18 z-20 pb-12 bg-[#252948]">
            <div>
              <h4 className="featureTitle pt-10 md:pt-24 text-[12px] sm:text-[15px]">
                OUR TOKENS
              </h4>
              <h1 className="featureSubtitle text-[17px] sm:text-[34px]">
                $sPRIME
              </h1>
              <p className="mt-3 featureParagraph text-[#FFF5F0] mb-8 text-[12px] sm:text-[17px]">
                Store of value, tradeable ERC20 token.
                <br />
                - Primed with adaptive emissions.
                <br />
                - Community-centered tokenomics
                <br />- Aimed at reducing high volatility and inflation
              </p>
              <MainButton
                typographyClass="text-[12px] md:text-[18px] px-[20px] text-[#1B153C] m-0 md:mx-auto"
                hasArrowRight={true}
                label={"LEARN MORE"}
              />
            </div>
          </div>
        </div>
        {/* Right Card */}
        <div className="rounded-[20px] flex-1 p-4 featureBorderWrapDarkTheme h-full">
          <div className="rounded-[20px] px-8 md:px-10 lg:px-18 z-20 pb-12 bg-[#252948]">
            <div>
              <h4 className="featureTitle pt-10 md:pt-24 text-[12px] sm:text-[15px]">
                OUR TOKENS
              </h4>
              <h1 className="featureSubtitle text-[17px] sm:text-[34px]">
                $sPRIME
              </h1>
              <p className="mt-3 featureParagraph text-[#FFF5F0] mb-8 text-[12px] sm:text-[17px]">
                Utility token for Liquidity Providers and Active Users.
                <br />
                - Pay with for PRIME features
                <br />
                - Earn 33% of protocol revenue.
                <br />- Earn governance power points.
              </p>
              <MainButton
                typographyClass="text-[12px] md:text-[18px] px-[20px] text-[#1B153C] m-0 md:mx-auto"
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
