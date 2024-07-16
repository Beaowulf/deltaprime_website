import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { MainButton } from "@/app/components/buttons/mainButton";

// Dark themed assets
import RoundedOneDarkThemed from "@/public/assets/icons/RoundedOneDarkThemed.svg";
import RoundedTwoDarkThemed from "@/public/assets/icons/RoundedTwoDarkThemed.svg";
import RoundedThreeDarkThemed from "@/public/assets/icons/RoundedThreeDarkThemed.svg";
import depositImage from "@/public/assets/img/images/features/deposit_collateral.png";
import graphImage from "@/public/assets/img/images/features/graph.png";
import circleDarkTheme from "@/public/assets/icons/circleDarkTheme.svg";
import fiveXNumber from "@/public/assets/icons/fiveX.svg";

// Light theme assets
import RoundedOneLightThemed from "@/public/assets/icons/RoundedOneLightThemed.svg";
import RoundedTwoLightThemed from "@/public/assets/icons/RoundedTwoLightThemed.svg";
import RoundedThreeLightThemed from "@/public/assets/icons/RoundedThreeLightThemed.svg";
import circleLightTheme from "@/public/assets/icons/circleLightTheme.svg";

const FeatureHeader = ({ title, subTitle, paragraph }) => {
  return (
    <div className="flex flex-col items-center dark:text-white text-[#252948] mb-14">
      <h4 className="uppercase mb-3 featureTitle text-center">{title}</h4>
      <h1 className="mb-8 featureSubtitle text-center">{subTitle}</h1>
      <p className="featureParagraph max-w-xl text-center">{paragraph}</p>
    </div>
  );
};

const TopPartDarkTheme = () => {
  return (
    <div className="w-full rounded-t-[25px] bg-[rgba(255,255,255,0.25)] flex items-center justify-start">
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
    <div className="w-full rounded-t-[25px] bg-[#EFEFF6] topPartLightThemeShadow flex items-center justify-start">
      <div className="flex flex-row gap-1 ml-4 my-2">
        <Image src={circleLightTheme} alt="colored_circle_dark_theme" />
        <Image src={circleLightTheme} alt="colored_circle_dark_theme" />
        <Image src={circleLightTheme} alt="colored_circle_dark_theme" />
      </div>
    </div>
  );
};

const FeaturePrimeAccount = () => {
  const { theme } = useTheme();

  return (
    <div className="md:mt-40 mt-0">
      <FeatureHeader
        title={"Our Features"}
        subTitle={"Prime Account"}
        paragraph={
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu  fugiat nulla pariatur."
        }
      />
      <div className="flex items-center justify-cente md:mb-20 mb-6 flex-wrap">
        <div className="flex flex-wrap lg:flex-nowrap space-y-4 lg:space-y-0 lg:space-x-4 w-full md:h-[700px] h-full">
          {/* Large box on the left */}
          <div
            className={`rounded-[20px] sm:w-1/2 w-full ${
              theme === "dark"
                ? "featureBorderWrapDarkTheme"
                : "featureBorderWrapLightTheme"
            } z-10 w-1/2`}
          >
            <div className="rounded-[20px] h-full px-4 pt-16 z-20 dark:bg-[#252948] bg-[#E8E8F2] overflow-hidden flex flex-col items-start md:items-start">
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

                <p className="featureCardTitle mt-2 dark:text-white text-[#252948]">
                  Deposit collateral
                </p>
              </div>
              <div>
                {theme === "dark" ? (
                  <TopPartDarkTheme />
                ) : (
                  <TopPartLightTheme />
                )}

                <Image src={depositImage} alt="deposit_Image" />
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
              <div className="h-full rounded-[20px] dark:bg-[#252948] bg-[#E8E8F2] px-4 pt-6 md:pb-14 pb-8  flex items-end justify-between">
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

                  <p className="featureCardTitle mt-2 dark:text-white text-[#252948]">
                    Borrow up to 5x
                  </p>
                </div>
                <div>
                  <Image src={fiveXNumber} alt="Nunber-5_X" />
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
              <div className="rounded-[20px] dark:bg-[#252948] bg-[#E8E8F2] px-4 pt-6 flex md:pb-10 pb-8  items-end justify-between h-full ">
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
                  <p className="featureCardTitle mt-2 dark:text-white text-[#252948] max-w-[15rem]">
                    Invest in whitelisted, blue-chip protocols
                  </p>
                </div>
                <div>
                  <Image
                    width={350}
                    height={350}
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
        <MainButton
          className="mx-auto"
          label="LAUNCH APP"
          hasArrowRight={true}
        />
      </div>
    </div>
  );
};

export default FeaturePrimeAccount;
