"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import {
  BlogCardButton,
  DeltaPurpleButton,
} from "@/app/components/buttons/mainButton";
import { TokenomicsGraph } from "@/app/tokenomics/tokenomicsGraph";
import { TokenomicsList } from "@/app/tokenomics/tokenomicsList";


import protocolUsage from "@/public/assets/icons/boost_Protocol_Usage.svg";
import liquidityPool from "@/public/assets/icons/liquidityPool.svg";
import bufferMarket from "@/public/assets/icons/buffer_Market _Volatility.svg";

import primeFeatures from "@/public/assets/icons/primeFeatures.svg";
import protocolRevenue from "@/public/assets/icons/protocolRevenue.svg";
import governancePower from "@/public/assets/icons/governancePower.svg";

import "./tokenomics.css";
import SecuritySection from "../landingPage/featureSection/securitySection";
import ContactForm from "../ui/contactForm/contactForm";
import MintModal from "@/app/components/modals/mintModal";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"; // Import rich text renderer
import { BLOCKS, INLINES } from '@contentful/rich-text-types';


export default function TokenomicsClient({ tokenomicsData }) {
  console.log('TokenomicsClient: tokenomicsData received:', tokenomicsData);



  const options = {
    renderText: (text) => {
      return text.split('\n').reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
    },
    renderNode: {
      
      // Headings
      [BLOCKS.HEADING_1]: (node, children) => {
        return <h1 className="text-4xl font-bold ">{children}</h1>;
      },
      [BLOCKS.HEADING_2]: (node, children) => {
        return <h2 className="text-3xl font-semibold">{children}</h2>;
      },
      [BLOCKS.HEADING_3]: (node, children) => {
        return <h3 className="text-2xl font-semibold">{children}</h3>;
      },
      [BLOCKS.HEADING_4]: (node, children) => {
        return <h4 className="text-xl font-semibold mb-4">{children}</h4>;
      },
      [BLOCKS.HEADING_5]: (node, children) => {
        return <h5 className="text-lg font-semibold mb-4">{children}</h5>;
      },
      [BLOCKS.HEADING_6]: (node, children) => {
        return <h6 className="text-base font-semibold mb-4">{children}</h6>;
      },
      
      // Lists
      [BLOCKS.UL_LIST]: (node, children) => {
        return <ul className="list-disc">{children}</ul>;
      },
      [BLOCKS.OL_LIST]: (node, children) => {
        return <ol className="list-decimal">{children}</ol>;
      },
      [BLOCKS.LIST_ITEM]: (node, children) => {
        return <li className="">{children}</li>;
      },
      [INLINES.HYPERLINK]: (node, children) => {
        const url = node.data.uri;
        return (
          <a href={url} className="underline" target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        );
      },
  
    },
  };

  // Ensure tokenomicsData is available and has fields
  const sections = tokenomicsData.sectionsCollection.items || [];

  // Find the specific sections based on their sectionId
  const introSection = sections.find((section) => section.sectionId === 1);
  console.log(introSection);
  const secondSection = sections.find((section) => section.sectionId === 2);
  const thirdSection = sections.find((section) => section.sectionId === 3);
  const fourthSection = sections.find((section) => section.sectionId === 4);
  const fifthSection = sections.find((section) => section.sectionId === 5);
  const sixthSection = sections.find((section) => section.sectionId === 6);
  const seventhSection = sections.find((section) => section.sectionId === 7);
  const eigthSection = sections.find((section) => section.sectionId === 8);




  const { resolvedTheme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);



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
      <div className="my-mobile-spacing md:my-desktop-spacing flex flex-col-reverse md:flex-row justify-between items-start w-full gap-10">
        {/* Text Wrapper */}
        <div className="flex flex-col justify-between items-center md:items-start h-fit flex-grow">
          <div className="text-left flex flex-col gap-4 w-full">
            <div className="clearfix">
              {/* image that shows on desktop only */}
              {introSection?.image && (
                <Image
                  className={`rounded-[20px] float-right ml-4 w-full lg:w-1/2 hidden lg:block ${
                    resolvedTheme === "dark"
                      ? "shadow-custom-dark"
                      : "shadow-custom-light"
                  }`}
                  src={`${introSection.image.url}`}
                  alt={introSection.image.title}
                  width={introSection.image.width}
                  height={introSection.image.height}
                />
              )}
              <p className="brightText text-wrap max-w-xl mb-4 text-3xl md:text-[44px] dark:text-white text-[#6B70ED] ">
                {introSection?.title}
              </p>
              <div className="whiteMainText text-wrap text-[15px] md:text-[17px] md:leading-[25.5px] leading-5 mb-4 md:mb-0 min-w-full dark:text-white text-[#565AC2]">
                {introSection?.mainText &&
                  documentToReactComponents(introSection.mainText.json, options)}
              </div>
              {/* Image (Mobile only) */}
              {introSection?.image && (
                <Image
                  className={`rounded-[20px] float-right ml-4 mb-4 w-full lg:w-1/2 block lg:hidden ${
                    resolvedTheme === "dark"
                      ? "shadow-custom-dark"
                      : "shadow-custom-light"
                  }`}
                  src={`${introSection.image.url}`}
                  alt={introSection.image.title}
                  width={introSection.image.width}
                  height={introSection.image.height}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Tokenomics Section */}
      <div className="my-mobile-spacing md:my-desktop-spacing flex flex-col items-center md:items-center h-fit flex-grow">
        <div className="text-left flex flex-col">
          <p className="brightText text-center max-w-xl text-3xl md:text-[44px] dark:text-white text-[#6B70ED]">
            {secondSection?.title}
          </p>
        </div>
        <div className="flex flex-col items-center md:flex-row justify-center md:gap-10 gap-0 mt-10">
          <div className="flex flex-col items-center md:mb-0 mb-10">
            <p className="text-center text-[32px] font-bold mt-4 dark:text-white text-[#6B70ED]">
              {thirdSection?.title}
            </p>
            <div className="text-center text-[24px] font-normal mt-1 dark:text-white text-[#6B70ED] md:max-w-[80%]">
              {thirdSection?.mainText &&
                documentToReactComponents(thirdSection.mainText.json, options)}
            </div>
            {introSection?.image && (

              <Image
                className="my-11 h-[120px] w-[120px]"
                src={`${thirdSection.image.url}`}
                alt="PRIME Logo"
                width={120}
                height={120}
              />
            )}
            <DeltaPurpleButton
              typographyClass="text-[15px]"
              label="GET PRIME"
              hasArrowRight={false}
              onClick={openModal}
            />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-center text-[32px] font-bold mt-4 dark:text-white text-[#6B70ED]">
              {fourthSection?.title}
            </p>
            <div className="text-center text-[24px] font-normal mt-1 dark:text-white text-[#6B70ED] md:max-w-[80%]">
              {fourthSection?.mainText &&
                documentToReactComponents(fourthSection.mainText.json, options)}
            </div>
            {fourthSection?.image && (

              <Image
                className="my-11 h-[120px] w-[120px]"
                src={`${fourthSection.image.url}`}
                alt="sPRIME Logo"
                width={120}
                height={120}
              />
            )}
            <DeltaPurpleButton
              typographyClass="text-[15px]"
              label="MINT sPrime"
              isUppercase={false}
              hasArrowRight={false}
              href="//app.deltaprime.io"
            />
          </div>
        </div>
      </div>

      {/* sPRIME Allows anyone to */}
      <div className="my-mobile-spacing md:my-desktop-spacing rounded-[20px] flex-1 p-4 parentColoredBorderWrapper">
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
      <div className="my-mobile-spacing md:my-desktop-spacing rounded-[20px] flex-1 p-4 parentColoredBorderWrapper">
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

      <div className="my-mobile-spacing md:my-desktop-spacing flex lg:flex-row flex-col-reverse justify-center items-center w-full md:gap-5 gap-2">
        <div className="rounded-[25px] ">
        {fifthSection?.image && (
          <Image
            className={`rounded-[20px] mr-2 md:mr-10 w-full xl:h-auto md:h-[600px] md:w-[500px] xl:max-w-[550px] object-cover hidden md:block ${
              resolvedTheme === "dark" ? "shadow-custom-dark" : "shadow-custom-light"
            }`}
            src={`${fifthSection.image.url}`}
            alt={fifthSection.image.title}
            width={fifthSection.image.width}
            height={fifthSection.image.height}
          />
        )}
        </div>

        <div className="flex flex-col w-full justify-between items-center lg:items-start h-fit lg:w-fit">
          <h3 className="brightText text-center md:text-left text-wrap max-w-full mb-4 text-3xl md:text-[44px] dark:text-white text-[#6B70ED]">
            {fifthSection?.title}
          </h3>

          <div className="whiteMainText pl-3 md:pl-0 text-[15px] md:text-[17px] md:leading-[25.5px] leading-5 max-w-[40rem] dark:text-white text-[#565AC2] ">
            {fifthSection?.mainText &&
              documentToReactComponents(fifthSection.mainText.json, options)}
          </div>

          {/* for mobile view */}
          {fifthSection?.image && (
            <Image
              className={`rounded-[20px] my-5 mb-4 mx-auto h-[500px] w-auto block md:hidden ${
                resolvedTheme === "dark" ? "shadow-custom-dark" : "shadow-custom-light"
              }`}
              src={`${fifthSection.image.url}`}
              alt={fifthSection.image.title}
              width={fifthSection.image.width}
              height={fifthSection.image.height}
            />
          )}
        </div>
      </div>

      {/* Second Section */}
      <div className="my-mobile-spacing md:my-desktop-spacing">
        <p className="brightText text-wrap mb-4 text-3xl md:text-[44px] dark:text-white text-[#6B70ED] text-center">
          {sixthSection?.title}
        </p>
        <div className="whiteMainText dark:text-white text-[#565AC2] text-wrap max-w-[95%] text-[15px] md:text-[17px] md:leading-[25.5px] leading-5 mb-0 text-center">
          {sixthSection?.mainText &&
            documentToReactComponents(sixthSection.mainText.json, options)}
        </div>
      </div>

      {/* graph */}
      <div className="my-mobile-spacing md:my-desktop-spacing flex flex-col items-center md:items-center h-fit flex-grow">
        <div className="text-left flex flex-col gap-4">
          <p className="brightText text-center max-w-xl text-3xl md:text-[44px] dark:text-white text-[#6B70ED]">
            {seventhSection?.title || "Token Distribution"}
          </p>
        </div>
        <div className="w-full relative flex flex-col md:flex-row md:pl-0 xl:pl-[13rem] 2xl:pl-[14rem]">
          <div className="lg:w-1/2">
            <TokenomicsGraph chartData={seventhSection?.chartData || []} />
          </div>
          <div className="pt-4 mb:pb-0 pb-10 md:pt-20 md:pl-20 mx-auto md:mx-0 lg:w-1/2">
            <TokenomicsList tokenomicsData={seventhSection?.chartData || []} />
          </div>
        </div>
        <div>
          {seventhSection?.mainText &&
              documentToReactComponents(seventhSection.mainText.json, options)}
        </div>
      </div>
      {/* end of graph */}

      <div className="my-mobile-spacing md:my-desktop-spacing flex flex-col-reverse md:flex-row justify-between items-start w-full gap-10">
        {/* Text Wrapper */}
        <div className="flex flex-col justify-between items-center md:items-start h-fit flex-grow">
          <div className="text-left flex flex-col gap-4 dark:text-white text-[#252948] w-full">
            <div className="clearfix">
              {/* image that shows on desktop only */}
              {eigthSection?.image && (

                <Image
                  className={`rounded-[20px] float-right ml-10 w-full lg:w-1/2 hidden lg:block  ${
                    resolvedTheme === "dark"
                      ? "shadow-custom-dark"
                      : "shadow-custom-light"
                  }`}
                  src={`${eigthSection.image.url}`}
                  alt="deltaprime_mascot_img"
                  width={eigthSection.image.width}
                  height={eigthSection.image.height}
                />
              )}

              <div className="flex items-center flex-col">
                {" "}
                <p className="brightText text-center md:text-left text-wrap mb-4 text-2xl md:text-[44px] dark:text-white text-[#6B70ED]">
                  {eigthSection?.title}
                </p>
                <div className="whiteMainText text-wrap text-[15px] md:text-[17px] md:leading-[25.5px] leading-5 mb-2 min-w-full font-normal dark:text-white text-[#565AC2] text-left">
                  {eigthSection?.mainText &&
                    documentToReactComponents(eigthSection.mainText.json, options)}
                </div>
              </div>

              {eigthSection?.image && (
                <Image
                  className={`rounded-[20px] float-right ml-10 mb-4 w-full lg:w-1/2 block lg:hidden mt-2  ${
                    resolvedTheme === "dark"
                      ? "shadow-custom-dark"
                      : "shadow-custom-light"
                  }`}
                  src={`${eigthSection.image.url}`}
                  width={eigthSection.image.width}
                  height={eigthSection.image.height}
                  alt="deltaprime_mascot_img"
                />
              )}

            </div>
          </div>
        </div>
      </div>
      <SecuritySection />
      <ContactForm />
    </div>
  );
};