// "use client";
import React from "react";
import Image from "next/image";
import "./ourStory.css";
import Link from "next/link";
import { useTheme } from "next-themes";
import { fetchTvlData } from "@/lib/getCryptoData";
import {
  DeltaPurpleButton,
  DeltaWhiteButton,
} from "@/app/components/buttons/mainButton";
import ourStoryIntroImg from "@/public/assets/img/images/our-story-founders.png";
import rectangleImg from "@/public/assets/img//images/rectangle-Image.png";
import unlocked_Image from "@/public/assets/img//images/unlocked-image.png";
import whyDeltaPrimeImg from "@/public/assets/img/whyDeltaPrimeImg.jpg";
import ContactForm from "@/app/ui/contactForm/contactForm";
import Header from "@/app/components/header/header";
import FounderCard from "./cards/founderCard";
import AdvisorCard from "./cards/advisorCard";
import { BlogCardButton } from "@/app/components/buttons/mainButton";
import JakubImage from "@/public/assets/img/images/avatars/Jakub.png";
import KamilImage from "@/public/assets/img/images/avatars/Kamil.jpeg";
import PiotrImage from "@/public/assets/img/images/avatars/Piotr.png";
import WojciechImage from "@/public/assets/img/images/avatars/Wojciech.png";
import gavinImage from "@/public/assets/img/images/avatars/Gavin.png";
import avaxImage from "@/public/assets/img/images/avatars/hn_avax.png";
import AdvisorCardCarousel from "./carouselsForCards/advisorCardCarousel";
import FounderCardCarousel from "./carouselsForCards/founderCardCarousel";
import JobDescriptionBox from "@/app/our-story/jobDescriptionBox";
import { getOurStorySections } from "@/lib/ourStoryData";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from '@contentful/rich-text-types';


