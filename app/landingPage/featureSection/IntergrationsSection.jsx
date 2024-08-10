import React from "react";
import IntegrationCarousel from "../carousels/integrationCarousel";
import Header from "@/app/components/header/header";

const IntergrationsSection = () => {
  return (
    <div className="md:mt-32 md:mb-28 mt-12 mb-0">
      <Header
        subTitle="Intergrations"
        paragraph="We love our partners! Our integrations provide our community novel ways of actioning strategies and unlocking trapped liquidity throughout our integrated ecosystems.
"
      />
      <IntegrationCarousel />
    </div>
  );
};

export default IntergrationsSection;
