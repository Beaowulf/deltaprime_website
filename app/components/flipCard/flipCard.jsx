"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./flipCard.css";
import filledStar from "@/public/assets/icons/filledStar.svg";
import unFilledStar from "@/public/assets/icons/unFilledStar.svg";

const FlipCard = ({ titleFront, descriptionFront, difficultyLevel }) => {
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
    <div
      className={`flip-card h-[450px] w-[350px]  ${isFlipped ? "flipped" : ""}`}
      onClick={handleClick}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front rounded-[20px] shadow-lg shadow-[#0015ffb7] ">
          <p className="text-white pb-3">{titleFront}</p>
          <p className="pb-6">{descriptionFront}</p>
          <div>
            <p className="text-[14px] font-semibold leading-4">
              Difficulty Level:
            </p>
            <div className="flex flex-row">
              {<DifficultyStars difficultyLevel={difficultyLevel} />}
            </div>
          </div>
        </div>
        <div className="flip-card-back rounded-[20px]">
          This is the back of the card.
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
