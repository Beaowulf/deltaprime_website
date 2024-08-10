import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CTAButton, MainButton } from "@/app/components/buttons/mainButton";
import strategiesIntroImg from "@/public/assets/img/images/strategieHeroImage.jpg";
import rectangleImg from "@/public/assets/img/blogImages/rectangleImg.jpg";

import UnlockPotentialContainer from "@/app/components/unlockPotentialContainer/unlockPotentialContainer";
import ContactForm from "@/app/ui/contactForm/contactForm";
import { fetchHowToVideos, fetchStrategies } from "@/lib/getBlogs";
import DynamicPurpleBar from "@/app/components/dynamicPurpleBar/dynamicPurpleBar";
import { FlipCardMobileCarousel, VideosDesktopFlipCards } from "./howToVideosFlipCards";

const videos = await fetchHowToVideos();

const StrategiesPage = () => {
  // get strat data here since its server component
  return (

    <div>
      <DynamicPurpleBar title={"How To Videos"}/>
      <div className="pagePaddingLarge">
            {/* <HowToVideosHomePage /> */}
         
        {/* Dektop  */}
        <VideosDesktopFlipCards videos={videos} />
        {/* Mobile  */}
        <FlipCardMobileCarousel videos={videos} />
        {/* Unlock full potential button reponsive component */}

    </div>
      </div>

  );
};

export default StrategiesPage;
