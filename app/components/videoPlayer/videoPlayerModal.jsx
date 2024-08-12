import React from "react";
import Image from "next/image";
import closeIconWhite from "@/public/assets/icons/closeIconWhite.svg";

const VideoPlayerModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
      <div className="relative bg-transparent p-4 md:p-8 rounded-lg shadow-md w-full max-w-6xl">
        <button
          onClick={onClose}
          className="absolute -top-[0.65rem] right-[.85rem]"
        >
          <Image src={closeIconWhite} alt="close_icon" width={20} height={20} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default VideoPlayerModal;
