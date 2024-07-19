import { MainButton } from "@/app/components/buttons/mainButton";

const UnlockPotentialContainer = () => {
  return (
    <div className="hidden sm:block parentColoredBorderWrapper mt-20">
      <div className="introTextBtnContainer">
        <div className="flex items-center flex-col lg:flex-row gap-8 lg:gap-0 justify-between lg:px-12 lg:py-8 px-6 py-4 w-full">
          <p className="md:text-[30px] 2xl:text-[41px] text-[32px] unlockPotentialTypography">
            Unlock the full potential of your capital
          </p>
          <MainButton label="LAUNCH APP" hasArrowRight={true} />
        </div>
      </div>
    </div>
  );
};

export default UnlockPotentialContainer;
