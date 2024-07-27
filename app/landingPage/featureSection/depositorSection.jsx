import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import "../landingPage.css";
import Link from "next/link";
import { MainButton } from "@/app/components/buttons/mainButton";
import { CryptoLandingPageTables } from "@/app/components/cryptoTables/cryptoTables";
import large3DLogo from "@/public/assets/img/logo_3D_large.png";
import piggyBank3DLarge from "@/public/assets/img/piggyBankLarge3D.png";
import dollarSign3D from "@/public/assets/img/dollarSign3D.png";
import Header from "@/app/components/header/header";

// Dark themed assets
import RoundedOneDarkThemed from "@/public/assets/icons/RoundedOneDarkThemed.svg";
import RoundedTwoDarkThemed from "@/public/assets/icons/RoundedTwoDarkThemed.svg";
import RoundedThreeDarkThemed from "@/public/assets/icons/RoundedThreeDarkThemed.svg";

// Light theme assets
import RoundedOneLightThemed from "@/public/assets/icons/RoundedOneLightThemed.svg";
import RoundedTwoLightThemed from "@/public/assets/icons/RoundedTwoLightThemed.svg";
import RoundedThreeLightThemed from "@/public/assets/icons/RoundedThreeLightThemed.svg";

const FeaturePrimeAccount = () => {
  const { theme } = useTheme();

  return (
    <div className="lg:mt-40 mt-28">
      <Header
        title={"Deposit & earn"}
        subTitle={"Savings"}
        paragraph={
          "Let your capital work for you. Deposit into a savings pool within seconds. Receive upwards of 12% APY on interest from borrowed funds."
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
            <div className="flex md:flex-row flex-col justify-between items-end rounded-[20px] h-full px-4 md:pt-8 md:pl-10 z-20 dark:bg-[#252948] bg-[#E8E8F2] overflow-hidden">
              <div className="w-full md:w-1/2 flex flex-col items-start mb-0 md:mb-11 md:mr-4">
                {theme === "dark" ? (
                  <Image src={RoundedOneDarkThemed} alt="Rounded_Number_One" />
                ) : (
                  <Image src={RoundedOneLightThemed} alt="Rounded_Number_One" />
                )}
                <p className="featureCardTitle mt-2 dark:text-white text-[#252948] max-w-[13rem]">
                  Deposit your tokens in one of the pools
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
            <div className="flex md:items-end items-center rounded-[20px] md:px-10 pl-4 z-20 dark:bg-[#252948] bg-[#E8E8F2] overflow-hidden md:h-[300px] h-[220px]">
              <div className="mb-11">
                {theme === "dark" ? (
                  <Image src={RoundedTwoDarkThemed} alt="Rounded_Number_One" />
                ) : (
                  <Image src={RoundedTwoLightThemed} alt="Rounded_Number_One" />
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
            <div className="flex md:items-end items-center justify-between rounded-[20px] md:px-10 pl-4 z-20 dark:bg-[#252948] bg-[#E8E8F2] overflow-hidden md:h-[300px] h-[220px]">
              <div className="mb-11">
                {theme === "dark" ? (
                  <Image
                    src={RoundedThreeDarkThemed}
                    alt="Rounded_Number_One"
                  />
                ) : (
                  <Image
                    src={RoundedThreeLightThemed}
                    alt="Rounded_Number_One"
                  />
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
        <Link href="?modal=true">
          <MainButton
            className="mx-auto"
            label="LAUNCH APP"
            hasArrowRight={true}
          />
        </Link>
      </div>
      {/* Show this button only on mobile */}
      <div className="fullWidthButtonChildren h-[60px] md:h-full block sm:hidden w-full text-center">
        <Link href="?modal=true">
          <MainButton
            className="mx-auto"
            label="LAUNCH APP"
            hasArrowRight={true}
          />
        </Link>
      </div>
    </div>
  );
};

export default FeaturePrimeAccount;
