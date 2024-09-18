import React from "react";
import "./ourStory.css";
import Image from "next/image";
import BriefCaseIcon from "@/public/assets/icons/briefCaseIcon.svg";

const JobDescriptionBox = ({
  title,
  textOne,
  textTwo,
  textThree,
  buttonElement,
}) => {
  return (
    <div className="jobDescriptionBoxWrapper">
      <div className="jobDescriptionItemWrapper md:py-6 md:pr-6 md:pl-12 p-4 flex md:flex-row flex-col items-center justify-between gap-8 md:gap-32">
        {/* left */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-8 items-center">
            <Image
              src={BriefCaseIcon}
              alt="brief-case-icon"
              width={50}
              height={50}
            />
            <h3 className="text-white text-[18px] font-semibold">{title}</h3>
          </div>
          <div className="flex flex-row gap-[10px] h-full">
            <p className="text-white text-[14px] font-bold uppercase">
              {textOne}
            </p>
            {textOne && (
              <div className="bg-white h-[22px] rounded-full w-[2px]"></div>
            )}
            <p className="text-white text-[14px] font-bold uppercase">
              {textTwo}
            </p>
            {textTwo && (
              <div className="bg-white h-[22px] rounded-full w-[2px]"></div>
            )}
            <p className="text-white text-[14px] font-bold uppercase">
              {textThree}
            </p>
          </div>
        </div>
        {/* Right */}
        <div>{buttonElement}</div>
      </div>
    </div>
  );
};

export default JobDescriptionBox;
