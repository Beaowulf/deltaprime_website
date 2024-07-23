"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { Transition } from "@headlessui/react";
import { Logo } from "@/app/components/logo/logo";
import ThemeSwitch from "@/app/components/themeToggler/themeToggler";
import { MainButton, NavBarButton } from "@/app/components/buttons/mainButton";
import hamburgerIconWhite from "@/public/assets/icons/hamburgerIconWhite.svg";
import closeIconBlack from "@/public/assets/icons/closeIconBlack.svg";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  const getLinkClass = (path) => {
    if (pathname === path && resolvedTheme === "dark") {
      return "w-full h-[2px] mt-1 bg-gradient-to-b from-[#FFBB9B] from-10% via-[#FF8FB8] via-60% to-[#AFAFFF] to-80%";
    } else if (pathname === path && resolvedTheme === "light") {
      return "w-full h-1 mt-1 bg-[#1F3C75]";
    } else {
      return null;
    }
  };

  return (
    <div className="px-4 sm:px-6 md:px-[8%] lg:px-[10%] xl:px-[16%] 2xl:px-[20%]">
      <nav className="md:mb-20 mb-10 mt-4">
        <div className="">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex justify-center items-center gap-8">
              <Logo />
              <ThemeSwitch />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <div>
                  <Link
                    href="/blogs"
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 rounded-md text-sm font-medium"
                  >
                    Burd Blogs
                  </Link>
                  <div className={getLinkClass("/blogs")} />
                </div>

                <Link
                  href="/ourStory"
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 rounded-md text-sm font-medium"
                >
                  Our Story
                </Link>

                <Link
                  href="/strategies"
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 rounded-md text-sm font-medium"
                >
                  Strategies
                </Link>

                <Link
                  href="/"
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 rounded-md text-sm font-medium"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center">
              <NavBarButton label={"Launch app"} />
            </div>

            <div className="-mr-2 flex md:hidden items-center gap-4">
              <NavBarButton
                hasBorder={false}
                typographyClass="text-[12px]"
                label={"Launch app"}
                className="sm:hidden block w-fit h-[25px] md:h-[35px] whitespace-nowrap dark:text-black text-white"
              />
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className={`bg-transparent inline-flex items-center justify-center rounded-md text-gray-400 hover:text-white menu-icon ${
                  isOpen ? "open" : ""
                }`}
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                <Image
                  src={hamburgerIconWhite}
                  alt="menu_icon"
                  width={30}
                  height={30}
                />
              </button>
            </div>
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
                ? "show absolute top-0 left-0 w-full bg-gradient-to-r from-[#F4F4FF] from-10% via-[#F4F4FF] via-60% to-[#E8E8F2] to-80% z-[1000] h-fit flex justify-center py-20 rounded-[20px]"
                : ""
            }`}
            id="mobile-menu"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="close-button absolute right-[1.5rem] top-[1.5rem]"
            >
              <Image
                src={closeIconBlack}
                alt="close_menu_icon"
                width={30}
                height={30}
              />
            </button>
            <div className="text-center ">
              <Link
                href="/blogs"
                className="text-gray-800 md:text-white hover:text-gray-300 block px-3 py-2 rounded-md text-2xl font-medium"
                onClick={() => setIsOpen(false)}
              >
                Burd Log
              </Link>

              <Link
                href="/ourStory"
                className="text-gray-800 md:text-white hover:text-gray-300 block px-3 py-2 rounded-md text-2xl font-medium"
                onClick={() => setIsOpen(false)}
              >
                Our Story
              </Link>

              <Link
                href="/strategies"
                className="text-gray-800 md:text-white hover:text-gray-300 block px-3 py-2 rounded-md text-2xl font-medium"
                onClick={() => setIsOpen(false)}
              >
                Strategies
              </Link>

              <Link
                href="/contactUs"
                className="text-gray-800 md:text-white hover:text-gray-300 block px-3 py-2 rounded-md text-2xl font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
