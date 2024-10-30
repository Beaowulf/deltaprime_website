"use client";

import React, { useState, useEffect } from "react";
import DynamicPurpleBar from "@/app/components/dynamicPurpleBar/dynamicPurpleBar";
import ContactForm from "@/app/ui/contactForm/contactForm";
import { MainButton } from "@/app/components/buttons/mainButton";
import "./jobDescription.css";
import ShareButton from "@/app/components/shareButton/shareButton";
import RichTextRenderer from "@/app/components/richTetxtRenderer/richTextRenderer";
import { encodeEmail } from "@/utils/emailEncoding";

// The dynamic job description client component
export default function JobDescriptionClient({ jobDescription }) {
  const [currentURL, setCurrentURL] = useState("");
  const email = "jobs@deltaprime.io"; // Placeholder email

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentURL(window.location.href);
    }
  }, []);

  return (
    <div className="leading-[28px]">
      {/* Dynamic Purple Bar with the job title */}
      <div>
        <DynamicPurpleBar title={jobDescription.jobTitle} />
      </div>

      <div className="my-10 gap-4 w-full h-auto flex flex-col lg:flex-row justify-start items-start pagePaddingLarge">
        {/* Job Description */}
        <div className="px-3 rounded-2xl text-justify pt-20 pb-20 flex flex-col items-start descriptionWrapper w-full lg:w-auto">
          <div className="descriptionContent md:px-50 md:py-45 p-10">
            <p className="text-4xl font-bold">{jobDescription.jobTitle}</p>
            <p className="text-2xl font-medium mt-3">
              {jobDescription.workLocation} - {jobDescription.employmentType}
            </p>
            <div className="w-[90%] h-[1px] bg-[#fab391] my-4" />

            {/* Dynamic description content using Contentful's rich text renderer */}
            <div className="text-justify">
              <RichTextRenderer richTextDocument={jobDescription.description} />
            </div>
          </div>
        </div>

        {/* Job Details Sidebar */}
        <div className="rounded-2xl descriptionWrapper h-full flex flex-col items-center gap-3 text-center !p-10 w-full lg:w-[35rem]">
          <MainButton
            wrapperClass="px-3 py-2"
            onClick={() =>
              window.open(
                `mailto:${email}?subject=Job%20Application&body=Hello`
              )
            }
            label="APPLY FOR THIS JOB"
          />
          <p className="text-xs font-normal pt-3">Share this job on socials</p>
          <ShareButton
            title={"Job Description"}
            text={jobDescription.jobTitle}
            url={currentURL}
          />
          <div className="pt-3">
            <p className="text-base font-bold">Location</p>
            <p className="">{jobDescription.workLocation}</p>
          </div>
          <div className="w-44 h-[1.5px] bg-[#FFBB9B] my-4" />
          <div>
            <p className="text-base font-bold">Department</p>
            <p className="">{jobDescription.department}</p>
          </div>
          <div className="w-44 h-[1.5px] bg-[#FFBB9B] my-4" />
          <div>
            <p className="text-base font-bold">Minimum Experience</p>
            <p className="">{jobDescription.minimumExperience}</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mx-20">
        <ContactForm />
      </div>
    </div>
  );
}
