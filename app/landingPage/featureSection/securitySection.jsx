import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/header/header";
import svgg from "@/public/assets/icons/svgg.svg";
import Group from "@/public/assets/icons/Group.svg";
import Group5853 from "@/public/assets/icons/Group5853.svg";
import Group5854 from "@/public/assets/icons/Group5854.svg";
import Logo_atomica from "@/public/assets/icons/Logo_atomica.svg";

const DarkBoxWrapper = ({ aboutimg, alt }) => {
  return (
    <div className="rounded-[20px] p-4 parentColoredBorderWrapper">
      <div className="securitySection bg-[#1B153C] rounded-[20px] ">
        <div className="rounded-[20px] h-full w-full flex place-items-center">
          <Image src={aboutimg} alt={alt} />
        </div>
      </div>
    </div>
  );
};

function SecuritySection() {
  return (
    <div className="mt-14">
      <Header
        subTitle="Security"
        paragraph="Smart contracts with protocol-level security and 7 audits, help protect what we value most, our community’s investments, "
      />
      <div className="items-center pb-16 flex flex-wrap justify-center gap-5">
        <Link href="https://peckshield.com/" target="_blank">
          <DarkBoxWrapper aboutimg={svgg} alt={"peckShield-icon"} />
        </Link>
        <Link href="https://www.chainalysis.com/" target="_blank">
          <DarkBoxWrapper aboutimg={Group} alt={"chainAlysis-icon"} />
        </Link>
        <Link href="https://fcshield.com/" target="_blank">
          <DarkBoxWrapper aboutimg={Group5853} alt={"FC_Shield-icon"} />
        </Link>
        <Link href="https://www.hexagate.com/" target="_blank">
          <DarkBoxWrapper aboutimg={Group5854} alt={"hexagate-icon"} />
        </Link>
        <Link href="https://www.atomica.org/" target="_blank">
          <DarkBoxWrapper aboutimg={Logo_atomica} alt={"atomica-icon"} />
        </Link>
      </div>
    </div>
  );
}

export default SecuritySection;
