"use client";
import React, { useState } from "react";
import Image from "next/image";
import grayLinkedInIcon from "@/public/assets/icons/grayLinkedInIcon.svg";
import coloredLinkedInIcon from "@/public/assets/icons/coloredLinkedInIcon.svg";

const LinkedInIconWrapper = () => {
  return (
    <div className="relative w-8 h-8">
      <div className="grayLinkedInCon">
        <Image
          src={grayLinkedInIcon}
          alt="LinkedIn Gray Icon"
          width={30}
          height={30}
        />
      </div>
      <div className="absolute top-0 left-0 transition-opacity coloredLinkedInIcon">
        <Image
          src={coloredLinkedInIcon}
          alt="LinkedIn Colored Icon"
          width={30}
          height={30}
        />
      </div>
    </div>
  );
};

export default LinkedInIconWrapper;
