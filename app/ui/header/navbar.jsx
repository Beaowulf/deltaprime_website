"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { Transition } from "@headlessui/react";
import {
  DarkModeLogo,
  LightModeLogo,
  MobileMenuLogo,
} from "@/app/components/logo/logo";
import ThemeSwitch from "@/app/components/themeToggler/themeToggler";
import { NavBarButton, CTAButton } from "@/app/components/buttons/mainButton";
import hamburgerIconWhite from "@/public/assets/icons/hamburgerIconWhite.svg";
import hamburgerIconBlack from "@/public/assets/icons/hamburgerIconBlack.svg";
import closeIconBlack from "@/public/assets/icons/closeIconBlack.svg";
import closeIconWhite from "@/public/assets/icons/closeIconWhite.svg";
import { getLinkClass } from "@/lib/getLinkClass";
import DropDownStrategyLoader from "@/app/ui/strategyLoader";
import DropDownBlogLoader from "@/app/ui/burdLogLoader";
import Dropdown from "@/app/ui/header/dropdown";
import { MenuDropdown } from "./dropdown";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`pagePaddingLarge ${
        isScrolled &&
        "sticky top-0 bg-white dark:bg-[#252948] shadow-md z-[1000] transition-all duration-300"
      }`}
    >
      <nav
        className={`md:mb-32 mb-10 pt-[2px] transition-all duration-300 ${
          isScrolled && "py-0 pt-0"
        }`}
      >
        <div className="flex items-center justify-between h-20">
          <div className="flex justify-center items-center gap-2">
            {resolvedTheme === "dark" ? <DarkModeLogo /> : <LightModeLogo />}

            <div className="ml-4 hidden md:block">
              <ThemeSwitch />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="lg:ml-8 flex items-baseline space-x-4 relative">
              {/* Insert the Dropdown component here */}
              <Dropdown />

              {/* Other dropdown components */}
              <DropDownStrategyLoader
                pathname={pathname}
                resolvedTheme={resolvedTheme}
                getLinkClass={getLinkClass}
              />

              <DropDownBlogLoader
                pathname={pathname}
                resolvedTheme={resolvedTheme}
                getLinkClass={getLinkClass}
              />

              <div className="text-center">
                <Link
                  href="/contactUs"
                  className="text-[#696969] hover:text-[#000000] dark:text-[#DADADA] dark:hover:text-[#fff] rounded-md md:text-[16px] text-[12px] font-medium md:hidden lg:block text-nowrap"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <Link href="?modal=true">
              <CTAButton hasArrowRight={false} label={"Launch app"} />
            </Link>
          </div>

          <div className="-mr-2 flex md:hidden items-center gap-4">
            <Link href="?modal=true">
              <CTAButton
                hasArrowRight={false}
                label={"Launch app"}
                className="whitespace-nowrap px-5 py-3"
              />
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className={`bg-transparent inline-flex items-center justify-center rounded-md text-gray-400 hover:text-white menu-icon ${
                isOpen ? "open" : ""
              }`}
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {resolvedTheme === "dark" ? (
                <Image
                  src={hamburgerIconWhite}
                  alt="menu_icon"
                  width={30}
                  height={30}
                />
              ) : (
                <Image
                  src={hamburgerIconBlack}
                  alt="menu_icon"
                  width={30}
                  height={30}
                />
              )}
            </button>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div
            className={`fullscreen-menu ${
              isOpen
                ? "show absolute top-0 left-0 w-full dark:bg-gradient-to-45-dark-BG bg-gradient-to-r from-[#F4F4FF] from-10% via-[#F4F4FF] via-60% to-[#E8E8F2] to-80% z-[1000] flex justify-center"
                : ""
            }`}
            id="mobile-menu"
          >
            <div className="w-full flex flex-col relative h-full">
              <div className="p-4 flex justify-between items-center">
                <div className="flex justify-center items-center gap-8">
                  <MobileMenuLogo />
                </div>
                <div className="flex">
                  <div className="md:hidden block">
                    <ThemeSwitch />
                  </div>
                  <button onClick={() => setIsOpen(false)}>
                    <Image
                      src={
                        resolvedTheme === "dark"
                          ? closeIconWhite
                          : closeIconBlack
                      }
                      alt="close_menu_icon"
                      width={20}
                      height={20}
                    />
                  </button>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center gap-10 h-full">
                <Link
                  href="/blogs"
                  className="text-gray-800 dark:text-white dark:hover:text-gray-400 md:text-white hover:text-gray-300 block px-3 py-2 rounded-md text-2xl font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  Burd Log
                </Link>

                {/* Mobile Menu Dropdown */}
                <MenuDropdown onClick={() => setIsOpen(false)} />

                <Link
                  href="/strategies"
                  className="text-gray-800 dark:text-white dark:hover:text-gray-400 md:text-white hover:text-gray-300 block px-3 py-2 rounded-md text-2xl font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  Strategies
                </Link>

                <Link
                  href="/contactUs"
                  className="text-gray-800 dark:text-white dark:hover:text-gray-400 md:text-white hover:text-gray-300 block px-3 py-2 rounded-md text-2xl font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
