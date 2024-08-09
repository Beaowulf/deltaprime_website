"use client";

import React, { useState, useEffect } from "react";
import DynamicPurpleBar from "@/app/components/dynamicPurpleBar/dynamicPurpleBar";
import ContactForm from "@/app/ui/contactForm/contactForm";
import { MainButton } from "@/app/components/buttons/mainButton";
import Link from "next/link";
import "./jobDescription.css";
import { RoundButtonLinks } from "@/app/ui/footer/footer";
import ShareButton from "@/app/components/shareButton/shareButton";

function JobDescription() {
  const [currentURL, setCurrentURL] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentURL(window.location.href);
    }
  }, []);

  return (
    <div>
      <div>
        <DynamicPurpleBar title="Job description" />
      </div>
      <div className="my-10 gap-4 w-full h-auto flex flex-col lg:flex-row justify-center items-center lg:items-start pagePaddingLarge">
        {/* Left Side */}
        <div className="px-3 rounded-2xl text-justify pt-20 pb-20 w-auto flex flex-col items-start descriptionWrapper">
          <div className="descriptionContent md:px-50 md:py-45 p-10 ">
            <p className="text-4xl font-bold">Business Development Manager</p>{" "}
            <p className="text-2xl font-medium mt-3">Remote</p>
            <div className="w-[90%] h-[1px] bg-[#fab391] my-4" />
            <p className="text-justify">
              Delta Prime is looking for a highly talented Business Development
              Manager, to join our expanding team. The successful candidate will
              have a sales background, preferably in payments, be highly
              ambitious and motivated.
            </p>
            <p className="text-base font-extrabold mt-6">
              Roles & Responsibilities:
            </p>
            <ul className="text-justify list-disc px-5">
              <li>
                Expand the business to all Forex, eCommerce, igaming and other
                verticals, such as Travel, Education etc to support the
                company’s annual strategies.
              </li>
              <li>
                Targeting and acquiring new customers and merchants and ensuring
                the development of strong relationships.
              </li>
              <li>
                Develop and maintain business partnerships with merchants,
                platforms, service providers, industry associations, media and
                affiliates in cross-border eCommerce.
              </li>
              <li>
                Support and present the company at marketing and cross-border
                eCommerce industry events.
              </li>
              <li>
                Maintaining a high level of customer service, communicating
                regularly with existing customers and prospects to understand
                their evolving business needs.
              </li>
              <li>
                Liaise and collaborate with various internal stakeholders.
              </li>
            </ul>
            <p className="text-base font-extrabold mt-6">
              Desired Skills and Expertise:
            </p>
            <ul className="text-justify list-disc px-5">
              <li>Bachelor degree and above.</li>
              <li>
                3+ years of experience of hands-on sales and/or business
                development within FX or gaming operations, or with credit card
                processing providers.
              </li>
              <li>Experience with eCommerce sellers/industry is a plus.</li>
              <li>
                Proven track record and high familiarity in global Fintech
                markets; access to industry related resources is an advantage.
              </li>
              <li>
                Experience in cross-border eCommerce, online B2B, or familiarity
                with risk control of cross-border transactions is preferred.
              </li>
              <li>
                Excellent in communication, professional English writing and
                speaking skills.
              </li>
              <li>High interpersonal skills.</li>
              <li>
                Willing to travel, abilities to work independently with a highly
                self-motivated and innovative mind.
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side */}
        <div className="rounded-2xl descriptionWrapper w-2/3 h-full flex flex-col items-center lg:w-2/3 lg:h-full gap-3 text-center !p-[40px]">
          <Link href="/">
            <MainButton
              className="mx-auto w-full p-4 text-black"
              label="APPLY FOR THIS JOB"
            />
          </Link>
          <p className="text-xs font-normal pt-3">Share this job on socials</p>
          <RoundButtonLinks hasText={false} />
          <div className="z-50">
            <ShareButton
              title={"Job Description"}
              text={"Business Manager"}
              url={currentURL}
            />
          </div>
          <div className="pt-3">
            <p className="text-base font-bold">Location</p>
            <p className="">Remote</p>
          </div>
          <div className="w-44 h-[1.5px] bg-[#FFBB9B] my-4" />
          <div>
            <p className="text-base font-bold ">Department</p>
            <p className="">Business Development</p>
          </div>
          <div className="w-44 h-[1.5px] bg-[#FFBB9B] my-4" />
          <div>
            <p className="text-base font-bold">Employment Type</p>
            <p className="">Full-Time</p>
          </div>
          <div className="w-44 h-[1.5px] bg-[#FFBB9B] my-4" />
          <div>
            <p className="text-base font-bold">Minimum Experience</p>
            <p className="">Experienced</p>
          </div>
        </div>
      </div>

      <div className="mx-20">
        <ContactForm />
      </div>
    </div>
  );
}

export default JobDescription;
