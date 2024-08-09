// components/searchBar.jsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import searchIcon from "@/public/assets/icons/searchIcon.svg";

// This is used mostly for blogs. Its not that re-usable since I didnt find any other case to use this in any other page. Might need to refactor if any new searchBar appears in the designs
const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  const clearSearch = () => {
    setSearchTerm("");
    onSearch("");
  };

  return (
    <div className="relative w-full max-w-lg mx-auto mt-10">
      <div className="flex items-center bg-white rounded-full shadow-md p-1 pr-4 border-[#DCDCE6] border-2">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search Burd Log"
          className="w-full py-1 px-4 rounded-full focus:outline-none bg-white text-black"
        />
        {!searchTerm && (
          <Image
            src={searchIcon}
            width={22}
            height={22}
            className="text-gray-500"
            alt="search_Icon"
          />
        )}
        {searchTerm && (
          <button onClick={clearSearch}>
            <Image
              src={searchIcon}
              width={22}
              height={22}
              className="text-gray-500"
              alt="sclearSearch_Icon"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
