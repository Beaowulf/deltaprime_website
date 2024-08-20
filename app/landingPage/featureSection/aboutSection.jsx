"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import homeAvalanche from "@/public/assets/img/images/home-avalanche.png";
import homeArbitrum from "@/public/assets/img/images/home-arbitrum.png";
import { BlogCardButton } from "@/app/components/buttons/mainButton";

const ImageComponent = () => {
  const [showFirstImage, setShowFirstImage] = useState(true);
  const [initialSpin, setInitialSpin] = useState(true);

  useEffect(() => {
    const initialTimeout = setTimeout(() => {
      setInitialSpin(false);
      setShowFirstImage((prev) => !prev);
      // Set an interval to continue spinning every 5 seconds
      const interval = setInterval(() => {
        setShowFirstImage((prev) => !prev);
      }, 5800);

      return () => clearInterval(interval);
    }, 1200); // Initial spin for 1500ms

    return () => clearTimeout(initialTimeout);
  }, []);

  return (
    <div className="content-image__wrapper spinner">
      <Image
        className={`content-image ${
          showFirstImage ? "" : "content-image--hidden"
        }`}
        src={homeAvalanche}
        alt="DeltaPrime"
      />
      <Image
        className={`content-image ${
          showFirstImage ? "content-image--hidden" : ""
        }`}
        src={homeArbitrum}
        alt="DeltaPrime"
      />
    </div>
  );
};

function AboutSection() {
  return (
    <div className="aboutSectionBG flex md:flex-row flex-col items-center justify-between bg-cover bg-no-repeat px-4 pb-10 sm:px-6 md:px-[8%] lg:px-[10%] xl:px-[15%] ">
      {/* Left Side */}
      <div className="w-full md:w-1/2">
        <h4 className="pt-24  aboutTypographytitle">OUR STORY</h4>
        <h1 className="aboutTypographysubtitle">Lava Doesn’t Melt Diamonds</h1>
        <p className="pt-8 pb-14 aboutTypographyparagraph">
          Our story begins on the foothills of Mount Etna, Europe’s largest
          volcano. It was here that the idea of DeltaPrime was born. A brand on
          a mission to reshape the future of DeFi, forging it in the fires of
          innovation and resilience.
        </p>
        <div className="sm:w-fit w-full featureBorderWrapLightTheme rounded-[20px]">
          <BlogCardButton
            fullWidth={true}
            hasArrowRight={true}
            label={"LEARN MORE"}
          />
        </div>
      </div>
      {/* Right Side */}
      <div className="px-10 pt-10 w-full md:w-1/2 flex justify-center">
        <div className="w-fit">
          <ImageComponent />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
