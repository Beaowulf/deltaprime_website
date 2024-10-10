"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const ScrollToJobDescription = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.includes("#job-description")) {
      const element = document.getElementById("job-description");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname]);

  return null;
};

export default ScrollToJobDescription;
