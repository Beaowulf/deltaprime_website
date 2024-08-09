import Link from "next/link";
import { ArrowButton } from "@/app/components/buttons/mainButton";
import Image from "next/image";

const BlogCard = ({
  previewBlogImage,
  blogTitle,
  blogDescription,
  blogCategory,
  roundedImage,
  minsToRead,
  blogSlug,
}) => {
  return (
    <div className="px-5 pt-5 bg-[#F4F4FF] rounded-[20px] w-[360px] h-[330px] shadow-lg dark:shadow-none shadow-[#ff5fa240]">
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
            <p className="mb-4 whitespace-nowrap overflow-hidden text-ellipsis w-full inline-block text-xl font-semibold text-dark hover:text-primary dark:text-[#010205] sm:text-2xl lg:text-xl xl:text-2xl">
              {blogTitle}
            </p>
          </h3>
        </div>

        <div className="flex justify-between gap-5 w-fit">
          <p className="text-[10px] md:text-[12px] leading-[inherit] dark:text-[#878C91] lineClampThree">
            {blogDescription}
          </p>
          <Link href={`/blogs/academy/${blogSlug}`}>
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

export const SmallBlogCard = ({
  previewBlogImage,
  blogTitle,
  blogDescription,
  blogCategory,
  roundedImage,
  minsToRead,
  blogSlug,
  onClick,
}) => {
  return (
    <div className="px-3 pt-3 bg-[#F4F4FF] rounded-[20px] w-[260px] h-[230px] shadow-lg dark:shadow-none shadow-[#ff5fa240]">
      <div className="flex flex-col gap-2 justify-between h-full">
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
            <p className="mb-4 whitespace-nowrap overflow-hidden text-ellipsis w-full inline-block text-xl font-semibold text-dark hover:text-primary dark:text-[#010205] text-[12px] md:text-[15px]">
              {blogTitle}
            </p>
          </h3>
        </div>

        <div className="flex justify-between gap-5 w-full">
          <p className="text-[10px] md:text-[12px] leading-[inherit] dark:text-[#878C91] lineClampThree">
            {blogDescription}
          </p>
          <Link href={`/blogs/academy/${blogSlug}`}>
            <ArrowButton onClick={onClick} />
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

export default BlogCard;
