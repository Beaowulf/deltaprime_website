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
    <div className="rounded-[20px] p-4 h-full featureBorderWrapLightTheme text-center relative">
      <div className="rounded-[20px] z-20 pb-12 dark:bg-[#252948] bg-[#E8E8F2] storyCard">
        <div className="flex justify-center items-center flex-col pt-10 px-4">
          <div className="relative w-[240px] h-[240px] rounded-full bg-gradient-to-t from-[#BABAFE] via-[#FA91BF] to-[#FEC2A5] p-[10px] shadow-sm">
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
          <h3 className="featureSubtitle text-[17px] sm:text-[20px] dark:text-[#FFF5F0] text-[#252948] mt-5">
            {name}
          </h3>
          <p className="aboutTypographyparagraphWhite dark:text-[#FFF5F0] text-[#252948]">
            {title}
          </p>
          <p className="my-8 aboutTypographyparagraphWhite max-w-[320px] dark:text-[#FFF5F0] text-[#252948]">
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
