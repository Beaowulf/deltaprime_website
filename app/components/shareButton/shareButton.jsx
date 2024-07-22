"use client";
import React from "react";
import Image from "next/image";
import shareIcon from "@/public/assets/icons/shareIcon.svg";
import shareIconBlack from "@/public/assets/icons/shareIconBlack.svg";

import { useTheme } from "next-themes";

const ShareButton = ({ title, text, url }) => {
  const { theme } = useTheme();
  const handleShare = async () => {
    if (!title || !text || !url) {
      console.error("Missing title, text, or url for sharing");
      return;
    }

    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url,
        });
        console.log("Article shared successfully");
      } catch (error) {
        console.error("Error sharing the article", error);
      }
    } else {
      alert("Web Share API is not supported in your browser.");
    }
  };

  return (
    <button onClick={handleShare} className="w-fit">
      {theme === "dark" ? (
        <Image src={shareIcon} alt="share_Icon" width={22} height={22} />
      ) : (
        <Image src={shareIconBlack} alt="share_Icon" width={22} height={22} />
      )}
    </button>
  );
};

export default ShareButton;
