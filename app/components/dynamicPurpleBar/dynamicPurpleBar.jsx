import React from "react";
import Link from "next/link";

const DynamicPurpleBar = ({
  title,
  link = undefined,
  mediumPadding = false,
}) => {
  return (
    <div
      className={`${mediumPadding ? "pagePaddingMedium" : "pagePaddingLarge"}`}
    >
      <div className=" my-mobile-spacing md:my-desktop-spacing flex items-center gap-3 rounded-[20px] bg-[#565AC2] relative px-5 md:px-16 py-[10px] md:py-3 text-white ">
        <Link className="hidden sm:block text-nowrap" href={"/"}>
          Home
        </Link>
        <span className="hidden sm:block text-nowrap w-3 h-1 bg-white rounded-[40px]" />

        {link ? (
          <>
            {link}
            {title && (
              <>
                <span className="w-3 h-1 bg-white rounded-[40px] font-extrabold text-white" />
                <p className="font-extrabold">{title}</p>
              </>
            )}
          </>
        ) : (
          <>
            <p className="font-extrabold text-white">{title}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default DynamicPurpleBar;
