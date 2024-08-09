import React from "react";
import Link from "next/link";

const DynamicPurpleBar = ({ title, inBlogPost = false }) => {
  return (
    <div className="pagePaddingLarge">
      <div className="flex items-center gap-3 rounded-[20px] bg-[#565AC2] relative px-5 md:px-16 py-4 text-white ">
        <Link className="hidden sm:block text-nowrap" href={"/"}>
          Home
        </Link>
        <span className="hidden sm:block text-nowrap w-3 h-1 bg-white rounded-[40px]" />

        {inBlogPost ? (
          <>
            <Link href={"/blogs"}>Burd Log</Link>
            {title && (
              <>
                <span className="w-3 h-1 bg-white rounded-[40px] font-extrabold" />
                <p className="font-extrabold">{title}</p>
              </>
            )}
          </>
        ) : (
          <>
            <p className="font-extrabold">{title}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default DynamicPurpleBar;
