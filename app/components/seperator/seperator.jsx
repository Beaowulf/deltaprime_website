const Seperator = ({ label, className, bigHeader = false }) => {
  return (
    <div
      className={`${className} flex flex-row w-full ${
        bigHeader ? "mb-4" : "md:mb-20 mb-8"
      } items-center`}
    >
      <span className="h-[2px] w-full bg-gradient-to-r dark:from-[#5A2950] dark:to-[#4D3496] from-[#DFE0FF] from-30% via-[#FFE1C2] via-50% to-[#FFD3E0] to-70%" />
      <p
        className={`${
          bigHeader
            ? "featureSubtitle md:text-[34px] text-[24px] text-center"
            : "slightBrightText text-[20px]"
        }  md:mx-10 mx-4 max-w-fit whitespace-nowrap dark:text-white text-[#6B70ED] font-bold`}
      >
        {label}
      </p>
      <span className="h-[2px] w-full bg-gradient-to-r dark:from-[#5A2950] dark:to-[#4D3496] from-[#DFE0FF] from-30% via-[#FFE1C2] via-50% to-[#FFD3E0] to-70%" />
    </div>
  );
};

export default Seperator;
