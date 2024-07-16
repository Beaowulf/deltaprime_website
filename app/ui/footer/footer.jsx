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
    <div className="flex flex-col gap-6">
      <FooterLogo />
      <MainButton label="LAUNCH APP" hasArrowRight={true} />
    </div>
  );
};

export function FooterTextLinks() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex space-x-12 text-white text-lg">
        <div className="space-y-4">
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
        <div className="footerTextLinksLine"></div>
        <div className="space-y-4">
          <Link href="/academy" className="block hover:text-gray-400 text-sm">
            Academy
          </Link>
          <Link href="/faq" className="block hover:text-gray-400 text-sm">
            FAQ
          </Link>
          <Link href="/use-cases" className="block hover:text-gray-400 text-sm">
            Use Cases / Case Studies
          </Link>
          <Link href="/blog" className="block hover:text-gray-400 text-sm">
            Blog
          </Link>
          <Link
            href="/media-library"
            className="block hover:text-gray-400 text-sm"
          >
            Media Library
          </Link>
        </div>
      </div>
    </div>
  );
}

export function RoundButtonLinks() {
  return (
    <div className="flex flex-col gap-4 text-white">
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
    <div className="w-full py-6 mt-32">
      <div className="termsOfUseGradient mb-4"></div>
      <div className="container flex flex-col sm:flex-row justify-between items-center text-white">
        <p className="text-sm text-center sm:text-left">
          All rights reserved © DeltaPrime 2023
        </p>
        <div className="flex space-x-4 mt-4 sm:mt-0 text-sm justify-center sm:justify-end">
          <Link href="/terms" className="hover:text-gray-400">
            Terms of use
          </Link>
          <span className="hidden sm:inline">•</span>
          <Link href="/legal-documents" className="hover:text-gray-400">
            Legal documents
          </Link>
          <span className="hidden sm:inline">•</span>
          <Link href="/cookie-policy" className="hover:text-gray-400">
            Cookie Policy
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
      <div className="footerWrapper  relative pt-20 pb-4 bg-[#1b153c] z-[100] w-screen sm:px-[5%] md:px-[8%] lg:px-[10%] 2xl:px-[15%]">
        <div className="flex justify-between">
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
