import React from "react";
import { useTheme } from "next-themes";
import HorizontalPage from "@/app/ui/horizontalPage";

const AppContent = ({ children }) => {
  const { resolvedTheme } = useTheme();

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
