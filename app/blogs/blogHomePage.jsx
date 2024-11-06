// BlogHomePage.jsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Fuse from "fuse.js";
import "./academy.css";
import SearchBar from "@/app/components/searchBar/searchBar";
import BlogCard from "@/app/components/blogCard/blogCard";
import { fetchBlogs } from "@/lib/getBlogs";

const BlogHomePage = ({ categories, blogs: initialBlogs }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(initialBlogs);
  const [blogs, setBlogs] = useState(initialBlogs);
  const [fuse, setFuse] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedBlogs = await fetchBlogs();
      setBlogs(fetchedBlogs);
      setFilteredBlogs(fetchedBlogs);
      const fuseOptions = {
        keys: ["blogTitle", "blogDescription"],
        includeScore: true,
        threshold: 0.3,
      };
      setFuse(new Fuse(fetchedBlogs, fuseOptions));
    };

    fetchData();
  }, []);

  const postsPerPage = 3;
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

    if (term && fuse) {
      const fuseResults = fuse.search(term);
      filtered = fuseResults.map((result) => result.item);
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

  function BlogButton({ onClick, label, isActive }) {
    return (
      <button
        onClick={onClick}
        className={`blogFilterButtonParent  ${isActive ? "active" : ""}`}
      >
        <div className="blogFilterButton w-[140px] h-full md:h-full p-4">
          <h6 className="text-[12px] lg:text-[14px] text-nowrap font-extrabold text-white">
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
            className="!w-fit"
            key={category}
            label={category}
            onClick={() => handleCategoryChange(category)}
            isActive={selectedCategory === category}
          />
        ))}
      </div>
      <SearchBar onSearch={handleSearch} />
      <div className="flex flex-col">
        <div className="flex flex-col gap-6 items-start">
          <div className="mt-mobile-spacing md:mt-desktop-spacing w-full relative">
            <div className="pb-mobile-spacing md:pb-desktop-spacing blog-posts-container transition-all duration-500 ease-in-out transform translate-x-0 opacity-100 flex flex-col xl:flex-row gap-6 items-center justify-center">
              {currentPosts.map((blogPreviewCardData) => (
                <BlogCard
                  blogCategory={blogPreviewCardData.blogCategory}
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
