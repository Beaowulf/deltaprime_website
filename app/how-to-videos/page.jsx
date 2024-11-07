import React from "react";
import DynamicPurpleBar from "@/app/components/dynamicPurpleBar/dynamicPurpleBar";
import { fetchHowToVideos } from "@/lib/getBlogs";
import {
  FlipCardMobileCarousel,
  VideosDesktopFlipCards,
} from "./howToVideosFlipCards";

// Define the metadata for the page
export const metadata = {
  title: "How To Videos - Learn Strategies | DeltaPrime",
  description:
    "Explore our collection of how-to videos and learn various strategies to enhance your knowledge.",
};

// Your component logic remains the same
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
