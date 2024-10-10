import React from "react";
import DynamicPurpleBar from "@/app/components/dynamicPurpleBar/dynamicPurpleBar";
import { fetchHowToVideos } from "@/lib/getBlogs";
import {
  FlipCardMobileCarousel,
  VideosDesktopFlipCards,
} from "./howToVideosFlipCards";

const StrategiesPage = async () => {
  const videos = await fetchHowToVideos();

  return (
    <div className="">
      <DynamicPurpleBar mediumPadding={true} title={"How To Videos"} />

      <div className="my-mobile-spacing md:my-desktop-spacing pagePaddingMedium">
        {/* Desktop */}
        <VideosDesktopFlipCards videos={videos} />
      </div>
      {/* Mobile */}
      <div className="my-mobile-spacing md:my-desktop-spacing pagePaddingLarge">
        <FlipCardMobileCarousel videos={videos} />
      </div>
    </div>
  );
};

export default StrategiesPage;
