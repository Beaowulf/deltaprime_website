"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./howToVideoPost.css";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import RichTextRenderer from "@/app/components/richTetxtRenderer/richTextRenderer";
import adImg from "@/public/assets/img/adImg.png";
import {
  AboutButtonDarkBG,
  CTAButton,
} from "@/app/components/buttons/mainButton";
import CryptoPreviewTables from "@/app/components/cryptoTables/cryptoTables";
import DynamicPurpleBar from "@/app/components/dynamicPurpleBar/dynamicPurpleBar";
import blogPostBG from "@/public/assets/img/blogPostBG.jpg";
import Link from "next/link";
import dynamic from "next/dynamic";
import VideoPlayerModal from "@/app/components/videoPlayer/videoPlayerModal";
import ReactPlayer from "react-player";
import { PlayButton } from "@/app/components/videoPlayer/video";

const HowToVideoDetail = ({
  video,
  howToVideoDescriptionImage,
  howToVideosBigThumbnail,
  howToVideosBigAlt,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [light, setLight] = useState(true);

  const openModal = () => {
    setIsModalOpen(true);
    setPlaying(true);
    setLight(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPlaying(false);
    setLight(true);
  };

  return (
    <div key={video.howToVideosID}>
      {/* <Dynami  title={video?.videoTitle} link={ <Link href={"/howToVideos"}>How To Videos</Link>} /> */}
      {/* Parent */}
      <div className="postAndTablesWrapper w-full gap-10 mt-10 mb-10 flex flex-col items-center">
        <div className="w-full px-4 flex flex-col items-center md:max-w-[90%] xl:max-w-[80%]">
          {/* video Title  */}

          <h1 className="text-[24px] md:text-[35px] text-center md:text-left leading-10 text-[#252948] dark:text-[#F6F6F6] font-bold mb-10 md:mb-10">
            {video.howToVideoTitle}
          </h1>

          {/* video Image  */}
          <div
            className={`w-fit self-center mt-6 relative ${
              video.howToVideoUrl ? "cursor-pointer" : ""
            }`}
            onClick={() => {
              if (video.howToVideoUrl) {
                openModal();
              }
            }}
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
              className="w-auto  max-h-450px rounded-[20px]"
              style={{ maxHeight: "450px", width: "full", maxWidth: "90%" }}
            />
            {video.howToVideoUrl && (
              <div className="absolute inset-0 flex justify-center items-center">
                <PlayButton />
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

      {video.howToVideoUrl && (
        <VideoPlayerModal isOpen={isModalOpen} onClose={closeModal}>
          <div className="playerWrapper">
            <ReactPlayer
              height="100%"
              width="100%"
              className="reactPlayer"
              url={video.howToVideoUrl}
              controls={true}
              playing={isModalOpen}
            />
          </div>
        </VideoPlayerModal>
      )}
    </div>
  );
};

export default HowToVideoDetail;
