import React from "react";
import { useTheme } from "next-themes";
import { DarkModeLogo } from "@/app/components/logo/logo";

const LandscapePage = () => {
  const { resolvedTheme } = useTheme();

  return (
    <div
      id="rotateMessage"
      className={`flex justify-center items-center flex-col gap-10 h-screen w-screen fixed top-0 left-0 dark:text-white text-[#6B70ED] align-center text-[24px] ${
        resolvedTheme === "dark"
          ? "bg-deltaDarkBlueBG"
          : "bg-gradient-to-tl from-[#F4F4FF] via-[#FFF5F0] to-[#E8E8F2]"
      }`}
      style={{ zIndex: "99999" }}
    >
      <div>
        {" "}
        <DarkModeLogo large={true} />
      </div>
      <h3 className="w-full text-center">
        For a better experience please rotate your phone
      </h3>
    </div>
  );
};

export default LandscapePage;
