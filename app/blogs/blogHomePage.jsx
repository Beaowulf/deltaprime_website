import React from "react";
import Image from "next/image";
import homePageImage from "@/public/assets/img/blogPostBG.jpg";
import { MainButton } from "@/app/components/buttons/mainButton";

const BlogHomePage = ({ latestBlogData, latestBlogs }) => {
  console.log(latestBlogData);
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
      </div>
    </div>
  );
};

export default BlogHomePage;
