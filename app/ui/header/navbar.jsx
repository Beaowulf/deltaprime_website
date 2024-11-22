"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import "./header.css";
import Image from "next/image";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { DarkModeLogo, LightModeLogo } from "@/app/components/logo/logo";
import ThemeSwitch from "@/app/components/themeToggler/themeToggler";
import { DeltaPurpleButton } from "@/app/components/buttons/mainButton";
import { MenuToggle } from "@/app/components/menuToggle/MenuToggle";
import hamburgerIconWhite from "@/public/assets/icons/hamburgerIconWhite.svg";
import hamburgerIconPurple from "@/public/assets/icons/hamburgerIconPurple.svg";
import closeIconWhite from "@/public/assets/icons/closeIconWhite.svg";
import closeIconPurple from "@/public/assets/icons/closeIconPurple.svg";

import { getLinkClass } from "@/lib/getLinkClass";
import MegaMenu from "@/app/ui/megaMenu";

function Nav() {
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const [isOpenDesktop, setIsOpenDesktop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();

  const toggleMobileMenu = () => setIsOpenMobile(!isOpenMobile);
  const toggleDesktopMenu = () => setIsOpenDesktop(!isOpenDesktop);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpenMobile || isOpenDesktop) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpenMobile, isOpenDesktop]);

  const menuVariants = {
    hidden: { opacity: 0, clipPath: "circle(0% at 90% 10%)" },
    visible: { opacity: 1, clipPath: "circle(100% at 50% 50%)" },
  };

  return (
    <>
      {/* Main Navbar */}
      <div
        className={`pagePaddingMedium relative ${
          isBannerVisible ? "pt-16 md:pt-10" : "pt-0"
        }  ${
          isScrolled
            ? isOpenDesktop
              ? "sticky top-0 bg-transparent z-[1000] transition-all duration-300"
              : "sticky top-0 bg-white dark:bg-[#252948] shadow-md z-[1000] transition-all duration-300"
            : "pagePaddingMedium"
        }`}
      >
        <nav
          className={`pt-[2px] transition-all duration-300 ${
            isScrolled && "py-0 pt-0"
          }`}
        >
          <div
            className={`w-full left-0 top-0 absolute bg-[#F4D35E] text-black dark:text-white dark:bg-[#BA6223] z-[100000000] ${
              isBannerVisible ? "block" : "hidden"
            }`}
          >
            <div className="flex justify-center items-center px-4 py-3 relative">
              <p className="text-center font-semibold text-[14px] md:text-[16px] mr-5 lg:mr-0">
                DeltaPrime is currently paused due to an attack on the Saving
                pools.{" "}
                <a
                  href="https://discord.com/channels/889510301421166643/912702114252329060/1305455825023664168"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer underline hover:no-underline font-bold"
                >
                  Read More.
                </a>
              </p>
              <button
                onClick={() => setIsBannerVisible(false)}
                aria-label="Close banner"
                className="absolute right-4 text-[20px] text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 md:mr-10 font-semibold"
              >
                X
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between h-20">
            {/* Logo and Theme Toggle */}
            <div className="flex items-center gap-2">
              {resolvedTheme === "dark" ? <DarkModeLogo /> : <LightModeLogo />}
              <div className="ml-4">
                <ThemeSwitch />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              <Link href="?modal=true" scroll={false}>
                <DeltaPurpleButton hasArrowRight={false} label={"Launch app"} />
              </Link>
              <MenuToggle toggle={toggleDesktopMenu} isOpen={isOpenDesktop} />
            </div>

            {/* Mobile Toggle Button */}
            <div className="-mr-1 flex md:hidden items-center gap-2">
              <MenuToggle toggle={toggleDesktopMenu} isOpen={isOpenDesktop} />
            </div>
          </div>
        </nav>
      </div>

      {/* Full-Screen Desktop Menu */}
      <AnimatePresence>
        {isOpenDesktop && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[1000] bg-gradient-to-br from-[#F4F4FF] via-[#FFF5F0] to-[#cccccc] dark:from-[#1B153C] dark:via-[#1C2943] dark:to-[#301E3E] flex justify-around w-full md:!pr-0"
          >
            <div className="flex flex-col w-full md:overflow-y-scroll h-full">
              <div
                className={`w-full ${
                  isScrolled
                    ? isOpenDesktop
                      ? "bg-transparent z-[1000] transition-all duration-300"
                      : "bg-white dark:bg-[#252948] shadow-md z-[1000] transition-all duration-300"
                    : "pagePaddingMedium"
                } ${isBannerVisible ? "pt-16 md:pt-10" : "pt-0"}`}
              >
                <nav
                  className={`pt-[2px] transition-all duration-300 ${
                    isScrolled && "py-0 pt-0"
                  }`}
                >
                  <div className="flex items-center justify-between h-20 md:pr-0">
                    <div className="flex items-center gap-2">
                      {resolvedTheme === "dark" ? (
                        <DarkModeLogo />
                      ) : (
                        <LightModeLogo />
                      )}
                      <div className="ml-4">
                        <ThemeSwitch />
                      </div>
                    </div>
                    <MenuToggle
                      toggle={toggleDesktopMenu}
                      isOpen={isOpenDesktop}
                    />
                  </div>
                </nav>
              </div>
              <MegaMenu
                pathname={pathname}
                resolvedTheme={resolvedTheme}
                getLinkClass={getLinkClass}
                toggleDesktopMenu={toggleDesktopMenu}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Nav;
