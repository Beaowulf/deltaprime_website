"use client";
import React, { useState } from "react";
import "./howToVideoPost.css";
import RichTextRenderer from "@/app/components/richTetxtRenderer/richTextRenderer";
import ReactPlayer from "react-player";
import { PlayButton } from "@/app/components/videoPlayer/video";

const HowToVideoDetail = ({
  video,
  howToVideoDescriptionImage,
  howToVideosBigThumbnail,
  howToVideosBigAlt,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const startPlaying = () => {
    setIsPlaying(true);
  };

  return (
    <div key={video.howToVideosID}>
      {/* Parent */}
      <div className="postAndTablesWrapper mw-full gap-10 flex flex-col items-center">
        <div className="w-full px-4 flex flex-col items-center md:max-w-[90%] xl:max-w-[80%]">
          {/* video Title  */}
          <h4 className="text-[24px] md:text-[35px] text-center md:text-left leading-10 text-[#6B70ED] dark:text-[#F6F6F6] font-bold mb-10 md:mb-10">
            {video.howToVideoTitle}
          </h4>

          {/* video Image or Video Player */}
          <div className="mb-4 w-full self-center relative lg:h-[45rem] h-[25rem]">
            {isPlaying ? (
              <ReactPlayer
                width="100%"
                height="100%"
                url={video.howToVideoUrl}
                controls={true}
                playing={true}
              />
            ) : (
              <div
                className={`relative w-full cursor-pointer`}
                onClick={startPlaying}
              >
                <img
                  src={
                    howToVideosBigThumbnail
                      ? `https:${howToVideosBigThumbnail}`
                      : howToVideoDescriptionImage
                      ? `https:${howToVideoDescriptionImage}`
                      : "/assets/img/blogPostBG.jpg"
                  }
                  alt={`${howToVideosBigAlt ?? "Image"}`}
                  className="w-full max-h-[40rem] rounded-[20px]"
                  style={{
                    maxHeight: "40rem",
                    width: "100%",
                    maxWidth: "100%",
                  }}
                />
                {video.howToVideoUrl && (
                  <div className="absolute inset-0 flex justify-center items-center">
                    <PlayButton />
                  </div>
                )}
              </div>
            )}
          </div>

          <div>
            <div className="blogPostWrapper">
              <RichTextRenderer
                blogTakeaways={video.howToVideoTakeaways}
                hasTakeaways={video?.howToVideoTakeaways?.length > 0}
                richTextDocument={video.howToVideoRichText}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToVideoDetail;
