import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MainButton } from "@/app/components/buttons/mainButton";
import circleOne from "@/public/assets/icons/circleOne.svg";
import circleTwo from "@/public/assets/icons/circleTwo.svg";
import circleThree from "@/public/assets/icons/circleThree.svg";
import { useRouter } from "next/navigation";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const BlogHeader = ({ title, subTitle, paragraph }) => {
  return (
    <div className="flex flex-col items-center  md:mb-14 mb-10 text-center">
      <h4 className="uppercase mb-3 font-bold featureSubtitle md:text-[34px] text-[24px] text text-center dark:text-white text-[#6B70ED]">
        {title}
      </h4>
      <h2 className="mb-8 featureSubtitle">{subTitle}</h2>
      <h4 className="aboutTypographyparagraphWhite font-medium leading-5 md:leading-6 height max-w-xl text-center dark:text-white text-[#565AC2]">
        {paragraph}
      </h4>
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
  blogSlug,
  onClick,
}) => {
  const router = useRouter();

  const handleImageClick = () => {
    if (onClick) onClick();
    router.push(`/blogs/academy/${blogSlug}`);
  };

  return (
    <div className="flex flex-col justify-start w-[330px] md:w-[380px] flex-shrink-0 gap-2">
      <div
        className="blogCardParent w-full h-[270px] cursor-pointer"
        onClick={handleImageClick}
      >
        <img
          src={previewBlogImage}
          alt="Blog Preview"
          className="blogCardContent object-cover w-full h-full rounded-[15px]"
        />
      </div>
      <p className="text-[16px] leading-6 font-medium line-clamp-2 ml-1 dark:text-white text-[#6B70ED]">
        {blogDescription}
      </p>
      <Link prefetch={true} href={`/blogs/academy/${blogSlug}`}>
        <span className="underline ml-1">Read More</span>
      </Link>
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

const BlogPreviewSection = ({
  blogPreviewCardData,
  eleventhSection,
  options,
}) => {
  return (
    <>
      <div className="pt-mobile-spacing md:pt-desktop-spacing  pagePaddingMedium">
        {eleventhSection && (
          <BlogHeader
            title={eleventhSection.heading}
            paragraph={documentToReactComponents(
              eleventhSection.mainText.json,
              options
            )}
          />
        )}
        <div className="flex flex-wrap gap-6 items-center justify-center md:mb-20 mb-6">
          {blogPreviewCardData.slice(0, 3).map((blogPreviewCardData) => (
            // Added the encodeURIComponent to be utf-8 compatible
            <BlogCard
              key={blogPreviewCardData.blogID}
              blogSlug={blogPreviewCardData.slug}
              blogCategory={blogPreviewCardData.blogCategory}
              blogTitle={blogPreviewCardData.blogTitle}
              blogDescription={blogPreviewCardData.blogDescription}
              minsToRead={blogPreviewCardData.minsToRead}
              previewBlogImage={`https:${blogPreviewCardData.previewImageBlog.fields.file.url}`}
              roundedImage={Circles(getRandomNumber())}
            />
          ))}
        </div>
        <div className="flex justify-center items-center">
          <MainButton
            wrapperClass="py-3 px-8"
            hasArrowRight={true}
            label={"VISIT BLOG"}
            href={"/blogs"}
          />
        </div>
      </div>
    </>
  );
};

export default BlogPreviewSection;
