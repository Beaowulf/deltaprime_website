"use client";

import React, { useState, useEffect } from "react";
import DynamicPurpleBar from "@/app/components/dynamicPurpleBar/dynamicPurpleBar";
import ContactForm from "@/app/ui/contactForm/contactForm";
import { MainButton } from "@/app/components/buttons/mainButton";
import "../jobDescription.css";
import ShareButton from "@/app/components/shareButton/shareButton";
import { encodeEmail } from "@/utils/emailEncoding";

function Head_of_Security_and_DevOps() {
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
        <DynamicPurpleBar title="Head of Security and DevOps" />
      </div>
      <div className="my-10 gap-4 w-full h-auto flex flex-col lg:flex-row justify-start items-start pagePaddingLarge">
        <div className="px-3 rounded-2xl text-justify pt-20 pb-20 flex flex-col items-start descriptionWrapper w-full lg:w-auto">
          <div className="descriptionContent md:px-50 md:py-45 p-10">
            <p className="text-4xl font-bold">Head of Security and DevOps</p>
            <p className="text-2xl font-medium mt-3">
              Remote - Part-Time or Full-Time
            </p>
            <div className="w-[90%] h-[1px] bg-[#fab391] my-4" />

            <p className="text-justify">
              DeltaPrime.io is a leading DeFi protocol dedicated to delivering
              secure and innovative blockchain solutions. We are seeking an
              experienced{" "}
              <span className="font-semibold">Head of Security and DevOps</span>{" "}
              to join our dynamic team. In collaboration with our CTO and Head
              of Development, you will be responsible for making
              security-related decisions, overseeing our DevOps team, and
              ensuring adherence to security standards, policies, and procedures
              across the organization.
            </p>

            <p className="text-base font-extrabold mt-6">
              Key Responsibilities:
            </p>
            <ul className="text-justify list-disc px-5 ">
              <li>
                <span className="font-semibold">Security Leadership: </span>{" "}
                Develop and implement a comprehensive security strategy aligned
                with DeltaPrime’s objectives and the evolving DeFi landscape.
              </li>
              <li>
                <span className="font-semibold">Team Oversight: </span> Lead the
                DevOps team, integrating robust security practices within all
                operational processes.
              </li>
              <li>
                <span className="font-semibold">Policy Management: </span>{" "}
                Propose, implement, and enforce security policies, standards,
                and procedures, ensuring all team members adhere to them.
              </li>
              <li>
                <span className="font-semibold">Collaboration: </span> Work
                closely with the CTO and Head of Development to embed security
                considerations into all technical decisions.
              </li>
              <li>
                <span className="font-semibold"> Operational Security: </span>{" "}
                Manage all aspects of operational and human security, including
                infrastructure security, application security, and access
                controls.
              </li>
              <li>
                <span className="font-semibold">Risk Mitigation: </span>{" "}
                Identify potential security risks and vulnerabilities,
                implementing strategies to mitigate them proactively.
              </li>
              <li>
                <span className="font-semibold">Compliance: </span> Ensure
                adherence to industry security standards such as the
                CryptoCurrency Security Standard (CCSS) and other relevant
                frameworks.
              </li>
              <li>
                <span className="font-semibold">Incident Response: </span>{" "}
                Develop and maintain incident response plans, leading efforts to
                address any security breaches or incidents.
              </li>
              <li>
                <span className="font-semibold">Secure SDLC Integration: </span>{" "}
                Incorporate security best practices into the Software
                Development Life Cycle (SDLC), including code reviews and secure
                coding standards.
              </li>
              <li>
                <span className="font-semibold">AWS Management: </span> Oversee
                and optimize AWS cloud infrastructure with a focus on security,
                reliability, and performance.
              </li>
              <li>
                <span className="font-semibold">
                  Infrastructure as Code (IaC):{" "}
                </span>{" "}
                Utilize tools like Terraform and Ansible to manage
                infrastructure securely and efficiently.
              </li>
              <li>
                <span className="font-semibold">Continuous Improvement: </span>{" "}
                Stay updated on the latest security threats, vulnerabilities,
                and technologies, proposing enhancements to strengthen our
                security posture.
              </li>
              <li>
                <span className="font-semibold">Automation: </span> Implement
                automation in security processes and DevOps pipelines to enhance
                efficiency and reduce human error.
              </li>
              <li>
                <span className="font-semibold">
                  Monitoring and Reporting:{" "}
                </span>{" "}
                Establish monitoring systems for early detection of security
                issues and provide regular security reports to executive
                leadership.
              </li>
              <li>
                <span className="font-semibold">Mentorship: </span> Provide
                guidance and mentorship to team members on security best
                practices.
              </li>
            </ul>

            <p className="text-base font-extrabold mt-6">Requirements:</p>
            <ul className="text-justify list-disc px-5">
              <li>
                <span className="font-semibold">Experience: </span> 7+ years in
                security engineering or related roles, with a strong focus on
                blockchain and DeFi security.
              </li>
              <li>
                <span className="font-semibold">Security Expertise:</span>{" "}
                Proven experience in security strategy development, policy
                implementation, and risk management.
              </li>
              <li>
                <span className="font-semibold">DevOps Leadership:</span>{" "}
                Demonstrated ability to lead a DevOps team, integrating security
                into DevOps practices.
              </li>
              <li>
                <span className="font-semibold">AWS Proficiency:</span>{" "}
                Extensive experience managing AWS infrastructure with an
                emphasis on security and performance optimization.
              </li>
              <li>
                <span className="font-semibold">IaC Tools:</span> Hands-on
                experience with Infrastructure as Code tools like Terraform and
                Ansible.
              </li>
              <li>
                <span className="font-semibold">DeFi Knowledge:</span> Deep
                understanding of DeFi protocols, smart contract security, and
                associated challenges.
              </li>
              <li>
                <span className="font-semibold">CCSS Familiarity:</span>{" "}
                Knowledge of the CryptoCurrency Security Standard and its
                practical application.
              </li>
              <li>
                <span className="font-semibold">Secure SDLC Practices:</span>{" "}
                Experience integrating security into the Software Development
                Life Cycle.
              </li>
              <li>
                <span className="font-semibold">Strong Communication:</span>{" "}
                Strong verbal and written communication skills, capable of
                articulating complex security concepts to diverse audiences.
              </li>
              <li>
                <span className="font-semibold">Proactive Mindset:</span> Strong
                problem-solving abilities with a proactive approach to
                identifying and mitigating security risks.
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
                <span className="font-semibold">
                  Containerization Knowledge:
                </span>{" "}
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
                <span className="font-semibold">Web3 Analytics:</span>{" "}
                Experience creating security-focused dashboards or tools (e.g.,
                Dune Analytics).
              </li>
              <li>
                <span className="font-semibold">Scripting Skills:</span>{" "}
                Proficiency in Python, Bash, or similar languages for automation
                and infrastructure management.
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
                critical role in shaping the security and operational excellence
                of a leading DeFi protocol.
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
            text={"Head of Security and DevOps"}
            url={currentURL}
          />
          <div className="pt-3">
            <p className="text-base font-bold">Location</p>
            <p className="">Remote</p>
          </div>
          <div className="w-44 h-[1.5px] bg-[#FFBB9B] my-4" />
          <div>
            <p className="text-base font-bold ">Department</p>
            <p className="">Security and DevOps </p>
          </div>
          <div className="w-44 h-[1.5px] bg-[#FFBB9B] my-4" />
          <div>
            <p className="text-base font-bold">Minimum Experience</p>
            <p className="">
              7+ years in security engineering with a strong focus on blockchain
              and DeFi security
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

export default Head_of_Security_and_DevOps;
