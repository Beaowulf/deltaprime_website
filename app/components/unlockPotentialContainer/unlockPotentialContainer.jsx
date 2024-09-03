"use client";
import React, { useState } from "react";
import Link from "next/link";
import { CTAButton } from "@/app/components/buttons/mainButton";
import "./unlockPotentialContainer.css";

const UnlockPotentialContainer = ({ hasMarginTop = true }) => {
  const [isModalOpen, setModalIsOpen] = useState(false);

  function openModal() {
    return setModalIsOpen(true);
  }

  function closeModal() {
    return setModalIsOpen(false);
  }

  return (
    <div
      className={`hidden md:block parentColoredBorderWrapper ${
        hasMarginTop ? "mt-40" : "mt-0"
      }`}
    >
      <div className="introTextBtnContainer">
        <div className="flex items-center flex-col lg:flex-row gap-8 lg:gap-0 justify-between lg:px-12 lg:py-8 px-6 py-4 w-full">
          <h5 className="md:text-[25px] 2xl:text-[30px] unlockPotentialTypography">
            Unlock the full potential of your capital
          </h5>
          <Link href="?modal=true" scroll={false}>
            <CTAButton
              onClick={openModal}
              label="LAUNCH APP"
              hasArrowRight={true}
              className="px-4 py-3"
              typographyClass="text-[15px]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UnlockPotentialContainer;
