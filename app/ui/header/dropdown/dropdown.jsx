"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./dropdown.css";
import { motion, AnimatePresence } from "framer-motion";
import DownArrow from "@/public/assets/icons/DownArrow.svg";
import UpArrow from "@/public/assets/icons/UpArrow.svg";
import boxImage from "@/public/assets/img/images/navStrategieContainerImg.png";

const DropdownMenu = ({ strategies }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  const boxVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
    exit: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  const StrategyNavBox = ({ custom, boxVariants, className, strategy }) => {
    return (
      <motion.div
        custom={custom}
        variants={boxVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={className}
      >
        <div className="p-5 pl-1 flex flex-row gap-4 w-full h-full bg-gradient-to-b from-[#1b153c] from-10% via-[#1c2943] via-50% to-[#301e3e] to-80% rounded boxContainer">
          <Image
            src={boxImage}
            alt="bird_carrying_book_img"
            className="object-cover w-[80px] h-[90px]"
          />
          <div className="flex flex-col gap-2">
            <Link
              onClick={closeDropdown}
              href={`/strategies/${strategy.strategySYS.id}`}
              className="font-semibold pt-4 text-white  !z-50"
            >
              <p className="w-fit font-bold text-[12px] mb-2">
                {strategy.strategyTitle}
              </p>
              <p className="whitespace-nowrap overflow-hidden text-ellipsis max-w-[100px] font-semibold text-[10px] mb-2">
                {strategy.strategyDescription}
              </p>
            </Link>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="relative inline-block text-left z-100">
      <div
        className="flex items-center cursor-pointer "
        onClick={toggleDropdown}
      >
        <span className="mr-2">Text</span>
        {isOpen ? (
          <Image
            className="w-3 h-3"
            height={10}
            width={10}
            src={UpArrow}
            alt="Up Arrow"
          />
        ) : (
          <Image
            className="w-3 h-3"
            height={10}
            width={10}
            src={DownArrow}
            alt="Down Arrow"
          />
        )}
      </div>
      {isOpen ? (
        <div className="w-full h-[2px] mt-1 bg-gradient-to-b from-[#FFBB9B] from-10% via-[#FF8FB8] via-60% to-[#AFAFFF] to-80%" />
      ) : (
        ""
      )}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute left-[-40rem] top-[2.5rem] mt-2 md:w-[65rem] w-[45rem] bg-[#000F38] border-[2px] scale-[1.01] box-border p-2 border-[#fff] rounded-2xl shadow-lg z-[1000]"
          >
            <div className="p-4 grid grid-cols-2 ">
              <div className="flex flex-col justify-center items-start gap-5 text-white pr-[5rem]">
                <motion.p
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="mb-2 brightTitle text-[25px]"
                >
                  Strategies
                </motion.p>
                <motion.p
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="mb-2 text-[15px]"
                >
                  DeltaPrime allows for a range of new and unique strategies.
                  Every strategy is accompanied by a practical example, getting
                  deeper into the risk and rewards of the specific strategy.
                </motion.p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {strategies.map((strategy, i) => (
                  <StrategyNavBox
                    key={i}
                    custom={i}
                    boxVariants={boxVariants}
                    className="rounded boxWrapper"
                    strategy={strategy}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownMenu;
