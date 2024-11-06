import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./strategiesPage.css";
import {
  DeltaPurpleButton,
  MainButton,
} from "@/app/components/buttons/mainButton";
import strategiesIntroImg from "@/public/assets/img/images/strategieHeroImage.jpg";
import rectangleImg from "@/public/assets/img/blogImages/rectangleImg.jpg";

import UnlockPotentialContainer from "@/app/components/unlockPotentialContainer/unlockPotentialContainer";
import ContactForm from "@/app/ui/contactForm/contactForm";
import { fetchStrategies } from "@/lib/getBlogs";
import {
  StratDesktopFlipCards,
  FlipCardMobileCarousel,
} from "@/app/strategies/strategyFlipCards";

// Fetch strategies
const strategies = await fetchStrategies();

export const metadata = {
  title: "Strategies | Delta Prime",
  description:
    "Explore DeltaPrime's unique strategies, each accompanied by practical examples, offering insights into the risk and rewards of various strategic approaches.",
};

const StrategiesPage = () => {
  return (
    <div className="">
      {/* Intro */}
      <div className="my-mobile-spacing md:my-desktop-spacing flex md:flex-row flex-col justify-center items-center w-full gap-20 pagePaddingLarge">
        <div className="flex flex-col justify-between items-center md:items-start h-fit">
          <div className="text-left flex flex-col gap-8">
            <p className="brightText text-wrap max-w-xl text-3xl md:text-[44px] dark:text-white text-[#6B70ED]">
              Strategies
            </p>
            <div className="w-full md:hidden block rounded-[25px]">
              <Image
                src={strategiesIntroImg}
                alt="deltaprime_mascot_img rounded-[25px]"
              />
            </div>
            <p className="whiteMainText text-wrap max-w-[35rem] text-[15px] md:text-[17px] md:leading-[25.5px] leading-5 mb-5 dark:text-white text-[#565AC2]">
              DeltaPrime allows for a range of new and unique strategies. Every
              strategy is accompanied by a practical example, getting deeper
              into the risk and rewards of the specific strategy.
            </p>
            <div className="w-full md:block hidden">
              <Link href="?modal=true" scroll={false}>
                <DeltaPurpleButton
                  label="LAUNCH APP"
                  hasArrowRight={true}
                  typographyClass="text-[15px]"
                />
              </Link>
            </div>
            <div className="fullWidthButtonChildren md:h-full block md:hidden md:my-10 w-full text-center">
              <Link href="?modal=true" scroll={false}>
                <DeltaPurpleButton
                  label="LAUNCH APP"
                  hasArrowRight={true}
                  typographyClass="text-[15px]"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-fit md:block hidden rounded-[25px]">
          <Image
            className="rounded-[25px]"
            src={strategiesIntroImg}
            alt="deltaprime_mascot_img rounded-[25px]"
          />
        </div>
      </div>

      {/* Cards */}
      <div className="my-mobile-spacing md:my-desktop-spacing pagePaddingLarge">
        <StratDesktopFlipCards strategies={strategies} />
        <FlipCardMobileCarousel strategies={strategies} />
        <div>
          <div className="my-mobile-spacing fullWidthButtonChildren md:h-full block md:hidden w-full text-center">
            <Link href="?modal=true" scroll={false}>
              <DeltaPurpleButton
                label="LAUNCH APP"
                hasArrowRight={true}
                typographyClass="text-[15px]"
              />
            </Link>
          </div>
        </div>

        <div className="my-mobile-spacing md:my-desktop-spacing flex md:flex-row flex-col justify-between items-center w-full gap-20">
          <div className="flex flex-col items-center md:items-start max-w-96">
            <h4 className=" uppercase featureTitle md:text-[15px] text-[12px] text-gray-400 leading-6 md:text-left text-center dark:text-white text-[#6B70ED]">
              STRATEGIES
            </h4>
            <h2 className="featureSubtitle text-[24px] md:text-left text-center dark:text-white text-[#6B70ED]">
              Do you want to learn more about strategies?
            </h2>
            <p className="max-w-2xl text-[13px] md:leading-6 sm:text-[17px] leading-4 md:text-left text-center dark:text-white text-[#565AC2]">
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
          <div className="max-w-[650px]">
            <Image
              className="rounded-[20px]"
              src={rectangleImg}
              alt="deltaprime_mascot_img"
            />
          </div>
        </div>
        <div className="">
          <ContactForm hasUnlockPotentialContainer={false} />
        </div>
      </div>
    </div>
  );
};

export default StrategiesPage;
