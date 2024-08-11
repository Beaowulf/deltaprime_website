import React, { useState } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import playIconSVG from "@/public/assets/icons/play.svg";
import VideoPlayerModal from "@/app/components/videoPlayer/videoPlayerModal";
import "./videoPlayer.css";

export const PlayButton = () => (
  <button>
    <Image
      className="w-[50px] h-[50px] md:w-[100px] md:h-[50px]"
      src={playIconSVG}
      alt="play_Button_White_Icon"
      priority={true}
    />
  </button>
);

const VideoPlayer = ({ url }) => {
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
      <div className="playerWrapper" onClick={openModal}>
        <ReactPlayer
          height="100%"
          width="100%"
          className="reactPlayer"
          // url="https://youtu.be/2nJLhZ33lno"
          url={url}
          light={light ? "/assets/img/thumbnail.png" : false}
          playIcon={<PlayButton />}
          playing={playing && !isModalOpen}
          controls={false}
        />
      </div>

      <VideoPlayerModal isOpen={isModalOpen} onClose={closeModal}>
        <div className="playerWrapper">
          <ReactPlayer
            height="100%"
            width="100%"
            className="reactPlayer"
            url={url}
            controls={true}
            playing={isModalOpen}
          />
        </div>
      </VideoPlayerModal>
    </>
  );
};

export default VideoPlayer;
