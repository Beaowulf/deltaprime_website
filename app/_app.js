"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import HorizontalPage from "@/app/ui/horizontalPage";
import useScreenOrientation from "@/utils/orientationCheck";

const AppContent = ({ children }) => {
  const [isHorizontalPage, setIsHorizontalPage] = useState(false);
  const { resolvedTheme } = useTheme();
  const orientation = useScreenOrientation();

  const isMobileDevice = () => {
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    return /android|iphone|ipad|ipod|opera mini|iemobile|mobile/i.test(
      userAgent
    );
  };

  useEffect(() => {
    if (isMobileDevice() && orientation.includes("portrait")) {
      setIsHorizontalPage(false);
    } else {
      setIsHorizontalPage(true);
    }
  }, [orientation]);

  return (
    <div
      className={`${
        resolvedTheme === "dark"
          ? "background_1-darkTheme"
          : "background_1-lightTheme"
      }`}
    >
      {children}
      <HorizontalPage isOpen={false} />
    </div>
  );
};

export default AppContent;
