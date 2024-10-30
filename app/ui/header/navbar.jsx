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
  const [isScrolled, setIsScrolled] = useState(false); // Define isScrolled state here
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
        className={`pagePaddingMedium ${
          isScrolled &&
          "sticky top-0 bg-white dark:bg-[#252948] shadow-md z-[1000] transition-all duration-300"
        }`}
      >
        <nav
          className={`pt-[2px] transition-all duration-300 ${
            isScrolled && "py-0 pt-0"
          }`}
        >
          <div className="flex items-center justify-between h-20">
            {/* Logo and Theme Toggle */}
            <div className="flex items-center gap-2">
              {resolvedTheme === "dark" ? <DarkModeLogo /> : <LightModeLogo />}
              <div className="ml-4 hidden md:block">
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
              <Link href="?modal=true" scroll={false}>
                <DeltaPurpleButton
                  hasArrowRight={false}
                  label={"Launch app"}
                  className="whitespace-nowrap md:px-5 px-3 md:py-3 py-2"
                />
              </Link>
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
            className="fixed inset-0 z-[1000] bg-gradient-to-r from-[#FFF] to-[#FFF] dark:from-[#252948] dark:to-[#252948] flex justify-around w-full pagePaddingMedium"
          >
            <div className="flex flex-col w-full">
              <div
                className={`w-full ${
                  isScrolled &&
                  " bg-white dark:bg-[#252948] z-[1000] transition-all duration-300"
                }`}
              >
                <nav
                  className={`pt-[2px] transition-all duration-300 ${
                    isScrolled && "py-0 pt-0"
                  }`}
                >
                  <div className="flex items-center justify-between h-20">
                    <div className="flex items-center gap-2">
                      {resolvedTheme === "dark" ? (
                        <DarkModeLogo />
                      ) : (
                        <LightModeLogo />
                      )}
                      <div className="ml-4 hidden md:block">
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
                toggleDesktopMenu={toggleDesktopMenu} // Pass toggle function to MegaMenu
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Nav;
