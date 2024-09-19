import Image from "next/image";
import SocialMediaIconWrapper from "../linkedInIconsWrapper";

const FounderCard = ({
  imageSrc,
  name,
  title,
  description,
  socialMediaLink,
}) => {
  return (
    <div className="rounded-[25px] p-4 h-full featureBorderWrapLightTheme text-center relative">
      <div className="rounded-[25px] z-20 pb-12 dark:bg-[#252948] deltaWhiteLinearBG storyCard h-full">
        <div className="flex justify-center items-center flex-col pt-10 px-4">
          {/* Adjust padding here to make the border less thick */}
          <div className="relative w-[220px] h-[220px] rounded-full bg-gradient-to-t from-[#BABAFE] via-[#FA91BF] to-[#FEC2A5] p-[7px]">
            <div className="w-full h-full rounded-full bg-transparent flex items-center justify-center">
              <Image
                src={imageSrc}
                width={220}
                height={220}
                alt={`${name}_image`}
                className="rounded-full border-none customBoxShadow"
              />
            </div>
          </div>
          <h3 className="featureSubtitle text-[17px] sm:text-[20px] dark:text-[#252948] text-[#6B70ED] mt-5">
            {name}
          </h3>
          <p className="aboutTypographyparagraphWhite dark:text-[#252948] text-[#6B70ED]">
            {title}
          </p>
          <p className="my-8 aboutTypographyparagraphWhite max-w-[320px] dark:text-[#252948] text-[#565AC2] text-justify hyphens-auto">
            {description}
          </p>
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
            <SocialMediaIconWrapper
              socialMediaLink={socialMediaLink}
              className="w-4 h-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default FounderCard;
