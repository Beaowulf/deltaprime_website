"use client";
import React from "react";
import Image from "next/image";
import "./strategyPost.css";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import RichTextRenderer from "@/app/components/richTetxtRenderer/richTextRenderer";
import adImg from "@/public/assets/img/adImg.png";
import {
  MainButton,
  AboutButtonDarkBG,
} from "@/app/components/buttons/mainButton";
import CryptoPreviewTables from "@/app/components/cryptoTables/cryptoTables";

const StrategyDetail = ({ strategy }) => {
  const paragraph = documentToPlainTextString(strategy.strategyRichText);

  return (
    // Top page
    <div className="pagePaddingMedium">
      <div>
        <div className="topsidestrategies">
          <div className="flex flex-col md:px-[200px] md:pt-[150px] p-10 pb-5 md:pb-[100px] box-border gap-8">
            {" "}
            <p className="brightText text-wrap max-w-xl text-3xl md:text-[44px]">
              {strategy.strategyTitle}
            </p>
            <p className="whiteMainText text-wrap max-w-[25rem] text-[13px] sm:text-lg sm:leading-6 leading-5 ">
              {strategy.strategyDescription}
            </p>
            <MainButton
              className="w-fit"
              label={"Launch App!"}
              hasArrowRight={true}
            />
          </div>
        </div>
      </div>

      {/*  Parent  */}
      <div className="postAndTablesWrapper flex flex-row gap-10 mt-10">
        {/* left side */}
        <div className="strategyPostWrapper ">
          <RichTextRenderer
            richTextDocument={strategy.strategyRichText}
            hasTakeaways={strategy?.strategyTakeaways?.length > 0}
          />
        </div>
        {/*  Right side */}
        <div className="boxWrapper hidden md:block w-full ">
          <div className="flex flex-col gap-10">
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
    </div>
  );
};

export default StrategyDetail;
