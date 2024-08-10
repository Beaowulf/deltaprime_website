"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./flipCard.css";
import filledStar from "@/public/assets/icons/filledStar.svg";
import unFilledStar from "@/public/assets/icons/unFilledStar.svg";

const FlipCard = ({
  titleFront,
  descriptionFront,
  difficultyLevel,
  titleBack,
  descriptionBack,
  listTextBack,
  strategyImage,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const DifficultyStars = ({ difficultyLevel }) => {
    const totalStars = 3;
    const stars = Array(totalStars)
      .fill()
      .map((_, index) => (
        <Image
          key={index}
          src={index < difficultyLevel ? filledStar : unFilledStar}
          alt={index < difficultyLevel ? "filled_star" : "unfilled_star"}
          width={25}
          height={80}
        />
      ));

    return <>{stars}</>;
  };

  return (
    <div className="h-fit p-2 mx-auto md:mx-0 w-full flex justify-center">
      <div
        className={`flip-card 2xl:h-[450px] w-full 2xl:max-w-[350px] lg:h-[450px] lg:max-w-[310px] h-[450px] max-w-[300px] ${
          isFlipped ? "flipped" : ""
        }`}
        onClick={handleClick}
      >
        <div className="flip-card-inner">
          <div
            className="background-image-overlay"
            style={{
              backgroundImage: `url(${
                strategyImage ? strategyImage : "/assets/img/flipCardBG.png"
              })`,
            }}
          ></div>
          <div className="flip-card-front rounded-[20px] shadow-lg shadow-[#26283db7]">
            <div className="innerCardWrapper p-6 flex flex-col justify-end w-full h-full">
              <h4 className="text-white pb-3 font-extrabold text-[20px] leading-7">
                {titleFront ? titleBack : "Delta Neutral"}
              </h4>
              <p className="pb-6 font-bold text-[14px] leading-5 text-white">
                {descriptionFront}
              </p>
              <div>
                <div className="flex flex-row justify-center items-center gap-4">
                  <p className="text-[14px] font-bold leading-4 text-white">
                    Difficulty Level:
                  </p>
                  <DifficultyStars difficultyLevel={difficultyLevel} />
                </div>
              </div>
            </div>
          </div>
          <div className="flip-card-back p-8 rounded-[20px] flex flex-col justify-center items-center">
            <h4 className="text-white pb-3 font-extrabold text-[20px] leading-7">
              {titleBack ? titleBack : "Delta Neutral"}
            </h4>
            <p className="pb-6 font-bold text-[14px] leading-5 text-white">
              {descriptionBack}
            </p>
            <span className="border-t-2 border-t-[#FFBB9B] w-full mb-4 " />
            <div>{listTextBack}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
