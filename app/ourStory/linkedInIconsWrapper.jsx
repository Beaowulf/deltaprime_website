"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import coloredLinkedInIcon from "@/public/assets/icons/coloredLinkedInIcon.svg";
import coloredXIcon from "@/public/assets/footerIcons/xIconColored.svg";
import darkLinkedInIcon from "@/public/assets/icons/darkLinkedInIcon.svg";
import darkTwitterIcon from "@/public/assets/footerIcons/xIconDarkBlue.svg";

const SocialMediaIconWrapper = ({
  socialMediaLink = "/",
  usesTwitter = false,
}) => {
  const { theme } = useTheme();

  const grayIcon = usesTwitter
    ? theme === "dark"
      ? darkTwitterIcon
      : darkTwitterIcon
    : theme === "dark"
    ? darkLinkedInIcon
    : darkLinkedInIcon;

  // change the below to the gradient I want twitter one
  const coloredIcon = usesTwitter ? coloredXIcon : coloredLinkedInIcon;

  return (
    <div className="relative w-8 h-8">
      <div className="grayLinkedInCon">
        <Image src={grayIcon} alt="LinkedIn Gray Icon" width={30} height={30} />
      </div>
      <div className="absolute top-0 left-0 coloredLinkedInIcon cursor-pointer">
        <Link target="_blank" href={`${socialMediaLink}`}>
          <Image
            src={coloredIcon}
            alt="LinkedIn Colored Icon"
            width={30}
            height={30}
          />
        </Link>
      </div>
    </div>
  );
};

export default SocialMediaIconWrapper;
