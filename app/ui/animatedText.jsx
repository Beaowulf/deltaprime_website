"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import React, { useEffect, useState } from "react";

const formatNumber = (value) => {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const AnimatedText = ({ targetNumber }) => {
  const count = useMotionValue(0);
  const [formattedCount, setFormattedCount] = useState("0.00");

  useEffect(() => {
    const controls = animate(count, targetNumber, {
      duration: 2,
      ease: "easeInOut",
      onUpdate: (value) => setFormattedCount(formatNumber(value)),
    });

    return () => controls.stop();
  }, [targetNumber]);

  return (
    <motion.h1 className="dark:text-[#252948] costText">
      ${formattedCount}
    </motion.h1>
  );
};
