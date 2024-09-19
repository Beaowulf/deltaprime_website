"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import {
  BlogCardButton,
  DeltaPurpleButton,
} from "@/app/components/buttons/mainButton";
import { TokenomicsGraph } from "@/app/tokenomics/tokenomicsGraph";
import { TokenomicsList } from "@/app/tokenomics/tokenomicsList";

import primePurpleLogo from "@/public/assets/icons/purpleTokenPrime.svg";
import whiteTokenPrime from "@/public/assets/icons/whiteTokenPrime.svg";

import protocolUsage from "@/public/assets/icons/boost_Protocol_Usage.svg";
import liquidityPool from "@/public/assets/icons/liquidityPool.svg";
import bufferMarket from "@/public/assets/icons/buffer_Market _Volatility.svg";

import primeFeatures from "@/public/assets/icons/primeFeatures.svg";
import protocolRevenue from "@/public/assets/icons/protocolRevenue.svg";
import governancePower from "@/public/assets/icons/governancePower.svg";
import TokenomicsCards from "../components/tokenomicsCard/tokenomicsCard";

import imageOne from "@/public/assets/img/images/tokenomics/1_deep_dive_tockenomics_lightless.png";
import imageTwo from "@/public/assets/img/images/tokenomics/2_image.png";
import imageThree from "@/public/assets/img/images/tokenomics/3_voting.png";
import imageFour from "@/public/assets/img/images/tokenomics/4_image.png";
import tokenomicsImage from "@/public/assets/img/images/tokenomics/tokenomics-image.png";

import "./tokenomics.css";
import SecuritySection from "../landingPage/featureSection/securitySection";
import ContactForm from "../ui/contactForm/contactForm";
import MintModal from "@/app/components/modals/mintModal";

