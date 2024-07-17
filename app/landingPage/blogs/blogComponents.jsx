"use client";

import Image from "next/image";
import { ArrowButton } from "@/app/components/buttons/mainButton";

export const BlogHeader = ({ title, subTitle, paragraph }) => {
  return (
    <div className="flex flex-col items-center dark:text-white text-[#252948] mb-14 text-center">
      <h4 className="uppercase mb-3 featureTitle">{title}</h4>
      <h1 className="mb-8 featureSubtitle">{subTitle}</h1>
      <p className="featureParagraph max-w-xl">{paragraph}</p>
    </div>
  );
};

export const BlogCard = ({
  previewBlogImage,
  blogTitle,
  blogDescription,
  blogType,
  roundedImage,
}) => {
  return (
    <div className="w-full px-5 pt-5 md:w-1/2 lg:w-1/3 bg-[#F4F4FF] rounded-[20px]">
      <div className="w-full flex flex-col gap-4">
        <div className="w-full flex justify-between">
          <div className="flex gap-2 text-black">
            <p className="text-xs">{roundedImage}</p>
            <p className="text-xs text-[#878C91]">{blogType}</p>
          </div>
          <div>
            <p className="text-xs text-[#878C91]">5 min read</p>
          </div>
        </div>

        <div>
          <h3>
            <a
              href="/#"
              className="mb-4 line-clamp-2 truncate w-full inline-block text-xl font-semibold text-dark hover:text-primary dark:text-[#010205] sm:text-2xl lg:text-xl xl:text-2xl"
            >
              {blogTitle}
            </a>
          </h3>
        </div>

        <div className="w-full flex justify-between gap-5">
          <p className="text-[8px] md:text-[12px] leading-[inherit] dark:text-[#878C91] lineClampThree">
            {blogDescription}
          </p>
          <ArrowButton darkBG />
        </div>

        <div className="overflow-hidden rounded h-fit w-full">
          <Image
            src={previewBlogImage}
            alt="previewBlogImage"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};
