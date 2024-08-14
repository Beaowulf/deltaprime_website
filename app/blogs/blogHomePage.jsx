"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import "./academy.css";
import SearchBar from "@/app/components/searchBar/searchBar";
import BlogCard from "@/app/components/blogCard/blogCard";
import circleOne from "@/public/assets/icons/circleOne.svg";
import circleTwo from "@/public/assets/icons/circleTwo.svg";
import circleThree from "@/public/assets/icons/circleThree.svg";

function getRandomNumber() {
  return Math.floor(Math.random() * 3) + 1;
}

const Circles = (randomNumber) => {
  const CircleOne = () => (
    <Image
      src={circleOne}
      alt="circle_with_gradient_color"
      width={15}
      height={15}
    />
  );

  const CircleTwo = () => (
    <Image
      src={circleTwo}
      alt="circle_with_gradient_color"
      width={15}
      height={15}
    />
  );

  const CircleThree = () => (
    <Image
      src={circleThree}
      alt="circle_with_gradient_color"
      width={15}
      height={15}
    />
  );

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

const BlogHomePage = ({ categories, blogs }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);
  const { resolvedTheme } = useTheme();

  const postsPerPage = 3; // Display 3 items per page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    filterBlogs(category, searchTerm);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    filterBlogs(selectedCategory, term);
  };

  const filterBlogs = (category, term) => {
    let filtered = blogs;

    if (category !== "All") {
      filtered = filtered.filter((blog) => blog.blogCategory === category);
    }

    if (term) {
      filtered = filtered.filter((blog) =>
        blog.blogTitle.toLowerCase().includes(term.toLowerCase())
      );
    }

    setFilteredBlogs(filtered);
  };

  const currentPosts = filteredBlogs.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredBlogs.length / postsPerPage);

  const handlePageChange = (pageNumber) => {
    const blogPostsContainer = document.querySelector(".blog-posts-container");
    blogPostsContainer.classList.add("fade-out");

    setTimeout(() => {
      setCurrentPage(pageNumber);
      blogPostsContainer.classList.remove("fade-out");
      blogPostsContainer.classList.add("fade-in");
    }, 500);

    setTimeout(() => {
      blogPostsContainer.classList.remove("fade-in");
    }, 1000);
  };

  // todo go into button folder
  function BlogButton({ onClick, label, isActive }) {
    return (
      <button
        onClick={onClick}
        className={`blogButtonWrapper ${isActive ? "active" : ""}`}
      >
        <div className="blogButtonContent w-[140px] h-[45px] md:h-full p-4">
          <h6
            className={`text-[12px] lg:text-[14px] text-nowrap font-extrabold  ${
              resolvedTheme === "dark"
                ? isActive
                  ? "text-black"
                  : "text-white"
                : "text-black"
            }`}
          >
            {label}
          </h6>
        </div>
      </button>
    );
  }

  return (
    <>
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {categories.map((category) => (
          <BlogButton
            key={category}
            label={category}
            onClick={() => handleCategoryChange(category)}
            isActive={selectedCategory === category}
          />
        ))}
      </div>
      <SearchBar onSearch={handleSearch} />
      <div className="flex flex-col mb-20 md:mb-0">
        <div className="flex flex-col gap-6 items-start">
          <div className="py-20 w-full relative">
            <div className="blog-posts-container transition-all duration-500 ease-in-out transform translate-x-0 opacity-100 flex flex-col xl:flex-row gap-6 items-center justify-center">
              {currentPosts.map((blogPreviewCardData, index) => (
                <BlogCard
                  key={blogPreviewCardData.blogID}
                  blogSlug={blogPreviewCardData.slug}
                  blogDescription={blogPreviewCardData.blogDescription}
                  previewBlogImage={`https:${blogPreviewCardData.previewImageBlog.fields.file.url}`}
                />
              ))}
            </div>
            <div className="flex justify-center mt-8 absolute bottom-0  left-1/2 transform -translate-x-1/2">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={`mx-1 px-5 py-2 blogNumberWrapper ${
                    currentPage === index + 1
                      ? "active bg-gradient-to-b from-pink-400 to-yellow-300"
                      : "bg-transparent"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogHomePage;
