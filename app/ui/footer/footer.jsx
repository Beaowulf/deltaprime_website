"use client"; // Ensure this component is only rendered on the client side

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FooterLogo } from "@/app/components/logo/logo";
import { CTAButton } from "@/app/components/buttons/mainButton";
import "./footer.css";

// Social Media Round Images
import discordIcon from "@/public/assets/footerIcons/discordIcon.svg";
import xIcon from "@/public/assets/footerIcons/xIcon.svg";
import vectorIcon from "@/public/assets/footerIcons/vectorIcon.svg";
import githubIcon from "@/public/assets/footerIcons/githubIcon.svg";

const LogoButton = () => {
  return (
    <div className="flex flex-col gap-6 px-6 md:px-0 items-center md:items-start">
      <FooterLogo />
      <div className="w-full flex justify-center">
        {/* Show this button only on mobile */}
        <div className="fullWidthButtonChildren h-[60px] md:h-full hidden sm:block w-full text-center">
          <Link href="?modal=true">
            <CTAButton
              className="mx-auto px-8 py-4"
              label="LAUNCH APP"
              hasArrowRight={true}
              typographyClass="text-[15px]"
            />
          </Link>
        </div>
        {/* Show this button only on mobile */}
        <div className="fullWidthButtonChildren h-[60px] md:h-full block sm:hidden w-full text-center">
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
    </div>
  );
};

export function FooterTextLinks() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex text-white items-center text-lg flex-col md:flex-row">
        <div className="space-y-4 text-center md:text-start mt-10 md:mt-0">
          <Link href="/ourStory" className="block hover:text-gray-400 text-sm">
            Our Story
          </Link>
          <Link
            href="/strategies"
            className="block hover:text-gray-400 text-sm"
          >
            Strategies
          </Link>
          <Link href="/burdLog" className="block hover:text-gray-400 text-sm">
            Burd Log
          </Link>
          <Link
            href="https://docs.deltaprime.io/"
            className="block hover:text-gray-400 text-sm"
          >
            Docs
          </Link>
        </div>
        <div className="block md:hidden my-10 footerTextLinksVerticalLine"></div>
        <div className="hidden md:block mx-0 md:mx-16 footerTextLinksLine"></div>
        <div className="space-y-4 md:text-start flex flex-col justify-center items-center md:items-start">
          <Link href="/" className="block hover:text-gray-400 text-sm">
            Careers
          </Link>
          <Link
            href="/howToVideos"
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
        <div className="block md:hidden my-10 footerTextLinksVerticalLine"></div>
      </div>
    </div>
  );
}

export function RoundButtonLinks({ hasText = true }) {
  return (
    <div className="flex flex-col gap-4 text-white items-center md:items-start z-50">
      {hasText && <p className="hover:text-gray-400">Follow us</p>}
      <div className="flex flex-row gap-4">
        <Link href="https://discord.com/invite/9bwsnsHEzD">
          <Image src={discordIcon} alt="discord-round_logo" />
        </Link>
        <Link href="https://x.com/DeltaPrimeDefi">
          <Image src={xIcon} alt="x-round_logo" />
        </Link>
        <Link href="/vector/link">
          <Image src={vectorIcon} alt="vector-round_logo" />
        </Link>
        <Link href="https://github.com/DeltaPrimeLabs">
          <Image src={githubIcon} alt="github-round_logo" />
        </Link>
      </div>
    </div>
  );
}

const TermsOfUseFooter = ({ isTokenomics, isStrategies }) => {
  return (
    <div className="w-full py-6 md:mt-32 mt-11 md:px-0 px-7 relative">
      <div className="termsOfUseGradient mb-4"></div>
      <div className="container flex flex-col-reverse sm:flex-row justify-between items-center text-white">
        <p className="text-sm text-center sm:text-left mt-6 md:mt-0">
          All rights reserved © DeltaPrime 2024
        </p>
        <div className="flex space-x-4 mt-4 sm:mt-0 text-sm justify-center sm:justify-end flex-wrap md:gap-0 gap-4 ">
          <Link href="/legals/termsOfUse" className="hover:text-gray-400 ">
            Terms of use
          </Link>
          <Link
            href="/legals/privacyAndPolicy"
            className="hover:text-gray-400 "
          >
            <span className="mr-4">•</span>Privacy Policy
          </Link>
          <Link
            href="/legals/tokenomicsRiskDisclaimer"
            className="hover:text-gray-400 "
          >
            <span className="mr-4">•</span> Token Risk Disclaimer
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
        <div className="footerWrapper pt-10 pb-4 bg-[#1b153c] relative z-[100] overflow-hidden sm:px-[5%] md:px-[8%] lg:px-[10%] xl:px-[16%] 2xl:px-[20%]">
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
