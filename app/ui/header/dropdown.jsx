import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import DownArrow from "@/public/assets/icons/DownArrow.svg";
import UpArrow from "@/public/assets/icons/UpArrow.svg";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div className="flex flex-row">
        <button
          type="button"
          className="flex items-center justify-center gap-2 mr-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 rounded-md md:text-[16px] text-[14px] font-medium text-nowrap"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          About us
          {isOpen ? (
            <Image
              className="w-3 h-3 top-3"
              height={10}
              width={10}
              src={UpArrow}
              alt="Up Arrow"
            />
          ) : (
            <Image
              className="w-3 h-3 top-3"
              height={10}
              width={10}
              src={DownArrow}
              alt="Down Arrow"
            />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md dark:bg-[#000F38] bg-[#F6F6F6] border-2 p-2 dark:border-[#fff] border-[#000F38] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
            <div className="py-1" role="none">
              <Link
                onClick={closeDropdown}
                href="/ourStory"
                className="dropdownLink block px-2 py-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 font-medium"
                role="menuitem"
                id="menu-item-0"
              >
                Our Story
              </Link>
              <Link
                onClick={closeDropdown}
                href="/tokenomics"
                className="dropdownLink block px-2 py-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 font-medium"
                role="menuitem"
                id="menu-item-1"
              >
                Tokenomics
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
