import Link from "next/link";
import Image from "next/image";
import blogPostBG from "@/public/assets/img/blogPostBG.jpg";
import { useRouter } from "next/navigation";

const HowToVideoCard = ({ video, imageThumbnail, imageTitle,  imageBigThumbnail,
}) => {
  const router = useRouter();

  return (
    <div
      className="px-2 pt-2 rounded-[2px] w-full max-w-[360px] h-[330px] shadow-lg dark:shadow-none shadow-[#ff5fa240]"
      onClick={() => {
        router.push(`/howToVideos/${video.howToVideosID}`);
      }}
    >
      <div className="flex flex-col gap-4 justify-between w-full h-full">
        <div className="overflow-hidden  bg-[#F4F4FF] w-full w-fit self-center">
          <img
            width={"100%"}
            height={145}
            src={imageThumbnail ? `https:${imageThumbnail}` :  imageBigThumbnail ? `https:${imageBigThumbnail}` : "/assets/img/blogPostBG.jpg"}
            alt={`${imageTitle ?? "Image"}`}
            className="w-full"
          />
        </div>
        <div className="w-full">
          <h4>
            <p className="mb-4 whiteMainText  w-full inline-block text-xl font-semibold hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
              {video.howToVideoTitle}
            </p>
          </h4>

          <p className="whiteMainText text-wrap text-[12px] md:text-[14px] xl:text-[15px] leading-5 mb-4  w-full">
            {video.howToVideoDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowToVideoCard;
