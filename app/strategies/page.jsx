import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./strategiesPage.css";
import { CTAButton, MainButton } from "@/app/components/buttons/mainButton";
import strategiesIntroImg from "@/public/assets/img/images/strategieHeroImage.jpg";
import rectangleImg from "@/public/assets/img/blogImages/rectangleImg.jpg";

import UnlockPotentialContainer from "@/app/components/unlockPotentialContainer/unlockPotentialContainer";
import ContactForm from "@/app/ui/contactForm/contactForm";
import { fetchStrategies } from "@/lib/getBlogs";
import {
  StratDesktopFlipCards,
  FlipCardMobileCarousel,
} from "@/app/strategies/strategyFlipCards";

const strategies = await fetchStrategies();

const StrategiesPage = () => {
  // get strat data here since its server component
  return (
    <div className="px-4 md:px-[6%] lg:px-[8%] xl:px-[12%] 2xl:px-[15%]">
      {/* intro */}
      <div className="flex md:flex-row flex-col justify-center items-center w-full gap-20 mb-20 md:mb-40">
        {/* Text Wrapper */}
        <div className="flex flex-col md:mb-8 mb-0 justify-between items-center md:items-start h-fit">
          <div className="text-left flex flex-col gap-8 dark:text-white text-[#252948]">
            <p className="brightText text-wrap max-w-xl mb-4 text-3xl md:text-[44px]">
              Strategies
            </p>
            <p className="whiteMainText text-wrap max-w-[35rem] text-[15px] md:text-[17px] md:leading-[25.5px] leading-5 mb-10 ">
              DeltaPrime allows for a range of new and unique strategies. Every
              strategy is accompanied by a practical example, getting deeper
              into the risk and rewards of the specific strategy.
            </p>
            <Link href="?modal=true">
              <CTAButton
                className="w-[100%] md:w-fit px-8 py-4"
                label="LAUNCH APP"
                hasArrowRight={true}
                typographyClass="text-[15px]"
              />
            </Link>
          </div>
        </div>
        {/* Image burd */}
        <div className="w-fit">
          <Image src={strategiesIntroImg} alt="deltaprime_mascot_img" />
        </div>
      </div>

      {/* cards */}
      <div>
        {/* Dektop Cards */}
        <StratDesktopFlipCards strategies={strategies} />
        {/* Mobile Cards */}
        <FlipCardMobileCarousel strategies={strategies} />
        {/* Unlock full potential button reponsive component */}
        <div>
          <UnlockPotentialContainer hasMarginTop={false} />
          {/* Show this button only on mobile */}
          <div className="fullWidthButtonChildren h-[60px] md:h-full block md:hidden my-10 w-full text-center">
            <Link href="?modal=true">
              <CTAButton
                className="mx-auto px-8 py-4"
                label="LAUNCH APP"
                hasArrowRight={true}
                typographyClass="text-[15px]"
              />
            </Link>
          </div>
        </div>

        {/* other text */}
        <div className="flex md:flex-row flex-col justify-between items-center w-full gap-20 my-10 md:my-40">
          {/* Text Wrapper */}
          <div className="flex flex-col items-center md:items-start dark:text-white text-[#252948] md:mb-14 max-w-96">
            <h4 className="uppercase mb-2 featureTitle md:text-[15px] text-[12 px] text-gray-400 leading-6 md:text-left text-center">
              STRATEGIES
            </h4>
            <h1 className="mb-6 featureSubtitle text-[24px] md:text-left text-center">
              Do you want to learn more about strategies?
            </h1>
            <p className="max-w-2xl text-[13px] md:leading-6 sm:text-[17px] leading-4 md:text-left text-center">
              Our vibrant community is on a mission to discuss and explore a
              breadth of mainstream and unique strategic approaches through
              DeltaPrime. Join our community discussions on Discord and discover
              new approaches, learn from seasoned traders as well as share your
              own experiences.
            </p>
            <div className="mt-10 md:w-fit w-full">
              <Link
                href={"https://discord.com/invite/9bwsnsHEzD"}
                target="_blank"
              >
                <MainButton
                  className={"md:w-fit w-full"}
                  hasArrowRight={true}
                  label={"Join the discussion"}
                />
              </Link>
            </div>
          </div>
          {/* Image burd */}
          <div className="max-w-[650px]">
            <Image
              className="rounded-[20px]"
              src={rectangleImg}
              alt="deltaprime_mascot_img"
            />
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default StrategiesPage;
