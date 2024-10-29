"use client";
import React, { useState, useEffect, useRef, memo } from "react";
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
import { getLinkClass } from "@/lib/getLinkClass";
import { SmallBlogCard } from "@/app/components/blogCard/blogCard";

// todo this whole thing might be delete since I dont need all of this with the new mega menu

// const DropdownMenu = ({
//   strategyData,
//   burdLogData,
//   howToVideoData,
//   menuText,
//   isBlog = false,
//   isStrategy = false,
// }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isBlogSelected, setIsBlogSelected] = useState(true);
//   const dropdownRef = useRef(null);
//   const pathname = usePathname();
//   const { resolvedTheme } = useTheme();

//   const toggleDropdown = () => {
//     setIsOpen((prev) => !prev);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     if (isOpen) {
//       document.body.classList.add("no-scroll");
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.body.classList.remove("no-scroll");
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.body.classList.remove("no-scroll");
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isOpen]);

//   const textVariants = {
//     hidden: { opacity: 0, y: -20 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.1,
//       },
//     }),
//     exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
//   };

//   const boxVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.1,
//       },
//     }),
//     exit: { opacity: 0, y: 20, transition: { duration: 0.2 } },
//   };

//   const renderStars = (level) => {
//     const totalStars = 3;
//     const filledStars = level ?? 0;
//     const unfilledStars = totalStars - filledStars;

//     return (
//       <div className="flex flex-row">
//         <p className="text-[15px] textShadow mr-2">Difficulty Level:</p>
//         <div className="flex flex-row gap-2 justify-center items-center">
//           {Array.from({ length: filledStars }, (_, i) => (
//             <Image
//               key={`filled-${i}`}
//               className="w-4 h-4"
//               height={15}
//               width={15}
//               src={StarFilled}
//               alt="Filled Star"
//             />
//           ))}
//           {Array.from({ length: unfilledStars }, (_, i) => (
//             <Image
//               key={`unfilled-${i}`}
//               className="w-4 h-4"
//               height={15}
//               width={15}
//               src={StarUnfilled}
//               alt="Unfilled Star"
//             />
//           ))}
//         </div>
//       </div>
//     );
//   };

//   const NavBox = memo(({ custom, data, type }) => {
//     const link =
//       type === "strategy"
//         ? `/strategies/${data.slug}`
//         : type === "blog"
//         ? `/blogs/academy/${data.slug}`
//         : `/how-to-videos/${data.slug}`;
//     const title =
//       type === "strategy"
//         ? data.strategyTitle
//         : data.blogTitle || data.howToVideoTitle;
//     const description =
//       type === "strategy"
//         ? data.strategyDescription
//         : data.blogDescription || data.howToVideoDescription;

//     return (
//       <motion.div
//         custom={custom}
//         variants={boxVariants}
//         initial="hidden"
//         animate="visible"
//         exit="exit"
//         className={`mb-4 ${resolvedTheme === "dark" ? "dark" : ""}`}
//       >
//         <a
//           onClick={() => setIsOpen(false)}
//           href={link}
//           className="font-semibold pt-4 text-white !z-50 rounded-[25px]"
//         >
//           <div className="flex flex-col gap-2 justify-center dark:text-white text-[#565AC2]">
//             <p className="w-full font-bold text-[17px] textShadow">{title}</p>
//             {type === "strategy" && renderStars(data.difficultyLevel)}
//             <p className="font-semibold text-[12px] line-clamp-3 overflow-ellipsis">
//               {description}
//             </p>
//           </div>
//         </a>
//       </motion.div>
//     );
//   });

//   const LeftMenu = memo(() => {
//     return isStrategy ? (
//       <div>
//         <div className="flex flex-row justify-between w-[13rem]">
//           <p className="text-[12px] text-wrap mr-4">
//             DeltaPrime allows for a range of new and unique strategies. Every
//             strategy is accompanied by a practical example, getting deeper into
//             the risk and rewards of the specific strategy.
//           </p>
//           <Image
//             className="w-6 h-6"
//             height={15}
//             width={15}
//             src={BigArrowDown}
//             alt="Big Arrow Down"
//           />
//         </div>
//       </div>
//     ) : (
//       <div className="flex flex-col gap-4 z-50">
//         <div
//           className="flex flex-row justify-between w-[12rem] cursor-pointer"
//           onClick={() => setIsBlogSelected(true)}
//         >
//           <p className="text-[15px] textShadow text-nowrap">Blogs</p>
//           <Image
//             className={`w-4 h-4 ${isBlogSelected ? "transform rotate-90" : ""}`}
//             height={15}
//             width={15}
//             src={isBlogSelected ? DownArrow : RightArrow}
//             alt="Arrow"
//           />
//         </div>
//         <div
//           className="flex flex-row justify-between w-[12rem] cursor-pointer"
//           onClick={() => setIsBlogSelected(false)}
//         >
//           <p className="text-[15px] textShadow text-nowrap">How To Videos</p>
//           <Image
//             className={`w-4 h-4 ${
//               !isBlogSelected ? "transform rotate-90" : ""
//             }`}
//             height={15}
//             width={15}
//             src={!isBlogSelected ? DownArrow : RightArrow}
//             alt="Arrow"
//           />
//         </div>
//       </div>
//     );
//   });

//   const RightContent = memo(() => {
//     let dataList = [];
//     let type = "";

