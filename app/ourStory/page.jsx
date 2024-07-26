"use client";
import React from "react";
import Image from "next/image";
import "./ourStory.css";
import Link from "next/link";
import { MainButton } from "@/app/components/buttons/mainButton";
import ourStoryIntroImg from "@/public/assets/img/introOurStoryImage.png";
import rectangleImg from "@/public/assets/img/blogImages/rectangleImg.jpg";
import whyDeltaPrimeImg from "@/public/assets/img/whyDeltaPrimeImg.jpg";
import UnlockPotentialContainer from "@/app/components/unlockPotentialContainer/unlockPotentialContainer";
import ContactForm from "@/app/ui/contactForm/contactForm";
import Header from "@/app/components/header/header";
import { useTheme } from "next-themes";
import { AboutButtonDarkBG } from "@/app/components/buttons/mainButton";

// roundImagesOfPeople
import JakubImage from "@/public/assets/img/JakubImage.png";
import KamilImage from "@/public/assets/img/KamilImage.png";
import PiotrImage from "@/public/assets/img/PiotrImage.png";
import WojciechImage from "@/public/assets/img/WojciechImage.png";
import gavinImage from "@/public/assets/img/gavinImage.png";
import avaxImage from "@/public/assets/img/avaxImage.png";

const OurStory = () => {
  const { theme } = useTheme();
  return (
    <div>
      <div className="sm:px-[5%] md:px-[8%] lg:px-[10%] xl:px-[16%] 2xl:px-[20%] px-4">
        {/* intro */}
        <div className="flex md:flex-row flex-col justify-between items-center w-full gap-20 my-10 md:my-40">
          {/* Text Wrapper */}
          <div className="flex flex-col md:mb-8 mb-0 justify-between items-center md:items-start h-fit">
            <div className="text-left flex flex-col gap-8 dark:text-white text-[#6B70ED]">
              <p className="brightText text-wrap max-w-xl mb-4 text-3xl md:text-[44px]">
                Our Story
              </p>
              <p className="whiteMainText text-wrap max-w-[35rem] text-[15px] md:text-[17px] md:leading-[25.5px] leading-5 mb-0 md:mb-10 ">
                Our story begins on the foothills of Mount Etna, Europe’s
                largest volcano. It was here that the idea of DeltaPrime was
                born. A brand on a mission to not only reshape the future of
                DeFI, but forge it in the fires of innovation and resilience.
              </p>
              <div className="fullWidthButtonChildren h-[60px] md:h-full block md:hidden  w-full text-left">
                <Link href="?modal=true">
                  <MainButton
                    className="w-[100%] md:w-fit"
                    label="LAUNCH APP"
                    hasArrowRight={true}
                  />
                </Link>
              </div>
            </div>
          </div>
          {/* Image */}
          <div className="w-fit mb-10">
            <Image
              className="md:h-[490px] md:w-[430px] h-[360px] w-[320px]"
              src={ourStoryIntroImg}
              alt="deltaprime_mascot_img"
            />
          </div>
        </div>
        {/* other text */}
        <div className="flex md:flex-row flex-col-reverse justify-center items-center w-full md:gap-20 gap-5 my-10 md:my-40">
          {/* Image */}
          <div className="max-w-[600px]">
            <Image
              className="rounded-[20px]"
              src={rectangleImg}
              alt="cyberpunk_box_images"
            />
          </div>
          {/* Text Wrapper */}
          <div className="flex flex-col md:mb-8 mb-0 justify-between items-center md:items-start h-fit">
            <div className="text-left flex flex-col gap-8 dark:text-white text-[#6B70ED]">
              <div className="flex flex-col items-start dark:text-white text-[#252948] mt-20 mb-10">
                <h1 className="mb-8 featureSubtitle md:text-[34px] text-[24px] text text-left">
                  Unlocking Trapped Liquidity
                </h1>
                <p className="mb-4 featureParagraph font-medium text-[13px] leading-5 md:text-[17px] md:leading-6 height max-w-xl text-left">
                  On that fateful evening, our founders discussed the
                  inefficiencies of overcollateralized lending in DeFi. Much
                  like diamonds remain unscathed in the heart of liquid lava,
                  they envisioned a platform that interacts with trapped
                  liquidity, unlocking cash flows throughout the ecosystem and
                  bringing to surface a range of new investment strategies.
                </p>
                <p className="featureParagraph font-medium text-[13px] leading-5 md:text-[17px] md:leading-6 height max-w-xl text-left">
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
            <MainButton
              className="mx-auto"
              label="LAUNCH APP"
              hasArrowRight={true}
            />
          </Link>
        </div>
        {/* other text */}
        <div className="flex md:flex-row flex-col justify-center items-center w-full md:gap-20 gap-5 my-10 md:my-40">
          {/* Text Wrapper */}
          <div className="flex flex-col md:mb-8 mb-0 justify-between items-center md:items-start h-fit">
            <div className="text-left flex flex-col gap-8 dark:text-white text-[#6B70ED]">
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
            Since launching on the Avalanche network in January 2023, DeltaPrime
            has attracted over $42 million in Total Value Locked (TVL) and
            unlocked more than $20 million in liquidity. Our platform serves two
            main user groups:
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
              <MainButton
                className="mx-auto"
                label="LAUNCH APP"
                hasArrowRight={true}
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

          {/* todo fix the alts, some images are not cropped correctly */}
          <div className="flex flex-wrap gap-12 items-center justify-center">
            {/* Correct card */}
            <div className="rounded-[20px] p-4 h-full featureBorderWrapLightTheme text-center">
              <div className="rounded-[20px] z-20 pb-12 dark:bg-[#252948] bg-[#E8E8F2] storyCard">
                <div className="flex justify-center items-center flex-col pt-10 px-4">
                  <Image
                    src={PiotrImage}
                    width={240}
                    height={230}
                    alt="founder_image"
                  />
                  <h3 className="featureSubtitle text-[17px] sm:text-[20px] dark:text-[#FFF5F0] text-[#252948]">
                    Piotr Duda
                  </h3>
                  <p className="featureParagraph text-[12px] sm:text-[17px] dark:text-[#FFF5F0] text-[#252948]">
                    Pack Lead
                  </p>
                  <p className="mt-8 featureParagraph max-w-[25rem] text-[12px] sm:text-[17px] dark:text-[#FFF5F0] text-[#252948]">
                    With a combination of programming/business experience, this
                    wolf leads the pack. Previously he led teams at Faurecia and
                    worked at InsurTech. A FinTech company providing insurance
                    for Lloyd’s applications.
                  </p>
                </div>
              </div>
            </div>
            {/* card */}
            <div className="rounded-[20px] p-4 h-full featureBorderWrapLightTheme text-center">
              <div className="rounded-[20px] z-20 pb-12 dark:bg-[#252948] bg-[#E8E8F2] storyCard">
                <div className="flex justify-center items-center flex-col pt-10 px-4">
                  <Image
                    src={KamilImage}
                    width={240}
                    height={230}
                    alt="founder_image"
                  />
                  <h3 className="featureSubtitle text-[17px] sm:text-[20px] dark:text-[#FFF5F0] text-[#252948]">
                    Kamil Muca
                  </h3>
                  <p className="featureParagraph text-[12px] sm:text-[17px] dark:text-[#FFF5F0] text-[#252948]">
                    Tech Wolf
                  </p>
                  <p className="mt-8 featureParagraph max-w-[25rem] text-[12px] sm:text-[17px] dark:text-[#FFF5F0] text-[#252948]">
                    Wolf Muca wrote his first line of code at the age of 7.
                    Since then he developed his way up, to eventually leading a
                    20-headed IT team at HSBC. As a true coding wizard he now
                    creates the security and efficiency in DeltaPrime’s
                    architecture.
                  </p>
                </div>
              </div>
            </div>
            {/* card */}
            <div className="rounded-[20px] p-4 h-full featureBorderWrapLightTheme text-center">
              <div className="rounded-[20px] z-20 pb-12 dark:bg-[#252948] bg-[#E8E8F2] storyCard">
                <div className="flex justify-center items-center flex-col pt-10 px-4">
                  <Image
                    src={gavinImage}
                    width={240}
                    height={230}
                    alt="founder_image"
                  />
                  <h3 className="featureSubtitle text-[17px] sm:text-[20px] dark:text-[#FFF5F0] text-[#252948]">
                    Gavin Hasselbaink
                  </h3>
                  <p className="featureParagraph text-[12px] sm:text-[17px] dark:text-[#FFF5F0] text-[#252948]">
                    Biz Wolf
                  </p>
                  <p className="mt-8 featureParagraph max-w-[25rem] text-[12px] sm:text-[17px] dark:text-[#FFF5F0] text-[#252948]">
                    This one is the business wolf. With a communication/trading
                    background, he’ll help you exactly understand how to best
                    use DeltaPrime. Additionally he’ll see to it you have access
                    to the best strategies that DeFi offers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Unlock full potential button reponsive component */}
        <div>
          <UnlockPotentialContainer />
          {/* Show this button only on mobile */}
          <div className="fullWidthButtonChildren h-[60px] md:h-full block md:hidden my-10 w-full text-center">
            <Link href="?modal=true">
              <MainButton
                className="mx-auto"
                label="LAUNCH APP"
                hasArrowRight={true}
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
          {/* todo fix the alts */}
          <div className="flex flex-wrap gap-12 items-center justify-center">
            {/* Correct card */}
            <div className="rounded-[20px] p-4 h-full featureBorderWrapLightTheme text-center ">
              <div className="rounded-[20px] z-20 pb-12 px-12 dark:bg-[#252948] bg-[#E8E8F2] storyCard h-[450px]">
                <div className="flex justify-center items-center flex-col pt-10 px-4">
                  <Image
                    src={avaxImage}
                    width={240}
                    height={230}
                    alt="founder_image"
                  />
                  <h3 className="featureSubtitle mb-4 text-[17px] sm:text-[20px] dark:text-[#FFF5F0] text-[#252948]">
                    hn_avax
                  </h3>
                  <p className="featureParagraph text-[12px] sm:text-[17px] dark:text-[#FFF5F0] text-[#252948]">
                    Cofounder <span className="font-extrabold">Benqi</span>
                    Finance
                  </p>
                  <p className="mt-2 featureParagraph max-w-[25rem] text-[12px] sm:text-[17px] dark:text-[#FFF5F0] text-[#252948]">
                    Head of Strategy{" "}
                    <span className="font-extrabold">Benqi Finance</span>
                  </p>
                </div>
              </div>
            </div>
            {/* card */}
            <div className="rounded-[20px] p-4 h-full featureBorderWrapLightTheme text-center ">
              <div className="rounded-[20px] z-20 pb-12 px-12 dark:bg-[#252948] bg-[#E8E8F2] storyCard h-[450px]">
                <div className="flex justify-center items-center flex-col pt-10 px-4">
                  <Image
                    src={JakubImage}
                    width={240}
                    height={230}
                    alt="founder_image"
                  />
                  <h3 className="featureSubtitle mb-4 text-[17px] sm:text-[20px] dark:text-[#FFF5F0] text-[#252948]">
                    Jakub Wojciechowski
                  </h3>
                  <p className="featureParagraph text-[12px] sm:text-[17px] dark:text-[#FFF5F0] text-[#252948]">
                    Founder <span className="font-extrabold">Redstone</span>
                    Finance
                  </p>
                  <p className="mt-2 featureParagraph max-w-[25rem] text-[12px] sm:text-[17px] dark:text-[#FFF5F0] text-[#252948]">
                    Former auditor
                    <span className="font-extrabold">OpenZeppelin</span>
                  </p>
                </div>
              </div>
            </div>
            {/* card */}
            <div className="rounded-[20px] p-4 h-full featureBorderWrapLightTheme text-center ">
              <div className="rounded-[20px] z-20 pb-12 px-12 dark:bg-[#252948] bg-[#E8E8F2] storyCard h-[450px]">
                <div className="flex justify-center items-center flex-col pt-10 px-4">
                  <Image
                    src={WojciechImage}
                    width={240}
                    height={230}
                    alt="founder_image"
                  />
                  <h3 className="featureSubtitle mb-4 text-[17px] sm:text-[20px] dark:text-[#FFF5F0] text-[#252948]">
                    Wojciech Lugowski
                  </h3>
                  <p className="featureParagraph text-[12px] sm:text-[17px] dark:text-[#FFF5F0] text-[#252948]">
                    Managing Partner{" "}
                    <span className="font-extrabold">Lawarton</span>
                  </p>
                  <p className="mt-2 featureParagraph max-w-[25rem] text-[12px] sm:text-[17px] dark:text-[#FFF5F0] text-[#252948]">
                    Co-founder & Head of legal
                  </p>
                  <p className="font-extrabold mt-2 featureParagraph max-w-[25rem] text-[12px] sm:text-[17px] dark:text-[#FFF5F0] text-[#252948]">
                    CobinAngels
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* join our team */}
      <div className="bg-[#F4F4FF] w-screen h-fit md:h-[40vh] mt-40">
        <div className="sm:px-[5%] md:px-[8%] lg:px-[10%] xl:px-[16%] 2xl:px-[20%]] px-4 py-[75px]">
          <div className="flex justify-around flex-wrap px-4 md:px-0">
            <div className="flex flex-col items-start dark:text-white text-[#252948] mb-14 max-w-96">
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
            <div className="flex flex-col gap-8">
              <div className="featureBorderWrapLightTheme rounded-[30px]">
                <div className="w-full h-full bg-[#F4F4FF] items-center font-semibold flex justify-between p-2 rounded-[30px]">
                  <p className="pl-6  mr-[50px] md:mr-[150px] text-[18px] text-[#29233B]">
                    DevOps Engineer
                  </p>
                  <div className="featureBorderWrapLightTheme rounded-[50px]">
                    <AboutButtonDarkBG
                      label={"Learn More"}
                      hasArrowRight={true}
                      hasWhiteArrowRight={true}
                    />
                  </div>
                </div>
              </div>
              <div className="featureBorderWrapLightTheme rounded-[30px]">
                <div className="w-full h-full bg-[#F4F4FF] items-center font-semibold flex justify-between p-2 rounded-[30px]">
                  <p className="pl-6  mr-[50px] md:mr-[150px] text-[18px] text-[#29233B]">
                    QA Tester
                  </p>
                  <div className="featureBorderWrapLightTheme rounded-[50px]">
                    <AboutButtonDarkBG
                      label={"Learn More"}
                      hasArrowRight={true}
                      hasWhiteArrowRight={true}
                    />
                  </div>
                </div>
              </div>
              <div className="featureBorderWrapLightTheme rounded-[30px]">
                <div className="w-full h-full bg-[#F4F4FF] items-center font-semibold flex justify-between p-2 rounded-[30px]">
                  <p className="pl-6  mr-[50px] md:mr-[150px] text-[18px] text-[#29233B]">
                    QA Tester
                  </p>
                  <div className="featureBorderWrapLightTheme rounded-[50px]">
                    <AboutButtonDarkBG
                      label={"Learn More"}
                      hasArrowRight={true}
                      hasWhiteArrowRight={true}
                    />
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
