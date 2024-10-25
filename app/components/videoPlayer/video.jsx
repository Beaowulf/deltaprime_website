import React, { useState } from "react";
import Image from "next/image";
import Thumbnail_bg from "@/public/assets/img/thumbnail.png";
import playIconSVG from "@/public/assets/icons/play.svg";
import VideoPlayerModal from "@/app/components/videoPlayer/videoPlayerModal";
import styles from "./videoPlayer.module.css"; // Import the CSS module

export const PlayButton = () => (
  <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <Image
      className="w-[50px] h-[50px] md:w-[100px] md:h-[50px]"
      src={playIconSVG}
      alt="play_Button_White_Icon"
      priority={true}
    />
  </button>
);

const VideoThumbnail = ({ url }) => {
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
    <>
      <div
        className="flex lg:justify-end justify-center items-center"
        onClick={openModal}
      >
        <div className="relative w-fit h-full flex justify-end items-center">
          <Image
            src={Thumbnail_bg}
            width={500}
            height={500}
            alt="key_hand_thumbnail_image"
            className="w-full h-auto rounded-[25px] border-white border-[5px]"
            priority
            placeholder="blur"
          />
          <PlayButton />
        </div>
      </div>
      <VideoPlayerModal isOpen={isModalOpen} onClose={closeModal}>
        <div className={styles.playerWrapper}>
          {/* might make this into a video */}
          <iframe
            height="100%"
            width="100%"
            src={url}
            className={styles.reactPlayer}
            title="What is DeltaPrime"
            frameBorder="0"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          {/* <ReactPlayer
            height="100%"
            width="100%"
            className={styles.reactPlayer}
            url={url}
            controls={true}
            playing={isModalOpen}
          /> */}
        </div>
      </VideoPlayerModal>
    </>
  );
};

export default VideoThumbnail;
