import "./mainButton.css";
import Image from "next/image";
import { useTheme } from "next-themes";
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
        <div className="mainButton w-full h-[45px] md:h-full p-4">
          <h6
            className={
              typographyClass
                ? typographyClass
                : "text-[16px] md:text-[18px] lg:text-[20px] dark:text-black text-white text-nowrap font-extrabold"
            }
          >
            {label}
          </h6>
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

export function NavBarButton({ label, onClick }) {
  const { resolvedTheme } = useTheme();
  return (
    <>
      <button
        onClick={onClick}
        className={
          resolvedTheme === "dark"
            ? `navBarButtonBGDark`
            : `navBarButtonBGLight`
        }
      >
        <div
          className={`${
            resolvedTheme === "dark"
              ? "mainButton"
              : "navbarButtonLightGradient"
          } w-full h-[45px] md:h-full`}
        >
          <p
            className={
              "text-[14px] md:text-[16px] lg:text-[18px] dark:text-black text-white text-nowrap"
            }
          >
            {label}
          </p>
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
  hasWhiteArrowRight = false,
}) {
  return (
    <>
      <button className={customClass} onClick={onClick}>
        <div className="aboutButtonDarkBG">
          <p className="buttonLightModeText">{label}</p>
          {hasArrowRight && (
            <Image
              className={"size-5"}
              src={ArrowRightBlack}
              alt={"Arrow Right"}
            />
          )}
          {hasWhiteArrowRight && (
            <Image
              className={"size-5"}
              src={ArrowRightWhite}
              alt={"Arrow Right"}
            />
          )}
        </div>
      </button>
    </>
  );
}

export function ArrowButton({ onClick }) {
  const { theme } = useTheme();
  return (
    <>
      <button onClick={onClick} className="arrowButtonBG w-fit h-fit">
        <div
          className={`rounded-[65px] w-[70px] h-[40px] flex justify-center items-center ${
            theme === "dark" ? "bg-arrowButtonDarkGradient" : "bg-[#F4F4FF]"
          }`}
        >
          {theme === "dark" ? (
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
  const { theme, resolvedTheme } = useTheme();
  return (
    <>
      <button onClick={onClick} className="arrowButtonBG w-full h-fit">
        <div
          className={` ${
            resolvedTheme === "dark"
              ? "contactUsButtonBGDark"
              : "contactUsButtonBGLight"
          }`}
        >
          <p className="dark:text-[#1B153C] text-[#FEEEF4]">{label}</p>
          {theme === "dark" ? (
            <Image
              className={"size-6 mb-[1px]"}
              src={ArrowRightBlack}
              alt={"Arrow Right"}
            />
          ) : (
            <Image
              className={"size-6 mb-[1px]"}
              src={ArrowRightWhite}
              alt={"Arrow Right"}
            />
          )}
        </div>
      </button>
    </>
  );
}
