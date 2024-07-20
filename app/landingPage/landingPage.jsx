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

// todo: cleanup the 2 divs with the same styling
const LandingPage = ({ blogPreviewCardData }) => {
  return (
    <div>
      <IntroSection />
      <Carousel />
      <div className="sm:px-[5%] md:px-[8%] lg:px-[10%] 2xl:px-[15%]">
        <Features>
          <FeaturePrimeAccountSection />
          <DepositorSection />
          <Strategies />
          <IntergrationsSection />
        </Features>
        <OurTokenSection />
      </div>
      <AboutSection />
      <div className="sm:px-[5%] md:px-[8%] lg:px-[10%] 2xl:px-[15%] bg-gradient-to-r from-[#1b153c] from-10% via-[#1c2943] via-50% to-[#301e3e] to-80%">
        <BlogPreviewSection blogPreviewCardData={blogPreviewCardData} />
        <SecuritySection />
        <ContactForm />
      </div>
    </div>
  );
};

export default LandingPage;
