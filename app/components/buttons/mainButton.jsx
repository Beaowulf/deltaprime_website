"use client";

import Link from "next/link";
import "./mainButton.css";
import Image from "next/image";
import { useTheme } from "next-themes";
import ArrowRightBlack from "../../../public/assets/img/arrow-right.svg";
import { ArrowRightWhite } from "@/app/components/icons/arrowRight";
import ArrowRight from "@/app/components/icons/arrowRight";
import { useRouter } from "next/navigation";

// Who ever works on this file, I am sorry :D this is bad code, but I am not going to refactor it :D

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
              ? `${typographyClass} mainButtonText text-white text-[12px] lg:text-[14px] text-nowrap font-extrabold`
              : " text-[12px] lg:text-[14px] text-nowrap font-extrabold mainButtonText text-white"
          }
        >
          {label}
        </h6>
        {hasArrowRight && (
          <ArrowRight
            className="size-6 mb-[1px] arrowButton"
            alt="Arrow Right"
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
        <button onClick={onClick} className={"navBarButtonBGDark"}>
          <div className={"mainButton w-full h-[35px] md:h-[45px]"}>
            <p
              className={
                "navButtonDarkText text-[12px] md:text-[14px] dark:text-[black] text-white lg:text-[16px] text-nowrap"
              }
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
}) {
  return (
    <button className={`${customClass} aboutButtonDarkBG`} onClick={onClick}>
      <div className="flex items-center gap-2">
        <p className="buttonLightModeText min-w-fit">{label}</p>
        {hasArrowRight && (
          <ArrowRight className="size-5 rightArrowAboutBtn" alt="Arrow Right" />
        )}
      </div>
    </button>
  );
}

export function ArrowButton({ onClick }) {
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

// todo: both are now same (light mode and dark mode are the same)
export function ContactUsButton({ label, onClick }) {
  const { theme } = useTheme();
  return (
    <button onClick={onClick} className="ctaButtonBorder w-full h-fit">
      <div
        className={` md:py-[10px] md:px-5 py-[18px] px-[20px] h-[30px] md:h-full ${
          theme === "dark" ? "ctaButtonWrapper" : "ctaButtonWrapper"
        }`}
      >
        <p className="ctaButtonText text-[#FEEEF4]">{label}</p>
        {theme === "dark" ? (
          <ArrowRight
            className="size-6 mb-[1px] arrowButton"
            alt="Arrow Right"
          />
        ) : (
          <ArrowRight
            className="size-6 mb-[1px] arrowButton"
            alt="Arrow Right"
          />
        )}
      </div>
    </button>
  );
}
export function CTAButton({
  typographyClass,
  className,
  label,
  hasArrowRight = true,
}) {
  return (
    <button className="ctaButtonBorder">
      <div
        className={`${
          className
            ? `${className} ctaButtonWrapper`
            : "ctaButtonWrapper px-4 py-3 h-[30px] md:h-full"
        }`}
      >
        <h6
          className={`${
            typographyClass
              ? `${typographyClass} ctaButtonText font-bold uppercase text-white text-nowrap`
              : "ctaButtonText text-[13px] font-bold uppercase text-white text-nowrap"
          }`}
        >
          {label}
        </h6>
        {hasArrowRight && (
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5" alt={"Arrow Right"} />
        )}
      </div>
    </button>
  );
}

export function BlogButton({ onClick, label, fullWidth = false }) {
  return (
    <button
      onClick={onClick}
      className={`blogButtonWrapper ${fullWidth ? "w-full" : "w-fit"}`}
    >
      <div className="blogFilterButton w-full h-[45px] md:h-full p-4">
        <h6 className="text-[12px] lg:text-[14px] text-nowrap font-extrabold mainButtonText">
          {label}
        </h6>
      </div>
    </button>
  );
}

export function BlogCardButton({
  isLink = false,
  href = "/",
  onClick,
  label,
  isSmallbtn,
  fullWidth = false,
}) {
  return isLink ? (
    <Link href={href}>
      <button
        onClick={onClick}
        className={`blogButtonWrapper md:w-fit w-full ${
          fullWidth ? "!w-full" : "!w-fit"
        }`}
      >
        <div
          className={`blogButtonContent md:h-full ${
            isSmallbtn ? "px-3 py-2" : "px-4 py-3"
          }`}
        >
          <h6
            className={`${
              isSmallbtn ? "text-[12px]" : "text-[12px] lg:text-[14px]"
            } text-nowrap font-extrabold blogCardText`}
          >
            {label}
          </h6>
        </div>
      </button>
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={`blogButtonWrapper md:w-fit w-full ${
        fullWidth ? "!w-full" : "!w-fit"
      }`}
    >
      <div
        className={`blogButtonContent md:h-full ${
          isSmallbtn ? "px-3 py-2" : "px-4 py-3"
        }`}
      >
        <h6
          className={`${
            isSmallbtn ? "text-[12px]" : "text-[12px] lg:text-[14px]"
          } text-nowrap font-extrabold blogCardText`}
        >
          {label}
        </h6>
      </div>
    </button>
  );
}
