import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import "../landingPage.css";
import { MainButton } from "@/app/components/buttons/mainButton";
import groupImages from "@/public/assets/img/groupImages.png";
import large3DLogo from "@/public/assets/img/logo_3D_large.png";
import piggyBank3DLarge from "@/public/assets/img/piggyBankLarge3D.png";
import dollarSign3D from "@/public/assets/img/dollarSign3D.png";

// Dark themed assets
import RoundedOneDarkThemed from "@/public/assets/icons/RoundedOneDarkThemed.svg";
import RoundedTwoDarkThemed from "@/public/assets/icons/RoundedTwoDarkThemed.svg";
import RoundedThreeDarkThemed from "@/public/assets/icons/RoundedThreeDarkThemed.svg";

// Light theme assets
import RoundedOneLightThemed from "@/public/assets/icons/RoundedOneLightThemed.svg";
import RoundedTwoLightThemed from "@/public/assets/icons/RoundedTwoLightThemed.svg";
import RoundedThreeLightThemed from "@/public/assets/icons/RoundedThreeLightThemed.svg";

const FeatureHeader = ({ title, subTitle, paragraph }) => {
  return (
    <div className="flex flex-col items-center dark:text-white text-[#252948] mb-14">
      <h4 className="uppercase mb-3 featureTitle text-center">{title}</h4>
      <h1 className="mb-8 featureSubtitle text-center">{subTitle}</h1>
      <p className="featureParagraph max-w-xl text-center">{paragraph}</p>
    </div>
  );
};

const FeaturePrimeAccount = () => {
  const { theme } = useTheme();

  return (
    <div className="md:mt-40 mt-0">
      <FeatureHeader
        title={"Our Features"}
        subTitle={"Depositor"}
        paragraph={
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu  fugiat nulla pariatur."
        }
      />
      <div className="flex flex-col flex-wrap gap-5 md:mb-20 mb-6">
        {/* Top Boxes */}
        <div className="flex flex-col md:flex-row gap-5 justify-center w-full">
          {/* 70% */}
          <div
            className={`rounded-[20px] ${
              theme === "dark"
                ? "featureBorderWrapDarkTheme"
                : "featureBorderWrapLightTheme"
            } z-10 md:w-8/12 w-full`}
          >
            <div className="flex md:flex-row flex-col justify-between items-end rounded-[20px] h-full pl-10 z-20 dark:bg-[#252948] bg-[#E8E8F2] overflow-hidden">
              <div className="w-full md:w-1/2 flex flex-col items-start mb-0 md:mb-11">
                {theme === "dark" ? (
                  <Image src={RoundedOneDarkThemed} alt="Rounded_Number_One" />
                ) : (
                  <Image src={RoundedOneDarkThemed} alt="Rounded_Number_One" />
                )}
                <p className="featureCardTitle mt-2 dark:text-white text-[#252948] max-w-[13rem]">
                  Deposit your tokens in one of the pools
                </p>
              </div>
              {/* Stacked Images */}
              <div className="w-full flex justify-end relative h-fit">
                <div className="relative w-full flex items-end h-full">
                  <Image
                    style={{ width: "100%", height: "auto" }}
                    className="h-auto"
                    src={groupImages}
                    alt="Stacked Dashboards"
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* 30% */}
          <div
            className={`rounded-[20px] ${
              theme === "dark"
                ? "featureBorderWrapDarkTheme"
                : "featureBorderWrapLightTheme"
            } z-10 md:w-4/12 w-full md:block hidden`}
          >
            <div className="place-items-center rounded-[20px] h-full z-20 dark:bg-[#252948] bg-[#E8E8F2] overflow-hidden flex">
              <Image
                className="m-auto w-full h-full"
                src={large3DLogo}
                alt="3d_purple_DeltaPrime_logo"
              />
            </div>
          </div>
        </div>
        {/* Bottom Boxes */}
        <div className="w-full flex md:flex-row flex-col gap-5">
          <div
            className={`rounded-[20px] ${
              theme === "dark"
                ? "featureBorderWrapDarkTheme"
                : "featureBorderWrapLightTheme"
            } z-10 md:w-1/2 w-full`}
          >
            <div className="flex items-end rounded-[20px] md:px-10 px-2 z-20 dark:bg-[#252948] bg-[#E8E8F2] overflow-hidden h-[300px]">
              <div className="mb-11">
                {theme === "dark" ? (
                  <Image src={RoundedOneDarkThemed} alt="Rounded_Number_One" />
                ) : (
                  <Image src={RoundedOneDarkThemed} alt="Rounded_Number_One" />
                )}
                <p className="featureCardTitle mt-2 dark:text-white text-[#252948] ">
                  Borrowers pay interest, which is autocompounded
                </p>
              </div>
              <div className="h-full w-full">
                <Image
                  className="h-full w-auto object-contain"
                  src={piggyBank3DLarge}
                  alt="large_3D_purple_piggybank"
                />
              </div>
            </div>
          </div>

          <div
            className={`rounded-[20px] ${
              theme === "dark"
                ? "featureBorderWrapDarkTheme"
                : "featureBorderWrapLightTheme"
            } z-10 md:w-1/2 w-full`}
          >
            <div className="flex items-end justify-between rounded-[20px] md:px-10 px-2 z-20 dark:bg-[#252948] bg-[#E8E8F2] overflow-hidden h-[300px]">
              <div className="mb-11">
                {theme === "dark" ? (
                  <Image src={RoundedOneDarkThemed} alt="Rounded_Number_One" />
                ) : (
                  <Image src={RoundedOneDarkThemed} alt="Rounded_Number_One" />
                )}
                <p className="featureCardTitle mt-2 dark:text-white text-[#252948] ">
                  Withdraw whenever you want
                </p>
              </div>
              <div className="">
                <div>
                  <Image src={dollarSign3D} alt="dollar_Sign_3D" />
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
