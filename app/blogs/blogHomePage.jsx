// components/blogHomePage.jsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
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

  const postsPerPage = 6;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.blogCategory === selectedCategory);

  const currentPosts = filteredBlogs.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredBlogs.length / postsPerPage);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="flex flex-col">
      <Image
        src={homePageImage}
        className="w-full max-h-[450px] object-cover rounded-[20px] md:mb-24 md:mt-32 my-10"
      />
      <div className="flex flex-col gap-6 items-start dark:text-white text-[#252948] ">
        <h1 className="featureSubtitle text-[25px] md:text-[35px]">
          Strategies For Any Risk Appetite
        </h1>
        <p className="uppercase mb-2 featureTitle md:text-[15px] text-[12px] text-center text-[#8c8a8a] leading-6">
          Written by Joe Smith
        </p>
        <p className="featureParagraph max-w-xl text-[13px] md:leading-6 sm:text-[17px] leading-4">
          Join Burd and discover strategies to boost your earnings. From simple
          to advanced, find the perfect fit for your style.
          <br />
          <br />
          Join Burd and discover strategies to boost your earnings. From simple
          to advanced, find the perfect fit for your style.
        </p>

        <div className="hidden md:block mt-10 md:w-fit w-full">
          <MainButton hasArrowRight={true} label={"Read More"} />
        </div>

        <div className="pt-20">
          <BlogHeader
            title={"Blog"}
            subTitle={"Latest Posts"}
            paragraph={
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu  fugiat nulla pariatur."
            }
          />
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === category
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
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
          <div className="flex justify-center mt-8">
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
  );
};

export default BlogHomePage;
