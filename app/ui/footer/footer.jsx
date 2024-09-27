"use client"; // Ensure this component is only rendered on the client side

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FooterLogo } from "@/app/components/logo/logo";
import { DeltaPurpleButton } from "@/app/components/buttons/mainButton";
import "./footer.css";
import discordIcon from "@/public/assets/footerIcons/discordIcon.svg";
import xIcon from "@/public/assets/footerIcons/xIconWhite.svg";
import vectorIcon from "@/public/assets/footerIcons/vectorIcon.svg";
import githubIcon from "@/public/assets/footerIcons/githubIcon.svg";

const LogoButton = () => {
  return (
    <div className="flex flex-col gap-6 px-6 md:px-0 items-center md:items-start">
      <FooterLogo />
      <div className="w-full flex justify-center">
        {/* Show this button only on mobile */}
        <div className="fullWidthButtonChildren h-[60px] md:h-full hidden sm:block w-full text-center">
          <Link href="?modal=true" scroll={false}>
            <DeltaPurpleButton
              label="LAUNCH APP"
              hasArrowRight={true}
              typographyClass="text-[15px]"
            />
          </Link>
        </div>
        {/* Show this button only on mobile */}
        <div className="fullWidthButtonChildren h-[60px] md:h-full block sm:hidden w-full text-center">
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
  );
};

export function FooterTextLinks() {
  return (
    <div className="flex justify-center items-start">
      <div className="flex text-white items-center text-lg flex-col md:flex-row">
        <div className="space-y-4 text-center md:text-start mt-10 md:mt-0">
          <Link href="/our-story" className="block hover:text-gray-400 text-sm">
            Our Story
          </Link>
          <Link
            href="/strategies"
            className="block hover:text-gray-400 text-sm"
          >
            Strategies
          </Link>
          <Link href="/blogs" className="block hover:text-gray-400 text-sm">
            Burd Log
          </Link>
          <Link
            href="https://docs.deltaprime.io/"
            className="block hover:text-gray-400 text-sm"
          >
            Docs
          </Link>
        </div>
        <div className="block md:hidden my-10 w-[8rem] h-[2px] dark:bg-deltaColoredLinearGradientVertical bg-deltaPurpleLinearGradientVertical"></div>
        <div className="hidden md:block mx-0 md:mx-16 w-[2px] h-[8rem] dark:bg-deltaColoredLinearGradientVertical bg-deltaPurpleLinearGradientVertical"></div>
        <div className="space-y-4 md:text-start flex flex-col justify-center items-center md:items-start">
          <Link
            href="/our-story#job-description"
            className="block hover:text-gray-400 text-sm"
          >
            Careers
          </Link>
          <Link
            href="/how-to-videos"
            className="block hover:text-gray-400 text-sm"
          >
            How To Guides
          </Link>
          <Link
            href="/tokenomics"
            className="block hover:text-gray-400 text-sm"
          >
            Tokenomics
          </Link>
          <Link
            href="/blogs/academy/glossary"
            className="block hover:text-gray-400 text-sm"
          >
            Glossary
          </Link>
        </div>
      </div>
    </div>
  );
}

export function RoundButtonLinks({ hasText = true }) {
  return (
    <div className="flex flex-col gap-4 text-white items-center md:items-start">
      <div className="block md:hidden my-10 w-[8rem] h-[2px] dark:bg-deltaColoredLinearGradientVertical bg-deltaPurpleLinearGradientVertical"></div>
      {hasText && <p className="hover:text-gray-400 text-sm">Follow us</p>}
      <div className="flex flex-row gap-4">
        <Link href="https://discord.com/invite/9bwsnsHEzD" target="_blank">
          <Image src={discordIcon} alt="discord-round_logo" />
        </Link>
        <Link href="https://x.com/DeltaPrimeDefi" target="_blank">
          <Image src={xIcon} alt="x-round_logo" />
        </Link>
        <Link href="https://medium.com/@Delta_Prime" target="_blank">
          <Image src={vectorIcon} alt="vector-round_logo" />
        </Link>
        <Link href="https://github.com/DeltaPrimeLabs" target="_blank">
          <Image src={githubIcon} alt="github-round_logo" />
        </Link>
      </div>
    </div>
  );
}

const TermsOfUseFooter = ({ isTokenomics, isStrategies }) => {
  return (
    <div className="w-full py-6 md:mt-32 mt-11 md:px-0 px-7 relative">
      <div className="bg-deltaPurpleLinearGradient dark:bg-deltaColoredLinearGradient h-[2px] mb-4"></div>
      <div className="container flex flex-col-reverse sm:flex-row justify-between items-center text-white">
        <p className="text-sm text-center sm:text-left mt-6 md:mt-0">
          All rights reserved © DeltaPrime 2024
        </p>
        <div className="flex mt-4 sm:mt-0 text-sm justify-center sm:justify-end flex-wrap md:gap-0 gap-4 text-white">
          <Link href="/legals/terms-Of-Use" className="hover:text-gray-400 ">
            Terms of use
          </Link>
          <a
            href="/legals/privacy-And-Policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="mr-4">•</span>Privacy Policy
          </a>
          <Link
            href="/legals/tokenomics-Risk-Disclaimer"
            className="hover:text-gray-400 "
          >
            <span className="mr-4">•</span> Risk Disclosure Statement (Tokens)
          </Link>
        </div>
      </div>
      {isStrategies ? (
        <div className="container text-white mt-10">
          <p className="text-xs text-center mt-6 md:mt-0 mx-10">
            Strategies involve financial risk, including the potential loss of
            principal. They are intended for educational purposes only and do
            not constitute financial advice. Users should conduct their own
            research or consult with a financial advisor.
          </p>
        </div>
      ) : (
        !isTokenomics && (
          <div className="container text-white mt-10">
            <p className="text-xs text-center mt-6 md:mt-0 mx-10">
              Participation in DeFi and cryptocurrency investments carries
              significant risks, including potential loss of principal. This
              information is for educational purposes only and does not
              constitute financial advice. Users should conduct thorough
              research and consult with a financial advisor before engaging in
              any investment activities.
            </p>
          </div>
        )
      )}
    </div>
  );
};

export function Footer() {
  const pathname = usePathname();
  const [isTokenomics, setIsTokenomics] = useState(false);
  const [isStrategies, setIsStrategies] = useState(false);

  useEffect(() => {
    if (pathname.includes("/tokenomics")) {
      setIsTokenomics(true);
    } else {
      setIsTokenomics(false);
    }

    if (pathname.includes("/strategies")) {
      setIsStrategies(true);
    } else {
      setIsStrategies(false);
    }
  }, [pathname]);

  return (
    <>
      <div>
        <div className="w-full h-1 bg-gradient-to-b from-[#FFBB9B] from-10% via-[#FF8FB8] via-60% to-[#AFAFFF] to-80%" />
        <div className="pt-10 pb-4  dark:from-[#1b153c] dark:to-[#1b153c] bg-gradient-to-r from-[#504EC2] to-[#5A4EB5] relative z-[100] overflow-hidden sm:px-[5%] md:px-[8%] lg:px-[10%] xl:px-[16%] 2xl:px-[20%]">
          <div className="flex justify-between flex-wrap md:flex-row flex-col">
            <LogoButton />
            <FooterTextLinks />
            <RoundButtonLinks />
          </div>
          <TermsOfUseFooter
            isTokenomics={isTokenomics}
            isStrategies={isStrategies}
          />
        </div>
      </div>
    </>
  );
}

export default Footer;
