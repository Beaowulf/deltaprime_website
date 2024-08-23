import Link from "next/link";
import { BlogCardButton } from "@/app/components/buttons/mainButton";

const BlogCard = ({ previewBlogImage, blogDescription, blogSlug }) => {
  return (
    <div className="flex flex-col justify-start w-[330px] md:w-[380px] flex-shrink-0 gap-2">
      <div className="w-full h-[270px] ">
        {previewBlogImage ? (
          <img
            src={previewBlogImage}
            alt="Blog Preview"
            className="object-cover w-full h-full rounded-[15px]"
          />
        ) : (
          <div className="bg-gray-300 w-full h-full rounded-[15px] flex items-center justify-center">
            <span>No Image Available</span>
          </div>
        )}
      </div>
      <p
        className="text-[16px] leading-6 font-medium line-clamp-2 ml-1 dark:text-white text-[#6B70ED]"
        style={{ minHeight: "calc(1.5rem * 2)" }}
      >
        {blogDescription}
      </p>
      <Link prefetch={true} href={`/blogs/academy/${blogSlug}`}>
        <BlogCardButton label={"Read More"} />
      </Link>
    </div>
  );
};

export const SmallBlogCard = ({
  previewBlogImage,
  blogDescription,
  blogSlug,
  onClick,
}) => {
  return (
    <div className="flex flex-col justify-start w-[200px] h-[230px] flex-shrink-0 gap-2">
      <div className="w-full h-[120px] ">
        <img
          src={previewBlogImage}
          alt="Blog Preview"
          className="object-cover w-full h-full rounded-[15px]"
        />
      </div>
      <p className="text-[12px] leading-6 font-medium line-clamp-2 ml-1 dark:text-white text-[#565AC2]">
        {blogDescription}
      </p>
      <Link
        onClick={onClick}
        prefetch={true}
        href={`/blogs/academy/${blogSlug}`}
      >
        <BlogCardButton isSmallbtn={true} label={"Read More"} />
      </Link>
    </div>
  );
};

export default BlogCard;
