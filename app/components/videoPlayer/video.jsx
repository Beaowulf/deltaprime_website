import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  //video path
  const videoSrc = "https://youtu.be/FaU8BkqmXzo";

  return (
    <div className="md:w-1/2 w-full md:h-[30rem] h-[180px]">
      <ReactPlayer
        width="100%"
        height="100%"
        url={videoSrc}
        controls={true}
        // light is usefull incase of dark mode
        light={false}
        // picture in picture
        pip={true}
      />
    </div>
  );
};

export default VideoPlayer;
