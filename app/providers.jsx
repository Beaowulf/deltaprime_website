"use client";

import { ThemeProvider, useTheme } from "next-themes";
import { useEffect, useState } from "react";
import "./globals.css";
import LandscapePage from "@/app/components/landscapePage/landscapePage";

import AppContent from "./_app";

// Component to check mobile and landscape orientation
const CheckOrientation = () => {
  const [isLandscape, setIsLandscape] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen is mobile and in landscape
  const checkOrientation = () => {
    const isLandscape = window.innerWidth > window.innerHeight;
    const isMobile = window.innerWidth <= 950; // Adjust this threshold for tablet/mobile breakpoint

    setIsLandscape(isLandscape);
    setIsMobile(isMobile);
  };

  useEffect(() => {
    // Run check on mount
    checkOrientation();

    // Disable scrolling when in landscape on mobile
    if (isMobile && isLandscape) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto"; // Re-enable scroll
    }

    // Listen for window resize and orientation change
    window.addEventListener("resize", checkOrientation);
    window.addEventListener("orientationchange", checkOrientation);

    // Cleanup event listeners and restore scroll
    return () => {
      window.removeEventListener("resize", checkOrientation);
      window.removeEventListener("orientationchange", checkOrientation);
      document.body.style.overflow = "auto"; // Restore scroll on cleanup
    };
  }, [isMobile, isLandscape]);

  if (isMobile && isLandscape) {
    return (
      <div>
        <LandscapePage />
      </div>
    );
  }

  return null; // Render nothing if not in landscape on mobile
};

export function Providers({ children }) {
  const { setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!localStorage.getItem("theme")) {
      setTheme("dark");
    }
  }, [setTheme]);

  if (!mounted) return null;

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      {/* Render CheckOrientation component globally */}
      <CheckOrientation />
      <AppContent>{...children}</AppContent>
    </ThemeProvider>
  );
}
