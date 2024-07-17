import React from "react";

// Sections for all 4 features
import FeaturePrimeAccount from "./featurePrimeAccount";
import DepositorSection from "./depositorSection";
import Strategies from "./strategiesSection";
import Intergrations from "./Intergrations";
import BlogsPage from "@/app/blogs/page";

const Features = () => {
  return (
    <>
      <FeaturePrimeAccount />
      <DepositorSection />
      <Strategies />
      <Intergrations />
      <BlogsPage />
    </>
  );
};

export default Features;
