"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeBackground() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (resolvedTheme) {
      document.body.classList.remove("light-theme", "dark-theme");
      document.body.classList.add(`${resolvedTheme}-theme`);
    }
  }, [resolvedTheme]);

  return null;
}
