import "./mainButton.css";
import Image from "next/image";
import ArrowRight from "../../../public/assets/icons/arrow-right-white.svg";
import ArrowRightBlack from "../../../public/assets/img/arrow-right.svg";
// import { ColoredRighticon } from "../icons/icons";

export function MainButton({
  label,
  onClick,
  hasArrowRight = false,
  typographyClass,
  hasBorder = true,
  className,
}) {
  return (
    <>
      <button
        onClick={onClick}
        className={
          hasBorder
            ? `${className} mainButtonWithBorderBG`
            : `${className} mainButtonBGwithoutBorder`
        }
      >
        <div className="mainButton w-full h-[50px] md:h-full">
          <p
            className={
              typographyClass
                ? typographyClass
                : "text-[15px] sm:text-[18px] dark:text-black text-white"
            }
          >
            {label}
          </p>
          {hasArrowRight ? (
            <Image
              className={"size-5"}
              src={ArrowRightBlack}
              alt={"Arrow Right"}
            />
          ) : (
            ""
          )}
        </div>
      </button>
    </>
  );
}

export function MainButtonDarkBG({ label, onClick, hasArrowRight = false }) {
  return (
    <>
      <button onClick={onClick}>
        <div className="mainButtonDarkBG">
          <p className="buttonLightModeText">{label}</p>
          {hasArrowRight ? (
            <Image
              className={"size-5"}
              src={ArrowRightBlack}
              alt={"Arrow Right"}
            />
          ) : (
            ""
          )}
        </div>
      </button>
    </>
  );
}

export function AboutButtonDarkBG({ label, onClick, hasArrowRight = false }) {
  return (
    <>
      <button onClick={onClick}>
        <div className="aboutButtonDarkBG">
          <p className="buttonLightModeText">{label}</p>
          {hasArrowRight ? (
            <Image
              className={"!fill-white size-5"}
              src={ArrowRight}
              alt={"Arrow Right"}
            />
          ) : (
            ""
          )}
        </div>
      </button>
    </>
  );
}
