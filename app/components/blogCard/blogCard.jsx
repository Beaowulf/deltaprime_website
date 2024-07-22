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

export default BlogCard;
