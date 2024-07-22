"use client";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div>
        This is the front of the card.
        <button onClick={setIsFlipped(!isFlipped)}>Click to flip</button>
      </div>

      <div>
        This is the back of the card.
        <button onClick={setIsFlipped(!isFlipped)}>Click to flip</button>
      </div>
    </ReactCardFlip>
  );
};

export default FlipCard;
