"use client";
// pages/glossary.js
import { fetchGlossaryEntries } from "@/lib/getBlogs";
import React, { useState, useEffect } from "react";
import "./glossary.css";
import { useTheme } from "next-themes";

const Glossary = () => {
  const [glossaryEntries, setGlossaryEntries] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState("#"); // Default to "#"
  const [searchTerm, setSearchTerm] = useState("");
  const [placeholder, setPlaceholder] = useState("Search Term Here");

  const { resolvedTheme } = useTheme();

  useEffect(() => {
    async function getGlossaryEntries() {
      const entries = await fetchGlossaryEntries();
      setGlossaryEntries(entries);
    }

    getGlossaryEntries();
  }, []);

  function clearSelect() {
    setSelectedLetter("#"); // Reset to "#" when clearing selection
    setSearchTerm("");
  }

  const filteredEntries = glossaryEntries.filter((entry) => {
    if (selectedLetter && !entry.glossaryTitle.startsWith(selectedLetter)) {
      return false;
    }

    if (searchTerm.length < 2) {
      return true;
    }

    const searchWords = searchTerm.toLowerCase().split(" ");
    const combinedText = (
      entry.glossaryTitle +
      " " +
      entry.glossaryText
    ).toLowerCase();

    return searchWords.every((word) => combinedText.includes(word));
  });

  return (
    <div className="sm:px-[5%] md:px-[8%] lg:px-[15%] xl:px-[20%] 2xl:px-[25%] px-4">
      <div className="text-center w-full">
        <h4 className="brightText">Glossary</h4>
        <p className="dark:text-white text-black text-[16px] max-w-[30rem] mx-auto mt-4">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
      </div>

      <div className="flex flex-wrap mx-auto mt-10 justify-center mb-4">
        <button onClick={clearSelect} className="m-2 glossaryItemWrapper">
          <p
            className={`glossaryContent md:size-[65px] size-[45px] shadow rounded-[15px] flex justify-center items-center text-2xl font-bold text-center ${
              selectedLetter === "#" &&
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
      <div className="my-14 !p-[1px] glossaryItemWrapper">
        <input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setPlaceholder("")}
          onBlur={() => setPlaceholder("Search Term Here")}
          className="w-full border rounded-[20px] dark:placeholder:text-[#f6f6f6] placeholder:text-[#1C2943] glossaryContent p-4 text-center focus:outline-none bg-transparent"
        />
      </div>
      <div className="glossary-entries ">
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
