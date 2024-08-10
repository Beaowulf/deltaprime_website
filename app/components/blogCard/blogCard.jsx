import Link from "next/link";
import { BlogCardButton } from "@/app/components/buttons/mainButton";
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
    <div className="flex flex-col justify-start w-[380px] flex-shrink-0 gap-2">
      <div className="w-full h-[270px] ">
        <img
          src={previewBlogImage}
          alt="Blog Preview"
          className="object-cover w-full h-full rounded-[15px]"
        />
      </div>
      <p className="text-[16px] leading-6 font-medium line-clamp-2 ml-1">
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
  blogTitle,
  blogDescription,
  blogCategory,
  roundedImage,
  minsToRead,
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
      <p className="text-[12px] leading-6 font-medium line-clamp-2 ml-1">
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
