import Image from "next/image";
import SocialMediaIconWrapper from "../linkedInIconsWrapper";

const AdvisorCard = ({
  imageSrc,
  name,
  position,
  subPosition,
  additionalInfo,
  socialMediaLink,
  usesTwitter = false,
}) => {
  return (
    <div className="rounded-[25px] p-4 featureBorderWrapLightTheme text-center relative">
      <div className="rounded-[25px] z-20 pb-20 px-5 dark:bg-[#252948] deltaWhiteLinearBG storyCard h-[500px]">
        <div className="flex justify-center items-center flex-col py-5 px-4">
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
          <h3 className="featureSubtitle mb-4 text-[17px] sm:text-[20px]  text-[#252948] mt-5">
            {name}
          </h3>
          <p className="aboutTypographyparagraphWhite text-[#252948]">
            {position} <span className="font-extrabold">{subPosition}</span>
          </p>
          <p className="my-4 aboutTypographyparagraphWhite max-w-[15rem]  text-[#252948]">
            {additionalInfo}
          </p>
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
            <SocialMediaIconWrapper
              socialMediaLink={socialMediaLink}
              usesTwitter={usesTwitter}
              className="w-4 h-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvisorCard;
