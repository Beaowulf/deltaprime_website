import React from "react";
import Image from "next/image";
import strategieImage from "@/public/assets/img/strategiesPage.png";

const StrategiesPage = () => {
  return (
    <div className="h-100vh">
      <Image
        src={strategieImage}
        alt="strategie_image"
        className="w-screen h-screen object-cover"
      />
    </div>
  );
};

export default StrategiesPage;
