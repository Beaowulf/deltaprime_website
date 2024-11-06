import * as React from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import Image from "next/image";
import hamburgerIconWhite from "@/public/assets/icons/hamburgerIconWhite.svg";
import hamburgerIconPurple from "@/public/assets/icons/hamburgerIconPurple.svg";
import closedIconWhite from "@/public/assets/icons/closeIconWhite.svg";
import closeIconPurple from "@/public/assets/icons/closeIconPurple.svg";

const icons = {
  light: {
    open: closeIconPurple,
    closed: hamburgerIconPurple,
  },
  dark: {
    open: closedIconWhite,
    closed: hamburgerIconWhite,
  },
};

export const MenuToggle = ({ toggle, isOpen }) => {
  const { resolvedTheme } = useTheme();

  const iconPath = isOpen
    ? icons[resolvedTheme].open
    : icons[resolvedTheme].closed;

  return (
    <motion.button
      className="rounded-full pr-[5px]"
      onClick={toggle}
      initial={false}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeInOut", delay: 0.3 }}
    >
      <Image
        src={iconPath}
        alt={isOpen ? "Close Menu" : "Open Menu"}
        width={isOpen ? 20 : 30}
        height={isOpen ? 20 : 30}
        priority
      />
    </motion.button>
  );
};
