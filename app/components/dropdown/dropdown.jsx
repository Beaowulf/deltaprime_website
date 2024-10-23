"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import "./dropdown.css";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import DownArrow from "@/public/assets/icons/DownArrow.svg";
import UpArrow from "@/public/assets/icons/UpArrow.svg";
import RightArrow from "@/public/assets/icons/bigArrowRight.svg";
import BigArrowDown from "@/public/assets/icons/bigArrowDown.svg";
import StarFilled from "@/public/assets/icons/starFilled.svg";
import StarUnfilled from "@/public/assets/icons/starUnfilled.svg";
import boxImage from "@/public/assets/img/images/navStrategieContainerImg.png";
import { getLinkClass } from "@/lib/getLinkClass";
import { SmallBlogCard } from "@/app/components/blogCard/blogCard";

const DropdownMenu = ({
  strategyData,
  burdLogData,
  menuText,
  boxTitle,
  boxText,
  boxLink,
  isBlog = false,
  isStrategy = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const overlayRef = useRef(null);
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.classList.remove("no-scroll");
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.body.classList.remove("no-scroll");
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

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
    const { resolvedTheme } = useTheme();

    const StarLevel = (level) => {
      const numericLevel = level?.level;

      const totalStars = 3;
      const filledStars = numericLevel ?? 0;
      const unfilledStars = totalStars - filledStars;

      const stars = [];

      for (let i = 0; i < filledStars; i++) {
        stars.push(
          <Image
            key={`filled-${i}`}
            className="w-4 h-4"
            height={15}
            width={15}
            src={StarFilled}
          />
        );
      }

      for (let i = 0; i < unfilledStars; i++) {
        stars.push(
          <Image
            key={`unfilled-${i}`}
            className="w-4 h-4"
            height={15}
            width={15}
            src={StarUnfilled}
          />
        );
      }

      return (
        <div className="flex flex-row">
          <p className="text-[15px] textShadow mr-2">Difficulty Level:</p>
          <div className="flex flex-row gap-2 justify-center items-center">
            {stars}
          </div>
        </div>
      );
    };

    return (
      <motion.div
        custom={custom}
        variants={boxVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={`mb-4 ${className} ${
          resolvedTheme === "dark" ? "dark" : ""
        }`}
      >
        <a
          onClick={closeDropdown}
          href={`/strategies/${strategy.slug}`}
          className="font-semibold pt-4 text-white !z-50 rounded-[25px]"
        >
          <div className="flex flex-col gap-2 justify-center dark:text-white text-[#565AC2] ">
            <p className="w-full font-bold text-[17px] textShadow">
              {strategy.strategyTitle}
            </p>
            <StarLevel level={strategy.difficultyLevel} />
            <p className="font-semibold text-[12px] line-clamp-3 overflow-ellipsis">
              {strategy.strategyDescription}
            </p>
          </div>
        </a>
      </motion.div>
    );

    // return (
    //   <motion.div
    //     custom={custom}
    //     variants={boxVariants}
    //     initial="hidden"
    //     animate="visible"
    //     exit="exit"
    //     className={`${className} strategy-nav-box ${
    //       resolvedTheme === "dark" ? "dark" : ""
    //     }`}
    //   >
    //     <a
    //       onClick={closeDropdown}
    //       href={`/strategies/${strategy.slug}`}
    //       className="font-semibold pt-4 text-white !z-50 rounded-[25px]"
    //     >
    //       <div className="p-5 pl-1 flex flex-row gap-4 w-full h-full boxContainer rounded-[26px]">
    //         <div className="flex flex-col gap-2 justify-center">
    //           <p className="w-fit font-bold text-[12px] mb-2 ">
    //             {strategy.strategyTitle}
    //           </p>
    //           <p className="overflow-hidden text-ellipsis line-clamp-2 text-wrap font-semibold text-[10px] mb-2 ">
    //             {strategy.strategyDescription}
    //           </p>
    //         </div>
    //       </div>
    //     </a>
    //   </motion.div>
    // );
  };

  const MenuDropDownDesktop = () => {
    resolvedTheme === "dark" ? "bg-[#000F38]" : "bg-[#F6F6F6]";

    return (
      <motion.div
        ref={dropdownRef}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={`dark:text-white text-[#565AC2]  dropdown-menu absolute 2xl:-left-[9rem] lg:-left-[19rem] -left-[27rem] top-[2.5rem] box-border rounded-[26px] shadow-lg z-[1000] p-6 ${
          resolvedTheme === "dark" ? "bg-[#000F38]" : "bg-[#F6F6F6]"
        } `}
      >
        <div className="w-full">
          <p className="text-[23px] textShadow mb-8">
            {isStrategy ? "Strategies" : "Latest Posts"}
          </p>
        </div>
        <div className="flex flex-row gap-8">
          {isStrategy ? (
            <div className="">
              <div className="flex flex-row justify-between w-[13rem]">
                <p className="text-[12px] text-wrap mr-4">
                  DeltaPrime allows for a range of new and unique strategies.
                  Every strategy is accompanied by a practical example, getting
                  deeper into the risk and rewards of the specific strategy.
                </p>
                <Image
                  className="w-6 h-6"
                  height={15}
                  width={15}
                  src={BigArrowDown}
                  alt="Big Arrow Down"
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <div className="flex flex-row justify-between w-[12rem]">
                <p className="text-[15px] textShadow text-nowrap">Blogs</p>
                <Image
                  className="w-4 h-4"
                  height={15}
                  width={15}
                  src={RightArrow}
                  alt="Right Arrow"
                />
              </div>
              <div className="flex flex-row justify-between w-[12rem]">
                <p className="text-[15px] textShadow text-nowrap">
                  How To Videos
                </p>
                <Image
                  className="w-4 h-4"
                  height={15}
                  width={15}
                  src={RightArrow}
                  alt="Right Arrow"
                />
              </div>
            </div>
          )}

          <div className="relative pl-[25px] z-10">
            <div className="absolute inset-0 h-full w-[2px] bg-gradient-to-b from-[#afafffab] via-[#FF8FB8ab] to-[#FFBB9Bab] rounded-[25px]" />
            {isStrategy && (
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4 w-[30rem]">
                {strategyData.map((strategy, i) => (
                  <StrategyNavBox
                    key={i}
                    custom={i}
                    boxVariants={boxVariants}
                    // className="boxWrapper"
                    strategy={strategy}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="relative inline-block text-left">
      <div
        className="flex items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="mr-2 text-gray-500 text-[#696969] hover:text-[#000000] dark:text-[#DADADA] dark:hover:text-[#fff] rounded-md md:text-[16px] text-[12px] font-medium text-nowrap">
          {menuText}
        </div>
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

      {isOpen && (
        <div className="w-full h-[2px] mt-1 bg-gradient-to-b from-[#FFBB9B] from-10% via-[#FF8FB8] via-60% to-[#AFAFFF] to-80%" />
      )}
      {!isOpen && isStrategy && (
        <div className={getLinkClass("/strategies", pathname, resolvedTheme)} />
      )}
      {!isOpen && isBlog && (
        <div className={getLinkClass("/blogs", pathname, resolvedTheme)} />
      )}

      <AnimatePresence>
        {isOpen && (
          <>
            {isOpen && <div className="overlay visible" />}
            {/* Add the overlay */}
            <MenuDropDownDesktop />
            {/* <motion.div
              ref={dropdownRef}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className={`dropdown-menu absolute 2xl:left-[-35rem] lg:left-[-35rem] ${
                isStrategy ? "left-[-19rem]" : "left-[-25rem]"
              } top-[5rem] lg:top-[2.5rem] mt-2 lg:w-[65rem] w-[35rem] ${
                resolvedTheme === "dark" ? "bg-[#000F38]" : "bg-[#F6F6F6]"
              } box-border p-2 rounded-[26px] shadow-lg z-[1000]`}
            >
              <div className="p-4 flex items-center justify-between flex-wrap  ">
                <div className="flex flex-col justify-center items-center mb-4 lg:mb-0 lg:items-start gap-5 text-white lg:pr-[5rem] max-w-[25rem] mx-auto lg:mx-0 z-10">
                  <motion.p
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="mb-2 brightTitle text-[25px] dark:text-[#fff] text-[#6B70ED]"
                  >
                    {boxTitle}
                  </motion.p>
                  <motion.p
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="mb-2 text-[15px] dark:text-[#fff] text-[#565AC2]"
                  >
                    {boxText}
                  </motion.p>
                  {isBlog && (
                    <motion.div
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="mb-2 text-[15px] dark:text-[#fff] text-[#565AC2]"
                    >
                      <a
                        className="mb-2 text-[15px] underline hover:text-gray-400"
                        href={"/how-to-videos"}
                        onClick={closeDropdown}
                      >
                        How To Videos
                      </a>
                    </motion.div>
                  )}
                  <motion.div
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="mb-2 text-[15px] dark:text-[#fff] text-[#565AC2]"
                  >
                    <a
                      className="mb-2 text-[15px] underline hover:text-gray-400"
                      href={boxLink}
                      onClick={closeDropdown}
                    >
                      View All
                    </a>
                  </motion.div>
                </div>
                {isStrategy && (
                  <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                    {strategyData.map((strategy, i) => (
                      <StrategyNavBox
                        key={i}
                        custom={i}
                        boxVariants={boxVariants}
                        className="boxWrapper"
                        strategy={strategy}
                      />
                    ))}
                  </div>
                )}
                {isBlog && (
                  <div className="flex flex-wrap flex-col lg:flex-row gap-4 mx-auto z-50">
                    {burdLogData.map((blog, i) => (
                      <motion.div
                        key={i}
                        custom={i}
                        variants={boxVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="rounded"
                      >
                        <SmallBlogCard
                          minsToRead={blog.minsToRead} // Use minsToRead from blog data
                          blogTitle={blog.blogTitle}
                          blogCategory={blog.blogCategory}
                          previewBlogImage={`https:${blog.previewImageBlog.fields.file.url}`}
                          blogSlug={blog.slug}
                          onClick={closeDropdown}
                          blogDescription={blog.blogDescription}
                        />
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div> */}
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownMenu;
