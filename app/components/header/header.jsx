const Header = ({ title, subTitle, paragraph }) => {
  return (
    <div className="flex flex-col items-center dark:text-white text-[#252948] lg:mt-40 mt-5 lg:mb-10 mb-2">
      {title && (
        <p className="text-[#252948] dark:text-gray-400 text-[18px] font-bold">
          {title}
        </p>
      )}
      <h1 className="mb-8 featureSubtitle md:text-[34px] text-[24px] text text-center">
        {subTitle}
      </h1>
      <p className="featureParagraph font-medium text-[13px] leading-5 md:text-[17px] md:leading-6 height max-w-xl text-center md:px-0 px-1 pb-1">
        {paragraph}
      </p>
    </div>
  );
};

export default Header;
