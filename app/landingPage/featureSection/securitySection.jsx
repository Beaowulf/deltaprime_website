import React from "react";
import Image from "next/image";
// Box Logos
import svgg from "@/public/assets/icons/svgg.svg";
import Group from "@/public/assets/icons/Group.svg";
import Group5853 from "@/public/assets/icons/Group5853.svg";
import Group5854 from "@/public/assets/icons/Group5854.svg";
import Logo_atomica from "@/public/assets/icons/Logo_atomica.svg";

const FeatureHeader = ({ title, subTitle, paragraph }) => {
  return (
    <div className="flex flex-col items-center dark:text-white text-[#252948] mb-14 text-center">
      <h4 className="uppercase mb-3 featureTitle">{title}</h4>
      <h1 className="mb-8 featureSubtitle">{subTitle}</h1>
      <p className="featureParagraph max-w-xl">{paragraph}</p>
    </div>
  );
};

function SecuritySection() {
  return (
    <div className="mt-14">
      <FeatureHeader
        title="Our Features"
        subTitle="Security"
        paragraph="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu  fugiat nulla pariatur."
      />
      <div className="items-center   pb-16 flex flex-wrap justify-center gap-5">
        <div className="securitySection rounded-[20px]">
          <div className="rounded-[20px] h-full w-full">
            <Image src={svgg} alt="" />
          </div>
        </div>

        <div className="securitySection rounded-[20px]">
          <div className="rounded-[20px]  h-full w-full">
            <Image src={Group} alt="" />
          </div>
        </div>

        <div className="securitySection rounded-[20px]">
          <div className="rounded-[20px]  h-full w-full">
            <Image src={Group5853} alt="" />
          </div>
        </div>

        <div className="securitySection rounded-[20px]">
          <div className="rounded-[20px]  h-full w-full">
            <Image src={Group5854} alt="" />
          </div>
        </div>

        <div className="securitySection rounded-[20px]">
          <div className="rounded-[20px]  h-full w-full">
            <Image src={Logo_atomica} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecuritySection;
