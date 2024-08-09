"use client";

import "./mainButton.css";
import Image from "next/image";
import { useTheme } from "next-themes";
import ArrowRightBlack from "../../../public/assets/img/arrow-right.svg";
import { ArrowRightWhite } from "@/app/components/icons/arrowRight";
import ArrowRight from "@/app/components/icons/arrowRight";
import { useRouter } from "next/navigation";

export function MainButton({
  label,
  href,
  hasArrowRight = false,
  typographyClass,
  hasBorder = true,
  className,
}) {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href);
    }
  };

  return (
    <button
      onClick={handleClick}
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
              ? `${typographyClass} mainButtonText text-[12px] lg:text-[14px] text-nowrap font-extrabold`
              : " text-[12px] lg:text-[14px] text-nowrap font-extrabold mainButtonText"
          }
        >
          {label}
        </h6>
        {hasArrowRight && (
          <Image
            className={"size-5 arrowRightImageBtn"}
            src={ArrowRightBlack}
            alt={"Arrow Right"}
          />
        )}
      </div>
    </button>
  );
}

export function NavBarButton({ label, onClick }) {
  const { resolvedTheme } = useTheme();
  return (
    <>
      <div className="navButtonWrapper">
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
            } w-full h-[35px] md:h-[45px]`}
          >
            <p
              className={`${
                resolvedTheme === "dark"
                  ? "navButtonDarkText"
                  : "navButtonLightText"
              } text-[12px] md:text-[14px] dark:text-[black] text-white lg:text-[16px] text-nowrap`}
            >
              {label}
            </p>
          </div>
        </button>
      </div>
    </>
  );
}

export function MainButtonDarkBG({
  label,
  onClick,
  hasArrowRight = false,
  className,
}) {
  return (
    <>
      <button className={className} onClick={onClick}>
        <div className="mainButtonDarkBG">
          <p className="buttonLightModeText min-w-fit text-nowrap">{label}</p>
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
    <button className={`${customClass} aboutButtonDarkBG`} onClick={onClick}>
      <div className="flex items-center">
        <p className="buttonLightModeText min-w-fit">{label}</p>
        {hasArrowRight && (
          <Image
            className="size-5 rightArrowAboutBtn"
            src={ArrowRightBlack}
            alt="Arrow Right"
          />
        )}
        {hasWhiteArrowRight && (
          <ArrowRightWhite className="size-5 rightArrowAboutBtn" />
        )}
      </div>
    </button>
  );
}

export function ArrowButton({ onClick }) {
  const { theme } = useTheme();
  return (
    <>
      <button onClick={onClick} className="arrowButtonBG w-fit h-fit">
        <div className="rounded-[65px] w-[70px] h-[40px] flex justify-center items-center bg-arrowButtonDarkGradient arrowButtonChild">
          <ArrowRight src={ArrowRightWhite} alt={"Arrow Right"} />
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
            theme === "dark"
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
