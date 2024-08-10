// "use client";
import React from "react";
import Image from "next/image";
import "./ourStory.css";
import Link from "next/link";
import { useTheme } from "next-themes";
import { fetchTvlData } from "@/lib/getCryptoData";
import { CTAButton, MainButton } from "@/app/components/buttons/mainButton";
import ourStoryIntroImg from "@/public/assets/img/introOurStoryImage.png";
import rectangleImg from "@/public/assets/img/blogImages/rectangleImg.jpg";
import whyDeltaPrimeImg from "@/public/assets/img/whyDeltaPrimeImg.jpg";
import UnlockPotentialContainer from "@/app/components/unlockPotentialContainer/unlockPotentialContainer";
import ContactForm from "@/app/ui/contactForm/contactForm";
import Header from "@/app/components/header/header";
import FounderCard from "./cards/founderCard";
import AdvisorCard from "./cards/advisorCard";
import { AboutButtonDarkBG } from "@/app/components/buttons/mainButton";
import JakubImage from "@/public/assets/img/images/avatars/Jakub.png";
import KamilImage from "@/public/assets/img/images/avatars/Kamil.jpeg";
import PiotrImage from "@/public/assets/img/images/avatars/Piotr.png";
import WojciechImage from "@/public/assets/img/images/avatars/Wojciech.png";
import gavinImage from "@/public/assets/img/images/avatars/Gavin.png";
import avaxImage from "@/public/assets/img/images/avatars/hn_avax.png";
import AdvisorCardCarousel from "./carouselsForCards/advisorCardCarousel";
import FounderCardCarousel from "./carouselsForCards/founderCardCarousel";

const tvlData = await fetchTvlData();
const tvtDataFormated = tvlData.totalTvl.slice(0, 2);

