"use client";

import React, { useState, useEffect } from "react";
import DynamicPurpleBar from "@/app/components/dynamicPurpleBar/dynamicPurpleBar";
import ContactForm from "@/app/ui/contactForm/contactForm";
import { MainButton } from "@/app/components/buttons/mainButton";
import "../jobDescription.css";
import ShareButton from "@/app/components/shareButton/shareButton";
import { encodeEmail } from "@/utils/emailEncoding"; // Assuming you have an email encoding utility

function Smart_Contract_Developer() {
  const [currentURL, setCurrentURL] = useState("");
  const email = "jobs@deltaprime.io";

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentURL(window.location.href);
    }
  }, []);

  const encodedEmail = encodeEmail(email);

  return (
    <div>
      <div>
        <DynamicPurpleBar title="Smart Contract Developer" />
      </div>
      <div className="my-10 gap-4 w-full h-auto flex flex-col lg:flex-row justify-center items-center lg:items-start pagePaddingLarge">
        {/* Left Side */}
        <div className="px-3 rounded-2xl text-justify pt-20 pb-20 w-auto flex flex-col items-start descriptionWrapper">
          <div className="descriptionContent md:px-50 md:py-45 p-10 ">
            <p className="text-4xl font-bold">Smart Contract Developer</p>
            <p className="text-2xl font-medium mt-3">Remote</p>
            <div className="w-[90%] h-[1px] bg-[#fab391] my-4" />
            <p className="text-justify">
              DeltaPrime.io is seeking an experienced Smart Contract Developer
              to join our team. We are a leading DeFi protocol looking for a
              passionate developer to help us build and maintain innovative
              blockchain solutions.
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
              Key Responsibilities:
            </p>
            <ul className="text-justify list-disc px-5">
              <li>
                Design, develop, and maintain smart contracts on Ethereum and
                other EVM-compatible blockchains.
              </li>
              <li>
                Implement and optimize DeFi protocols with a focus on security
                and efficiency.
              </li>
              <li>
                Collaborate with cross-functional teams to integrate smart
                contracts into the DeltaPrime ecosystem.
              </li>
              <li>
                Conduct regular audits and peer reviews of smart contract code.
              </li>
              <li>
                Write comprehensive unit and integration tests for smart
                contracts using JavaScript.
              </li>
              <li>
                Continuously research and implement best practices in smart
                contract development.
              </li>
            </ul>
            <p className="text-base font-extrabold mt-6">Requirements:</p>
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
              <li>
                3+ years of proven experience in smart contract development.
              </li>
              <li>
                Strong knowledge of Solidity and proxy patterns (delegate
                calls).
              </li>
              <li>
                Proven experience working in a DeFi protocol (references
                required).
              </li>
              <li>
                Proficiency in ERC standards, including ERC20, ERC721, ERC1155,
                EIP2535, and EIP4626.
              </li>
              <li>
                Solid understanding of JavaScript for writing scripts and tests.
              </li>
              <li>
                Hands-on experience with development tools like Hardhat and
                Ethers.js.
              </li>
              <li>Highly proactive with a strong problem-solving mindset.</li>
            </ul>
            <p className="text-base font-extrabold mt-6">Nice to Have:</p>
            <ul className="text-justify list-disc px-5">
              <li>
                Experience with other blockchain platforms and technologies.
              </li>
              <li>
                Familiarity with Web3.js and other blockchain development
                libraries.
              </li>
              <li>
                Background in finance or a deep understanding of financial
                instruments.
              </li>
            </ul>
            <p className="text-base font-extrabold mt-6">Why Join Us?</p>
            <ul className="text-justify list-disc px-5">
              <li>Work on the cutting edge of decentralized finance.</li>
              <li>Flexible, remote work environment.</li>
              <li>
                Opportunity to grow with a forward-thinking team and make a real
                impact in the DeFi space.
              </li>
            </ul>
            <p className="text-base font-extrabold mt-6">How to Apply:</p>
            <ul className="text-justify list-disc px-5">
              <li>
                Send your resume, portfolio, and references to{" "}
                <a
                  href={`mailto:${email}?subject=Job%20Application&body=Please%20find%20my%20resume%20and%20portfolio%20attached.`}
                  dangerouslySetInnerHTML={{ __html: encodedEmail }}
                ></a>
                . Include links to any relevant work or public repositories.
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side */}
        <div className="rounded-2xl descriptionWrapper w-2/3 h-full flex flex-col items-center lg:w-2/3 lg:h-full gap-3 text-center !p-[40px]">
          <MainButton
            onClick={() =>
              window.open(
                `mailto:${email}?subject=Job%20Application&body=Hello`
              )
            }
            className="mx-auto p-4 text-black"
            label="APPLY FOR THIS JOB"
          />
          <p className="text-xs font-normal pt-3">Share this job on socials</p>
          <ShareButton
            title={"Job Description"}
            text={"Business Manager"}
            url={currentURL}
          />
          <div className="pt-3">
            <p className="text-base font-bold">Location</p>
            <p className="">Remote</p>
          </div>
          <div className="w-44 h-[1.5px] bg-[#FFBB9B] my-4" />
          <div>
            <p className="text-base font-bold ">Department</p>
            <p className="">Development</p>
          </div>
          <div className="w-44 h-[1.5px] bg-[#FFBB9B] my-4" />
          <div>
            <p className="text-base font-bold">Minimum Experience</p>
            <p className="">3+ years of proven experience</p>
          </div>
        </div>
      </div>

      <div className="mx-20">
        <ContactForm />
      </div>
    </div>
  );
}

export default Smart_Contract_Developer;
