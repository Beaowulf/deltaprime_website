"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./ourStory.css";
import Link from "next/link";
import {
  DeltaPurpleButton,
  DeltaWhiteButton,
} from "@/app/components/buttons/mainButton";

import { getJobDescriptions } from "@/lib/jobData"; // Adjust import paths as necessary

import ContactForm from "@/app/ui/contactForm/contactForm";
import Header from "@/app/components/header/header";
import FounderCard from "./cards/founderCard";
import AdvisorCard from "./cards/advisorCard";

import AdvisorCardCarousel from "./carouselsForCards/advisorCardCarousel";
import FounderCardCarousel from "./carouselsForCards/founderCardCarousel";
import JobDescriptionBox from "@/app/our-story/jobDescriptionBox";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

export default function OurStoryClient({ storyData, tvtDataFormatted }) {
  const [jobDescriptions, setJobDescriptions] = useState([]);
  const sections = storyData;


  useEffect(() => {


    // Fetch job descriptions on the client side
    async function fetchJobs() {
      const jobs = await getJobDescriptions();
      setJobDescriptions(jobs);
    }

    fetchJobs();
  }, []);


  if (!sections || sections.length === 0) {
    return <div>No sections available for Our Story</div>;
  }
  const introSection = sections.find((section) => section.sectionId === 1);
  const secondSection = sections.find((section) => section.sectionId === 2);
  const thirdSection = sections.find((section) => section.sectionId === 3);
  const fourthSection = sections.find((section) => section.sectionId === 4);
  const fifthSection = sections.find((section) => section.sectionId === 5);
  const sixthSection = sections.find((section) => section.sectionId === 6);
  const seventhSection = sections.find((section) => section.sectionId === 7);
  const eighthSection = sections.find((section) => section.sectionId === 8);
  const ninthSection = sections.find((section) => section.sectionId === 9);
  const tenthSection = sections.find((section) => section.sectionId === 10);
  const eleventhSection = sections.find((section) => section.sectionId === 11);
  const twelfthSection = sections.find((section) => section.sectionId === 12);
  const thirteenthSection = sections.find(
    (section) => section.sectionId === 13
  );

  // Define rich text rendering options
  const options = {
    renderText: (text) => {
      // Replace `{{tvlData}}` with the actual TVL data
      return text
        .split("{{tvlData}}")
        .reduce((children, textSegment, index) => {
          // If it's after the first split, insert the dynamic value
          return [
            ...children,
            index > 0 && (
              <span
                key={index}
                className="font-semibold underline"
              >{`$${tvtDataFormatted} million`}</span>
            ),
            ...textSegment
              .split("\n")
              .reduce(
                (acc, segment, i) => [
                  ...acc,
                  i > 0 && <br key={`br-${i}`} />,
                  segment,
                ],
                []
              ),
          ];
        }, []);
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className="text-4xl font-bold ">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="text-3xl font-semibold">{children}</h2>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    },
  };

  return (
    <div>
      <div className="pagePaddingLarge">
        {/* intro */}
        {introSection && (
          <div className="my-mobile-spacing md:my-desktop-spacing flex lg:flex-row flex-col justify-between items-center w-full md:gap-20 gap-5">
            {/* Text Wrapper */}
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start h-fit">
              <div className="text-left flex flex-col gap-8">
                <p className="brightText text-wrap  mb-4 text-3xl md:text-[44px] dark:text-white text-[#6B70ED]">
                  {introSection.heading}
                </p>
                <div className="mb-4 aboutTypographyparagraphWhite font-medium leading-5 md:leading-6 max-w-xl text-left dark:text-white text-[#565AC2]">
                  {documentToReactComponents(
                    introSection.mainText.json,
                    options
                  )}
                </div>
                <div className="hidden w-full md:block ">
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
                <div className="fullWidthButtonChildren md:h-full block md:hidden md:my-10 w-full text-center">
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
              src={introSection.image.url}
              alt={introSection.image.title}
              layout="responsive"
              width={introSection.image.width}
              height={introSection.image.height}
              priority={true}
            />
            </div>
          </div>
        )}

        {/* other text */}
        <div className="my-mobile-spacing md:my-desktop-spacing flex lg:flex-row flex-col-reverse justify-between items-center w-full md:gap-20 gap-5">
          {/* Image */}
          <div className="w-fit rounded-[25px] max-w-[60rem]">
          <Image
            className="rounded-[20px] w-full h-auto md:h-full object-cover"
            src={secondSection.image.url}
            alt={secondSection.image.title}
            layout="responsive"
            width={secondSection.image.width}
            height={secondSection.image.height}
          />
          </div>
          {/* Text Wrapper */}
          <div className="flex flex-col lg:w-1/2 w-full justify-between items-center lg:items-end h-fit">
            <div className="text-left flex flex-col gap-8">
              <div className="flex flex-col items-start">
                <h2 className="mb-8 featureSubtitle md:text-[34px] text-[24px] text-left dark:text-white text-[#6B70ED]">
                  {secondSection.heading}
                </h2>
                <div className=" aboutTypographyparagraphWhite font-medium leading-5 md:leading-6 max-w-xl text-left dark:text-white text-[#565AC2]">
                  {documentToReactComponents(
                    secondSection.mainText.json,
                    options
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fullWidthButtonChildren md:h-full block md:hidden my-mobile-spacing w-full text-center">
          <Link href="?modal=true" scroll={false}>
            <DeltaPurpleButton
              label="LAUNCH APP"
              hasArrowRight={true}
              typographyClass="text-[15px]"
            />
          </Link>
        </div>

        {/* other text */}
        <div className="my-mobile-spacing md:my-desktop-spacing flex md:flex-row flex-col justify-around items-center w-full md:gap-20 gap-5 ">
          {/* Text Wrapper */}
          <div className="flex flex-col justify-between items-center md:items-start h-fit">
            <div className="text-left flex flex-col gap-8">
              <div className="flex flex-col items-start">
                <h2 className="mb-8 featureSubtitle md:text-[34px] text-[24px] text-left dark:text-white text-[#6B70ED]">
                  {thirdSection.heading}
                </h2>
                <div className=" font-medium leading-5 md:leading-6 height max-w-xl text-left dark:text-white text-[#565AC2]">
                  {documentToReactComponents(
                    thirdSection.mainText.json,
                    options
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Image */}
          <div className="w-fit">
            <Image
              className="rounded-[20px] w-full h-auto md:h-full object-cover"
              src={thirdSection.image.url}
              alt={thirdSection.image.title}
              layout="responsive"
              width={thirdSection.image.width}
              height={thirdSection.image.height}
            />
          </div>
        </div>

        <div className="my-mobile-spacing md:my-desktop-spacing flex lg:flex-row flex-col-reverse justify-between items-center w-full md:gap-20 gap-5">
          <div className="w-fit rounded-[25px] max-w-[60rem]">
          <Image
            className="rounded-[20px] w-full h-auto md:h-full object-cover"
            src={fourthSection.image.url}
            alt={fourthSection.image.title}
            layout="responsive"
            width={fourthSection.image.width}
            height={fourthSection.image.height}
          />

          </div>
          <div className="flex flex-col lg:w-1/2 w-full justify-between items-center lg:items-start h-fit">
            <h2 className="mb-8 featureSubtitle md:text-[34px] text-[24px] dark:text-white text-[#6B70ED] text-left">
              {fourthSection.heading}
            </h2>
            <div className="aboutTypographyparagraphWhite font-medium leading-5 md:leading-6 max-w-[55rem] dark:text-white text-[#565AC2]">
              {documentToReactComponents(fourthSection.mainText.json, options)}
            </div>
          </div>
        </div>

        <div>
          {/* Show this button only on mobile */}
          <div className="fullWidthButtonChildren md:h-full block md:hidden my-10 w-full text-center">
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
        <div className="my-mobile-spacing md:my-desktop-spacing">
          {fifthSection && (
            <Header
              hasSeperator={true}
              subTitle={fifthSection.heading}
              paragraph={documentToReactComponents(
                fifthSection.mainText.json,
                options
              )}
            />
          )}
          {/* Carousel for mobile view */}
          <FounderCardCarousel />
          {/* Only for Desktop view */}
          <div className="md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch justify-center hidden">
            {sixthSection && (
              <FounderCard
                imageSrc={sixthSection.image.url}
                name={sixthSection.heading}
                title={sixthSection.subheading}
                description={documentToReactComponents(
                  sixthSection.mainText.json,
                  options
                )}
                socialMediaLink={sixthSection.linkUrl}
              />
            )}
            {seventhSection && (
              <FounderCard
                imageSrc={seventhSection.image.url}
                name={seventhSection.heading}
                title={seventhSection.subheading}
                description={documentToReactComponents(
                  seventhSection.mainText.json,
                  options
                )}
                socialMediaLink={seventhSection.linkUrl}
              />
            )}
            {eighthSection && (
              <FounderCard
                imageSrc={eighthSection.image.url}
                name={eighthSection.heading}
                title={eighthSection.subheading}
                description={documentToReactComponents(
                  eighthSection.mainText.json,
                  options
                )}
                socialMediaLink={eighthSection.linkUrl}
              />
            )}
          </div>
        </div>
        {/* Unlock full potential button reponsive component */}
        <div>
          {/* Show this button only on mobile */}
          <div className="fullWidthButtonChildren md:h-full block md:hidden my-10 w-full text-center">
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
        <div className="my-mobile-spacing md:my-desktop-spacing">
          {ninthSection && (
            <Header
              hasSeperator={true}
              subTitle={ninthSection.heading}
              paragraph={documentToReactComponents(
                ninthSection.mainText.json,
                options
              )}
            />
          )}
          {/* Carousel for mobile view */}
          <AdvisorCardCarousel />
          {/* Only for Desktop view */}
          <div className="md:flex hidden flex-wrap gap-12 items-center justify-center">
            {tenthSection && (
              <AdvisorCard
                imageSrc={tenthSection.image.url}
                name={tenthSection.heading}
                position={tenthSection.subheading}
                subPosition={tenthSection.subposition}
                additionalInfo={documentToReactComponents(
                  tenthSection.mainText.json,
                  options
                )}
                socialMediaLink={tenthSection.linkUrl}
                usesTwitter={true}
              />
            )}
            {eleventhSection && (
              <AdvisorCard
                imageSrc={eleventhSection.image.url}
                name={eleventhSection.heading}
                position={eleventhSection.subheading}
                subPosition={eleventhSection.subposition}
                additionalInfo={documentToReactComponents(
                  eleventhSection.mainText.json,
                  options
                )}
                socialMediaLink={eleventhSection.linkUrl}
              />
            )}
            {twelfthSection && (
              <AdvisorCard
                imageSrc={twelfthSection.image.url}
                name={twelfthSection.heading}
                position={twelfthSection.subheading}
                subPosition={twelfthSection.subposition}
                additionalInfo={documentToReactComponents(
                  twelfthSection.mainText.json,
                  options
                )}
                socialMediaLink={twelfthSection.linkUrl}
              />
            )}
          </div>
        </div>
      </div>

      {/* join our team */}
      <div
        className="bg-purpleGradient w-full mt-mobile-spacing md:mt-desktop-spacing"
        id="job-description"
      >
        <div className="pagePaddingMedium px-4 py-mobile-spacing">
          <div className="flex justify-around flex-wrap px-4 md:px-0 items-center">
            <div className="flex flex-col items-start max-w-[30rem] mb-8 md:mb-0">
              <h4 className="uppercase mb-2 featureTitle md:text-[15px] text-[12 px] text-center text-white leading-6">
                {thirteenthSection.heading}
              </h4>
              <h2 className="mb-8 featureSubtitle md:text-[34px] text-[24px] text text-center text-white ">
                {thirteenthSection.subheading}
              </h2>
              <div className="aboutTypographyparagraph max-w-2xl md:leading-6 leading-4 !text-white">
                {documentToReactComponents(
                  thirteenthSection.mainText.json,
                  options
                )}
              </div>
            </div>

            <div className="flex flex-col items-stretch gap-8 mt-10 xl:mt-0">
                {jobDescriptions.map((job) => (
                  <JobDescriptionBox
                    key={job.slug}
                    title={job.jobTitle}
                    textOne={job.employmentType}
                    textTwo={job.workLocation}
                    textThree={job.jobCategory}
                    buttonElement={
                      <DeltaWhiteButton
                        isSmallbtn={true}
                        isLink={true}
                        forcePurpleArrow={true}
                        href={`/our-story/job-description/${job.slug}`}
                        typographyClass="text-[#565AC2]"
                        label={"Learn More"}
                        hasArrowRight={true}
                      />
                    }
                  />
                ))}
              </div>
          </div>
        </div>
      </div>

      <div className="sm:px-[5%] md:px-[8%] lg:px-[10%] xl:px-[16%] 2xl:px-[20%] px-4 my-mobile-spacing md:my-desktop-spacing">
        <ContactForm />
      </div>
    </div>
  );
}
