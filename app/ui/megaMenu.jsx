import React, { useState, useEffect } from "react";
import { fetchBlogs, fetchHowToVideos, fetchStrategies } from "@/lib/getBlogs";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import StarFilled from "@/public/assets/icons/starFilled.svg";
import StarUnfilled from "@/public/assets/icons/starUnfilled.svg";
import StarFilledPurple from "@/public/assets/icons/starFilledPurple.svg";
import StarUnfilledPurple from "@/public/assets/icons/starUnfilledPurple.svg";
import { RoundButtonLinks } from "@/app/ui/footer/footer";
import "./header/header.css";

const MobileMenu = ({
  blogs,
  howToVideos,
  strategies,
  toggleMenu,
  resolvedTheme,
}) => {
  const [currentSlide, setCurrentSlide] = useState("main");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const slideVariants = {
    enter: { x: "100%", opacity: 1, display: "flex" },
    center: { x: 0, opacity: 1, display: "flex" },
    exit: { x: "-100%", opacity: 1, display: "flex" },
  };

  const renderStars = (level) => {
    const totalStars = 3;
    const filledStars = level ?? 0;
    const unfilledStars = totalStars - filledStars;

    return (
      <div className="flex flex-row">
        <p className="text-[16px] mr-2">Difficulty Level:</p>
        <div className="flex flex-row gap-1">
          {Array.from({ length: filledStars }, (_, i) => (
            <Image
              key={`filled-${i}`}
              src={resolvedTheme === "dark" ? StarFilled : StarFilledPurple}
              alt="Filled Star"
              width={15}
              height={15}
            />
          ))}
          {Array.from({ length: unfilledStars }, (_, i) => (
            <Image
              key={`unfilled-${i}`}
              src={resolvedTheme === "dark" ? StarUnfilled : StarUnfilledPurple}
              alt="Unfilled Star"
              width={15}
              height={15}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-full flex flex-col items-center overflow-hidden">
      <div className="flex flex-col items-start justify-center h-full text-center bg-gray-900 text-[#6B70ED] dark:text-white relative w-full overflow-visible pl-[12px]">
        <AnimatePresence mode="wait">
          {currentSlide === "main" && (
            <motion.div
              key="main"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="flex flex-col items-start"
            >
              <p className="text-[19px] mb-[50px] font-semibold">Menu</p>
              <div className="space-y-[10px] flex flex-col items-start">
                <div
                  className="cursor-pointer flex items-center justify-center text-[38px] font-semibold gap-[12px]"
                  onClick={() => setCurrentSlide("aboutUs")}
                >
                  About Us
                </div>
                <div
                  className="cursor-pointer flex justify-center text-[38px] font-semibold gap-6"
                  onClick={() => setCurrentSlide("latestPosts")}
                >
                  Burd Logs
                </div>
                <div
                  className="cursor-pointer flex justify-center text-[38px] font-semibold gap-6"
                  onClick={() => setCurrentSlide("strategies")}
                >
                  Strategies
                </div>
                <div className="cursor-pointer flex justify-center text-[38px] font-semibold gap-6">
                  <Link href="/contact-us" onClick={toggleMenu}>
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start w-full mt-[3.5rem] mb-[25px] pb-[25px]">
                <RoundButtonLinks
                  hasText={false}
                  isOnMenu={true}
                  resolvedTheme={resolvedTheme}
                />
              </div>
            </motion.div>
          )}

          {currentSlide === "latestPosts" && (
            <motion.div
              key="latestPosts"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="max-w-[300px] flex flex-col items-start"
            >
              <p className="text-[19px] mb-[50px] font-semibold">Burd Logs</p>
              <div className="space-y-6 flex flex-col items-start">
                <div
                  className="cursor-pointer flex justify-center text-[38px] gap-6 font-semibold text-nowrap"
                  onClick={() => {
                    setSelectedCategory("How to Videos");
                    setCurrentSlide("categoryItems");
                  }}
                >
                  How To Videos
                </div>
                <div
                  className="cursor-pointer flex items-center justify-center text-[38px] gap-6 font-semibold"
                  onClick={() => {
                    setSelectedCategory("Blogs");
                    setCurrentSlide("categoryItems");
                  }}
                >
                  Latest Posts
                </div>
              </div>
              <div className="flex flex-row items-center justify-center gap-4 mt-[1.5rem]">
                <motion.div
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className=""
                >
                  <button
                    onClick={() => setCurrentSlide("main")}
                    className="bg-gray-700 rounded-full z-10 flex items-center text-[19px] font-semibold"
                    style={{
                      visibility:
                        currentSlide === "main" ? "hidden" : "visible",
                    }}
                  >
                    Back
                  </button>
                </motion.div>
              </div>
              <div className="flex flex-row items-start justify-start w-full mt-[3.5rem] mb-[25px] pb-[25px]">
                <RoundButtonLinks
                  hasText={false}
                  isOnMenu={true}
                  resolvedTheme={resolvedTheme}
                />
              </div>
            </motion.div>
          )}

          {currentSlide === "strategies" && (
            <motion.div
              key="strategies"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="w-full flex flex-col items-start overflow-y-scroll"
            >
              <p className="text-[19px] mb-[50px] font-semibold">Strategies</p>
              <div className="space-y-4 text-[22px] w-full flex items-start flex-col text-left">
                {strategies.map((strategy, index) => (
                  <div className="pb-4 text-left" key={index}>
                    <Link
                      href={`/strategies/${strategy.slug}`}
                      className="block text-left font-bold text-[22px]"
                      onClick={toggleMenu}
                    >
                      {strategy.strategyTitle}
                    </Link>
                    {renderStars(strategy.difficultyLevel)}
                  </div>
                ))}
              </div>

              <div className="flex flex-row items-center justify-center gap-4 mt-[1.5rem]">
                <motion.div
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className=""
                >
                  <button
                    onClick={() => setCurrentSlide("main")}
                    className="bg-gray-700 rounded-full z-10 flex items-center text-[19px] font-semibold"
                    style={{
                      visibility:
                        currentSlide === "main" ? "hidden" : "visible",
                    }}
                  >
                    Back
                  </button>
                </motion.div>
                <Link
                  href="/strategies"
                  className="text-[19px] font-semibold"
                  onClick={toggleMenu}
                >
                  View All
                </Link>
              </div>
              <div className="flex flex-row items-start justify-start w-full mt-[3.5rem] mb-[25px] pb-[25px]">
                <RoundButtonLinks
                  hasText={false}
                  isOnMenu={true}
                  resolvedTheme={resolvedTheme}
                />
              </div>
            </motion.div>
          )}

          {currentSlide === "aboutUs" && (
            <motion.div
              key="aboutUs"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="max-w-[300px] flex flex-col items-start"
            >
              <p className="text-[19px] mb-[50px] text-left font-semibold">
                About Us
              </p>
              <div className="space-y-6 flex flex-col items-start">
                <Link
                  href="/our-story"
                  className="cursor-pointer text-[38px] text-left font-semibold"
                  onClick={toggleMenu}
                >
                  Our Story
                </Link>
                <Link
                  href="/tokenomics"
                  className="cursor-pointer text-[38px] text-left font-semibold"
                  onClick={toggleMenu}
                >
                  Tokenomics
                </Link>
              </div>
              <div className="flex flex-row items-center justify-center gap-4 mt-[1.5rem]">
                <motion.div
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className=""
                >
                  <button
                    onClick={() => setCurrentSlide("main")}
                    className="bg-gray-700 rounded-full z-10 flex items-center text-[19px] font-semibold"
                    style={{
                      visibility:
                        currentSlide === "main" ? "hidden" : "visible",
                    }}
                  >
                    Back
                  </button>
                </motion.div>
              </div>
              <div className="flex flex-row items-start justify-start w-full mt-[3.5rem] mb-[25px] pb-[25px]">
                <RoundButtonLinks
                  hasText={false}
                  isOnMenu={true}
                  resolvedTheme={resolvedTheme}
                />
              </div>
            </motion.div>
          )}

          {currentSlide === "categoryItems" && (
            <motion.div
              key="categoryItems"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="max-w-full flex flex-col items-start overflow-y-scroll"
            >
              <p className="text-[19px] mb-[50px] font-semibold">
                {selectedCategory}
              </p>
              <div className="space-y-4 text-[20px] text-left pr-6">
                {selectedCategory === "Blogs" &&
                  blogs.map((blog, index) => (
                    <div className="pb-6" key={index}>
                      <Link
                        href={`/blogs/academy/${blog.slug}`}
                        className="block font-semibold text-[22px]"
                        onClick={toggleMenu}
                      >
                        {blog.blogTitle}
                      </Link>
                      <p className="text-[16px] mt-1">{blog.blogDescription}</p>
                    </div>
                  ))}
                {selectedCategory === "How to Videos" &&
                  howToVideos.slice(0, 6).map((video, index) => (
                    <div key={index}>
                      <Link
                        href={`/how-to-videos/${video.slug}`}
                        className="block font-semibold text-[22px]"
                        onClick={toggleMenu}
                      >
                        {video.howToVideoTitle}
                      </Link>
                      <p className="text-[16px] mt-1">
                        {video.howToVideoDescription}
                      </p>
                    </div>
                  ))}
              </div>
              <div className="flex flex-row items-center justify-center gap-4 mt-[1.5rem]">
                <motion.div
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className=""
                >
                  <button
                    onClick={() => setCurrentSlide("main")}
                    className="bg-gray-700 rounded-full z-10 flex items-center text-[19px] font-semibold"
                    style={{
                      visibility:
                        currentSlide === "main" ? "hidden" : "visible",
                    }}
                  >
                    Back
                  </button>
                </motion.div>
                {selectedCategory && (
                  <Link
                    href={`/${
                      selectedCategory === "Latest Posts"
                        ? "blogs/academy"
                        : selectedCategory === "How To Videos"
                        ? "how-to-videos"
                        : "strategies"
                    }`}
                    className="text-[19px] font-semibold"
                    onClick={toggleMenu}
                  >
                    View All
                  </Link>
                )}
              </div>
              <div className="flex flex-row items-start justify-start w-full mt-[3.5rem] mb-[25px] pb-[25px]">
                <RoundButtonLinks
                  hasText={false}
                  isOnMenu={true}
                  resolvedTheme={resolvedTheme}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const MegaMenu = ({ pathname, resolvedTheme, toggleDesktopMenu }) => {
  const [selectedMenu, setSelectedMenu] = useState("About Us"); // Default to "About Us"
  const [isLatestPostsExpanded, setIsLatestPostsExpanded] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [howToVideos, setHowToVideos] = useState([]);
  const [strategies, setStrategies] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  const renderStars = (level) => {
    const totalStars = 3;
    const filledStars = level ?? 0;
    const unfilledStars = totalStars - filledStars;

    return (
      <div className="flex flex-row">
        <p className="text-[16px] mr-2">Difficulty Level:</p>
        <div className="flex flex-row gap-1">
          {Array.from({ length: filledStars }, (_, i) => (
            <Image
              key={`filled-${i}`}
              src={resolvedTheme === "dark" ? StarFilled : StarFilledPurple}
              alt="Filled Star"
              width={15}
              height={15}
            />
          ))}
          {Array.from({ length: unfilledStars }, (_, i) => (
            <Image
              key={`unfilled-${i}`}
              src={resolvedTheme === "dark" ? StarUnfilled : StarUnfilledPurple}
              alt="Unfilled Star"
              width={15}
              height={15}
            />
          ))}
        </div>
      </div>
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (blogs.length === 0) {
          const blogData = await fetchBlogs();
          setBlogs(blogData);
        }
        if (howToVideos.length === 0) {
          const videoData = await fetchHowToVideos();
          setHowToVideos(videoData);
        }
        if (strategies.length === 0) {
          const strategyData = await fetchStrategies();
          setStrategies(strategyData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const items =
    selectedMenu === "Latest Posts"
      ? blogs
      : selectedMenu === "How To Videos"
      ? howToVideos
      : selectedMenu === "Strategies"
      ? strategies
      : [
          { title: "Our Story", href: "/our-story" },
          { title: "Tokenomics", href: "/tokenomics" },
        ];

  if (isMobile) {
    return (
      <MobileMenu
        blogs={blogs}
        howToVideos={howToVideos}
        strategies={strategies}
        toggleMenu={toggleDesktopMenu}
        resolvedTheme={resolvedTheme}
      />
    );
  }

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex justify-center items-center text-center bg-gray-900 pt-6 rounded-lg w-full text-[#6B70ED] dark:text-white megaMenuBG pagePaddingMedium"
      >
        {/* Desktop layout */}
        <motion.div className="flex justify-center items-start flex-col w-[25rem] h-[700px] pr-12 border-r border-gray-700 overflow-hidden">
          <p className="text-[25px] font-semibold mb-14 text-left">Menu</p>
          <div
            className="cursor-pointer flex justify-between mb-5"
            onClick={() => setSelectedMenu("About Us")}
          >
            <p
              className={`${
                selectedMenu === "About Us"
                  ? resolvedTheme === "dark"
                    ? "text-[#6B70ED] font-bold"
                    : "text-[#3A3564] font-bold"
                  : "text-[#6B70ED] dark:text-white font-semibold text_bottom_animation_dark_theme"
              } text-[24px]`}
            >
              About Us
            </p>
          </div>
          <div className="space-y-8">
            <div
              className="cursor-pointer flex items-center justify-between"
              onClick={() => setIsLatestPostsExpanded(!isLatestPostsExpanded)}
            >
              <p
                className={`${
                  selectedMenu === "How To Videos" ||
                  selectedMenu === "Latest Posts"
                    ? resolvedTheme === "dark"
                      ? "dark:text-white font-bold border-b-[2px] border-[#6B70ED]"
                      : "text-[#3A3564] font-bold border-b-[2px] border-black"
                    : "text-[#6B70ED] dark:text-white font-semibold text_bottom_animation_dark_theme"
                } text-[22px]`}
              >
                Burd Logs
              </p>
            </div>
            <AnimatePresence>
              {isLatestPostsExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  exit={{ height: 0, opacity: 0 }}
                  className="ml-4 space-y-2 overflow-hidden !mt-4"
                >
                  {["How To Videos", "Latest Posts"].map((item) => (
                    <div
                      key={item}
                      className="cursor-pointer flex justify-between text-[22px] mr-2"
                      onClick={() => setSelectedMenu(item)}
                    >
                      <p
                        className={`${
                          selectedMenu === item
                            ? resolvedTheme === "dark"
                              ? "text-[#6B70ED] font-bold "
                              : "text-[#3A3564] font-bold"
                            : "text-[#6B70ED] dark:text-white font-semibold text_bottom_animation_dark_theme"
                        }`}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div
            className="cursor-pointer flex justify-between my-5"
            onClick={() => setSelectedMenu("Strategies")}
          >
            <p
              className={`${
                selectedMenu === "Strategies"
                  ? resolvedTheme === "dark"
                    ? "text-[#6B70ED] font-bold "
                    : "text-[#3A3564] font-bold"
                  : "text-[#6B70ED] dark:text-white font-semibold text_bottom_animation_dark_theme"
              } text-[22px]`}
            >
              Strategies
            </p>
          </div>
          <div className="cursor-pointer flex justify-between">
            <Link
              href="/contact-us"
              onClick={toggleDesktopMenu}
              className={`${
                selectedMenu === "Contact Us"
                  ? resolvedTheme === "dark"
                    ? "text-[#6B70ED] font-bold"
                    : "text-[#3A3564] font-bold"
                  : "text-[#6B70ED] dark:text-white font-semibold text_bottom_animation_dark_theme"
              } text-[22px]`}
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

        {/* Right side - content display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedMenu}
            className="flex flex-col w-3/4 lg:pl-20 md:pl-12 pl-0"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <div
              className={`grid ${
                items.length <= 3 ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-2"
              } gap-6`}
            >
              {items.slice(0, 6).map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="mb-4 space-y-3 flex flex-col items-start"
                >
                  <Link
                    href={
                      selectedMenu === "About Us"
                        ? item.href
                        : selectedMenu === "Latest Posts"
                        ? item.blogCategory !== "News"
                          ? `/blogs/academy/${item.slug}`
                          : `/blogs/news/${item.slug}`
                        : selectedMenu === "How To Videos"
                        ? `/how-to-videos/${item.slug}`
                        : `/strategies/${item.slug}`
                    }
                    onClick={toggleDesktopMenu}
                    className="font-semibold text-[22px] hover:underline text-left"
                  >
                    {item.blogTitle ||
                      item.title ||
                      item.strategyTitle ||
                      item.howToVideoTitle}
                  </Link>
                  {selectedMenu === "Strategies" &&
                    item.difficultyLevel &&
                    renderStars(item.difficultyLevel)}
                  <p className="text-[16px] line-clamp-4 text-left">
                    {item.blogDescription ||
                      item.strategyDescription ||
                      item.howToVideoDescription}
                  </p>
                </motion.div>
              ))}
            </div>
            {selectedMenu !== "About Us" && (
              <motion.div variants={itemVariants} className="pt-12">
                <Link
                  href={
                    selectedMenu === "Latest Posts"
                      ? "/blogs" // Redirect to "/blogs" for "Latest Posts"
                      : selectedMenu === "How To Videos"
                      ? "/how-to-videos"
                      : `/${selectedMenu.toLowerCase().replace(" ", "-")}`
                  }
                  onClick={toggleDesktopMenu}
                  className="text-[25px] font-semibold"
                >
                  View All
                </Link>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <motion.div className="flex flex-row mb-10 pagePaddingMedium">
        <RoundButtonLinks
          hasText={false}
          isOnMenu={true}
          resolvedTheme={resolvedTheme}
        />
      </motion.div>
    </>
  );
};
export default MegaMenu;
