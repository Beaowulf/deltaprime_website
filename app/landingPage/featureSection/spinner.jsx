import React, { useState, useEffect } from "react";
import Image from "next/image";
import homeAvalanche from "@/public/assets/img/images/home-avalanche.png";
import homeArbitrum from "@/public/assets/img/images/home-arbitrum.png";

const ImageComponent = () => {
  const [showFirstImage, setShowFirstImage] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstImage((prev) => !prev);
    }, 3000); // Change image at the halfway point of the spin

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="content-image__wrapper spinner">
      <Image
        className={`content-image ${
          showFirstImage ? "" : "content-image--hidden"
        }`}
        src={homeAvalanche}
        alt="DeltaPrime"
      />
      <Image
        className={`content-image ${
          showFirstImage ? "content-image--hidden" : ""
        }`}
        src={homeArbitrum}
        alt="DeltaPrime"
      />
    </div>
  );
};

export default ImageComponent;
