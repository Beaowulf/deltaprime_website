"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import { Logo } from "@/app/components/logo/logo";
import ThemeSwitch from "@/app/components/themeToggler/themeToggler";
import {
  MainButton,
  MainButtonDarkBG,
} from "@/app/components/buttons/mainButton";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="px-4 sm:px-6 md:px-[8%] lg:px-[10%] 2xl:px-[15%]">
      <nav className="md:mb-40 mb-10 mt-4">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="">
              <Logo />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="text-gray-[#808080] hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Team
                </Link>

                <Link
                  href="/"
                  className="text-gray-[#808080] hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Projects
                </Link>

                <Link
                  href="/"
                  className="text-gray-[#808080] hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Calendar
                </Link>

                <Link
                  href="/"
                  className="text-gray-[#808080] hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Reports
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center">
              <ThemeSwitch />
              {}
              <MainButton
                hasBorder={false}
                typographyClass="text-[12px]"
                label={"Launch app"}
                className="sm:block hidden dark:text-black text-white"
              />
              <MainButtonDarkBG
                hasBorder={false}
                typographyClass="text-[12px]"
                label={"Launch app"}
                className="sm:block hidden dark:text-black text-white"
              />
            </div>

            <div className="-mr-2 flex md:hidden items-center gap-4">
              <MainButton
                hasBorder={false}
                typographyClass="text-[12px]"
                label={"Launch app"}
                className="sm:hidden block w-fit h-[24px] whitespace-nowrap dark:text-black text-white"
              />
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-transparent inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
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
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  href="/"
                  className="text-gray-[#808080] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Team
                </Link>

                <Link
                  href="/"
                  className="text-gray-[#808080] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Projects
                </Link>

                <Link
                  href="/"
                  className="text-gray-[#808080] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Calendar
                </Link>

                <Link
                  href="/"
                  className="text-gray-[#808080] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Reports
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
