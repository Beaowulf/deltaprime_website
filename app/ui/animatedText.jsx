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
    const duration = 2;
    const start = 0;

    let currentValue = start;
    let startTime;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      currentValue = start + progress * (targetNumber - start);

      setFormattedCount(formatNumber(currentValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animate);
  }, [targetNumber]);

  return (
    <div className="md:w-[9rem]">
      <motion.h1
        className="text-[#6B70ED] costText"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ transform: "translateZ(0)", backfaceVisibility: "hidden" }}
      >
        ${formattedCount}
      </motion.h1>
    </div>
  );
};
