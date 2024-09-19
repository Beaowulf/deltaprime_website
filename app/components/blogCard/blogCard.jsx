import Link from "next/link";
import "./blogCard.css";
import { useRouter } from "next/navigation";

const BlogCard = ({ previewBlogImage, blogDescription, blogSlug, onClick }) => {
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
        {previewBlogImage ? (
          <img
            src={previewBlogImage}
            alt="Blog Preview"
            className="blogCardContent object-cover w-full h-full rounded-[15px]"
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
        <span className="underline ml-1">Read More</span>
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
  const router = useRouter();

  const handleImageClick = () => {
    if (onClick) onClick();
    router.push(`/blogs/academy/${blogSlug}`);
  };

  return (
    <div className="flex flex-col justify-start w-[200px] h-[230px] flex-shrink-0 gap-2">
      <div
        className="blogCardParentSmall w-full h-[120px] cursor-pointer"
        onClick={handleImageClick}
      >
        <img
          src={previewBlogImage}
          alt="Blog Preview"
          className="blogCardContentSmall object-cover w-full h-full rounded-[15px]"
        />
      </div>
      <p className="text-[12px] leading-6 font-medium line-clamp-2 ml-1 dark:text-white text-[#565AC2]">
        {blogDescription}
      </p>
      <Link
        href={`/blogs/academy/${blogSlug}`}
        onClick={onClick}
        prefetch={true}
      >
        <span className="underline ml-1">Read More</span>
      </Link>
    </div>
  );
};

export default BlogCard;
