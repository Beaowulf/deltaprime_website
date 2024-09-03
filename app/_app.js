// _app.js
import React from "react";
import { useTheme } from "next-themes";
import HorizontalPage from "@/app/ui/horizontalPage";
import { CryptoDataProvider } from "@/app/context/CryptoDataContext"; // Update this import path based on where you place the file

const AppContent = ({ children }) => {
  const { resolvedTheme } = useTheme();

  return (
    <CryptoDataProvider>
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
    </CryptoDataProvider>
  );
};

export default AppContent;
