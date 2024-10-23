"use client";
import React, { useEffect, useState } from "react"; // Make sure to import these
import Image from "next/image";
import "./strategyPost.css";
import Link from "next/link";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import RichTextRenderer from "@/app/components/richTetxtRenderer/richTextRenderer";
import strategiesIntroImg from "@/public/assets/img/images/strategieHeroImage.jpg";
import { DeltaPurpleButton } from "@/app/components/buttons/mainButton";
import Header from "@/app/components/header/header";
import CryptoPreviewTables from "@/app/components/cryptoTables/cryptoTables";
import {
  DesktopCardCarousel,
  FlipCardMobileCarousel,
} from "@/app/strategies/strategyFlipCards";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

const sanitizeId = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
};

const extractTextFromChildren = (children) => {
  if (!Array.isArray(children)) {
    children = [children];
  }

  return children
    .map((child) => {
      if (typeof child === "string") {
        return child;
      } else if (React.isValidElement(child)) {
        return extractTextFromChildren(child.props.children);
      }
      return "";
    })
    .join("");
};

const StrategyDetail = ({ strategy, strategies }) => {
  const paragraph = documentToPlainTextString(strategy.strategyRichText);
  const strategyHeroImage =
    "https:" + strategy.strategyHeroImage.fields.file.url;

  const [headings, setHeadings] = useState([]);
  const [activeHeading, setActiveHeading] = useState(null);

  useEffect(() => {
    const collectedHeadings = [];
    const handleHeadingRender = (id, title) => {
      collectedHeadings.push({ id, title });
    };

    documentToReactComponents(strategy.strategyRichText, {
      renderNode: {
        [BLOCKS.HEADING_2]: (node, children) => {
          const text = extractTextFromChildren(children);
          const id = sanitizeId(text);
          handleHeadingRender(id, text);
          return (
            <h2 id={id} className="text-lg font-bold my-4">
              {children}
            </h2>
          );
        },
      },
    });

    setHeadings(collectedHeadings);

    const handleScroll = () => {
      let closestHeading = null;
      let closestDistance = Infinity;

      collectedHeadings.forEach((heading) => {
        const element = document.getElementById(heading.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = 100;
          const distance = rect.top - offset;

          if (distance >= 0 && distance < closestDistance) {
            closestDistance = distance;
            closestHeading = heading.id;
          }
        }
      });

      if (closestHeading) {
        setActiveHeading(closestHeading);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [strategy]);

  const handleScrollTo = (id) => (e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const yPosition =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };

  return (
    // Top page
    <div className="px-4 sm:px-0">
      {/* Desktop View */}
      <div className="pagePaddingMedium hidden md:block">
        <div className="my-mobile-spacing md:my-desktop-spacing flex md:flex-row flex-col justify-center items-center w-full gap-20 mb-2">
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
                  <DeltaPurpleButton
                    className="w-[100%] md:w-fit px-6 py-3"
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

      <div className="my-mobile-spacing md:my-desktop-spacing flex md:hidden md:flex-row flex-col justify-center items-center w-full gap-20 mb-2 md:mb-40">
        {/* Text Wrapper */}
        <div className="flex flex-col md:mb-8 mb-0 justify-between items-center md:items-start h-fit">
          <div className="text-left flex flex-col gap-8 dark:text-white text-[#252948]">
            <p className="brightText text-wrap max-w-xl mb-4 text-3xl md:text-[44px]">
              {strategy.strategyTitle}
            </p>
            <div className="w-full md:hidden block rounded-[25px]">
              <img
                className="rounded-[25px] max-w-full w-full"
                src={strategyHeroImage}
                alt="deltaprime_mascot_img rounded-[25px]"
              />
            </div>
            <p className="whiteMainText text-wrap max-w-[35rem] text-[15px] md:text-[17px] md:leading-[25.5px] leading-5 mb-5 dark:text-white text-[#565AC2]">
              {strategy.strategyDescription}
            </p>
            <div className="w-full md:block hidden">
              <Link href="?modal=true" scroll={false}>
                <DeltaPurpleButton
                  className="w-[100%] md:w-fit px-6 py-3"
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
          <img
            src={strategiesIntroImg}
            alt="deltaprime_mascot_img rounded-[25px]"
          />
        </div>
      </div>
      {/* Show this button only on mobile */}
      <div className="fullWidthButtonChildren h-[60px] md:h-full block md:hidden md:my-10 w-full text-center">
        <Link href="?modal=true" scroll={false}>
          <DeltaPurpleButton
            label="LAUNCH APP"
            hasArrowRight={true}
            typographyClass="text-[15px]"
          />
        </Link>
      </div>
      {/* Parent */}
      <div className="my-mobile-spacing md:my-desktop-spacing pagePaddingMedium postAndTablesWrapper flex flex-row gap-10 mt-20 mb-20">
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
            <div className="coloredBoxBorder max-w-[340px]">
              <div className="deltaWhiteLinearBG p-4 md:p-6 rounded-[30px] ">
                <p className="font-bold leading-6 uppercase text-[18px] text-[#6B70ED]">
                  Table of contents
                </p>
                <div className="w-full bg-black h-[2px] my-5" />
                <ul className="flex flex-col gap-4">
                  {headings.map((heading) => (
                    <div key={heading.id}>
                      <li>
                        <a
                          href={`#${heading.id}`}
                          onClick={handleScrollTo(heading.id)}
                          className={`text-[#565AC2] text-[15px] line-clamp-2 ${
                            activeHeading === heading.id ? "font-bold" : ""
                          }`}
                        >
                          <span className="text-[8px]">●</span> {heading.title}
                        </a>
                      </li>
                      <span className="bg-gray-200 h-[1px] w-1/2 -my-1 mx-auto"></span>
                    </div>
                  ))}
                </ul>
              </div>
            </div>{" "}
            {/* Sticky class added */}
            <CryptoPreviewTables />
          </div>
        </div>
      </div>

      {/* here are the swiper components */}
      <div className="my-mobile-spacing md:my-desktop-spacing">
        {/* Show this button only on mobile */}
        <div className="fullWidthButtonChildren h-[60px] md:h-full block md:hidden w-full text-center">
          <Link href="?modal=true" scroll={false}>
            <DeltaPurpleButton
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
