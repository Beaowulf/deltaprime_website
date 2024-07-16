"use client";

import { useTheme } from "next-themes";

const AppContent = ({ children }) => {
  const { theme, resolvedTheme } = useTheme();

  return (
    <div
      className={` ${
        resolvedTheme === "dark"
          ? "background_1-darkTheme"
          : "background_1-lightTheme"
      }`}
    >
      {children}
    </div>
  );
};

export default AppContent;
