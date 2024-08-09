"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import grayLinkedInIcon from "@/public/assets/icons/grayLinkedInIcon.svg";
import coloredLinkedInIcon from "@/public/assets/icons/coloredLinkedInIcon.svg";
import grayTwitterIcon from "@/public/assets/footerIcons/xIcon.svg";
import coloredTwtitterIcon from "@/public/assets/icons/coloredXIcon.svg";
import darkLinkedInIcon from "@/public/assets/icons/darkLinkedInIcon.svg";
import darkTwitterIcon from "@/public/assets/icons/darkTwitterIcon.svg";

const SocialMediaIconWrapper = ({
  socialMediaLink = "/",
  usesTwitter = false,
}) => {
  const { theme } = useTheme();

  const grayIcon = usesTwitter
    ? theme === "dark"
      ? grayTwitterIcon
      : darkTwitterIcon
    : theme === "dark"
    ? grayLinkedInIcon
    : darkLinkedInIcon;

  const coloredIcon = usesTwitter ? coloredTwtitterIcon : coloredLinkedInIcon;

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
