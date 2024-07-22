import { MainButton } from "@/app/components/buttons/mainButton";
import "./unlockPotentialContainer.css";

const UnlockPotentialContainer = ({ hasMarginTop = true }) => {
  return (
    <div
      className={`hidden sm:block parentColoredBorderWrapper ${
        hasMarginTop ? "mt-20" : "mt-0"
      }`}
    >
      <div className="introTextBtnContainer">
        <div className="flex items-center flex-col lg:flex-row gap-8 lg:gap-0 justify-between lg:px-12 lg:py-8 px-6 py-4 w-full">
          <h5 className="md:text-[30px] 2xl:text-[41px] text-[32px] unlockPotentialTypography">
            Unlock the full potential of your capital
          </h5>
          <MainButton label="LAUNCH APP" hasArrowRight={true} />
        </div>
      </div>
    </div>
  );
};

export default UnlockPotentialContainer;
