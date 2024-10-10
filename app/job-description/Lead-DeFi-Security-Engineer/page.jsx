"use client";

import React, { useState, useEffect } from "react";
import DynamicPurpleBar from "@/app/components/dynamicPurpleBar/dynamicPurpleBar";
import ContactForm from "@/app/ui/contactForm/contactForm";
import { MainButton } from "@/app/components/buttons/mainButton";
import "../jobDescription.css";
import ShareButton from "@/app/components/shareButton/shareButton";
import { encodeEmail } from "@/utils/emailEncoding";

function Lead_DeFi_Security_Engineer() {
  const [currentURL, setCurrentURL] = useState("");
  const email = "jobs@deltaprime.io";

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentURL(window.location.href);
    }
  }, []);

  return (
    <div className="leading-[28px]">
      <div>
        <DynamicPurpleBar title="Lead DeFi Security Engineer" />
      </div>
      <div className="my-10 gap-4 w-full h-auto flex flex-col lg:flex-row justify-start items-start pagePaddingLarge">
        <div className="px-3 rounded-2xl text-justify pt-20 pb-20 flex flex-col items-start descriptionWrapper w-full lg:w-auto">
          <div className="descriptionContent md:px-50 md:py-45 p-10">
            <p className="text-4xl font-bold">Lead DeFi Security Engineer</p>
            <p className="text-2xl font-medium mt-3">
              Remote - Part-Time or Full-Time
            </p>
            <div className="w-[90%] h-[1px] bg-[#fab391] my-4" />

            <p className="text-justify">
              DeltaPrime.io is a pioneering DeFi protocol committed to
              delivering secure and innovative blockchain solutions. We are
              seeking an experienced{" "}
              <span className="font-semibold">Lead DeFi Security Engineer</span>{" "}
              to join our dynamic team. This role is pivotal in ensuring the
              security and integrity of our platform. If you are passionate
              about blockchain security, have a knack for uncovering
              vulnerabilities in smart contracts, and possess a deep
              understanding of the DeFi landscape, we’d love to hear from you.
            </p>

            <p className="text-base font-extrabold mt-6">
              Key Responsibilities:
            </p>
            <ul className="text-justify list-disc px-5 ">
              <li>
                <span className="font-semibold">Security Leadership: </span>{" "}
                Lead the design and implementation of security architectures for
                our DeFi protocols and smart contracts.
              </li>
              <li>
                <span className="font-semibold">Smart Contract Auditing: </span>{" "}
                Conduct comprehensive security audits of smart contracts to
                identify and mitigate potential exploits.
              </li>
              <li>
                <span className="font-semibold">Risk Assessment: </span> Perform
                threat modeling and vulnerability assessments to proactively
                address security risks.
              </li>
              <li>
                <span className="font-semibold">Security Best Practices: </span>{" "}
                Implement and enforce security best practices throughout the
                development lifecycle, including code reviews and CI/CD pipeline
                integrations.
              </li>
              <li>
                <span className="font-semibold">
                  {" "}
                  Compliance and Standards:{" "}
                </span>{" "}
                Ensure adherence to the CryptoCurrency Security Standard (CCSS)
                and other relevant security frameworks.
              </li>
              <li>
                <span className="font-semibold">Team Collaboration: </span> Work
                closely with cross-functional teams to integrate security
                measures seamlessly into all projects.
              </li>
              <li>
                <span className="font-semibold">Incident Response: </span>{" "}
                Develop and maintain incident response plans for potential
                security breaches.
              </li>
              <li>
                <span className="font-semibold">Continuous Improvement: </span>{" "}
                Stay updated on the latest security threats, vulnerabilities,
                and technologies in the blockchain and DeFi space.
              </li>
              <li>
                <span className="font-semibold">Mentorship: </span> Provide
                guidance and mentorship to junior engineers on security matters.
              </li>
            </ul>

            <p className="text-base font-extrabold mt-6">Requirements:</p>
            <ul className="text-justify list-disc px-5">
              <li>
                <span className="font-semibold">Experience: </span> 7+ years in
                security engineering, with a minimum of 3 years focused on
                blockchain and DeFi security.
              </li>
              <li>
                <span className="font-semibold">
                  Expertise in Smart Contracts:
                </span>{" "}
                Proven experience auditing smart contracts (Solidity, Vyper) and
                familiarity with common vulnerabilities.
              </li>
              <li>
                <span className="font-semibold">DeFi Knowledge:</span> Deep
                understanding of DeFi protocols, mechanisms, and associated
                security challenges.
              </li>
              <li>
                <span className="font-semibold">CCSS Knowledge:</span>{" "}
                Familiarity with the CryptoCurrency Security Standard (CCSS) and
                its practical applications.
              </li>
              <li>
                <span className="font-semibold">Security Tools:</span>{" "}
                Proficiency with security assessment tools for static and
                dynamic code analysis, penetration testing, and vulnerability
                scanning.
              </li>
              <li>
                <span className="font-semibold">Cryptography:</span> Strong
                knowledge of cryptographic principles and secure coding
                practices.
              </li>
              <li>
                <span className="font-semibold">Cloud Security:</span>{" "}
                Experience with AWS and implementing cloud security best
                practices; Infrastructure as Code (IaC) experience is a plus.
              </li>
              <li>
                <span className="font-semibold">Problem-Solving Skills:</span>{" "}
                Excellent analytical skills with a proactive approach to
                identifying and solving security issues.
              </li>
              <li>
                <span className="font-semibold">Communication:</span> Strong
                verbal and written communication skills, with the ability to
                articulate complex security concepts to technical and
                non-technical stakeholders.
              </li>
            </ul>

            <p className="text-base font-extrabold mt-6">Nice to Have:</p>
            <ul className="text-justify list-disc px-5">
              <li>
                <span className="font-semibold">Certifications:</span> Relevant
                certifications such as Certified Blockchain Security
                Professional (CBSP), CCSS, CISSP, or similar.
              </li>
              <li>
                <span className="font-semibold">Containerization:</span>{" "}
                Experience with Docker, Kubernetes, and related security
                considerations.
              </li>
              <li>
                <span className="font-semibold">
                  Open Source Contributions:
                </span>{" "}
                Contributions to security research or open-source projects in
                the blockchain space.
              </li>
              <li>
                <span className="font-semibold">AWS Expertise:</span> Advanced
                knowledge of AWS services and security features.
              </li>
              <li>
                <span className="font-semibold">Web3 Analytics:</span>{" "}
                Experience creating security-focused dashboards or tools (e.g.,
                Dune Analytics).
              </li>
            </ul>

            <p className="text-base font-extrabold mt-6">
              Why Join DeltaPrime?
            </p>
            <ul className="text-justify list-disc px-5">
              <li>
                <span className="font-semibold">Innovative Environment:</span>{" "}
                Work at the forefront of decentralized finance and blockchain
                technology.
              </li>
              <li>
                <span className="font-semibold">Impactful Role:</span> Play a
                critical role in shaping the security landscape of a leading
                DeFi protocol.
              </li>
              <li>
                <span className="font-semibold">Flexible Work:</span> Enjoy a
                remote work environment with a team that values work-life
                balance.
              </li>
              <li>
                <span className="font-semibold">Growth Opportunities:</span>{" "}
                Benefit from professional development opportunities in a
                fast-growing industry.
              </li>
              <li>
                <span className="font-semibold">Collaborative Team:</span> Join
                a passionate and forward-thinking team dedicated to making a
                significant impact in the DeFi space.
              </li>
            </ul>

            <p className="text-base font-extrabold mt-6">How to Apply:</p>
            <ul className="text-justify list-disc px-5">
              <li>
                Send your resume, portfolio, and references to{" "}
                <a
                  className="underline"
                  href={`mailto:${email}?subject=Job%20Application&body=Please%20find%20my%20resume%20and%20portfolio%20attached.`}
                  dangerouslySetInnerHTML={{ __html: encodeEmail(email) }}
                ></a>
                . Include links to any relevant work, security audits, or public
                repositories that showcase your expertise.
              </li>
            </ul>
          </div>{" "}
        </div>
        <div className="rounded-2xl descriptionWrapper h-full flex flex-col items-center gap-3 text-center !p-10 w-full lg:w-[35rem]">
          <MainButton
            onClick={() =>
              window.open(
                "mailto:jobs@deltaprime.io?subject=Job%20Application&body=Hello"
              )
            }
            className="z-50"
            label="APPLY FOR THIS JOB"
          />
          <p className="text-xs font-normal pt-3">Share this job on socials</p>
          <ShareButton
            title={"Job Description"}
            text={"Lead DeFi Security Engineer"}
            url={currentURL}
          />
          <div className="pt-3">
            <p className="text-base font-bold">Location</p>
            <p className="">Remote</p>
          </div>
          <div className="w-44 h-[1.5px] bg-[#FFBB9B] my-4" />
          <div>
            <p className="text-base font-bold ">Department</p>
            <p className="">Engineering and Security </p>
          </div>
          <div className="w-44 h-[1.5px] bg-[#FFBB9B] my-4" />
          <div>
            <p className="text-base font-bold">Minimum Experience</p>
            <p className="">
              7+ years in security engineering. Minimum 3 years with Defi and
              blockchain security
            </p>
          </div>
        </div>
      </div>

      <div className="mx-20">
        <ContactForm />
      </div>
    </div>
  );
}

export default Lead_DeFi_Security_Engineer;