const OurStory = () => {
  return (
    <div>
      <div className="pagePaddingLarge">
        {/* intro */}
        <div className="flex md:flex-row flex-col justify-between items-center w-full gap-20 my-10 md:my-40">
          {/* Text Wrapper */}
          <div className="flex flex-col md:flex-row md:mb-8 mb-0 justify-between items-center md:items-start h-fit">
            <div className="text-left flex flex-col gap-8 dark:text-white text-[#252948]">
              <p className="brightText text-wrap max-w-xl mb-4 text-3xl md:text-[44px]">
                Our Story
              </p>
              <p className="whiteMainText text-wrap max-w-[35rem] text-[15px] md:text-[17px] md:leading-[25.5px] leading-5 mb-0 md:mb-10">
                Our story begins on the foothills of Mount Etna, Europe’s
                largest volcano. It was here that the idea of DeltaPrime was
                born. A brand on a mission to not only reshape the future of
                DeFI, but forge it in the fires of innovation and resilience.
              </p>
              <div className="fullWidthButtonChildren h-[60px] md:h-full block md:hidden w-full text-left">
                <Link href="?modal=true">
                  <CTAButton
                    className="w-[100%] md:w-fit px-8 py-4"
                    label="LAUNCH APP"
                    hasArrowRight={true}
                    typographyClass="text-[15px]"
                  />
                </Link>
              </div>
            </div>
          </div>
          {/* Image */}
          <div className="w-fit mb-10">
            <Image
              className="md:h-[490px] md:w-[430px] h-[360px] w-[320px] object-contain"
              src={ourStoryIntroImg}
              alt="deltaprime_mascot_img"
            />
          </div>
        </div>
        {/* other text */}
        <div className="flex md:flex-row flex-col-reverse justify-between items-center w-full md:gap-20 gap-5 my-10 md:my-40">
          {/* Image */}
          <div className="w-full md:w-1/2 max-w-[600px]">
            <Image
              className="rounded-[20px] w-full h-auto md:h-full object-cover"
              src={rectangleImg}
              alt="cyberpunk_box_images"
            />
          </div>
          {/* Text Wrapper */}
          <div className="flex flex-col md:w-1/2 w-full md:mb-8 mb-0 justify-between items-center md:items-start h-fit">
            <div className="text-left flex flex-col gap-8 dark:text-white text-[#252948]">
              <div className="flex flex-col items-start dark:text-white text-[#252948] mt-20 mb-10">
                <h1 className="mb-8 featureSubtitle md:text-[34px] text-[24px] text-left">
                  Unlocking Trapped Liquidity
                </h1>
                <p className="mb-4 featureParagraph font-medium text-[13px] leading-5 md:text-[17px] md:leading-6 max-w-xl text-left">
                  On that fateful evening, our founders discussed the
                  inefficiencies of overcollateralized lending in DeFi. Much
                  like diamonds remain unscathed in the heart of liquid lava,
                  they envisioned a platform that interacts with trapped
                  liquidity, unlocking cash flows throughout the ecosystem and
                  bringing to surface a range of new investment strategies.
                </p>
                <p className="featureParagraph font-medium text-[13px] leading-5 md:text-[17px] md:leading-6 max-w-xl text-left">
                  This powerful analogy became the cornerstone of DeltaPrime's
                  revolutionary Diamond-Beacon Proxy (DBP) pattern, a robust and
                  scalable architecture that ensures our platform remains
                  infinitely scalable, resilient and secure, no matter the
                  market conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <UnlockPotentialContainer />
        </div>
        <div className="fullWidthButtonChildren h-[60px] md:h-full block md:hidden my-10 w-full text-center">
          <Link href="?modal=true">
            <CTAButton
              className="mx-auto px-8 py-4"
              label="LAUNCH APP"
              hasArrowRight={true}
              typographyClass="text-[15px]"
            />
          </Link>
        </div>
        {/* other text */}
        <div className="flex md:flex-row flex-col justify-between items-center w-full md:gap-20 gap-5 my-10 md:my-40">
          {/* Text Wrapper */}
          <div className="flex flex-col md:mb-8 mb-0 justify-between items-center md:items-start h-fit">
            <div className="text-left flex flex-col gap-8 dark:text-white text-[#252948]">
              <div className="flex flex-col items-start dark:text-white text-[#252948] mt-20 mb-10">
                <h1 className="mb-8 featureSubtitle md:text-[34px] text-[24px] text text-left">
                  Mission & Vision
                </h1>
                <p className="mb-4 featureParagraph font-medium text-[13px] leading-5 md:text-[17px] md:leading-6 height max-w-xl text-left">
                  <span className="font-extrabold">Unlocking Liquidity:</span>{" "}
                  Traditional DeFi platforms often trap billions of dollars in
                  unused liquidity. We aim to change that by allowing users to
                  borrow capital without the need to lock up extra collateral.
                  This approach frees up cash throughout the ecosystem and
                  deepens liquidity in partner protocols, enabling larger trades
                  with lower slippage.
                </p>
                <p className="featureParagraph font-medium text-[13px] leading-5 md:text-[17px] md:leading-6 height max-w-xl text-left">
                  <span className="font-extrabold">Liberating Funds:</span> We
                  envision DeltaPrime becoming the central bank of DeFi,
                  offering unique leverage and investment strategies not
                  available elsewhere. Our innovative DBP pattern allows us to
                  scale infinitely and integrate new functionalities without
                  major upgrades. We aim to expand beyond DeFi into other
                  verticals like NFTs and gaming, creating a more interconnected
                  and efficient financial ecosystem.
                </p>
              </div>
            </div>
          </div>
          {/* Image */}
          <div className="w-fit">
            <Image
              className="rounded-[20px]"
              src={whyDeltaPrimeImg}
              alt="cyberpunk_box_images"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <h1 className="mb-8 featureSubtitle md:text-[34px] text-[24px]">
            Unlocking Trapped Liquidity
          </h1>
          <p className="featureParagraph font-medium text-[13px] leading-5 md:text-[17px] md:leading-6 max-w-[55rem] text-center mb-6">
            DeltaPrime ensures the safety of user funds through multiple
            security audits, insurance pools, and the unique Withdrawal Guard.
            This no-oracle solution only allows withdrawals if all borrowed
            assets are available, protecting against price manipulation and
            ensuring solvency.
          </p>
          <p className="featureParagraph font-medium text-[13px] leading-5 md:text-[17px] md:leading-6 max-w-[50rem] text-center mb-6">
            Each user's funds are managed through Dedicated Smart Contracts
            (DSCs), providing clear on-chain accounting and effective
            anti-exploit monitoring. Our Diamond-Beacon Proxy (DBP) pattern
            ensures DeltaPrime remains resilient and secure, even in volatile
            market conditions.
          </p>
          <p className="featureParagraph font-medium text-[13px] leading-5 md:text-[17px] md:leading-6 max-w-[50rem] text-center mb-6">
            {`Since launching on the Avalanche network in January 2023, DeltaPrime
            has attracted over`}{" "}
            <span className="font-semibold underline">{`$${tvtDataFormated} million`}</span>{" "}
            {`  in Total Value Locked (TVL) and unlocked more than $20 million in
            liquidity. Our platform serves two main user groups:`}{" "}
          </p>
          <p className="featureParagraph font-medium text-[13px] leading-5 md:text-[17px] md:leading-6 max-w-[50rem] text-center mb-6">
            <span className="font-extrabold">Depositors:</span> Enjoy simplicity
            and security with features like the Withdrawal Guard, which protects
            funds against known and unknown attacks.
          </p>
          <p className="featureParagraph font-medium text-[13px] leading-5 md:text-[17px] md:leading-6 max-w-[50rem] text-center">
            <span className="font-extrabold">Borrowers:</span> Benefit from
            investment freedom with integrations across various DeFi protocols,
            enabling diverse and scalable investment strategies.
          </p>
        </div>
        {/* Unlock full potential button reponsive component */}
        <div>
          <UnlockPotentialContainer />
          {/* Show this button only on mobile */}
          <div className="fullWidthButtonChildren h-[60px] md:h-full block md:hidden my-10 w-full text-center">
            <Link href="?modal=true">
              <CTAButton
                className="mx-auto px-8 py-4"
                label="LAUNCH APP"
                hasArrowRight={true}
                typographyClass="text-[15px]"
              />
            </Link>
          </div>
        </div>

        {/* team */}
        <div className="mt-40">
          <Header
            title={"Our Story"}
            subTitle={"The Founders"}
            paragraph={
              "DeltaPrime was born from the minds of three visionaries, each bringing their own unique set of skills and experiences:"
            }
          />
          {/* Carousel for mobile view */}
          <FounderCardCarousel />
          {/* Only for Desktop view */}
          <div className="md:flex hidden flex-wrap gap-8 items-center justify-center">
            <FounderCard
              imageSrc={PiotrImage}
              name="Piotr Duda"
              title="Pack Lead"
              description="With a combination of programming/business experience, this wolf leads the pack. Previously he led teams at Faurecia and worked at InsurTech. A FinTech company providing insurance for Lloyd’s applications."
              socialMediaLink="https://www.linkedin.com/in/piotr-duda-62b66b63/?originalSubdomain=pl"
            />
            <FounderCard
              imageSrc={KamilImage}
              name="Kamil Muca"
              title="Tech Wolf"
              description="Wolf Muca wrote his first line of code at the age of 7. Since then he developed his way up, to eventually leading a 20-headed IT team at HSBC. As a true coding wizard he now creates the security and efficiency in DeltaPrime’s architecture."
              socialMediaLink="https://www.linkedin.com/in/mucakamil/?originalSubdomain=pl"
            />
            <FounderCard
              imageSrc={gavinImage}
              name="Gavin Hasselbaink"
              title="Biz Wolf"
              description="This one is the business wolf. With a communication/trading background, he’ll help you exactly understand how to best use DeltaPrime. Additionally he’ll see to it you have access to the best strategies that DeFi offers."
              socialMediaLink="https://www.linkedin.com/in/gavinhasselbaink/?originalSubdomain=nl"
            />
          </div>
        </div>
        {/* Unlock full potential button reponsive component */}
        <div>
          <UnlockPotentialContainer />
          {/* Show this button only on mobile */}
          <div className="fullWidthButtonChildren h-[60px] md:h-full block md:hidden my-10 w-full text-center">
            <Link href="?modal=true">
              <CTAButton
                className="mx-auto px-8 py-4"
                label="LAUNCH APP"
                hasArrowRight={true}
                typographyClass="text-[15px]"
              />
            </Link>
          </div>
        </div>
        {/* advisors */}
        <div className="mt-40">
          <Header
            title={"Our Story"}
            subTitle={"Our Advisors"}
            paragraph={
              "DeltaPrime's advisors are DeFi veterans and help ensure the platform's strategic development and success"
            }
          />
          {/* Carousel for mobile view */}
          <AdvisorCardCarousel />
          {/* Only for Desktop view */}
          <div className="md:flex hidden flex-wrap gap-12 items-center justify-center">
            <AdvisorCard
              imageSrc={avaxImage}
              name="hn_avax"
              position="Cofounder"
              subPosition="Benqi Finance"
              additionalInfo="Head of Strategy Benqi Finance"
              socialMediaLink="https://x.com/hn_avax"
              usesTwitter={true}
            />
            <AdvisorCard
              imageSrc={JakubImage}
              name="Jakub Wojciechowski"
              position="Founder"
              subPosition="Redstone Finance"
              additionalInfo="Former auditor OpenZeppelin"
              socialMediaLink="https://www.linkedin.com/in/jakub-wojciechowski-5901b68/?originalSubdomain=pl"
            />
            <AdvisorCard
              imageSrc={WojciechImage}
              name="Wojciech Lugowski"
              position="Managing Partner"
              subPosition="Lawarton"
              additionalInfo="Co-founder & Head of legal at CobinAngels"
              socialMediaLink="https://www.linkedin.com/in/wojciech-lugowski/?originalSubdomain=pl"
            />
          </div>
        </div>
      </div>

      {/* join our team */}
      <div className="bg-[#F4F4FF] w-screen mt-40">
        <div className="sm:px-[5%] md:px-[8%] lg:px-[10%] xl:px-[16%] 2xl:px-[20%]] px-4 py-10">
          <div className="flex justify-around flex-wrap px-4 md:px-0 ">
            <div className="flex flex-col items-start dark:text-white text-[#252948] max-w-96 mb-8 md:mb-0">
              <h4 className="uppercase mb-2 featureTitle md:text-[15px] text-[12 px] text-center text-black leading-6">
                STRATEGIES
              </h4>
              <h1 className="mb-6 featureSubtitle text-[24px] text-black">
                Do you want to learn more about strategies?
              </h1>
              <p className="featureParagraph max-w-2xl text-[13px] md:leading-6 sm:text-[17px] leading-4 text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            {/* three rows */}
            <div className="flex flex-col items-center my-auto gap-8">
              {/* Make this into its own component todo */}
              <div className="md:ml-10 featureBorderWrapLightTheme rounded-[30px]">
                <div className="w-full h-full bg-[#F4F4FF] items-center font-semibold flex justify-between p-2 rounded-[20px]">
                  <p className="pl-6  mr-[50px] md:mr-[150px] text-[18px] text-[#29233B]">
                    DevOps Engineer
                  </p>
                  <div className="featureBorderWrapLightTheme rounded-[50px]">
                    <Link href={"/jobDescription"}>
                      <AboutButtonDarkBG
                        label={"Learn More"}
                        hasArrowRight={true}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:px-[5%] md:px-[8%] lg:px-[10%] xl:px-[16%] 2xl:px-[20%] px-4">
        <ContactForm />
      </div>
    </div>
  );
};

export default OurStory;