export default async function OurStory() {
  const tvlData = await fetchTvlData();
  const tvtDataFormatted = tvlData.totalTvl.slice(0, 2);
 
  const sections = await getOurStorySections();
  const introSection = sections.find(section => section.fields.sectionId === 1);
  const secondSection = sections.find(section => section.fields.sectionId === 2);
  const thirdSection = sections.find(section => section.fields.sectionId === 3);
  const fourthSection = sections.find(section => section.fields.sectionId === 4);
  const fifthSection = sections.find(section => section.fields.sectionId === 5);
  const sixthSection = sections.find(section => section.fields.sectionId === 6);
  const seventhSection = sections.find(section => section.fields.sectionId === 7);
  const eighthSection = sections.find(section => section.fields.sectionId === 8);
  const ninthSection = sections.find(section => section.fields.sectionId === 9);
  const tenthSection = sections.find(section => section.fields.sectionId === 10);
  const eleventhSection = sections.find(section => section.fields.sectionId === 11);
  const twelfthSection = sections.find(section => section.fields.sectionId === 12);
  const thirteenthSection = sections.find(section => section.fields.sectionId === 13);


  // Define rich text rendering options
  const options = {
    renderText: (text) => {
      // Replace `{{tvlData}}` with the actual TVL data
      return text.split('{{tvlData}}').reduce((children, textSegment, index) => {
        // If it's after the first split, insert the dynamic value
        return [
          ...children,
          index > 0 && <span key={index} className="font-semibold underline">{`$${tvtDataFormatted} million`}</span>,
          ...textSegment.split('\n').reduce((acc, segment, i) => (
            [...acc, i > 0 && <br key={`br-${i}`} />, segment]
          ), [])
        ];
      }, []);
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => <h1 className="text-4xl font-bold ">{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2 className="text-3xl font-semibold">{children}</h2>,
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    },
  };

  return (
    <div>
      <div className="pagePaddingLarge">
        {/* intro */}
        {introSection && (
        <div className="flex lg:flex-row flex-col justify-between items-center w-full md:gap-28 gap-5 my-10 md:my-40">
          {/* Text Wrapper */}
          <div className="flex flex-col md:flex-row md:mb-8 mb-0 justify-between items-center md:items-start h-fit">
            <div className="text-left flex flex-col gap-8">
              <p className="brightText text-wrap  mb-4 text-3xl md:text-[44px] dark:text-white text-[#6B70ED]">
                {introSection.fields.heading}
              </p>
              <div className="mb-4 aboutTypographyparagraphWhite font-medium leading-5 md:leading-6 max-w-xl text-left dark:text-white text-[#565AC2]">
                {documentToReactComponents(introSection.fields.mainText, options)}
              </div>
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
            </div>
          </div>
          {/* Image */}
          <div className="w-fit rounded-[25px] max-w-[60rem]">
            <Image
              className="rounded-[25px]"
              src={`https:${introSection.fields.image.fields.file.url}`}
              alt={introSection.fields.image.fields.title}
              width={introSection.fields.image.fields.file.details.image.width}
              height={introSection.fields.image.fields.file.details.image.height}
            />
          </div>
        </div>
        )}
        

        {/* other text */}
        <div className="flex lg:flex-row flex-col-reverse justify-between items-center w-full md:gap-20 gap-5 my-10 md:my-40">
          {/* Image */}
          <div className="w-fit rounded-[25px] max-w-[60rem]">
            <Image
              className="rounded-[20px] w-full h-auto md:h-full object-cover"
              src={`https:${secondSection.fields.image.fields.file.url}`}
              alt={secondSection.fields.image.fields.title}
              width={secondSection.fields.image.fields.file.details.image.width}
              height={secondSection.fields.image.fields.file.details.image.height}
            />
          </div>
          {/* Text Wrapper */}
          <div className="flex flex-col lg:w-1/2 w-full md:mb-8 mb-0 justify-between items-center lg:items-end h-fit">
            <div className="text-left flex flex-col gap-8">
              <div className="flex flex-col items-start mt-20 mb-10">
                <h2 className="mb-8 featureSubtitle md:text-[34px] text-[24px] text-left dark:text-white text-[#6B70ED]">
                  {secondSection.fields.heading}
                </h2>
                <div className="mb-4 aboutTypographyparagraphWhite font-medium leading-5 md:leading-6 max-w-xl text-left dark:text-white text-[#565AC2]">
                  {documentToReactComponents(secondSection.fields.mainText, options)}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fullWidthButtonChildren h-[60px] md:h-full block md:hidden my-10 w-full text-center">
          <Link href="?modal=true" scroll={false}>
            <DeltaPurpleButton
              label="LAUNCH APP"
              hasArrowRight={true}
              typographyClass="text-[15px]"
            />
          </Link>
        </div>

        {/* other text */}
        <div className="flex md:flex-row flex-col justify-around items-center w-full md:gap-20 gap-5 my-10 md:my-40">
          {/* Text Wrapper */}
          <div className="flex flex-col md:mb-8 mb-0 justify-between items-center md:items-start h-fit">
            <div className="text-left flex flex-col gap-8">
              <div className="flex flex-col items-start mt-20 mb-10">
                <h2 className="mb-8 featureSubtitle md:text-[34px] text-[24px] text-left dark:text-white text-[#6B70ED]">
                  {thirdSection.fields.heading}
                </h2>
                <div className="mb-4 aboutTypographyparagraphWhite font-medium leading-5 md:leading-6 height max-w-xl text-left dark:text-white text-[#565AC2]">
                  {documentToReactComponents(thirdSection.fields.mainText, options)}
                </div>
              </div>
            </div>
          </div>
          {/* Image */}
          <div className="w-fit">
            <Image
              className="rounded-[20px]"
              src={`https:${thirdSection.fields.image.fields.file.url}`}
              alt={thirdSection.fields.image.fields.title}
              width={thirdSection.fields.image.fields.file.details.image.width}
              height={thirdSection.fields.image.fields.file.details.image.height}
            />
          </div>
        </div>


        <div className="flex lg:flex-row flex-col-reverse justify-between items-center w-full md:gap-20 gap-5 my-10 md:my-40">
          <div className="w-fit rounded-[25px] max-w-[60rem]">
            <Image
              className="rounded-[20px] w-full h-auto md:h-full object-cover"
              src={`https:${fourthSection.fields.image.fields.file.url}`}
              alt={fourthSection.fields.image.fields.title}
              width={fourthSection.fields.image.fields.file.details.image.width}
              height={fourthSection.fields.image.fields.file.details.image.height}
            />
          </div>
          <div className="flex flex-col lg:w-1/2 w-full md:mb-8 mb-0 justify-between items-center lg:items-start h-fit">
            <h2 className="mb-8 featureSubtitle md:text-[34px] text-[24px] dark:text-white text-[#6B70ED] text-left">
              {fourthSection.fields.heading}
            </h2>
            <div className="aboutTypographyparagraphWhite font-medium leading-5 md:leading-6 max-w-[55rem] mb-6 dark:text-white text-[#565AC2]">
              {documentToReactComponents(fourthSection.fields.mainText, options)}
            </div>
          </div>
        </div>


        <div>
          {/* Show this button only on mobile */}
          <div className="fullWidthButtonChildren h-[60px] md:h-full block md:hidden my-10 w-full text-center">
            <Link href="?modal=true" scroll={false}>
              <DeltaPurpleButton
                label="LAUNCH APP"
                hasArrowRight={true}
                typographyClass="text-[15px]"
              />
            </Link>
          </div>
        </div>

        {/* team */}
        <div className="mt-20">
          {fifthSection && (
              <Header
                hasSeperator={true}
                subTitle={fifthSection.fields.heading}
                paragraph={documentToReactComponents(fifthSection.fields.mainText, options)}
              />
          )}
          {/* Carousel for mobile view */}
          <FounderCardCarousel />
          {/* Only for Desktop view */}
          <div className="md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch justify-center hidden">
            {sixthSection && (
              <FounderCard
                imageSrc={`https:${sixthSection.fields.image.fields.file.url}`}
                name={sixthSection.fields.heading}
                title={sixthSection.fields.subheading}
                description={documentToReactComponents(sixthSection.fields.mainText, options)}
                socialMediaLink={sixthSection.fields.linkUrl}
              />
            )}
            {seventhSection && (
              <FounderCard
                imageSrc={`https:${seventhSection.fields.image.fields.file.url}`}
                name={seventhSection.fields.heading}
                title={seventhSection.fields.subheading}
                description={documentToReactComponents(seventhSection.fields.mainText, options)}
                socialMediaLink={seventhSection.fields.linkUrl}
              />
            )}
            {eighthSection && (
              <FounderCard
                imageSrc={`https:${eighthSection.fields.image.fields.file.url}`}
                name={eighthSection.fields.heading}
                title={eighthSection.fields.subheading}
                description={documentToReactComponents(eighthSection.fields.mainText, options)}
                socialMediaLink={eighthSection.fields.linkUrl}
              />
            )}
          </div>
        </div>
        {/* Unlock full potential button reponsive component */}
        <div>
          {/* Show this button only on mobile */}
          <div className="fullWidthButtonChildren h-[60px] md:h-full block md:hidden my-10 w-full text-center">
            <Link href="?modal=true" scroll={false}>
              <DeltaPurpleButton
                label="LAUNCH APP"
                hasArrowRight={true}
                typographyClass="text-[15px]"
              />
            </Link>
          </div>
        </div>
        {/* advisors */}
        <div className="mt-40">
          {ninthSection && (
              <Header
                hasSeperator={true}
                subTitle={ninthSection.fields.heading}
                paragraph={documentToReactComponents(ninthSection.fields.mainText, options)}
              />
          )}
          {/* Carousel for mobile view */}
          <AdvisorCardCarousel />
          {/* Only for Desktop view */}
          <div className="md:flex hidden flex-wrap gap-12 items-center justify-center">
            {tenthSection && (
              <AdvisorCard
                imageSrc={`https:${tenthSection.fields.image.fields.file.url}`}
                name={tenthSection.fields.heading}
                position={tenthSection.fields.subheading}
                subPosition={tenthSection.fields.subposition}
                additionalInfo={documentToReactComponents(tenthSection.fields.mainText, options)}
                socialMediaLink={tenthSection.fields.linkUrl}
                usesTwitter={true}
              />
            )}
            {eleventhSection && (
              <AdvisorCard
                imageSrc={`https:${eleventhSection.fields.image.fields.file.url}`}
                name={eleventhSection.fields.heading}
                position={eleventhSection.fields.subheading}
                subPosition={eleventhSection.fields.subposition}
                additionalInfo={documentToReactComponents(eleventhSection.fields.mainText, options)}
                socialMediaLink={eleventhSection.fields.linkUrl}
              />
            )}
            {twelfthSection && (
              <AdvisorCard
                imageSrc={`https:${twelfthSection.fields.image.fields.file.url}`}
                name={twelfthSection.fields.heading}
                position={twelfthSection.fields.subheading}
                subPosition={twelfthSection.fields.subposition}
                additionalInfo={documentToReactComponents(twelfthSection.fields.mainText, options)}
                socialMediaLink={twelfthSection.fields.linkUrl}
              />
            )}
          </div>
        </div>
      </div>

      {/* join our team */}
      <div className="bg-purpleGradient w-full mt-40" id="job-description">
        <div className="pagePaddingMedium px-4 py-32">
          <div className="flex justify-around flex-wrap px-4 md:px-0 items-center">
            <div className="flex flex-col items-start max-w-[30rem] mb-8 md:mb-0">
              <h4 className="uppercase mb-2 featureTitle md:text-[15px] text-[12 px] text-center text-white leading-6">
              {thirteenthSection.fields.heading}
              </h4>
              <h2 className="mb-8 featureSubtitle md:text-[34px] text-[24px] text text-center text-white ">
              {thirteenthSection.fields.subheading}
              </h2>
              <div className="aboutTypographyparagraph max-w-2xl md:leading-6 leading-4 !text-white">
                {documentToReactComponents(thirteenthSection.fields.mainText, options)}
              </div>
            </div>

            <div className="flex flex-col items-stretch gap-8 mt-10 xl:mt-0">
              {/* First Box */}

              <JobDescriptionBox
                title="Smart Contract Developer"
                textOne="FULL-TIME"
                textTwo="REMOTE"
                textThree="DEVELOPER"
                buttonElement={
                  <DeltaWhiteButton
                    isSmallbtn={true}
                    isLink={true}
                    forcePurpleArrow={true}
                    href="/job-description/Smart-Contract-Developer"
                    typographyClass="text-[#565AC2]"
                    label={"Learn More"}
                    hasArrowRight={true}
                  />
                }
              />
              <JobDescriptionBox
                title="Senior DevOps Engineer"
                textOne="FULL-TIME"
                textTwo="REMOTE"
                textThree="DEVELOPER"
                buttonElement={
                  <DeltaWhiteButton
                    isSmallbtn={true}
                    isLink={true}
                    forcePurpleArrow={true}
                    href="/job-description/Senior-DevOps-Engineer"
                    typographyClass="text-[#565AC2]"
                    label={"Learn More"}
                    hasArrowRight={true}
                  />
                }
              />

              {/* Second Box */}
            </div>
          </div>
        </div>
      </div>

      <div className="sm:px-[5%] md:px-[8%] lg:px-[10%] xl:px-[16%] 2xl:px-[20%] px-4">
        <ContactForm />
      </div>
    </div>
  );
};