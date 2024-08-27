import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HowToVideoCard = ({
  video,
  imageThumbnail,
  imageTitle,
  imageBigThumbnail,
}) => {
  const router = useRouter();

  return (
    <div
      className="px-2 pt-2 rounded-[2px] w-full max-w-[460px] max-h-[430px] shadow-lg dark:shadow-none shadow-[#ff5fa240]"
      onClick={() => {
        router.push(`/how-to-videos/${video.slug}`);
      }}
    >
      <div className="flex flex-col gap-4 justify-between w-full ">
        <div className="overflow-hidden rounded-[25px] bg-[#F4F4FF] w-full self-center">
          <img
            width={"100%"}
            height={145}
            src={
              imageThumbnail
                ? `https:${imageThumbnail}`
                : imageBigThumbnail
                ? `https:${imageBigThumbnail}`
                : "/assets/img/blogPostBG.jpg"
            }
            alt={`${imageTitle ?? "Image"}`}
            className="w-full"
          />
        </div>
        <div className="w-full">
          <h4 className="line-clamp-1">
            <p className="mb-2 aboutTypographyparagraphWhite  text-wrap max-w-full dark:text-white text-[#6B70ED] w-full inline-block text-xl font-semibold hover:text-primary sm:text-xl lg:text-xl xl:text-2xl line-clamp-1">
              {video.howToVideoTitle}
            </p>
          </h4>
          <p className="aboutTypographyparagraphWhite  max-w-full dark:text-gray text-[#565AC2] text-wrap text-[12px] md:text-[14px] xl:text-[15px] leading-5 mb-4  w-full line-clamp-2">
            {video.howToVideoDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowToVideoCard;
