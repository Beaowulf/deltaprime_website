"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import "./themeToggler.css";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(theme);
  };

  const isDay = theme === "light";

  if (!mounted) return null;

  return (
    <div
      className={`toggle_wrapper ${isDay ? "day" : "night"}`}
      onClick={toggleTheme}
    >
      <div
        className="icon sun"
        style={{
          left: isDay ? "5%" : "50%",
          opacity: isDay ? 1 : 0,
        }}
      />
      <div
        className="icon moon"
        style={{
          left: isDay ? "0%" : "48%",
          opacity: isDay ? 0 : 1,
        }}
      />
    </div>
  );
}
