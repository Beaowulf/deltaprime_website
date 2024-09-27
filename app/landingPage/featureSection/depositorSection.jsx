import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import "../landingPage.css";
import Link from "next/link";
import "@/app/globals.css";
import { DeltaPurpleButton } from "@/app/components/buttons/mainButton";
import { CryptoLandingPageTables } from "@/app/components/cryptoTables/cryptoTables";
import large3DLogo from "@/public/assets/img/logo_3D_large.png";
import piggyBank3DLarge from "@/public/assets/img/piggyBankLarge3D.png";
import dollarSign3D from "@/public/assets/dollarSign.svg";
import Header from "@/app/components/header/header";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";


// Dark themed assets
import RoundedOneDarkThemed from "@/public/assets/icons/RoundedOneDarkThemed.svg";
import RoundedTwoDarkThemed from "@/public/assets/icons/RoundedTwoDarkThemed.svg";
import RoundedThreeDarkThemed from "@/public/assets/icons/RoundedThreeDarkThemed.svg";

// Light theme assets
import RoundedOneLightThemed from "@/public/assets/icons/RoundedOneLightThemed.svg";
import RoundedTwoLightThemed from "@/public/assets/icons/RoundedTwoLightThemed.svg";
import RoundedThreeLightThemed from "@/public/assets/icons/RoundedThreeLightThemed.svg";

