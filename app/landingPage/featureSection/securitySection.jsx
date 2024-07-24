import React from "react";
import Image from "next/image";
import Header from "@/app/components/header/header";
import svgg from "@/public/assets/icons/svgg.svg";
import Group from "@/public/assets/icons/Group.svg";
import Group5853 from "@/public/assets/icons/Group5853.svg";
import Group5854 from "@/public/assets/icons/Group5854.svg";
import Logo_atomica from "@/public/assets/icons/Logo_atomica.svg";

import UnlockPotentialContainer from "@/app/components/unlockPotentialContainer/unlockPotentialContainer";

const DarkBoxWrapper = ({ aboutimg }) => {
  return (
    <div className="rounded-[20px] p-4 parentColoredBorderWrapper">
      <div className="securitySection bg-[#1B153C] rounded-[20px] ">
        <div className="rounded-[20px] h-full w-full flex place-items-center">
          <Image src={aboutimg} alt="aboutimg" />
        </div>
      </div>
    </div>
  );
};

function SecuritySection() {
  return (
    <div className="mt-14">
      <Header
        title="Our Features"
        subTitle="Security"
        paragraph="Smart contracts with protocol-level security and 7 audits, help protect what we value most, our community’s investments, "
      />
      <div className="items-center pb-16 flex flex-wrap justify-center gap-5">
        <DarkBoxWrapper aboutimg={svgg} />
        <DarkBoxWrapper aboutimg={Group} />
        <DarkBoxWrapper aboutimg={Group5853} />
        <DarkBoxWrapper aboutimg={Group5854} />
        <DarkBoxWrapper aboutimg={Logo_atomica} />
      </div>
    </div>
  );
}

export default SecuritySection;
