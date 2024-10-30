import { fetchHowToVideos, fetchHowToVideoBySlug } from "@/lib/getBlogs";
import HowToVideoDetail from "./howToVideoPost";
import DynamicPurpleBar from "@/app/components/dynamicPurpleBar/dynamicPurpleBar";
import Link from "next/link";

// This function dynamically generates metadata based on the video's title and description
export async function generateMetadata({ params }) {
  const video = await fetchHowToVideoBySlug(params.slug);

  if (!video) {
    return {
      title: "Video Not Found | Delta Prime",
      description: "This video could not be found on Delta Prime.",
    };
  }

  return {
    title: `${video.howToVideoTitle} | Delta Prime`,
    description: video.howToVideoDescription || "Learn more with our how-to videos.",
  };
}

export async function generateStaticParams() {
  const videos = await fetchHowToVideos();
  return videos.map((video) => ({
    slug: video.slug,
  }));
}

const HowToVideoPage = async ({ params }) => {
  const video = await fetchHowToVideoBySlug(params.slug);

  if (!video) {
    return <div>Video not found</div>;
  }

  return (
    <div className="my-mobile-spacing md:my-desktop-spacing">
      <DynamicPurpleBar
        title={video?.howToVideoTitle}
        link={<Link href={"/how-to-videos"}>How To Videos</Link>}
      />
      <HowToVideoDetail
        video={video}
        howToVideoDescriptionImage={
          video?.howToVideoDescriptionImage?.fields?.file?.url
        }
        howToVideosBigThumbnail={
          video?.howToVideosBigThumbnail?.fields?.file?.url
        }
        howToVideosBigAlt={video?.howToVideosBigThumbnail?.fields?.title}
      />
    </div>
  );
};

export default HowToVideoPage;