const FeaturePrimeAccount = ({fourthSection, options}) => {
  const { theme } = useTheme();

  return (
    <div className="lg:mt-40 mt-14">
      {fourthSection && (
        <Header
          subTitle={fourthSection.heading}
          paragraph={documentToReactComponents(fourthSection.mainText.json, options)}
        />
      )}
      <div className="flex flex-col flex-wrap gap-5 md:mb-20 mb-6">
        {/* Top Boxes */}
        <div className="flex flex-col md:flex-row gap-5 justify-center w-full">
          {/* 70% */}
          <div
            className={`rounded-[25px] ${
              theme === "dark"
                ? "featureBorderWrapDarkTheme"
                : "featureBorderWrapLightTheme"
            } z-10 md:w-8/12 w-full`}
          >
            <div
              className={`flex md:flex-row flex-col justify-between items-end rounded-[25px] h-full p-4 md:py-6 md:pl-10 z-20  overflow-hidden ${
                theme === "dark" ? "bg-[#252948]" : "bg-deltaWhiteLinearBG"
              }`}
            >
              <div className="w-full md:w-1/2 flex flex-col mt-5 items-start mb-0 md:mb-11 md:mr-4">
                {theme === "dark" ? (
                  <Image src={RoundedOneDarkThemed} alt="Rounded_Number_One" />
                ) : (
                  <Image src={RoundedOneLightThemed} alt="Rounded_Number_One" />
                )}
                <p className="aboutTypographyparagraphWhite mt-2 dark:text-white text-[#6B70ED] max-w-[13rem]">
                  <span className="font-bold">Deposit</span> your tokens in one
                  of the pools
                </p>
              </div>
              {/* Stacked Images */}
              <div className="w-full flex justify-end relative h-fit mt-10 md:mt-0">
                <div className="relative w-full flex items-end h-full">
                  {/* The 2 live data */}
                  <CryptoLandingPageTables />
                </div>
              </div>
            </div>
          </div>
          {/* 30% */}
          <div
            className={`rounded-[27px] ${
              theme === "dark"
                ? "featureBorderWrapDarkTheme"
                : "featureBorderWrapLightTheme"
            } z-10 md:w-4/12 w-full md:block hidden`}
          >
            <div
              className={`justify-center p-4 md:p-8 rounded-[25px] h-full z-20 overflow-hidden flex ${
                theme === "dark" ? "bg-[#252948]" : "bg-deltaWhiteLinearBG"
              }`}
            >
              <Image
                className="mx-auto my-0 object-contain"
                src={large3DLogo}
                alt="3d_purple_DeltaPrime_logo"
              />
            </div>
          </div>
        </div>
        {/* Bottom Boxes */}
        <div className="w-full flex md:flex-row flex-col gap-5 h-full">
          <div
            className={`rounded-[25px] md:h-[260px] h-[220px]  ${
              theme === "dark"
                ? "featureBorderWrapDarkTheme"
                : "featureBorderWrapLightTheme"
            } z-10 md:w-1/2 w-full`}
          >
            <div
              className={`md:pt-0 pt-6 h-full flex md:items-end items-center rounded-[25px] md:pl-10 md:pr-4 pl-4 z-20 overflow-hidden ${
                theme === "dark" ? "bg-[#252948]" : "bg-deltaWhiteLinearBG"
              }`}
            >
              <div className="mb-11 md:mt-0 mt-5">
                {theme === "dark" ? (
                  <Image src={RoundedTwoDarkThemed} alt="Rounded_Number_One" />
                ) : (
                  <Image src={RoundedTwoLightThemed} alt="Rounded_Number_One" />
                )}
                <p className="aboutTypographyparagraphWhite mt-2 dark:text-white text-[#6B70ED] ">
                  <span className="font-bold">Borrowers</span> pay interest,
                  which is autocompounded
                </p>
              </div>
              <div className="h-full w-full flex justify-center">
                <Image
                  className="object-contain"
                  src={piggyBank3DLarge}
                  alt="large_3D_purple_piggybank"
                />
              </div>
            </div>
          </div>

          <div
            className={`rounded-[25px] md:h-[260px] h-[220px] ${
              theme === "dark"
                ? "featureBorderWrapDarkTheme"
                : "featureBorderWrapLightTheme"
            } z-10 md:w-1/2 w-full`}
          >
            <div
              className={`md:pt-0 pt-6 h-full flex md:items-end items-center justify-between rounded-[25px] md:px-10 pl-4 z-20 overflow-hidden ${
                theme === "dark" ? "bg-[#252948]" : "bg-deltaWhiteLinearBG"
              }`}
            >
              <div className="mb-11 md:mt-0 mt-5">
                {theme === "dark" ? (
                  <Image
                    className="w-auto"
                    src={RoundedThreeDarkThemed}
                    alt="Rounded_Number_Three"
                    height={50}
                    width={50}
                  />
                ) : (
                  <Image
                    className="w-auto"
                    src={RoundedThreeLightThemed}
                    alt="Rounded_Number_Three"
                    height={50}
                    width={50}
                  />
                )}
                <p className="aboutTypographyparagraphWhite mt-2 dark:text-white text-[#6B70ED] max-w-[15rem]">
                  <span className="font-bold">Withdraw</span> whenever you want
                </p>
              </div>
              <div className="h-full w-full flex justify-center">
                <Image
                  className="object-contain py-4 md:py-8 md:px-10"
                  src={dollarSign3D}
                  alt="dollar_Sign_3D"
                  height={220}
                  width={180}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Show this button only on mobile */}
      <div className="fullWidthButtonChildren h-[60px] md:h-full hidden w-full text-center md:flex items-center justify-center">
        <DeltaPurpleButton
          className="py-4 px-5"
          label="LAUNCH SAVINGS ACCOUNT"
          typographyClass="text-[15px]"
          hasArrowRight={false}
          href="https://app.deltaprime.io/#/pools"
          target="_blank"
        />
      </div>
      {/* Show this button only on mobile */}
      <div className="fullWidthButtonChildren h-[60px] md:h-full flex items-center justify-center md:hidden w-full text-center">
        <DeltaPurpleButton
          className="py-4 px-5 h-[50px]"
          label="LAUNCH SAVINGS ACCOUNT"
          typographyClass="text-[15px]"
          hasArrowRight={false}
          href="https://app.deltaprime.io/#/pools"
          target="_blank"
        />
      </div>
    </div>
  );
};

export default FeaturePrimeAccount;
