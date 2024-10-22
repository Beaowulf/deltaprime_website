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
import boxImage from "@/public/assets/img/images/navStrategieContainerImg.png";
import { getLinkClass } from "@/lib/getLinkClass";
import { SmallBlogCard } from "@/app/components/blogCard/blogCard";
import circleOne from "@/public/assets/icons/circleOne.svg";
import circleTwo from "@/public/assets/icons/circleTwo.svg";
import circleThree from "@/public/assets/icons/circleThree.svg";

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

  function getRandomNumber() {
    const randomIndex = Math.floor(Math.random() * 3) + 1;
    return randomIndex;
  }

  const Circles = (randomNumber) => {
    const CircleOne = () => {
      return (
        <Image
          src={circleOne}
          alt="circle_with_gradient_color"
          width={15}
          height={15}
        />
      );
    };

    const CircleTwo = () => {
      return (
        <Image
          src={circleTwo}
          alt="circle_with_gradient_color"
          width={15}
          height={15}
        />
      );
    };

    const CircleThree = () => {
      return (
        <Image
          src={circleThree}
          alt="circle_with_gradient_color"
          width={15}
          height={15}
        />
      );
    };

    switch (randomNumber) {
      case 1:
        return <CircleOne />;
      case 2:
        return <CircleTwo />;
      case 3:
        return <CircleThree />;
      default:
        return null;
    }
  };

  const StrategyNavBox = ({ custom, boxVariants, className, strategy }) => {
    const { resolvedTheme } = useTheme();

    return (
      <motion.div
        custom={custom}
        variants={boxVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={`${className} strategy-nav-box ${
          resolvedTheme === "dark" ? "dark" : ""
        }`}
      >
        <a
          onClick={closeDropdown}
          href={`/strategies/${strategy.slug}`}
          className="font-semibold pt-4 text-white !z-50 menuStrategyBoxWrapper rounded-[25px]"
        >
          <div className="p-5 pl-1 flex flex-row gap-4 w-full h-full boxContainer rounded-[26px]">
            <Image 
              src={`https:${strategy.strategyImage?.fields?.file?.url}`}
              alt="bird_carrying_book_img"
              className="object-cover rounded-md w-[80px] h-[90px]"
              width={80}
              height={90}
            />
            <div className="flex flex-col gap-2 justify-center">
              <p className="w-fit font-bold text-[12px] mb-2 ">
                {strategy.strategyTitle}
              </p>
              <p className="overflow-hidden text-ellipsis line-clamp-2 text-wrap font-semibold text-[10px] mb-2 ">
                {strategy.strategyDescription}
              </p>
            </div>
          </div>
        </a>
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
            <motion.div
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
                          roundedImage={Circles(getRandomNumber())}
                          blogSlug={blog.slug}
                          onClick={closeDropdown}
                          blogDescription={blog.blogDescription}
                        />
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownMenu;
