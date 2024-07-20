import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FooterLogo } from "@/app/components/logo/logo";
import { MainButton } from "@/app/components/buttons/mainButton";
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
      <div className="w-full">
        <MainButton
          className="md:!w-fit !w-full"
          typographyClass="text-[15px] text-[#1B153C]"
          label="LAUNCH APP"
          hasArrowRight={true}
        />
      </div>
    </div>
  );
};

export function FooterTextLinks() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex text-white text-lg flex-col md:flex-row">
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
          <Link href="/burd-log" className="block hover:text-gray-400 text-sm">
            Burd Log
          </Link>
          <Link href="/docs" className="block hover:text-gray-400 text-sm">
            Docs
          </Link>
          <Link href="/careers" className="block hover:text-gray-400 text-sm">
            Careers
          </Link>
        </div>
        <div className="block md:hidden my-10 footerTextLinksVerticalLine"></div>
        <div className="hidden md:block mx-0  md:mx-16 footerTextLinksLine"></div>
        <div className="space-y-4 md:text-start text-center">
          <Link href="/academy" className="block hover:text-gray-400 text-sm">
            Academy
          </Link>
          <Link href="/faq" className="block hover:text-gray-400 text-sm">
            FAQ
          </Link>
          <Link href="/use-cases" className="block hover:text-gray-400 text-sm">
            Use Cases / Case Studies
          </Link>
          <Link href="/blogs" className="block hover:text-gray-400 text-sm">
            Blog
          </Link>
          <Link
            href="/media-library"
            className="block hover:text-gray-400 text-sm"
          >
            Media Library
          </Link>
        </div>
        <div className="block md:hidden my-10 footerTextLinksVerticalLine"></div>
      </div>
    </div>
  );
}

export function RoundButtonLinks() {
  return (
    <div className="flex flex-col gap-4 text-white items-center md:items-start">
      <p className="hover:text-gray-400">Follow us</p>
      <div className="flex flex-row gap-4">
        {/* todo get discord link */}
        <Link href="/discord/link">
          <Image src={discordIcon} alt="discord-round_logo" />
        </Link>
        {/* todo get x or twitter link */}
        <Link href="/x/link">
          <Image src={xIcon} alt="x-round_logo" />
        </Link>
        {/* todo get vector link */}
        <Link href="/vector/link">
          <Image src={vectorIcon} alt="vector-round_logo" />
        </Link>
        {/* todo get github link */}
        <Link href="/github/link">
          <Image src={githubIcon} alt="github-round_logo" />
        </Link>
      </div>
    </div>
  );
}

const TermsOfUseFooter = () => {
  return (
    <div className="w-full py-6 md:mt-32 mt-11 md:px-0 px-7">
      <div className="termsOfUseGradient mb-4"></div>
      <div className="container flex flex-col-reverse sm:flex-row justify-between items-center text-white">
        <p className="text-sm text-center sm:text-left mt-6 md:mt-0">
          All rights reserved © DeltaPrime 2023
        </p>
        <div className="flex space-x-4 mt-4 sm:mt-0 text-sm justify-center sm:justify-end flex-wrap md:gap-0 gap-4 ">
          <Link href="/terms" className="hover:text-gray-400 ">
            Terms of use
          </Link>
          <Link href="/legal-documents" className="hover:text-gray-400 ">
            <span className="mr-4">•</span>Legal documents
          </Link>

          <Link href="/cookie-policy" className="hover:text-gray-400 ">
            <span className="mr-4">•</span> Cookie Policy
          </Link>
        </div>
      </div>
    </div>
  );
};
export function footer() {
  return (
    <>
      {/* Footer Wrapper */}
      <div className="footerWrapper pt-20 pb-4 bg-[#1b153c] relative z-[100] w-screen sm:px-[5%] md:px-[8%] lg:px-[10%] 2xl:px-[15%]">
        <div className="flex justify-between flex-wrap md:flex-row flex-col">
          {/* Logo with Button */}
          <LogoButton />
          <FooterTextLinks />
          <RoundButtonLinks />
        </div>
        <TermsOfUseFooter />
      </div>
    </>
  );
}

export default footer;
