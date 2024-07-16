import React from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import playIconSVG from "@/public/assets/icons/play.svg";
import styles from "./VideoPlayer.module.css"; // Import CSS module

const PlayButton = () => {
  return (
    <>
      <button className="">
        <Image
          width={110}
          height={110}
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
      className={`md:w-1/2 w-full md:h-[25rem] h-[180px] cursor-pointer ${styles.playerWrapper}`}
    >
      <ReactPlayer
        height={"100%"}
        width={"100%"}
        className={styles.reactPlayer}
        url="/videos/video.mp4"
        controls={true}
        light="/assets/img/thumbnail.png"
        playIcon={<PlayButton />}
      />
    </div>
  );
};

export default VideoPlayer;
