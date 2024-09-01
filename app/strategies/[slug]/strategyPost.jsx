"use client";
import React from "react";
import Image from "next/image";
import "./strategyPost.css";
import Link from "next/link";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import RichTextRenderer from "@/app/components/richTetxtRenderer/richTextRenderer";
import adImg from "@/public/assets/img/adImg.png";
import strategiesIntroImg from "@/public/assets/img/images/strategieHeroImage.jpg";
import strategiespostImg from "@/public/assets/img/flipCardBG.png";

import {
  MainButton,
  AboutButtonDarkBG,
  CTAButton,
} from "@/app/components/buttons/mainButton";
import Header from "@/app/components/header/header";
import CryptoPreviewTables from "@/app/components/cryptoTables/cryptoTables";
import {
  DesktopCardCarousel,
  FlipCardMobileCarousel,
} from "@/app/strategies/strategyFlipCards";

const StrategyDetail = ({ strategy, strategies }) => {
  const paragraph = documentToPlainTextString(strategy.strategyRichText);
  const strategyHeroImage =
    "https:" + strategy.strategyHeroImage.fields.file.url;

  return (
    // Top page
    <div className="px-4 sm:px-0">
      {/* Desktop View */}
      <div className="pagePaddingMedium hidden md:block">
        <div className="flex md:flex-row flex-col justify-center items-center w-full gap-20 mb-2">
          {/* Text Wrapper */}
          <div className="flex flex-col md:mb-8 mb-0 justify-between items-center md:items-start h-fit">
            <div className="text-left flex flex-col gap-8">
              <p className="brightText text-wrap max-w-xl mb-4 text-3xl md:text-[44px] dark:text-white text-[#6B70ED]">
                {strategy.strategyTitle}
              </p>
              <div className="w-full md:hidden block rounded-[25px]">
                <img
                  src={strategyHeroImage}
                  alt="deltaprime_mascot_img"
                  className=" rounded-[25px]"
                />
              </div>
              <p className="whiteMainText text-wrap max-w-[35rem] text-[15px] md:text-[17px] md:leading-[25.5px] leading-5 mb-5 dark:text-white text-[#565AC2]">
                {strategy.strategyDescription}
              </p>
              <div className="w-full md:block hidden">
                <Link href="?modal=true" scroll={false}>
                  <CTAButton
                    className="w-[100%] md:w-fit px-8 py-4"
                    label="LAUNCH APP"
                    hasArrowRight={true}
                    typographyClass="text-[15px]"
                  />
                </Link>
              </div>
              {/* Show this button only on mobile */}
              <div className="fullWidthButtonChildren h-[60px] md:h-full block md:hidden md:my-10 w-full text-center">
                <Link href="?modal=true" scroll={false}>
                  <CTAButton
                    className="mx-auto px-8 py-4"
                    label="LAUNCH APP"
                    hasArrowRight={true}
                    typographyClass="text-[15px]"
                  />
                </Link>
              </div>
            </div>
          </div>
          {/* Image burd */}
          <div className="w-fit md:block hidden rounded-[25px] max-w-[60rem]">
            <img
              src={strategyHeroImage}
              className="rounded-[25px] max-w-full w-full"
              alt="deltaprime_mascot_img "
            />
          </div>
        </div>
      </div>
      {/* <div className="hidden md:block">
        <div
          style={{
            backgroundImage: `url(${
              strategyHeroImage == "https://undefined"
                ? "/assets/img/flipCardBG.png"
                : strategyHeroImage
            })`,
          }}
          className="topsidestrategies bg-cover bg-no-repeat"
        >
          <div className="flex flex-col px-[100px] lg:px-[200px] pt-[150px] pb-[100px] box-border gap-8">
            <p className="brightText text-wrap max-w-xl text-3xl md:text-[44px]">
              {strategy.strategyTitle}
            </p>
            <p className="whiteMainText text-wrap max-w-[25rem] text-[13px] sm:text-lg sm:leading-6 leading-5">
              {strategy.strategyDescription}
            </p>
            <MainButton
              className="w-fit"
              label={"Launch App!"}
              hasArrowRight={true}
            />
          </div>
        </div>
      </div> */}

      {/* Mobile View */}
      {/* intro */}
      <div className="flex md:hidden md:flex-row flex-col justify-center items-center w-full gap-20 mb-2 md:mb-40">
        {/* Text Wrapper */}
        <div className="flex flex-col md:mb-8 mb-0 justify-between items-center md:items-start h-fit">
          <div className="text-left flex flex-col gap-8 dark:text-white text-[#252948]">
            <p className="brightText text-wrap max-w-xl mb-4 text-3xl md:text-[44px]">
              {strategy.strategyTitle}
            </p>
            <div className="w-full md:hidden block rounded-[25px]">
              <img
                src={strategyHeroImage}
                alt="deltaprime_mascot_img rounded-[25px]"
              />
            </div>
            <p className="whiteMainText text-wrap max-w-[35rem] text-[15px] md:text-[17px] md:leading-[25.5px] leading-5 mb-5">
              {strategy.strategyDescription}
            </p>
            <div className="w-full md:block hidden">
              <Link href="?modal=true" scroll={false}>
                <CTAButton
                  className="w-[100%] md:w-fit px-8 py-4"
                  label="LAUNCH APP"
                  hasArrowRight={true}
                  typographyClass="text-[15px]"
                />
              </Link>
            </div>
          </div>
        </div>
        {/* Image burd */}
        <div className="md:block hidden rounded-[25px]">
          <Image
            src={strategiesIntroImg}
            alt="deltaprime_mascot_img rounded-[25px]"
          />
        </div>
      </div>

      {/* Parent */}
      <div className="pagePaddingMedium postAndTablesWrapper flex flex-row gap-10 mt-10">
        {/* left side */}
        <div className="strategyPostWrapper">
          <RichTextRenderer
            richTextDocument={strategy.strategyRichText}
            hasTakeaways={strategy?.strategyTakeaways?.length > 0}
          />
        </div>
        {/* Right side */}
        <div className="rightSideBoxWrapper hidden md:block w-full">
          <div className="flex flex-col gap-10 sticky top-40">
            {" "}
            {/* Sticky class added */}
            <CryptoPreviewTables />
            <div className="flex flex-col gap-10 px-5 pt-8 rounded-[20px] bg-gradient-to-b from-[#FFBB9B] from-10% via-[#FF8FB8] via-60% to-[#AFAFFF] to-80%">
              <h3 className="text-[24px] text-[#1B153C] font-extrabold leading-9 tracking-[-0.72px]">
                This can be anything you want an ad, a new product anything
              </h3>
              <div className="sm:w-fit w-full featureBorderWrapLightTheme rounded-[20px]">
                <AboutButtonDarkBG
                  customClass="w-full"
                  hasWhiteArrowRight={true}
                  label={"LEARN MORE"}
                />
              </div>
              <Image src={adImg} alt="deltaPrime_mascot_Holding_Keys_" />
            </div>
          </div>
        </div>
      </div>

      {/* here are the swiper components */}
      <div>
        {/* Show this button only on mobile */}
        <div className="fullWidthButtonChildren h-[60px] md:h-full block md:hidden my-10 w-full text-center">
          <Link href="?modal=true" scroll={false}>
            <CTAButton
              className="mx-auto px-8 py-4"
              label="LAUNCH APP"
              hasArrowRight={true}
              typographyClass="text-[15px]"
            />
          </Link>
        </div>
        <Header
          title={"STRATEGIES"}
          subTitle={"Explore More Strategies"}
          paragraph={
            "We invite you to explore a broad range of strategies. Keep an eye on this space as more strategies are added as they are discovered and tested by our community."
          }
        />
        {/* Desktop Cards */}
        <DesktopCardCarousel strategies={strategies} />
        {/* Mobile Cards */}
        <FlipCardMobileCarousel strategies={strategies} />
      </div>
    </div>
  );
};

export default StrategyDetail;
