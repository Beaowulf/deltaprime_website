import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowButton } from "@/app/components/buttons/mainButton";
import circleOne from "@/public/assets/icons/circleOne.svg";
import circleTwo from "@/public/assets/icons/circleTwo.svg";
import circleThree from "@/public/assets/icons/circleThree.svg";

const BlogHeader = ({ title, subTitle, paragraph }) => {
  return (
    <div className="flex flex-col items-center dark:text-white text-[#252948] mb-14 text-center">
      <h4 className="uppercase mb-3 md:text-[15px] font-bold text-[12px] text-center dark:text-gray-400 text-[#252948]">
        {title}
      </h4>
      <h1 className="mb-8 featureSubtitle">{subTitle}</h1>
      <p className="featureParagraph max-w-xl">{paragraph}</p>
    </div>
  );
};

const BlogCard = ({
  previewBlogImage,
  blogTitle,
  blogDescription,
  blogCategory,
  roundedImage,
  minsToRead,
  blogID,
}) => {
  return (
    <div className="px-5 pt-5 bg-[#F4F4FF] rounded-[20px] w-[400px] h-[350px] shadow-lg dark:shadow-none shadow-[#ff5fa240]">
      <div className="flex flex-col gap-4 justify-between h-full">
        <div className="flex justify-between">
          <div className="flex gap-2 text-black">
            {roundedImage}
            <p className="text-xs text-[#878C91]">{blogCategory}</p>
          </div>
          <div>
            <p className="text-xs text-[#878C91]">{minsToRead} min read</p>
          </div>
        </div>

        <div>
          <h3>
            <p className="mb-4 line-clamp-2 truncate inline-block text-xl font-semibold text-dark hover:text-primary dark:text-[#010205] sm:text-2xl lg:text-xl xl:text-2xl">
              {blogTitle}
            </p>
          </h3>
        </div>

        <div className="flex justify-between gap-5 w-fit">
          <p className="text-[8px] md:text-[12px] leading-[inherit] dark:text-[#878C91] lineClampThree">
            {blogDescription}
          </p>
          <Link href={`/blogs/${blogID}`}>
            <ArrowButton />
          </Link>
        </div>

        <div className="overflow-hidden rounded w-fit self-center">
          <Image
            width={320}
            height={145}
            src={previewBlogImage}
            alt="previewBlogImage"
            className=""
          />
        </div>
      </div>
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

const BlogPreviewSection = ({ blogPreviewCardData }) => {
  return (
    <>
      <div className="pt-20">
        <BlogHeader
          title={"The Burd Blog"}
          subTitle={"Blog"}
          paragraph={
            "Tireless Burd talks about all things DeFi. News, Guides, Infographics and more help you deepen your knowledge and stay up-to-date."
          }
        />
        <div className="flex flex-wrap gap-6 items-center justify-center">
          {blogPreviewCardData.map((blogPreviewCardData) => (
            // Added the encodeURIComponent to be utf-8 compatible
            <BlogCard
              key={blogPreviewCardData.blog.blogID}
              blogID={blogPreviewCardData.blog.blogID}
              blogCategory={blogPreviewCardData.blog.blogCategory}
              blogTitle={blogPreviewCardData.blog.blogTitle}
              blogDescription={blogPreviewCardData.blog.blogDescription}
              minsToRead={blogPreviewCardData.blog.minsToRead}
              previewBlogImage={`https:${blogPreviewCardData.blog.previewImageBlog.fields.file.url}`}
              roundedImage={Circles(getRandomNumber())}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPreviewSection;
