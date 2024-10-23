import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "./header.css";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import DownArrow from "@/public/assets/icons/DownArrow.svg";
import UpArrow from "@/public/assets/icons/UpArrow.svg";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div className="flex flex-row">
        <button
          type="button"
          className="flex items-center justify-center gap-2 mr-2 text-[#696969] hover:text-[#000000] dark:text-[#DADADA] dark:hover:text-[#fff] rounded-md md:text-[16px] text-[12px] font-medium text-nowrap"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          <div className="relative w-fit">
            <p className="pb-[2px">About us</p>
            <motion.div
              className="absolute bottom-0 left-0 w-full h-[2px] bg-[#6C6EED]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isOpen ? 1 : 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              style={{ originX: isOpen ? 0 : 1 }}
            />
          </div>
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
            className="dropdownWrapper absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-[20px] dark:bg-[#000F38] bg-[#F6F6F6] p-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
            <div className="py-1 flex flex-col z-50 relative" role="none">
              <Link
                onClick={closeDropdown}
                href="/our-story"
                className="dropdownLink block px-2 py-2 text-[#696969] hover:text-[#000000] dark:text-white dark:hover:text-[#fff]"
                role="menuitem"
                id="menu-item-0"
              >
                Our Story
              </Link>
              <Link
                onClick={closeDropdown}
                href="/tokenomics"
                className="dropdownLink block px-2 py-2 text-[#696969] hover:text-[#000000] dark:text-white dark:hover:text-[#fff]"
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

export function MenuDropdown({ onClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className=" flex justify-center items-center">
        <button
          type="button"
          className="mx-auto flex flex-row justify-center items-center text-gray-800 dark:text-white text-[#6B70ED] dark:hover:text-gray-400 md:text-white hover:text-gray-300 px-3 py-2 rounded-md text-2xl font-semibold"
          onClick={toggleDropdown}
        >
          <p>About Us</p>
          <motion.svg
            initial={{ rotate: 0 }}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </motion.svg>
        </button>
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`overflow-hidden`}
      >
        <div className="mt-4 p-4">
          <Link
            onClick={onClick}
            href="/our-story"
            className="block px-4 py-1 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 text-center text-[#565AC2] dark:text-white"
          >
            <p className="text-lg">Our Story</p>
          </Link>
          <Link
            onClick={onClick}
            href="/tokenomics"
            className="block px-4 py-1 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 text-center text-[#565AC2] dark:text-white"
          >
            <p className="text-lg">Tokenomics</p>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
