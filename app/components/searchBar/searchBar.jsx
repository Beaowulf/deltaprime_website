"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import searchIcon from "@/public/assets/icons/searchIcon.svg";

// This is used mostly for blogs. Its not that re-usable since I didnt find any other case to use this in any other page. Might need to refactor if any new searchBar appears in the designs
const SearchBar = ({ blogs }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term.length > 0) {
      const filtered = blogs.filter((blog) =>
        blog.blogTitle.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredBlogs(filtered);
    } else {
      setFilteredBlogs([]);
    }
  };

  const clearSearch = () => {
    setSearchTerm("");
    setFilteredBlogs([]);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto mt-10">
      <div className="flex items-center bg-white rounded-full shadow-md p-1 pr-4 border-[#DCDCE6] border-2">
        <input
          prefix="prefix"
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
          />
        )}
        {searchTerm && (
          <button onClick={clearSearch}>
            <Image
              src={searchIcon}
              width={22}
              height={22}
              className="text-gray-500"
            />
          </button>
        )}
      </div>
      {filteredBlogs.length > 0 ? (
        <div className="absolute w-full mt-2 bg-white rounded-lg shadow-lg">
          {filteredBlogs.map((blog) => (
            <Link
              className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg"
              key={blog.blogID}
              href={`/blogs/${encodeURIComponent(blog.blogID)}`}
            >
              {blog.blogTitle}
            </Link>
          ))}
        </div>
      ) : (
        searchTerm && (
          <div className="absolute w-full mt-2 bg-white rounded-lg shadow-lg text-black">
            <p className="block px-4 py-2 text-gray-700 ">No blogs found</p>
          </div>
        )
      )}
    </div>
  );
};

export default SearchBar;
