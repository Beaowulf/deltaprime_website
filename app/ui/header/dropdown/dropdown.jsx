"use client";
import { useState } from "react";
import Image from "next/image";
import "./dropdown.css";
import { motion, AnimatePresence } from "framer-motion";
import DownArrow from "@/public/assets/icons/DownArrow.svg";
import UpArrow from "@/public/assets/icons/UpArrow.svg";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <div className="relative inline-block text-left">
      <div
        className="flex items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <span className="mr-2">Text</span>
        {isOpen ? (
          <Image height={5} width={5} src={UpArrow} alt="Up Arrow" />
        ) : (
          <Image height={5} width={5} src={DownArrow} alt="Down Arrow" />
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute mt-2 w-[20rem] bg-[#000F38] border-[2px] scale-[1.01] box-border p-2 border-[#fff] rounded-md shadow-lg z-50"
          >
            <div className="p-4 grid grid-cols-2 gap-4">
              <div className="flex flex-col justify-end items-start gap-5 text-white">
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
                  Every strategyis accompanied by a practical example, getting
                  deeper into the risk and rewards of the specific strategy.
                </motion.p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {/* array of strategies boxes */}
                {Array.from({ length: 6 }, (_, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={boxVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="w-20 h-20 bg-blue-500 rounded"
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
