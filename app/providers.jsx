"use client";

import { ThemeProvider, useTheme } from "next-themes";
import { useEffect, useState } from "react";
import "./globals.css";

import AppContent from "./_app";

export function Providers({ children }) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!localStorage.getItem("theme")) {
      setTheme("dark");
    }
  }, [setTheme, resolvedTheme]);

  if (!mounted) return null;
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <AppContent>{children}</AppContent>
    </ThemeProvider>
  );
}
