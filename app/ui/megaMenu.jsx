import React, { useState, useEffect } from "react";
import { fetchBlogs, fetchHowToVideos, fetchStrategies } from "@/lib/getBlogs";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import arrowLeftColored from "@/public/assets/icons/arrowLeftColored.svg";
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
    enter: { x: "100%", opacity: 1 },
    center: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 1 },
  };

  const renderStars = (level) => {
    const totalStars = 3;
    const filledStars = level ?? 0;
    const unfilledStars = totalStars - filledStars;

    return (
      <div className="flex flex-row">
        <p className="text-[15px] textShadow mr-2">Difficulty Level:</p>
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
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-center p-4 relative text-[#565AC2] dark:text-white">
      <motion.div
        variants={slideVariants}
        initial="enter"
        animate="center"
        exit="exit"
        className="fixed top-[25%] left-4 z-10"
      >
        <button
          onClick={() => setCurrentSlide("main")}
          className="bg-gray-700 p-2 rounded-full z-10 flex items-center"
          style={{ visibility: currentSlide === "main" ? "hidden" : "visible" }}
        >
          <Image src={arrowLeftColored} width={24} height={24} />
          Back
        </button>
      </motion.div>

      <AnimatePresence mode="wait">
        {currentSlide === "main" && (
          <motion.div
            key="main"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="w-full flex flex-col"
          >
            <p className="text-[34px] font-semibold mb-8">Menu</p>
            <div className="space-y-6">
              <div
                className="cursor-pointer flex justify-center text-[24px] font-semibold gap-6"
                onClick={() => setCurrentSlide("latestPosts")}
              >
                Latest Posts
              </div>
              <div
                className="cursor-pointer flex justify-center text-[24px] font-semibold gap-6"
                onClick={() => setCurrentSlide("strategies")}
              >
                Strategies
              </div>
              <div
                className="cursor-pointer flex items-center justify-center text-[24px] font-semibold gap-6"
                onClick={() => setCurrentSlide("aboutUs")}
              >
                About Us
              </div>
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
            className="w-full flex flex-col"
          >
            <p className="text-[28px] font-semibold mb-12 textShadow">
              Latest Posts
            </p>
            <div className="space-y-6">
              <div
                className="cursor-pointer flex justify-center text-[24px] gap-6"
                onClick={() => {
                  setSelectedCategory("Blogs");
                  setCurrentSlide("categoryItems");
                }}
              >
                Blogs
              </div>
              <div
                className="cursor-pointer flex items-center justify-center text-[24px] gap-6"
                onClick={() => {
                  setSelectedCategory("How to Videos");
                  setCurrentSlide("categoryItems");
                }}
              >
                How to Videos
              </div>
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
            className="w-full flex flex-col items-center"
          >
            <p className="text-[28px] font-semibold mb-6 text-left textShadow">
              Strategies
            </p>
            <div className="space-y-4 text-[20px] w-full px-4 flex items-center flex-col text-left">
              {strategies.map((strategy, index) => (
                <div className="pb-4">
                  <Link
                    key={index}
                    href={`/strategies/${strategy.slug}`}
                    className="block text-left textShadow text-[24px]"
                    onClick={toggleMenu}
                  >
                    {strategy.strategyTitle}
                  </Link>
                  {renderStars(strategy.difficultyLevel)}
                </div>
              ))}
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
            className="w-full flex flex-col items-center"
          >
            <p className="text-[28px] font-semibold mb-12 text-left textShadow">
              About Us
            </p>
            <div className="space-y-6 flex flex-col items-center">
              <Link
                href="/our-story"
                className="cursor-pointer text-[24px] text-left"
                onClick={toggleMenu}
              >
                Our Story
              </Link>
              <Link
                href="/tokenomics"
                className="cursor-pointer text-[24px] text-left"
                onClick={toggleMenu}
              >
                Tokenomics
              </Link>
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
            className="w-full flex flex-col items-center"
          >
            <p className="text-[28px] font-semibold mb-12 textShadow">
              {selectedCategory}
            </p>
            <div className="space-y-4 text-[20px] text-left px-4 w-[24rem]">
              {selectedCategory === "Blogs" &&
                blogs.map((blog, index) => (
                  <div className="pb-6">
                    <Link
                      key={index}
                      href={`/blogs/academy/${blog.slug}`}
                      className="block textShadow"
                      onClick={toggleMenu}
                    >
                      {blog.blogTitle}
                    </Link>
                    <p className="text-[14px] mt-2">{blog.blogDescription}</p>
                  </div>
                ))}
              {selectedCategory === "How to Videos" &&
                howToVideos.slice(0, 3).map((video, index) => (
                  <div key={index}>
                    <Link
                      href={`/how-to-videos/${video.slug}`}
                      className="block textShadow"
                      onClick={toggleMenu}
                    >
                      {video.howToVideoTitle}
                    </Link>
                    <p className="text-[14px] mt-2">
                      {video.howToVideoDescription}
                    </p>
                  </div>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MegaMenu = ({ pathname, resolvedTheme, toggleDesktopMenu }) => {
  const [selectedMenu, setSelectedMenu] = useState("Blogs");
  const [isLatestPostsExpanded, setIsLatestPostsExpanded] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [howToVideos, setHowToVideos] = useState([]);
  const [strategies, setStrategies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const renderStars = (level) => {
    const totalStars = 3;
    const filledStars = level ?? 0;
    const unfilledStars = totalStars - filledStars;

    return (
      <div className="flex flex-row">
        <p className="text-[15px] textShadow mr-2">Difficulty Level:</p>
        <div className="flex flex-row gap-1">
          {Array.from({ length: filledStars }, (_, i) => (
            <Image
              key={`filled-${i}`}
              src={StarFilled}
              alt="Filled Star"
              width={15}
              height={15}
            />
          ))}
          {Array.from({ length: unfilledStars }, (_, i) => (
            <Image
              key={`unfilled-${i}`}
              src={StarUnfilled}
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
        const blogData = await fetchBlogs();
        const videoData = await fetchHowToVideos();
        const strategyData = await fetchStrategies();
        setBlogs(blogData);
        setHowToVideos(videoData);
        setStrategies(strategyData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
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

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const items =
    selectedMenu === "Blogs"
      ? blogs
      : selectedMenu === "How to Videos"
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

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="flex text-center bg-gray-900 pt-6 rounded-lg w-full text-[#565AC2] dark:text-white megaMenuBG pagePaddingMedium"
      >
        {/* Desktop layout */}
        <motion.div className="flex flex-col w-[25rem] h-[40rem] pr-12 border-r border-gray-700">
          <p className="text-[34px] font-semibold mb-14 text-left brightTitle">
            Menu
          </p>
          <div className="space-y-8">
            <div
              className="cursor-pointer flex items-center justify-between mb-2"
              onClick={() => setIsLatestPostsExpanded(!isLatestPostsExpanded)}
            >
              <p
                className={`${
                  selectedMenu === "Latest Posts"
                    ? resolvedTheme === "dark"
                      ? "text-[#565AC2] font-bold"
                      : "text-black font-bold"
                    : "text-[#565AC2] dark:text-white font-semibold"
                } text-[24px]`}
              >
                Latest Posts
              </p>
            </div>
            <AnimatePresence>
              {isLatestPostsExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="ml-4 space-y-2 overflow-hidden"
                >
                  {["Blogs", "How to Videos"].map((item) => (
                    <div
                      key={item}
                      className="cursor-pointer flex justify-between text-[24px] mr-2"
                      onClick={() => setSelectedMenu(item)}
                    >
                      <p
                        className={`${
                          selectedMenu === item
                            ? resolvedTheme === "dark"
                              ? "text-[#565AC2] font-bold"
                              : "text-black font-bold"
                            : "text-[#565AC2] dark:text-white font-semibold"
                        }`}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {["Strategies", "About Us"].map((item) => (
              <div
                key={item}
                className="cursor-pointer flex justify-between mb-2"
                onClick={() => setSelectedMenu(item)}
              >
                <p
                  className={`${
                    selectedMenu === item
                      ? resolvedTheme === "dark"
                        ? "text-[#565AC2] font-bold"
                        : "text-black font-bold"
                      : "text-[#565AC2] dark:text-white font-semibold"
                  } text-[24px]`}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right side - content display */}
        <motion.div className="flex flex-col w-3/4 lg:pl-20 md:pl-12 pl-0">
          <div
            className={`grid ${
              items.length <= 3 ? "grid-cols-1" : "grid-cols-2"
            } gap-4`}
          >
            {items
              .slice(0, selectedMenu === "How to Videos" ? 6 : 3)
              .map((item, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="mb-4 space-y-3 flex flex-col items-start"
                >
                  <Link
                    href={
                      selectedMenu === "Blogs"
                        ? `/blogs/academy/${item.slug}`
                        : selectedMenu === "How to Videos"
                        ? `/how-to-videos/${item.slug}`
                        : `/strategies/${item.slug}`
                    }
                    onClick={toggleDesktopMenu}
                    className="font-semibold text-[24px] hover:underline textShadow text-left"
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
            <motion.div
              className="mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                href={
                  selectedMenu === "How to Videos"
                    ? "/how-to-videos"
                    : `/${selectedMenu.toLowerCase().replace(" ", "-")}`
                }
                onClick={toggleDesktopMenu}
                className="underline"
              >
                View All
              </Link>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
      <motion.div className="flex flex-row mb-10">
        <RoundButtonLinks isOnMenu={true} resolvedTheme={resolvedTheme} />
      </motion.div>
    </>
  );
};

export default MegaMenu;
