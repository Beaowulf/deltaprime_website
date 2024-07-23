import React from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import playIconSVG from "@/public/assets/icons/play.svg";
import "./videoPlayer.css";

const PlayButton = () => {
  return (
    <>
      <button>
        <Image
          className="w-[50px] h-[50px] md:w-[100px] md:h-[50px]"
          src={playIconSVG}
          alt="play_Button_White_Icon"
          priority={true}
        />
      </button>
    </>
  );
};

const VideoPlayer = () => {
  return (
    <div
      className={
        "md:w-1/2 md:h-[30rem] h-[240px] w-full cursor-pointerplayerWrapper"
      }
    >
      <ReactPlayer
        height={"100%"}
        width={"100%"}
        className="reactPlayer"
        url="/videos/video.mp4"
        controls={true}
        light="/assets/img/thumbnail.png"
        playIcon={<PlayButton />}
      />
    </div>
  );
};

export default VideoPlayer;
