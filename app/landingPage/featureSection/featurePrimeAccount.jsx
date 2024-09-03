import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { CTAButton } from "@/app/components/buttons/mainButton";
import Header from "@/app/components/header/header";

// Dark themed assets
import RoundedOneDarkThemed from "@/public/assets/icons/RoundedOneDarkThemed.svg";
import RoundedTwoDarkThemed from "@/public/assets/icons/RoundedTwoDarkThemed.svg";
import RoundedThreeDarkThemed from "@/public/assets/icons/RoundedThreeDarkThemed.svg";
import depositImage from "@/public/assets/img/images/features/deposit_collateral.png";
import graphImage from "@/public/assets/img/images/features/graph.png";
import circleDarkTheme from "@/public/assets/icons/circleDarkTheme.svg";
import fiveXNumber from "@/public/assets/5X.svg";

// Light theme assets
import RoundedOneLightThemed from "@/public/assets/icons/RoundedOneLightThemed.svg";
import RoundedTwoLightThemed from "@/public/assets/icons/RoundedTwoLightThemed.svg";
import RoundedThreeLightThemed from "@/public/assets/icons/RoundedThreeLightThemed.svg";
import circleLightTheme from "@/public/assets/icons/circleLightTheme.svg";

const TopPartDarkTheme = () => {
  return (
    <div className="pl-2 w-full rounded-t-[25px] bg-[#EFEFF6] flex items-center justify-start">
      <div className="flex flex-row gap-1 ml-4 my-2">
        <Image src={circleDarkTheme} alt="colored_circle_dark_theme" />
        <Image src={circleDarkTheme} alt="colored_circle_dark_theme" />
        <Image src={circleDarkTheme} alt="colored_circle_dark_theme" />
      </div>
    </div>
  );
};

const TopPartLightTheme = () => {
  return (
    <div className="pl-2 w-full rounded-t-[25px] bg-[#EFEFF6] topPartLightThemeShadow flex items-center justify-start">
      <div className="flex flex-row gap-1 ml-4 my-2">
        <Image src={circleLightTheme} alt="colored_circle_dark_theme" />
        <Image src={circleLightTheme} alt="colored_circle_dark_theme" />
        <Image src={circleLightTheme} alt="colored_circle_dark_theme" />
      </div>
    </div>
  );
};

