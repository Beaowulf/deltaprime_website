"use client";

import React, { useState, useEffect } from "react";
import DynamicPurpleBar from "@/app/components/dynamicPurpleBar/dynamicPurpleBar";
import ContactForm from "@/app/ui/contactForm/contactForm";
import { MainButton } from "@/app/components/buttons/mainButton";
import "../jobDescription.css";
import ShareButton from "@/app/components/shareButton/shareButton";
import { encodeEmail } from "@/utils/emailEncoding";

function Senior_DevOps_Engineer() {
  const [currentURL, setCurrentURL] = useState("");
  const email = "jobs@deltaprime.io";

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentURL(window.location.href);
    }
  }, []);

  return (
    <div>
      <div>
        <DynamicPurpleBar title="Senior DevOps Engineer" />
      </div>
      <div className="my-10 gap-4 w-full h-auto flex flex-col lg:flex-row justify-start items-start pagePaddingLarge">
        <div className="px-3 rounded-2xl text-justify pt-20 pb-20 flex flex-col items-start descriptionWrapper w-full lg:w-auto">
          <div className="descriptionContent md:px-50 md:py-45 p-10">
            <p className="text-4xl font-bold">Senior DevOps Engineer</p>
            <p className="text-2xl font-medium mt-3">Remote</p>
            <div className="w-[90%] h-[1px] bg-[#fab391] my-4" />

            <p className="text-justify">
              DeltaPrime.io is seeking an experienced Senior DevOps Engineer
              with a specialization in AWS and Infrastructure as Code to join
              our dynamic team. As a leading DeFi protocol, we are looking for a
              dedicated professional who is passionate about building and
              maintaining robust, scalable, and secure infrastructure to support
              our innovative blockchain solutions.
            </p>

            <p className="text-base font-extrabold mt-6">
              Key Responsibilities:
            </p>
            <ul className="text-justify list-disc px-5">
              <li>
                Design, implement, and maintain scalable AWS cloud
                infrastructure with a focus on security, reliability, and
                performance.
              </li>
              <li>
                Develop and manage Infrastructure as Code (IaC) using tools such
                as Terraform, Ansible, and CloudFormation.
              </li>
              <li>
                Automate deployment pipelines, monitoring, and system alerts to
                enhance the efficiency and reliability of our infrastructure.
              </li>
              <li>
                Collaborate with development teams to create seamless CI/CD
                pipelines and integrate best practices for software delivery.
              </li>
              <li>
                Ensure the highest level of security and compliance by
                implementing network security measures and system hardening.
              </li>
              <li>
                Monitor and troubleshoot infrastructure and services,
                proactively addressing issues to maintain optimal performance.
              </li>
              <li>
                Contribute to infrastructure architecture planning and provide
                insights to improve infrastructure scalability and stability.
              </li>
              <li>
                Research, implement, and promote best practices for DevOps and
                cloud management across the organization.
              </li>
            </ul>

            <p className="text-base font-extrabold mt-6">Requirements:</p>
            <ul className="text-justify list-disc px-5">
              <li>
                5+ years of experience in DevOps, systems administration, or
                related roles, with a strong focus on reliability engineering.
              </li>
              <li>
                Proven expertise in managing AWS infrastructure, including
                experience with security, networking, and cost optimization.
              </li>
              <li>
                Demonstrated experience with Infrastructure as Code tools such
                as Terraform, Ansible, or CloudFormation.
              </li>
              <li>
                Hands-on experience with CI/CD tools and pipeline automation
                (e.g., Jenkins, GitLab CI/CD, GitHub Actions).
              </li>
              <li>
                Solid understanding of network security principles, including
                VPNs, firewalls, and encryption protocols.
              </li>
              <li>
                Strong scripting skills in Python, Bash, or similar languages
                for automation and infrastructure management.
              </li>
              <li>
                Excellent problem-solving abilities and a proactive mindset,
                with experience working in a fast-paced startup environment.
              </li>
            </ul>

            <p className="text-base font-extrabold mt-6">Nice to Have:</p>
            <ul className="text-justify list-disc px-5">
              <li>Experience with web3 technologies and platforms.</li>
              <li>
                Familiarity with JavaScript for automation scripts and
                integrations.
              </li>
              <li>
                Experience creating web3 data dashboards (e.g., Dune Analytics).
              </li>
              <li>
                Knowledge of containerization and orchestration tools like
                Docker and Kubernetes.
              </li>
              <li>Background in blockchain or decentralized technologies.</li>
            </ul>

            <p className="text-base font-extrabold mt-6">Why Join Us?</p>
            <ul className="text-justify list-disc px-5">
              <li>
                Work on the forefront of decentralized finance and blockchain
                technology.
              </li>
              <li>Flexible, remote work environment.</li>
              <li>
                Opportunity to grow with a forward-thinking team and make a
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
                . Include links to any relevant work or public repositories.
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
            <p className="">5+ years of experience</p>
          </div>
        </div>
      </div>

      <div className="mx-20">
        <ContactForm />
      </div>
    </div>
  );
}

export default Senior_DevOps_Engineer;
