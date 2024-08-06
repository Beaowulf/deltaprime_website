"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const formatNumber = (value) => {
  return parseFloat(value).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const AnimatedText = ({ targetNumber }) => {
  const [formattedCount, setFormattedCount] = useState("0.00");

  useEffect(() => {
    const duration = 2; // Duration of the animation in seconds
    const start = 0; // Starting number for the animation
    const increment = (targetNumber - start) / (duration * 60); // Increment per frame (assuming 60fps)

    let currentValue = start;
    const interval = setInterval(() => {
      currentValue += increment;
      if (currentValue >= targetNumber) {
        currentValue = targetNumber;
        clearInterval(interval);
      }
      setFormattedCount(formatNumber(currentValue));
    }, 1000 / 60); // Run at 60fps

    return () => clearInterval(interval);
  }, [targetNumber]);

  return (
    <motion.h1
      className="dark:text-[#252948] costText"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      ${formattedCount}
    </motion.h1>
  );
};