//     if (isStrategy) {
//       dataList = strategyData;
//       type = "strategy";
//     } else if (isBlogSelected) {
//       dataList = burdLogData;
//       type = "blog";
//     } else {
//       dataList = howToVideoData;
//       type = "video";
//     }

//     return (
//       <div className="relative pl-[25px] z-10">
//         <div className="absolute inset-0 h-full w-[2px] bg-gradient-to-b from-[#afafffab] via-[#FF8FB8ab] to-[#FFBB9Bab] rounded-[25px]" />
//         <div className="grid md:grid-cols-2 grid-cols-1 gap-4 w-[30rem]">
//           {dataList.map((item, i) => (
//             <NavBox key={i} custom={i} data={item} type={type} />
//           ))}
//         </div>
//       </div>
//     );
//   });

//   const MenuDropDownDesktop = () => {
//     return (
//       <motion.div
//         ref={dropdownRef}
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         exit={{ opacity: 0, scale: 0.95 }}
//         transition={{ duration: 0.2, ease: "easeOut" }}
//         className={`dark:text-white text-[#565AC2] dropdown-menu absolute 2xl:-left-[9rem] lg:-left-[19rem] -left-[27rem] top-[2.5rem] box-border rounded-[26px] shadow-lg z-[1000] p-6 ${
//           resolvedTheme === "dark" ? "bg-[#000F38]" : "bg-[#F6F6F6]"
//         }`}
//       >
//         <div className="w-full">
//           <p className="text-[23px] textShadow mb-8">
//             {isStrategy ? "Strategies" : "Latest Posts"}
//           </p>
//         </div>
//         <div className="flex flex-row gap-8">
//           <LeftMenu />
//           <RightContent />
//         </div>
//       </motion.div>
//     );
//   };

//   return (
//     <div className="relative inline-block text-left">
//       <div
//         className="flex items-center cursor-pointer"
//         onClick={toggleDropdown}
//       >
//         <div className="mr-2 text-gray-500 text-[#696969] hover:text-[#000000] dark:text-[#DADADA] dark:hover:text-[#fff] rounded-md md:text-[16px] text-[12px] font-medium text-nowrap">
//           {menuText}
//         </div>
//         <Image
//           className="w-3 h-3"
//           height={10}
//           width={10}
//           src={isOpen ? UpArrow : DownArrow}
//           alt="Toggle Arrow"
//         />
//       </div>

//       {isOpen && (
//         <div className="w-full h-[2px] mt-1 bg-gradient-to-b from-[#FFBB9B] via-[#FF8FB8] to-[#AFAFFF]" />
//       )}
//       {!isOpen && isStrategy && (
//         <div className={getLinkClass("/strategies", pathname, resolvedTheme)} />
//       )}
//       {!isOpen && isBlog && (
//         <div className={getLinkClass("/blogs", pathname, resolvedTheme)} />
//       )}

//       <AnimatePresence>
//         {isOpen && (
//           <>
//             {isOpen && <div className="overlay visible" />}
//             <MenuDropDownDesktop />
//           </>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

const DropdownMenu = ({ burdLogData, menuText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

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

  const NavBox = memo(({ custom, data }) => {
    const link = `/blogs/academy/${data.slug}`;
    const title = data.blogTitle;
    const description = data.blogDescription;

    return (
      <motion.div
        custom={custom}
        variants={boxVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={`mb-4 ${resolvedTheme === "dark" ? "dark" : ""}`}
      >
        <a
          onClick={() => setIsOpen(false)}
          href={link}
          className="font-semibold pt-4 text-white !z-50 rounded-[25px]"
        >
          <div className="flex flex-col gap-2 justify-center dark:text-white text-[#565AC2]">
            <p className="w-full font-bold text-[17px] textShadow">{title}</p>
            <p className="font-semibold text-[12px] line-clamp-3 overflow-ellipsis">
              {description}
            </p>
          </div>
        </a>
      </motion.div>
    );
  });

  const RightContent = memo(() => {
    return (
      <div className="relative pl-[25px] z-10">
        <div className="absolute inset-0 h-full w-[2px] bg-gradient-to-b from-[#afafffab] via-[#FF8FB8ab] to-[#FFBB9Bab] rounded-[25px]" />
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 w-[30rem]">
          {burdLogData.map((item, i) => (
            <NavBox key={i} custom={i} data={item} />
          ))}
        </div>
      </div>
    );
  });

  const MenuDropDownDesktop = () => {
    return (
      <motion.div
        ref={dropdownRef}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={`dark:text-white text-[#565AC2] dropdown-menu absolute 2xl:-left-[9rem] lg:-left-[19rem] -left-[27rem] top-[2.5rem] box-border rounded-[26px] shadow-lg z-[1000] p-6 ${
          resolvedTheme === "dark" ? "bg-[#000F38]" : "bg-[#F6F6F6]"
        }`}
      >
        <div className="w-full">
          <p className="text-[23px] textShadow mb-8">Latest Posts</p>
        </div>
        <div className="flex flex-row gap-8">
          <RightContent />
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
        <Image
          className="w-3 h-3"
          height={10}
          width={10}
          src={isOpen ? UpArrow : DownArrow}
          alt="Toggle Arrow"
        />
      </div>

      {isOpen && (
        <div className="w-full h-[2px] mt-1 bg-gradient-to-b from-[#FFBB9B] via-[#FF8FB8] to-[#AFAFFF]" />
      )}

      <AnimatePresence>
        {isOpen && (
          <>
            {isOpen && <div className="overlay visible" />}
            <MenuDropDownDesktop />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownMenu;
