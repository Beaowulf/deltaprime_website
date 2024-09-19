"use client";

import React from "react";
import Image from "next/image";
import "./modals.css";
import { DeltaPurpleButton } from "@/app/components/buttons/mainButton";
import closeIconColored from "@/public/assets/icons/closeIconColored.svg";

const MintModal = ({ onClose }) => {
  return (
    <dialog className="fixed inset-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center backdrop-blur">
      <div className="parentColoredBorderWrapper rounded-lg shadow-lg w-full max-w-lg flex flex-col mx-4">
        <div className="dark:bg-deltaDarkBlueBG bg-deltaWhiteLinearBG p-8 rounded-[20px]">
          {/* Close Button */}
          <div className="flex justify-end mb-4">
            <button onClick={onClose}>
              <Image
                src={closeIconColored}
                width={20}
                height={20}
                alt="Close"
              />
            </button>
          </div>

          {/* Header */}
          <div className="text-center">
            <h4 className="text-center text-2xl font-semibold dark:text-white text-[#6B70ED]">
              GET YOUR $PRIME
            </h4>
            <h4 className="text-center text-2xl font-normal dark:text-white text-[#6B70ED] mb-6">
              TODAY ON
            </h4>
          </div>

          {/* Buttons Section */}
          <div className="flex flex-col md:flex-row md:justify-between gap-10">
            {/* Button 1 */}
            <div className="flex justify-center w-full">
              <DeltaPurpleButton
                className="w-[7rem] h-[3rem] md:w-auto py-3 px-6"
                label="Arbitrum"
                hasArrowRight={false}
                href="https://app.uniswap.org/swap?chain=arbitrum&outputCurrency=0x3De81CE90f5A27C5E6A5aDb04b54ABA488a6d14E"
              />
            </div>

            {/* Button 2 */}
            <div className="flex justify-center w-full">
              <DeltaPurpleButton
                className="w-[7rem] h-[3rem] md:w-auto py-3 px-6"
                label="Avalanche"
                hasArrowRight={false}
                href="https://traderjoexyz.com/avalanche/trade?chain=avalanche&outputCurrency=0x33C8036E99082B0C395374832FECF70c42C7F298"
              />
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default MintModal;
