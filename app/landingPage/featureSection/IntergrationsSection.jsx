import React from "react";
import IntegrationCarousel from "../carousels/integrationCarousel";
import Header from "@/app/components/header/header";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const IntergrationsSection = ({sixthSection, options}) => {
  return (
    <div className="my-mobile-spacing md:my-desktop-spacing ">
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
