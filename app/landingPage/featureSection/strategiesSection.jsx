import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { MainButton } from "@/app/components/buttons/mainButton";
import strategies_burd from "@/public/assets/img/strategiesImg.png";
import strategies_bubble_1 from "@/public/assets/img/strategiesImgBubble1.svg";
import strategies_bubble_2 from "@/public/assets/img/strategiesImgBubble2.svg";
import strategies_bubble_3 from "@/public/assets/img/strategiesImgBubble3.svg";
import strategies_bubble_4 from "@/public/assets/img/strategiesImgBubble4.svg";

const bubble1Variants = {
  floating: {
    y: ["0%", "-6%", "0%", "6%", "0%"],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
      delay: Math.random() * 2, // random delay for desynchronization
    },
  },
};
const bubble2Variants = {
  floating: {
    y: ["0%", "-10%", "0%", "10%", "0%"],
    transition: {
      duration: 7,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
      delay: Math.random() * 2, // random delay
    },
  },
};

const bubble3Variants = {
  floating: {
    y: ["0%", "-8%", "0%", "8%", "0%"],
    transition: {
      duration: 8,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
      delay: Math.random() * 2, // random delay
    },
  },
};

const bubble4Variants = {
  floating: {
    y: ["0%", "-12%", "0%", "12%", "0%"],
    transition: {
      duration: 9,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
      delay: Math.random() * 2, // random delay
    },
  },
};

const Strategies = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`rounded-[20px] w-full h-full ${
        theme === "dark"
          ? "featureBorderWrapDarkTheme"
          : "featureBorderWrapLightTheme"
      } z-10 mt-16 md:mt-52`}
    >
      <div className="flex items-center md:flex-row flex-col justify-around rounded-[20px] md:pl-20 pl-10 py-6 pr-6 z-20 dark:bg-[#252948] bg-[#E8E8F2] overflow-hidden ">
        {/* Left */}
        <div className="flex flex-col items-start dark:text-white text-[#252948] mb-14 max-w-96">
          <h1 className="mb-6 featureSubtitle text-[24px]">
            Strategies For Any Risk Appetite
          </h1>
          <p className="aboutTypographyparagraphWhite max-w-xl md:leading-6 leading-4">
            Join Burd and discover strategies to boost your earnings. From
            simple to advanced, find the perfect fit for your style.
          </p>
          <div className="mt-10 md:w-fit w-full">
            <Link href="/strategies">
              <MainButton hasArrowRight={true} label={"EXPLORE STRATEGIES"} />
            </Link>
          </div>
        </div>
        {/* Right */}
        <div className="mr-8 md:mr-0 strategiesIntroImgParent">
          <Image src={strategies_burd} alt="burd_mascot_with_bubbles" />
          <motion.div
            className="purple_bubble bubble-1"
            variants={bubble1Variants}
            animate="floating"
          >
            <Image
              src={strategies_bubble_1}
              alt="burd_mascot_bubble_one"
              width={100}
              height={100}
            />
          </motion.div>
          <motion.div
            className="purple_bubble bubble-2"
            variants={bubble2Variants}
            animate="floating"
          >
            <Image
              src={strategies_bubble_2}
              alt="burd_mascot_bubble_two"
              width={120}
              height={120}
            />
          </motion.div>
          <motion.div
            className="purple_bubble bubble-3"
            variants={bubble3Variants}
            animate="floating"
          >
            <Image
              src={strategies_bubble_3}
              alt="burd_mascot_bubble_three"
              width={100}
              height={100}
            />
          </motion.div>
          <motion.div
            className="purple_bubble bubble-4"
            variants={bubble4Variants}
            animate="floating"
          >
            <Image
              src={strategies_bubble_4}
              alt="burd_mascot_bubble_four"
              width={140}
              height={140}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Strategies;
