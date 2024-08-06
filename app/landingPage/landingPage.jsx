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

// todo: cleanup the 2 divs with the same padding styling
const LandingPage = ({ blogPreviewCardData, totalTvl }) => {
  const { theme } = useTheme();

  return (
    <div>
      <IntroSection totalTvl={totalTvl} />
      <Carousel />
      <div className="px-4 sm:px-[5%] md:px-[8%] lg:px-[10%] xl:px-[16%] 2xl:px-[18%]">
        <Features>
          <FeaturePrimeAccountSection />
          <DepositorSection />
          <Strategies />
          <IntergrationsSection />
        </Features>
        <OurTokenSection />
      </div>
      <AboutSection />
      <div
        className={`${
          theme === "dark"
            ? "bg-gradient-to-r from-[#1b153c] from-10% via-[#1c2943] via-50% to-[#301e3e] to-80%"
            : "bg-gradient-to-r from-[#F4F4FF] from-10% via-[#FFF5F0] via-30% to-[#E8E8F2] to-50%"
        }`}
      >
        <BlogPreviewSection blogPreviewCardData={blogPreviewCardData} />
        <SecuritySection />
        <div
          className={`sm:px-[5%] md:px-[8%] lg:px-[10%] xl:px-[16%] 2xl:px-[20%] 
       `}
        >
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
