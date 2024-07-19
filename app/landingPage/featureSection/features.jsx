import React from "react";

// Sections for all 4 features
import FeaturePrimeAccount from "./featurePrimeAccount";
import DepositorSection from "./depositorSection";
import Strategies from "./strategiesSection";
import Intergrations from "./IntergrationsSection";
import OurTokenSection from "./ourTokenSection";
import AboutSection from "./aboutSection";
import SecuritySection from "./securitySection";

const Features = () => {
  return (
    <>
      <div className="px-4 sm:px-6 md:px-[4%] lg:px-[10%] 2xl:px-[15%]">
        <FeaturePrimeAccount />
        <DepositorSection />
        <Strategies />
        <Intergrations />
        <OurTokenSection />
      </div>
      <AboutSection />
      <div className="px-4 sm:px-6 md:px-[4%] lg:px-[5%] 2xl:px-[15%]">
        <SecuritySection />
      </div>
    </>
  );
};

export default Features;
