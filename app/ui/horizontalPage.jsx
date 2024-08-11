// components/HorizontalPage.js
import React from "react";

const HorizontalPage = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50 w-full h-screen landscapeImage">
      <div className="bg-white opacity-65 p-4 rounded shadow-lg text-center">
        <p>
          Please rotate your device to landscape mode for a better experience
        </p>
      </div>
    </div>
  );
};

export default HorizontalPage;
