import React from "react";
import IntegrationCarousel from "../carousels/integrationCarousel";
import Header from "@/app/components/header/header";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const IntergrationsSection = ({sixthSection, options}) => {
  return (
    <div className="md:mt-32 md:mb-28 mt-12 mb-0">
      <Header
        hasSeperator={true}
        subTitle={sixthSection.heading}
        paragraph={documentToReactComponents(sixthSection.mainText.json, options)}
      />
      <IntegrationCarousel />
    </div>
  );
};

export default IntergrationsSection;
