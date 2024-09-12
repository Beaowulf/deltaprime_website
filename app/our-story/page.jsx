// "use client";
import React from "react";
import Image from "next/image";
import "./ourStory.css";
import Link from "next/link";
import { useTheme } from "next-themes";
import { fetchTvlData } from "@/lib/getCryptoData";
import { CTAButton } from "@/app/components/buttons/mainButton";
import ourStoryIntroImg from "@/public/assets/img/images/our-story-founders.png";
import rectangleImg from "@/public/assets/img/blogImages/rectangleImg.jpg";
import whyDeltaPrimeImg from "@/public/assets/img/whyDeltaPrimeImg.jpg";
import UnlockPotentialContainer from "@/app/components/unlockPotentialContainer/unlockPotentialContainer";
import ContactForm from "@/app/ui/contactForm/contactForm";
import Header from "@/app/components/header/header";
import FounderCard from "./cards/founderCard";
import AdvisorCard from "./cards/advisorCard";
import { BlogCardButton } from "@/app/components/buttons/mainButton";
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
        <div className="flex lg:flex-row flex-col-reverse justify-between items-center w-full md:gap-20 gap-5 my-10 md:my-40">
          {/* Text Wrapper */}
          <div className="flex flex-col md:flex-row md:mb-8 mb-0 justify-between items-center md:items-start h-fit">
            <div className="text-left flex flex-col gap-8">
              <p className="brightText text-wrap  mb-4 text-3xl md:text-[44px] dark:text-white text-[#6B70ED]">
                Our Story
              </p>
              <p className="mb-4 aboutTypographyparagraphWhite font-medium leading-5 md:leading-6 max-w-xl text-left dark:text-white text-[#565AC2]">
                Our story begins on the foothills of Mount Etna, Europe’s
                largest volcano. It was here that the idea of DeltaPrime was
                born. A brand on a mission to not only reshape the future of
                DeFI, but forge it in the fires of innovation and resilience.
              </p>
            </div>
          </div>
          {/* Image */}
          <div className="w-fit">
            <Image
              className="rounded-[25px]"
              src={ourStoryIntroImg}
              alt="deltaprime_mascot_img"
            />
          </div>
        </div>
        {/* other text */}
        <div className="flex lg:flex-row flex-col-reverse justify-between items-center w-full md:gap-20 gap-5 my-10 md:my-40">
          {/* Image */}
          <div className="w-full">
            <Image
              className="rounded-[20px] w-full h-auto md:h-full object-cover"
              src={rectangleImg}
              alt="cyberpunk_box_images"
            />
          </div>
          {/* Text Wrapper */}
          <div className="flex flex-col lg:w-1/2 w-full md:mb-8 mb-0 justify-between items-center lg:items-end h-fit">
            <div className="text-left flex flex-col gap-8">
              <div className="flex flex-col items-start mt-20 mb-10">
                <h1 className="mb-8 featureSubtitle md:text-[34px] text-[24px] text-left dark:text-white text-[#6B70ED]">
                  Unlocking Trapped Liquidity
                </h1>
                <p className="mb-4 aboutTypographyparagraphWhite font-medium leading-5 md:leading-6 max-w-xl text-left dark:text-white text-[#565AC2]">
                  That evening, chance brought three guys together. United by
                  their love for DeFi, they started talking about one of the
                  major issues in crypto; overcollateralized lending.
                  <br />
                  <span className="font-bold">
                    ”There must be a better way”, they pondered.
                  </span>
                  <br />
                  That’s when they envisioned a platform that interacts with
                  trapped liquidity, unlocking cash flows throughout the
                  ecosystem and bringing to surface a range of new investment
                  strategies.
                </p>
                <p className="mb-4 aboutTypographyparagraphWhite font-medium leading-5 md:leading-6 max-w-xl text-left dark:text-white text-[#565AC2]">
                  This later became the cornerstone of DeltaPrime's inventive
                  Diamond-Beacon Proxy (DBP) pattern, a robust and flexible
                  architecture that is infinitely scalable, resilient and
                  secure, no matter the market conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <UnlockPotentialContainer />
        </div>
        <div className="fullWidthButtonChildren h-[60px] md:h-full block md:hidden my-10 w-full text-center">
          <Link href="?modal=true" scroll={false}>
            <CTAButton
              className="mx-auto px-6 py-3"
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
            <div className="text-left flex flex-col gap-8">
              <div className="flex flex-col items-start mt-20 mb-10">
                <h1 className="mb-8 featureSubtitle md:text-[34px] text-[24px] text text-left dark:text-white text-[#6B70ED]">
                  Mission & Vision
                </h1>
                <p className="mb-4 aboutTypographyparagraphWhite font-medium leading-5 md:leading-6 height max-w-xl text-left dark:text-white text-[#565AC2]">
                  <span className="font-extrabold">Unlocking Liquidity:</span>{" "}
                  Traditional DeFi platforms often trap billions of dollars in
                  unused liquidity. We aim to change that by allowing users to
                  borrow capital without the need to lock up extra collateral.
                  This approach frees up cash throughout the ecosystem and
                  deepens liquidity in partner protocols, enabling larger trades
                  with lower slippage.
                </p>
                <p className="aboutTypographyparagraphWhite font-medium leading-5 md:leading-6 height max-w-xl text-left dark:text-white text-[#565AC2]">
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
          <h1 className="mb-8 featureSubtitle md:text-[34px] text-[24px] dark:text-white text-[#6B70ED]">
            Unlocking Trapped Liquidity
          </h1>
          <p className="aboutTypographyparagraphWhite font-medium leading-5 md:leading-6 max-w-[55rem] md:text-center mb-6 dark:text-white text-[#565AC2]">
            DeltaPrime ensures the safety of user funds through multiple
            security audits, insurance pools, and the unique Withdrawal Guard.
            This no-oracle solution only allows withdrawals if all borrowed
            assets are available, protecting against price manipulation and
            ensuring solvency.
          </p>
          <p className="aboutTypographyparagraphWhite font-medium leading-5 md:leading-6 max-w-[55rem] md:text-center mb-6 dark:text-white text-[#565AC2]">
            Each user's funds are managed through Dedicated Smart Contracts
            (DSCs), providing clear on-chain accounting and effective
            anti-exploit monitoring. Our Diamond-Beacon Proxy (DBP) pattern
            ensures DeltaPrime remains resilient and secure, even in volatile
            market conditions.
          </p>
          <p className="aboutTypographyparagraphWhite font-medium leading-5 md:leading-6 max-w-[55rem] md:text-center mb-6 dark:text-white text-[#565AC2]">
            {`Since launching on the Avalanche network in January 2023, DeltaPrime
            has attracted over`}{" "}
            <span className="font-semibold underline">{`$${tvtDataFormated} million`}</span>{" "}
            {`  in Total Value Locked (TVL) and unlocked more than $20 million in
            liquidity. Our platform serves two main user groups:`}{" "}
          </p>
          <p className="aboutTypographyparagraphWhite font-medium leading-5 md:leading-6 max-w-[55rem] md:text-center mb-6 dark:text-white text-[#565AC2]">
            <span className="font-extrabold">Depositors:</span> Enjoy simplicity
            and security with features like the Withdrawal Guard, which protects
            funds against known and unknown attacks.
          </p>
          <p className="aboutTypographyparagraphWhite font-medium leading-5 md:leading-6 max-w-[55rem] md:text-center mb-6 dark:text-white text-[#565AC2]">
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
            <Link href="?modal=true" scroll={false}>
              <CTAButton
                className="mx-auto px-6 py-3"
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
              title="CEO"
              description="Piotr Duda is the Chief Executive Officer (CEO) of DeltaPrime, where he seamlessly bridges deep business and technical expertise to drive the platform’s success. Under his leadership, DeltaPrime has emerged as a major player in the DeFi space, trusted by thousands of users and managing millions in assets. Piotr’s focus on operational efficiency and cross-team collaboration ensures the protocol’s continuous growth and innovation."
              socialMediaLink="https://www.linkedin.com/in/piotr-duda-62b66b63/?originalSubdomain=pl"
            />
            <FounderCard
              imageSrc={KamilImage}
              name="Kamil Muca"
              title="CTO"
              description="Kamil Muca is the Chief Technology Officer (CTO) of DeltaPrime, a seasoned developer who began coding at the age of 7. Before co-founding DeltaPrime, he honed his leadership and technical skills as the head of a 20-member IT team at HSBC. Kamil is the architect behind the platform’s innovative Diamond Beacon Proxy pattern, a key advancement that enables DeltaPrime to scale rapidly and efficiently while minimizing costs."
              socialMediaLink="https://www.linkedin.com/in/mucakamil/?originalSubdomain=pl"
            />
            <FounderCard
              imageSrc={gavinImage}
              name="Gavin Hasselbaink"
              title="CBDO"
              description="Gavin Hasselbaink is the Chief Business Development Officer (CBDO) of DeltaPrime, where he drives innovation and strategic partnerships. His leadership has been pivotal in expanding DeltaPrime’s reach, facilitating over $1.5 billion in transactions, and securing $70 million in total value locked. Gavin’s focus on building alliances and integrating with DeFi protocols has been instrumental in the platform’s impressive growth."
              socialMediaLink="https://www.linkedin.com/in/gavinhasselbaink/?originalSubdomain=nl"
            />
          </div>
        </div>
        {/* Unlock full potential button reponsive component */}
        <div>
          <UnlockPotentialContainer />
          {/* Show this button only on mobile */}
          <div className="fullWidthButtonChildren h-[60px] md:h-full block md:hidden my-10 w-full text-center">
            <Link href="?modal=true" scroll={false}>
              <CTAButton
                className="mx-auto px-6 py-3"
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
      <div className="deltaWhiteLinearBG w-full mt-40">
        <div className="sm:px-[5%] md:px-[8%] lg:px-[10%] xl:px-[16%] 2xl:px-[20%]] px-4 py-10">
          <div className="flex justify-around flex-wrap px-4 md:px-0 items-center">
            <div className="flex flex-col items-start max-w-[30rem] mb-8 md:mb-0">
              <h4 className="uppercase mb-2 featureTitle md:text-[15px] text-[12 px] text-center text-[#6B70ED] leading-6">
                CAREERS
              </h4>
              <h1 className="mb-8 featureSubtitle md:text-[34px] text-[24px] text text-center text-[#6B70ED] ">
                Join our team
              </h1>
              <p className="aboutTypographyparagraph max-w-2xl md:leading-6 leading-4 !text-[#565AC2]">
                DeltaPrime is a decentralised borrowing and investing ecosystem,
                unlocking trapped liquidity across chains. Users can easily
                deposit and borrow funds to increase the power of their usual
                DeFi investments.
              </p>
              <p className="aboutTypographyparagraph max-w-2xl md:leading-6 leading-4 !text-[#565AC2] mt-4">
                Our team is international, with talent from all over the world.
                We embrace a fully remote working model, allowing team members
                to collaborate and innovate from wherever they want.
              </p>
            </div>
            {/* three rows */}
            <div className="flex flex-col items-center gap-8 xl:mt-10">
              {/* Make this into its own component todo */}
              <div className="md:ml-10 featureBorderWrapLightTheme rounded-[30px]">
                <div className="w-full h-full deltaWhiteLinearBG  items-center font-semibold flex justify-between p-2 rounded-[20px]">
                  <p className="pl-6  mr-[50px] md:mr-[150px] text-[18px] text-[#29233B]">
                    Smart Contract Developer
                  </p>
                  <div className="featureBorderWrapLightTheme rounded-[50px]">
                    <Link href={"/job-description/Smart-Contract-Developer"}>
                      <BlogCardButton
                        fullWidth={true}
                        label={"Learn More"}
                        hasArrowRight={true}
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="md:ml-10 featureBorderWrapLightTheme rounded-[30px]">
                <div className="w-full h-full deltaWhiteLinearBG  items-center font-semibold flex justify-between p-2 rounded-[20px]">
                  <p className="pl-6  mr-[50px] md:mr-[150px] text-[18px] text-[#29233B]">
                    Senior DevOps Engineer
                  </p>
                  <div className="featureBorderWrapLightTheme rounded-[50px]">
                    <Link href={"/job-description/Senior-DevOps-Engineer"}>
                      <BlogCardButton
                        fullWidth={true}
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
