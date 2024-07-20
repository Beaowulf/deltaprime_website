import "./mainButton.css";
import Image from "next/image";
import ArrowRightBlack from "../../../public/assets/img/arrow-right.svg";
import ArrowRightWhite from "../../../public/assets/img/arrow-right-white.svg";

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
        <div className="mainButton w-full h-[45px] md:h-full">
          <p
            className={
              typographyClass
                ? typographyClass
                : "text-[14px] md:text-[16px] lg:text-[18px] dark:text-black text-white text-nowrap"
            }
          >
            {label}
          </p>
          {hasArrowRight && (
            <Image
              className={"size-5"}
              src={ArrowRightBlack}
              alt={"Arrow Right"}
            />
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
          {hasArrowRight && (
            <Image
              className={"size-5"}
              src={ArrowRightBlack}
              alt={"Arrow Right"}
            />
          )}
        </div>
      </button>
    </>
  );
}

export function AboutButtonDarkBG({
  customClass,
  label,
  onClick,
  hasArrowRight = false,
}) {
  return (
    <>
      <button className={customClass} onClick={onClick}>
        <div className="aboutButtonDarkBG">
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

export function ArrowButton({ darkBG, onClick }) {
  return (
    <>
      <button onClick={onClick} className="arrowButtonBG w-fit h-fit ">
        <div
          className={`rounded-[65px] w-[70px] h-[40px] flex justify-center items-center ${
            darkBG ? "bg-arrowButtonDarkGradient" : "bg-[#F4F4FF]"
          }`}
        >
          {darkBG ? (
            <Image
              className={"size-5 fill-white"}
              src={ArrowRightWhite}
              alt={"Arrow Right"}
            />
          ) : (
            <Image
              className={"size-5 fill-white"}
              src={ArrowRightBlack}
              alt={"Arrow Right"}
            />
          )}
        </div>
      </button>
    </>
  );
}

export function ContactUsButton({ label, onClick }) {
  return (
    <>
      <button onClick={onClick} className="arrowButtonBG w-full h-fit">
        <div className="contactUsButtonBG">
          <p className="text-[#1B153C]">{label}</p>
          <Image
            className={"size-6 mb-[1px]"}
            src={ArrowRightBlack}
            alt={"Arrow Right"}
          />
        </div>
      </button>
    </>
  );
}
