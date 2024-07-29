import React from "react";
import Image from "next/image";
import Link from "next/link";
import grayLinkedInIcon from "@/public/assets/icons/grayLinkedInIcon.svg";
import coloredLinkedInIcon from "@/public/assets/icons/coloredLinkedInIcon.svg";
import grayTwitterIcon from "@/public/assets/footerIcons/xIcon.svg";
import coloredTwtitterIcon from "@/public/assets/icons/coloredXIcon.svg";

const SocialMediaIconWrapper = ({
  socialMediaLink = "/",
  usesTwitter = false,
}) => {
  return (
    <div className="relative w-8 h-8">
      <div className="grayLinkedInCon">
        <Image
          src={usesTwitter ? grayTwitterIcon : grayLinkedInIcon}
          alt="LinkedIn Gray Icon"
          width={30}
          height={30}
        />
      </div>
      <div className="absolute top-0 left-0 transition-opacity coloredLinkedInIcon cursor-pointer">
        <Link target="_blank" href={`${socialMediaLink}`}>
          <Image
            src={usesTwitter ? coloredTwtitterIcon : coloredLinkedInIcon}
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
