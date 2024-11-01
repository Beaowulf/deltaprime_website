// MobileMenu.js
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import arrowLeftColored from "@/public/assets/icons/arrowLeftColored.svg";
import StarFilled from "@/public/assets/icons/starFilled.svg";
import StarUnfilled from "@/public/assets/icons/starUnfilled.svg";
import StarFilledPurple from "@/public/assets/icons/starFilledPurple.svg";
import StarUnfilledPurple from "@/public/assets/icons/starUnfilledPurple.svg";
import { RoundButtonLinks } from "@/app/ui/footer/footer";
import "./header/header.css";

const MobileMenu = ({
  blogs,
  howToVideos,
  strategies,
  toggleMenu,
  resolvedTheme,
}) => {
  const [currentSlide, setCurrentSlide] = useState("main");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const slideVariants = {
    enter: { x: "100%", opacity: 1 },
    center: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 1 },
  };

  const renderStars = (level) => {
    const totalStars = 3;
    const filledStars = level ?? 0;
    const unfilledStars = totalStars - filledStars;

    return (
      <div className="flex flex-row">
        <p className="text-[15px] textShadow mr-2">Difficulty Level:</p>
        <div className="flex flex-row gap-1">
          {Array.from({ length: filledStars }, (_, i) => (
            <Image
              key={`filled-${i}`}
              src={resolvedTheme === "dark" ? StarFilled : StarFilledPurple}
              alt="Filled Star"
              width={15}
              height={15}
            />
          ))}
          {Array.from({ length: unfilledStars }, (_, i) => (
            <Image
              key={`unfilled-${i}`}
              src={resolvedTheme === "dark" ? StarUnfilled : StarUnfilledPurple}
              alt="Unfilled Star"
              width={15}
              height={15}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="h-full w-full relative">
      <div className="flex flex-col items-center justify-center bg-gray-900 text-center p-4 relative text-[#565AC2] dark:text-white">
        {/* Back Button and Content Slides */}
        <AnimatePresence mode="wait">
          {currentSlide === "main" && (
            <motion.div
              key="main"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="w-full flex flex-col pt-20"
            >
              {/* Main Menu Content */}
              <p className="text-[34px] font-semibold mb-8">Menu</p>
              <div className="space-y-6">
                <div
                  className="cursor-pointer flex justify-center text-[24px] font-semibold gap-6"
                  onClick={() => setCurrentSlide("latestPosts")}
                >
                  Latest Posts
                </div>
                <div
                  className="cursor-pointer flex justify-center text-[24px] font-semibold gap-6"
                  onClick={() => setCurrentSlide("strategies")}
                >
                  Strategies
                </div>
                <div
                  className="cursor-pointer flex items-center justify-center text-[24px] font-semibold gap-6"
                  onClick={() => setCurrentSlide("aboutUs")}
                >
                  About Us
                </div>
              </div>
            </motion.div>
          )}
          {/* Other Slides... */}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MobileMenu;
