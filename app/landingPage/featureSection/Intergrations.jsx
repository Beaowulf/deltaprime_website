import React from "react";
import Image from "next/image";
// Box Logos
import BalancerLogo from "@/public/assets/img/intergrations/balancerLogo.svg";
import ColonyLogo from "@/public/assets/img/intergrations/colonyLogo.svg";
import GMXLogo from "@/public/assets/img/intergrations/GMXLogo.svg";
import PangolinLogo from "@/public/assets/img/intergrations/pangolinLogo.svg";
import ParaswapLogo from "@/public/assets/img/intergrations/paraswapLogo.svg";
import TraderJoeLogo from "@/public/assets/img/intergrations/traderJoeLogo.svg";
import YakLogo from "@/public/assets/img/intergrations/yakLogo.svg";

const boxContents = [
  {
    logoURL: BalancerLogo,
    alt: "Balancer_Logo_Icon",
  },
  {
    logoURL: ColonyLogo,
    alt: "Colony_Logo_Icon",
  },
  {
    logoURL: GMXLogo,
    alt: "GMX_Logo_Icon",
  },
  {
    logoURL: PangolinLogo,
    alt: "Pangolin_Logo_Icon",
  },
  {
    logoURL: ParaswapLogo,
    alt: "Paraswap_Logo_Icon",
  },
  {
    logoURL: TraderJoeLogo,
    alt: "TraderJoe_Logo_Icon",
  },
  {
    logoURL: YakLogo,
    alt: "Yak_Logo_Icon",
  },
];

const FeatureHeader = ({ title, subTitle, paragraph }) => {
  return (
    <div className="flex flex-col items-center dark:text-white text-[#252948] mb-14 text-center">
      <h4 className="uppercase mb-3 featureTitle">{title}</h4>
      <h1 className="mb-8 featureSubtitle">{subTitle}</h1>
      <p className="featureParagraph max-w-xl">{paragraph}</p>
    </div>
  );
};

// width: 223px;
// height: 95px;
// width: 105.632px;
// height: 45px;

const IntegrationBoxes = () => {
  return (
    <div className="flex flex-wrap gap-5 ">
      <div className="intergrationBoxGradient rounded-[20px]">
        <div className="z-20 w-[110px] h-[65px] md:w-[230px] md:h-[100px] shadow-intergrationBox  flex justify-center items-center bg-[#212742] rounded-[20px]">
          <Image src={TraderJoeLogo} alt="traderjoeslogo" />
        </div>
      </div>

      {/* {boxContents.map((content, index) => (
            
        ))} */}
    </div>
  );
};

const Intergrations = () => {
  return (
    <div className="mt-32 mb-28">
      <FeatureHeader
        title="Our Features"
        subTitle="Intergrations"
        paragraph="DeltaPrime provides decentralized loans which can be used 
for these integrations."
      />
      <IntegrationBoxes />
    </div>
  );
};

export default Intergrations;