const Tokenomics = () => {
  const { resolvedTheme } = useTheme();
  const [expandedSections, setExpandedSections] = useState([false, false]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleText = (index) => {
    setExpandedSections((prevState) => {
      const newExpandedSections = [...prevState];
      newExpandedSections[index] = !newExpandedSections[index];
      return newExpandedSections;
    });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="px-4 sm:px-6 md:px-[6%] xl:px-[8%] 2xl:px-[10%]">
      {isModalOpen && <MintModal onClose={closeModal} />}
      {/* First Section */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-start w-full gap-10 my-10 md:my-20">
        {/* Text Wrapper */}
        <div className="flex flex-col md:mb-8 mb-0 justify-between items-center md:items-start h-fit flex-grow">
          <div className="text-left flex flex-col gap-4 w-full">
            <div className="clearfix">
              {/* image that shows on desktop only */}
              <Image
                className={`rounded-[20px]  float-right ml-4 mb-4 w-full lg:w-1/2 hidden lg:block ${
                  resolvedTheme === "dark"
                    ? "shadow-custom-dark"
                    : "shadow-custom-light"
                }`}
                src={imageOne}
                alt="Deep_Dive_Tockenomics_Lightless"
              />
              <p className="brightText text-wrap max-w-xl mb-4 text-3xl md:text-[44px] dark:text-white text-[#6B70ED] ">
                Introducing PRIME Tokenomics
              </p>
              <p className="whiteMainText text-wrap text-[15px] md:text-[17px] md:leading-[25.5px] leading-5 min-w-full mb-4 dark:text-white text-[#565AC2] ">
                The native tokens of DeltaPrime, namely PRIME and sPRIME, have a
                central role in the DeltaPrime ecosystem. The tokens PRIME and
                sPRIME are designed to further scale DeltaPrime, while getting
                the community in on the action. As such, the tokenomics of
                PRIME, with the spotlight on sPRIME, are true to the values of
                our ecosystem and promote efficiency, sustainability, and
                usefulness. In doing so, PRIME and sPRIME align users, holders,
                and governors of DeltaPrime on a fundamental level.
              </p>
              <Image
                className={`rounded-[20px]  float-right ml-4 mb-4 w-full lg:w-1/2 block lg:hidden ${
                  resolvedTheme === "dark"
                    ? "shadow-custom-dark"
                    : "shadow-custom-light"
                }`}
                src={imageOne}
                alt="Deep_Dive_Tockenomics_Lightless"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Tokenomics Section */}
      <div className="flex flex-col items-center md:items-center mb-8 md:mt-28 mt-5 h-fit flex-grow mx-auto">
        <div className="text-left flex flex-col gap-4">
          <p className="brightText text-center max-w-xl text-3xl md:text-[44px] dark:text-white text-[#6B70ED]">
            Tokenomics
          </p>
        </div>
        <div className="flex flex-col items-center md:flex-row justify-center md:gap-10 gap-0 mt-10">
          <div className="flex flex-col items-center md:mb-0 mb-10">
            <p className="text-center text-[32px] font-bold mt-4 dark:text-white text-[#6B70ED]">
              PRIME
            </p>
            <p className="text-center text-[24px] font-normal mt-1 dark:text-white text-[#6B70ED] md:max-w-[80%]">
               A tradeable token used for holding or within DeFi
            </p>
            <Image
              className="my-11 h-[120px] w-[120px]"
              src={primePurpleLogo}
              alt="PRIME Logo"
              width={120}
              height={120}
            />
            <DeltaPurpleButton
              typographyClass="text-[15px]"
              label="GET PRIME"
              hasArrowRight={false}
              onClick={openModal}
            />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-center text-[32px] font-bold mt-4 dark:text-white text-[#6B70ED]">
              sPRIME
            </p>
            <p className="text-center text-[24px] font-normal mt-1 dark:text-white text-[#6B70ED] md:max-w-[70%]">
              The main currency and utility token within DeltaPrime.
            </p>
            <Image
              className="my-11 h-[120px] w-[120px]"
              src={whiteTokenPrime}
              alt="sPRIME Logo"
              width={120}
              height={120}
            />
            <DeltaPurpleButton
              typographyClass="text-[15px]"
              label="MINT sPrime"
              isUppercase={false}
              hasArrowRight={false}
              href="https://app.deltaprime.io"
            />
          </div>
        </div>
      </div>

      {/* sPRIME Allows anyone to */}
      <div className="rounded-[20px] flex-1 p-4 parentColoredBorderWrapper mt-12 mb-16">
        <div className="rounded-[20px] px-8 md:px-10 lg:px-18 z-20 pb-12 dark:bg-deltaDarkBlueBG bg-deltaWhiteLinearBG h-full">
          <p className="smallBrigthText text-center pt-12 mb-16 !font-bold dark:text-white text-[#6B70ED]">
            sPRIME allows anyone to
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="flex flex-col items-center mb-8 md:mb-0 md:mx-3 lg:mx-12">
              <Image
                width={150}
                height={150}
                src={protocolRevenue}
                className="h-[150px] w-[150px]"
                alt="Access PRIME Features"
              />
              <p className="text-center !text-xl md:!text-xl !font-normal mt-4 w-[200px] dark:text-white text-[#565AC2]">
                Access PRIME Features
              </p>
            </div>
            <div className="flex flex-col items-center mb-8 md:mb-0 md:mx-3 lg:mx-12">
              <Image
                width={150}
                height={150}
                src={governancePower}
                className="h-[150px] w-[150px]"
                alt="Claim a share of 33% of protocol revenue"
              />
              <p className="text-center !text-xl md:!text-xl !font-normal mt-4 w-[200px] dark:text-white text-[#565AC2]">
                Claim a share of the liquidation fees
              </p>
            </div>
            <div className="flex flex-col items-center mb-8 md:mb-0 md:mx-3 lg:mx-12">
              <Image
                width={150}
                height={150}
                src={primeFeatures}
                className="h-[150px] w-[150px]"
                alt="Accrue Governance Power points"
              />
              <p className="text-center !text-xl md:!text-xl !font-normal mt-4 w-[200px] dark:text-white text-[#565AC2]">
                Accrue Governance Power points
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* sPRIME Enables Section */}
      <div className="rounded-[20px] flex-1 p-4 parentColoredBorderWrapper mt-12 mb-16">
        <div className="rounded-[25px] px-8 md:px-10 lg:px-18 z-20 pb-12 dark:bg-deltaDarkBlueBG bg-deltaWhiteLinearBG h-full">
          <p className="smallBrigthText text-center pt-12 mb-16 !font-bold dark:text-white text-[#6B70ED]">
            sPRIME enables DeltaPrime to
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="flex flex-col items-center mb-8 md:mb-0 md:mx-3 lg:mx-12">
              <Image
                width={150}
                height={150}
                src={protocolUsage}
                className="h-[150px] w-[150px]"
                alt="Boost Protocol Usage"
              />
              <p className="text-center !text-xl md:!text-xl mt-4 w-[200px] dark:text-white text-[#565AC2]">
                Boost Protocol Usage
              </p>
            </div>
            <div className="flex flex-col items-center mb-8 md:mb-0 md:mx-3 lg:mx-12">
              <Image
                width={150}
                height={150}
                src={bufferMarket}
                className="h-[150px] w-[150px]"
                alt="Buffer Market Volatility"
              />
              <p className="text-center !text-xl md:!text-xl mt-4 w-[200px] dark:text-white text-[#565AC2]">
                Buffer Market Volatility
              </p>
            </div>
            <div className="flex flex-col items-center mb-8 md:mb-0 md:mx-3 lg:mx-12">
              <Image
                width={150}
                height={150}
                src={liquidityPool}
                className="h-[150px] w-[150px]"
                alt="Facilitate a deep, healthy liquidity pool"
              />
              <p className="text-center !text-xl md:!text-xl mt-4 w-[200px] dark:text-white text-[#565AC2]">
                Facilitate a deep, healthy liquidity pool
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}

      {/* Text Wrapper */}

      <div className="flex lg:flex-row flex-col-reverse justify-center items-center w-full md:gap-5 gap-2 mt-10 md:my-40 mx-auto">
        <div className="rounded-[25px] ">
          <Image
            className={`rounded-[20px] mr-2 xl:mr-10 mb-4 w-full xl:h-auto md:h-[600px] md:w-[500px] xl:max-w-[550px] object-cover hidden md:block ${
              resolvedTheme === "dark"
                ? "shadow-custom-dark"
                : "shadow-custom-light"
            }`}
            src={imageTwo}
            alt="deltaprime_mascot_img"
          />
        </div>

        <div className="flex flex-col w-full md:mb-8 mb-0 justify-between items-center lg:items-start h-fit lg:w-fit">
          <h3 className="brightText text-center md:text-left text-wrap max-w-full mb-4 text-3xl md:text-[44px] dark:text-white text-[#6B70ED]">
            Deep Dive into sPRIME
          </h3>

          <p className="whiteMainText text-[15px] md:text-[17px] md:leading-[25.5px] leading-5 mb-2 max-w-[40rem] dark:text-white text-[#565AC2] ">
            As the main currency in our ecosystem, sPRIME supports DeltaPrime on
            multiple levels. In contrast to traditional staked tokens, sPRIME
            promotes efficient staking. Instead of locking up PRIME to sit idle
            in a vault, sPRIME deepens liquidity thereby promoting efficient
            markets and increased stability. The value of sPRIME is derived from
            the value of the DeltaPrime ecosystem, not the other way around.
            This sustainable model, with any holder of sPRIME actively
            contributing to DeltaPrime as an LP, results in an efficient and
            self-sustaining ecosystem as a whole. This is achieved by the
            following features of sPRIME:
            <ol className="lg:p-4">
              <li className="list_dot">
                Access PRIME Features: Having sPRIME allows users to maximise
                the potential of DeltaPrime by unlocking PRIME Features. Amongst
                others, these can include a notification system, access to more
                tokens, more pools, higher leverage, or advanced features.
              </li>
              <li className="list_dot">
                Claim a share of liquidation fees: Active sPRIME actively
                contributes to the DeltaPrime ecosystem and delivers value. As a
                reward, a portion of liquidation fees is airdropped to holders
                of active sPRIME. Current protocol fees consist of liquidation
                fees, but may be modified by the DAO.
              </li>
              <li className="list_dot">
                Accrue Governance Power: Over time, governance of DeltaPrime
                will move from the team to the DAO. sPRIME, when combined with
                usage of the protocol, will accrue Governance Power over time.
                This ensures DeltaPrime is governed by its most loyal users.
              </li>
            </ol>
          </p>
          <Image
            className={`rounded-[20px] my-5 mb-4 mx-auto h-[500px] w-auto block md:hidden  ${
              resolvedTheme === "dark"
                ? "shadow-custom-dark"
                : "shadow-custom-light"
            }`}
            src={imageTwo}
            alt="deltaprime_mascot_img"
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="mb-16">
        <p className="brightText text-wrap mb-4 text-3xl md:text-[44px] dark:text-white text-[#6B70ED] text-center">
          Community-governed platform
        </p>
        <p className="whiteMainText dark:text-white text-[#565AC2] text-wrap max-w-[95%] text-[15px] md:text-[17px] md:leading-[25.5px] leading-5 mb-0 text-center">
          DeltaPrime has taken a unique approach to governance. Where most DAOs
          have tokenholders governing the platform, DeltaPrime is governed by
          its users. Governance Power is accrued by having sPRIME and using the
          protocol. As a result, governors of DeltaPrime are its users, which
          removes the principal-agent problem and puts the power into the hands
          of the community.
        </p>
      </div>

      {/* graph */}
      <div className="flex flex-col items-center md:items-center mb-8 md:mt-28 mt-5 h-fit flex-grow mx-auto">
        <div className="text-left flex flex-col gap-4">
          <p className="brightText text-center max-w-xl text-3xl md:text-[44px] dark:text-white text-[#6B70ED]">
            Token Distribution
          </p>
        </div>
        <div className="w-full relative flex flex-col md:flex-row md:pl-0 xl:pl-[13rem] 2xl:pl-[14rem]">
          <div className="lg:w-1/2">
            <TokenomicsGraph className="" />
          </div>
          <div className="pt-4 mb:pb-0 pb-10 md:pt-20 md:pl-20 mx-auto md:mx-0 lg:w-1/2">
            <TokenomicsList />
          </div>
        </div>
        <div>
          <p>
            You can check the vesting schedule for the token allocations{" "}
            <a
              href="https://docs.deltaprime.io/tokenomics/usdprime/vesting-schedule"
              className="underline"
            >
              here
            </a>
          </p>
        </div>
      </div>
      {/* end of graph */}

      <div className="flex flex-col-reverse md:flex-row justify-between items-start w-full gap-10 my-10 md:my-40">
        {/* Text Wrapper */}
        <div className="flex flex-col md:mb-8 mb-0 justify-between items-center md:items-start h-fit flex-grow">
          <div className="text-left flex flex-col gap-4 dark:text-white text-[#252948] w-full">
            <div className="clearfix">
              {/* image that shows on desktop only */}
              <Image
                className={`rounded-[20px] float-right ml-10 mb-4 w-full lg:w-1/2 hidden lg:block  ${
                  resolvedTheme === "dark"
                    ? "shadow-custom-dark"
                    : "shadow-custom-light"
                }`}
                src={tokenomicsImage}
                alt="deltaprime_mascot_img"
              />
              <div className="flex items-center flex-col">
                {" "}
                <p className="brightText text-center md:text-left text-wrap mb-4 text-2xl md:text-[44px] dark:text-white text-[#6B70ED]">
                  DeltaPrime Tokenomics Summed Up
                </p>
                <p className="whiteMainText text-wrap text-[15px] md:text-[17px] md:leading-[25.5px] leading-5 mb-2 min-w-full font-normal dark:text-white text-[#565AC2] text-left">
                  At DeltaPrime, we first implemented a protocol with high
                  security considerations, and are now positioned to organically
                  transition to a community governed platform, setting
                  checkpoints for stability and community rewards through our
                  native tokens $PRIME and $sPRIME.
                </p>
              </div>

              <Image
                className={`rounded-[20px] float-right ml-10 mb-4 w-full lg:w-1/2 block lg:hidden mt-10  ${
                  resolvedTheme === "dark"
                    ? "shadow-custom-dark"
                    : "shadow-custom-light"
                }`}
                src={tokenomicsImage}
                alt="deltaprime_mascot_img"
              />
            </div>
          </div>
        </div>
      </div>
      <SecuritySection />
      <ContactForm />
    </div>
  );
};

export default Tokenomics;
