"use client";
import React, { useState } from "react";
import Image from "next/image";
import grayLinkedInIcon from "@/public/assets/icons/grayLinkedInIcon.svg";

const LinkedInIconWrapper = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-8 h-8" // 30px width and height
    >
      <div
        className={`transition-opacity ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      >
        <Image
          src={grayLinkedInIcon}
          alt="LinkedIn Gray Icon"
          width={30}
          height={30}
        />
      </div>
      <div
        className={`absolute top-0 left-0 transition-opacity ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src="../../public/assets/icons/coloredLinkedInIcon.svg"
          alt="LinkedIn Colored Icon"
          width={30}
          height={30}
        />
      </div>
    </div>
  );
};

export default LinkedInIconWrapper;