const FeaturePrimeAccountSection = () => {
  const { theme } = useTheme();

  return (
    <div className="lg:mt-40 mt-0">
      <Header
        subTitle={"Prime Account"}
        paragraph={
          "Our unique escrow smart contracts allow you for truly trustless borrowing. Leverage up to 6x and action a wide range of flexible investment strategies."
        }
      />
      <div className="flex items-center justify-cente md:mb-20 mb-6 flex-wrap">
        <div className="flex flex-wrap sm:flex-nowrap gap-4 w-full h-full">
          {/* Large box on the left */}
          <div
            className={`rounded-[25px] sm:w-1/2 w-full ${
              theme === "dark"
                ? "featureBorderWrapDarkTheme"
                : "featureBorderWrapLightTheme"
            } z-10 w-1/2`}
          >
            <div
              className={`rounded-[25px] h-full px-4 pt-6 z-20 dark: overflow-hidden flex flex-col items-start md:items-start ${
                theme === "dark" ? "bg-[#252948]" : "bg-deltaWhiteLinearBG"
              } `}
            >
              {/* number and text */}
              <div className="mb-12">
                {theme === "dark" ? (
                  <Image
                    width={65}
                    height={65}
                    src={RoundedOneDarkThemed}
                    alt="Rounded_Number_One"
                  />
                ) : (
                  <Image
                    width={65}
                    height={65}
                    src={RoundedOneLightThemed}
                    alt="Rounded_Number_One"
                  />
                )}

                <p className="aboutTypographyparagraphWhite mt-2 dark:text-white text-[#6B70ED]">
                  <span className="font-bold">Deposit</span> collateral
                </p>
              </div>
              <div className="mt-auto bg-[#EFEFF6] rounded-t-[25px] min-w-full">
                {theme === "dark" ? (
                  <TopPartDarkTheme />
                ) : (
                  <TopPartLightTheme />
                )}

                <Image
                  src={depositImage}
                  style={{ width: "100%" }}
                  className="mx-auto"
                  alt="deposit_Image"
                />
              </div>
            </div>
          </div>
          {/* Two smaller boxes on the right */}
          <div className="sm:w-1/2 w-full flex flex-col space-y-4">
            {/* 5X BOX */}
            <div
              className={`h-[50%] rounded-[20px] ${
                theme === "dark"
                  ? "featureBorderWrapDarkTheme"
                  : "featureBorderWrapLightTheme"
              } `}
            >
              <div
                className={`h-full rounded-[25px] px-4 pt-6 md:pb-8 pb-4 flex items-center justify-between ${
                  theme === "dark" ? "bg-[#252948]" : "bg-deltaWhiteLinearBG"
                }`}
              >
                <div className="md:w-fit w-9/12">
                  {theme === "dark" ? (
                    <Image
                      width={65}
                      height={65}
                      src={RoundedTwoDarkThemed}
                      alt="Rounded_Number_Two"
                    />
                  ) : (
                    <Image
                      width={65}
                      height={65}
                      src={RoundedTwoLightThemed}
                      alt="Rounded_Number_Two"
                    />
                  )}

                  <p className="aboutTypographyparagraphWhite mt-2 dark:text-white text-[#6B70ED]">
                    <span className="font-bold">Borrow</span> up to 5x
                  </p>
                </div>
                <div>
                  <Image
                    className="mt-0"
                    width={220}
                    src={fiveXNumber}
                    alt="Nunber-5_X"
                  />
                </div>
              </div>
            </div>
            {/* Graph BOX */}
            <div
              className={`h-[50%] rounded-[20px] ${
                theme === "dark"
                  ? "featureBorderWrapDarkTheme"
                  : "featureBorderWrapLightTheme"
              } `}
            >
              {/* todo: asked for the image to be cropped properly the below might change */}
              <div
                className={`rounded-[25px] px-4 pt-6 flex md:pb-10 pb-8  items-center justify-between h-full ${
                  theme === "dark" ? "bg-[#252948]" : "bg-deltaWhiteLinearBG"
                } `}
              >
                <div className="md:w-fit w-9/12">
                  {theme === "dark" ? (
                    <Image
                      width={65}
                      height={65}
                      src={RoundedThreeDarkThemed}
                      alt="Rounded_Number_Three"
                    />
                  ) : (
                    <Image
                      width={65}
                      height={65}
                      src={RoundedThreeLightThemed}
                      alt="Rounded_Number_Three"
                    />
                  )}
                  <p className="aboutTypographyparagraphWhite mt-2 dark:text-white text-[#6B70ED] max-w-[12rem]">
                    <span className="font-bold">Invest</span> in whitelisted,
                    blue-chip protocols
                  </p>
                </div>
                <div>
                  <Image
                    width={230}
                    height={230}
                    src={graphImage}
                    alt="3d_purple_graph"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Show this button only on mobile */}
      <div className="fullWidthButtonChildren h-[60px] md:h-full hidden sm:block w-full text-center">
        <Link href="?modal=true" scroll={false}>
          <CTAButton
            className="mx-auto px-6 py-3"
            label="LAUNCH APP"
            hasArrowRight={true}
            typographyClass="text-[15px]"
          />
        </Link>
      </div>
      {/* Show this button only on mobile */}
      <div className="fullWidthButtonChildren h-[60px] md:h-full block sm:hidden w-full text-center">
        <Link href="?modal=true" scroll={false}>
          <CTAButton
            className="mx-auto px-6 py-3"
            label="LAUNCH APP"
            hasArrowRight={true}
            typographyClass="text-[15px]"
          />
        </Link>
      </div>
    </div>
  );
};

export default FeaturePrimeAccountSection;
