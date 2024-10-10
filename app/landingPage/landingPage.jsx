"use client";
import React from "react";
import "./landingPage.css";
import Carousel from "./carousels/logoCarousel";
import Features from "./featureSection/features";
import FeaturePrimeAccountSection from "@/app/landingPage/featureSection/featurePrimeAccount";
import DepositorSection from "@/app/landingPage/featureSection/depositorSection";
import Strategies from "@/app/landingPage/featureSection/strategiesSection";
import IntergrationsSection from "@/app/landingPage/featureSection/IntergrationsSection";
import IntroSection from "@/app/landingPage/featureSection/introSection";
import OurTokenSection from "@/app/landingPage/featureSection/ourTokenSection";
import AboutSection from "@/app/landingPage/featureSection/aboutSection";
import SecuritySection from "@/app/landingPage/featureSection/securitySection";
import BlogPreviewSection from "@/app/landingPage/featureSection/blogPreviewSection";
import ContactForm from "@/app/ui/contactForm/contactForm";
import { useTheme } from "next-themes";

const options = {
  renderText: (text) => {
    return text.split("\n").reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment];
    }, []);
  },
};

// Clean up the 2 divs with the same padding styling
const LandingPage = ({ blogPreviewCardData, totalTvl, sectionsCollection }) => {
  if (!sectionsCollection?.items) {
    return <div>No sections available</div>;
  }

  const sections = sectionsCollection.items;

  // Ensure sections have the proper IDs
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
  // console.log(introSection);
  const { resolvedTheme } = useTheme();

  return (
    <div>
      <IntroSection totalTvl={totalTvl} SectionDetails={introSection} options={options} />
      <Carousel secondSection={secondSection} options={options} />
      <div className="px-4 sm:px-[5%] md:px-[8%] lg:px-[10%] xl:px-[16%] 2xl:px-[18%]">
        <Features>
          <FeaturePrimeAccountSection thirdSection={thirdSection} options={options} />
          <DepositorSection fourthSection={fourthSection} options={options} />
          <Strategies fifthSection={fifthSection} options={options} />
          <IntergrationsSection sixthSection={sixthSection} options={options} />
        </Features>
        <OurTokenSection seventhSection={seventhSection} eighthSection={eighthSection} ninthSection={ninthSection} options={options} />
        
      </div>
      <AboutSection tenthSection={tenthSection} options={options} />
      <div
        className={`${
          resolvedTheme === "dark"
            ? "bg-gradient-to-r from-[#1b153c] from-10% via-[#1c2943] via-50% to-[#301e3e] to-80%"
            : "bg-gradient-to-r from-[#F4F4FF] from-10% via-[#FFF5F0] via-30% to-[#E8E8F2] to-50%"
        }`}
      >
        <BlogPreviewSection blogPreviewCardData={blogPreviewCardData} eleventhSection={eleventhSection} options={options} />
        <SecuritySection />
    {/* Contact Form Section with separate styling */}
    <div className="px-4 sm:px-[5%] md:px-[8%] lg:px-[10%] 2xl:px-[15%] pb-mobile-spacing md:pb-desktop-spacing"> 
      <ContactForm isLanding={true}/>
    </div>
      </div>
    </div>
  );
};

export default LandingPage;
