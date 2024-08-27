// app/howToVideos/[slug]/page.jsx
import { fetchHowToVideos, fetchHowToVideoBySlug } from "@/lib/getBlogs";
import HowToVideoDetail from "./howToVideoPost";
import DynamicPurpleBar from "@/app/components/dynamicPurpleBar/dynamicPurpleBar";
import Link from "next/link";

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
    <div>
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
