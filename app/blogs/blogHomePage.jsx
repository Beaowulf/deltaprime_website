"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import SearchBar from "@/app/components/searchBar/searchBar";
import homePageImage from "@/public/assets/img/blogPostBG.jpg";
import { MainButton } from "@/app/components/buttons/mainButton";
import BlogCard from "@/app/components/blogCard/blogCard";
import circleOne from "@/public/assets/icons/circleOne.svg";
import circleTwo from "@/public/assets/icons/circleTwo.svg";
import circleThree from "@/public/assets/icons/circleThree.svg";

const BlogHeader = ({ title, subTitle, paragraph }) => {
  return (
    <div className="flex flex-col items-center dark:text-white text-[#252948] mb-14 text-center">
      <h4 className="uppercase mb-3 md:text-[15px] font-bold text-[12px] text-center dark:text-gray-400 text-[#252948]">
        {title}
      </h4>
      <h1 className="mb-8 featureSubtitle md:text-[34px] text-[25px] ">
        {subTitle}
      </h1>
      <p className="featureParagraph max-w-xl">{paragraph}</p>
    </div>
  );
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

const BlogHomePage = ({ latestBlogData, latestBlogs, categories, blogs }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);

  const postsPerPage = 6;
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

  return (
    <>
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {categories.map((category) => (
          <MainButton
            key={category}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </MainButton>
        ))}
      </div>
      <SearchBar onSearch={handleSearch} />
      <div className="flex flex-col">
        <div className="flex flex-col gap-6 items-start dark:text-white text-[#252948] ">
          <div className="py-20 w-full relative">
            <div className="flex flex-wrap gap-6 items-center justify-center">
              {currentPosts.map((blogPreviewCardData) => (
                <BlogCard
                  key={blogPreviewCardData.blogID}
                  blogID={blogPreviewCardData.blogID}
                  blogCategory={blogPreviewCardData.blogCategory}
                  blogTitle={blogPreviewCardData.blogTitle}
                  blogDescription={blogPreviewCardData.blogDescription}
                  minsToRead={blogPreviewCardData.minsToRead}
                  previewBlogImage={`https:${blogPreviewCardData.previewImageBlog.fields.file.url}`}
                  roundedImage={Circles(getRandomNumber())}
                />
              ))}
            </div>
            <div className="flex justify-center mt-8 absolute bottom-0  left-1/2 transform -translate-x-1/2">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`mx-1 px-3 py-1 rounded ${
                    currentPage === index + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
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
