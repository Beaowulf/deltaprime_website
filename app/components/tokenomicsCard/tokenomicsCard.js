// TokenomicsCards.js
import React from "react";
import Image from "next/image";
import unlockedIcon from "@/public/assets/icons/unlockedIcon.svg";
import lockedIcon from "@/public/assets/icons/lockedIcon.svg";
import { MainButton } from "../buttons/mainButton";

const Card = ({ icon, title, description, href }) => (
  <div className="rounded-[20px] flex-1 p-4 parentColoredBorderWrapper md:mt-12 mt-4 md:mb-16 mb-6 flex flex-col">
    <div className="relative flex flex-col items-center rounded-[20px] p-8 md:p-10 lg:p-12 shadow-lg flex-grow dark:bg-deltaDarkBlueBG bg-deltaWhiteLinearBG">
      <div className="rounded-full absolute -top-16 w-32 h-32 parentColoredBorderWrapperIcon flex items-center justify-center">
        <div className="rounded-full z-10 w-[99%] h-[99%] flex items-center justify-center dark:bg-deltaDarkBlueBG bg-deltaWhiteLinearBG">
          <Image src={icon} alt={title} className="h-[75px] w-auto" />
        </div>
      </div>
      <div className="flex flex-col items-left mt-16 mb-4 flex-grow">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-base md:text-lg mb-4">{description}</p>
      </div>
    </div>
  </div>
);

const TokenomicsCards = () => (
  <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 mt-10">
    <Card
      icon={unlockedIcon}
      title="Unlocked $sPRIME"
      description="Is mainly received when providing to the $PRIME paired liquidity pools, which can be done seamlessly by “minting $sPRIME” using either AVAX, ETH, PRIME, or their equivalent DEX LP-tokens on the DeltaPrime app. This instance of $sPRIME can be redeemed to receive the underlying assets in the liquidity pool."
      href="/blogs"
    />
    <Card
      icon={lockedIcon}
      title="Locked $sPRIME"
      description="Is airdropped to users who fulfill certain criteria and reach specific achievements set by DeltaPrime. It also generates rewards from the 33% share of the liquidation fees. It can be used to pay for platform functionalities, but it cannot be used to retrieve assets from the liquidity pool."
      href="/blogs"
    />
  </div>
);

export default TokenomicsCards;
