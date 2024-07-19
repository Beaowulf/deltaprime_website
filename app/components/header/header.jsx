const Header = ({ title, subTitle, paragraph }) => {
  return (
    <div className="flex flex-col items-center dark:text-white text-[#252948] mt-20 mb-10">
      <h4 className="uppercase mb-3 featureTitle md:text-[15px] text-[12 px] text-center">
        {title}
      </h4>
      <h1 className="mb-8 featureSubtitle md:text-[34px] text-[24px] text text-center">
        {subTitle}
      </h1>
      <p className="featureParagraph font-medium text-[13px] leading-5 md:text-[17px] md:leading-6 height max-w-xl text-center">
        {paragraph}
      </p>
    </div>
  );
};

export default Header;
