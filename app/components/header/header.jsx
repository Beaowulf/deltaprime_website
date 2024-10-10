import Seperator from "@/app/components/seperator/seperator";

const Header = ({
  title,
  subTitle,
  paragraph,
  hasMassiveSpacing,
  hasSeperator = false,
}) => {
  return (
    <div
      className={`flex flex-col items-center mt-5 lg:mb-10 mb-2 ${
        hasMassiveSpacing ? " lg:mt-40 lg:mb-10" : "lg:mt-10"
      } `}
    >
      {title && (
        <h4 className="dark:text-gray-400 text-[18px] font-bold dark:text-white text-[#6B70ED] ">
          {title}
        </h4>
      )}
      {hasSeperator ? (
        <Seperator bigHeader={true} label={subTitle} />
      ) : (
        <h3 className="mb-8 featureSubtitle md:text-[34px] text-[24px] text text-center dark:text-white text-[#6B70ED] ">
          {subTitle}
        </h3>
      )}
      <h4 className="aboutTypographyparagraphWhite font-medium md:leading-6 height max-w-xl text-center md:px-0 px-1 pb-1 dark:text-white text-[#565AC2] ">
        {paragraph}
      </h4>
    </div>
  );
};

export default Header;
