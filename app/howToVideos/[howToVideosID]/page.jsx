// app/strategies/[strategyID]/page.jsx
import { fetchHowToVideos, fetchStrategies } from "@/lib/getBlogs";
import StrategyPost from "@/app/strategies/[strategyID]/strategyPost";
import HowToVideoDetail from "./howToVideoPost";
import DynamicPurpleBar from "@/app/components/dynamicPurpleBar/dynamicPurpleBar";
import Link from "next/link";

export async function generateStaticParams() {
  const strategies = await fetchStrategies();
  return strategies.map((strategy) => ({
    strategyID: strategy.strategyID,
  }));
}

const HowToVideoPage = async ({ params }) => {
  const videos = await fetchHowToVideos();
  const video =
    videos.find((video) => video.howToVideosID === params.howToVideosID) ||
    null;

  if (!video) {
    return <div>Video not found</div>;
  }

  return (
    <div>
      <DynamicPurpleBar  title={video?.howToVideoTitle} link={ <Link href={"/howToVideos"}>How To Videos</Link>} />
      { (!video) ?
     <div>Video not found</div>
  

       : <HowToVideoDetail 
       video={video}
        howToVideoDescriptionImage = {video?.howToVideoDescriptionImage?.fields?.file?.url}
        howToVideosBigThumbnail = {video?.howToVideosBigThumbnail?.fields?.file?.url}
        howToVideosBigAlt = {video?.howToVideosBigThumbnail?.fields?.file?.title}
        />}
    </div>
  );
};

export default HowToVideoPage;
