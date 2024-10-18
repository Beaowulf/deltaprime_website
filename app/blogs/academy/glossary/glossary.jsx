"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { fetchGlossaryEntries } from "@/lib/getBlogs";
import { useTheme } from "next-themes";
import "swiper/swiper-bundle.css";
import "./glossary.css";

// Import your custom icons
import leftArrowIcon from "@/public/assets/icons/arrowLeftColored.svg";
import rightArrowIcon from "@/public/assets/icons/arrowRightColored.svg";
import Image from "next/image";

const Glossary = () => {
  const [glossaryEntries, setGlossaryEntries] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [placeholder, setPlaceholder] = useState("Search Term Here");

  const { resolvedTheme } = useTheme();

  useEffect(() => {
    async function getGlossaryEntries() {
      const entries = await fetchGlossaryEntries();
      const sortedEntries = entries.sort((a, b) =>
        a.glossaryTitle.localeCompare(b.glossaryTitle)
      );

      setGlossaryEntries(sortedEntries);
    }

    getGlossaryEntries();
  }, []);

  function clearSelect() {
    setSelectedLetter(null);
    setSearchTerm("");
  }

  const filteredEntries = glossaryEntries.filter((entry) => {
    if (selectedLetter && !entry.glossaryTitle.startsWith(selectedLetter)) {
      return false;
    }

    if (searchTerm.length >= 2) {
      const searchWords = searchTerm.toLowerCase().split(" ");
      const combinedText = (
        entry.glossaryTitle +
        " " +
        entry.glossaryText
      ).toLowerCase();

      return searchWords.every((word) => combinedText.includes(word));
    }

    return true;
  });

  return (
    <div className="sm:px-[5%] md:px-[8%] lg:px-[15%] xl:px-[20%] 2xl:px-[25%] px-4">
      <div className="my-mobile-spacing md:my-desktop-spacing text-center w-full">
        <h4 className="brightText">Glossary</h4>
        <p className="dark:text-white text-black text-[16px] max-w-[30rem] mx-auto mt-4">
          Explore our Glossary for quick definitions and explanations of key
          terms. Use the search or browse alphabetically to find what you need.
        </p>
      </div>

      {/* Desktop and Tablet view */}
      <div className="my-desktop-spacing hidden md:flex flex-wrap mx-auto justify-center">
        <button onClick={clearSelect} className="m-2 glossaryItemWrapper">
          <p
            className={`glossaryContent md:size-[65px] size-[45px] shadow rounded-[15px] flex justify-center items-center text-2xl font-bold text-center ${
              selectedLetter === null &&
              (resolvedTheme === "dark"
                ? "bg-[#f6f6f6] text-[#1C2943]"
                : "bg-[#1C2943] text-white")
            }`}
          >
            #
          </p>
        </button>
        {Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)).map(
          (letter) => (
            <button
              key={letter}
              onClick={() => setSelectedLetter(letter)}
              className="m-2 glossaryItemWrapper"
            >
              <p
                className={`glossaryContent md:size-[65px] size-[45px] shadow rounded-[15px] flex justify-center items-center text-2xl font-bold text-center ${
                  selectedLetter === letter &&
                  (resolvedTheme === "dark"
                    ? "bg-[#f6f6f6] text-[#1C2943]"
                    : "bg-[#1C2943] text-white")
                }`}
              >
                {letter}
              </p>
            </button>
          )
        )}
      </div>

      {/* Mobile View Swiper Carousel */}
      <div className="my-mobile-spacing md:hidden relative z-10 ">
        <Swiper
          modules={[Navigation]}
          spaceBetween={5}
          slidesPerView={6}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="glossarySwiper h-[3rem] w-[80%] mx-0 px-5 h-fit"
        >
          <SwiperSlide onClick={clearSelect} className="text-center">
            <p
              className={`text-xl font-bold border-r-[2px] border-[#FFBB9B] w-fit pl-1 pr-4 cursor-pointer  ${
                selectedLetter === null
                  ? "text-[#AFAFFF]"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              #
            </p>
          </SwiperSlide>
          {Array.from({ length: 26 }, (_, i) =>
            String.fromCharCode(65 + i)
          ).map((letter) => (
            <SwiperSlide
              key={letter}
              onClick={() => setSelectedLetter(letter)}
              className="text-center flex items-center h-fit"
            >
              <p
                className={`text-xl font-bold border-r-[2px] border-[#FFBB9B] w-fit pl-1 pr-4 cursor-pointer ${
                  selectedLetter === letter
                    ? "text-[#AFAFFF]"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {letter}
              </p>
            </SwiperSlide>
          ))}
          <div className="swiper-button-next z-20">
            <Image src={rightArrowIcon} alt="Next" width={30} height={30} />
          </div>
          <div className="swiper-button-prev z-20">
            <Image src={leftArrowIcon} alt="Previous" width={30} height={30} />
          </div>
        </Swiper>
      </div>

      <div className="my-mobile-spacing md:my-desktop-spacing !p-[1px] glossaryItemWrapper">
        <input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setPlaceholder("")}
          onBlur={() => setPlaceholder("Search Term Here")}
          className="z-10 w-full border rounded-[20px] dark:placeholder:text-[#f6f6f6] placeholder:text-[#1C2943] glossaryContent p-4 text-center focus:outline-none bg-transparent"
        />
      </div>
      <div className="my-mobile-spacing md:my-desktop-spacing glossary-entries ">
        {filteredEntries.length > 0 ? (
          filteredEntries.map((entry, index) => (
            <div key={index} className="mb-4 glossaryItemWrapper">
              <div className="rounded-[20px] p-4 md:p-12 glossaryContent">
                <h2 className="text-xl font-bold">{entry.glossaryTitle}</h2>
                <p className="my-8">{entry.glossaryText}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="dark:text-white text-black text-[16px] max-w-[30rem] mx-auto my-20 text-center">
            No glossary items found. Please try a different search term or
            select another letter.
          </p>
        )}
      </div>
    </div>
  );
};

export default Glossary;
