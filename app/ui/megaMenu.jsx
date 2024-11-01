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
    <div className="w-full h-full">
      <div className="flex flex-col items-start justify-between h-full text-center bg-gray-900 p-4 pt-10 text-[#6B70ED] dark:text-white relative overflow-scroll">
        <motion.div
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className=""
        >
          <button
            onClick={() => setCurrentSlide("main")}
            className="bg-gray-700 p-2 rounded-full z-10 flex items-center"
            style={{
              visibility: currentSlide === "main" ? "hidden" : "visible",
            }}
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
                  className="cursor-pointer flex items-center justify-center text-[24px] font-semibold gap-6"
                  onClick={() => setCurrentSlide("aboutUs")}
                >
                  About Us
                </div>
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
              className="w-full flex flex-col items-center justify-center"
            >
              <p className="text-[28px] font-semibold mb-6 text-left textShadow">
                Strategies
              </p>
              <div className="space-y-4 text-[20px] w-full px-4 flex items-center flex-col text-left">
                {strategies.map((strategy, index) => (
                  <div className="pb-4 text-left" key={index}>
                    <Link
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
              <Link
                href="/strategies"
                className="text-[20px] mt-6 underline"
                onClick={toggleMenu}
              >
                View All
              </Link>
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
              <div className="space-y-4 text-[20px] text-left px-5">
                {selectedCategory === "Blogs" &&
                  blogs.map((blog, index) => (
                    <div className="pb-6" key={index}>
                      <Link
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
              {selectedCategory && (
                <Link
                  href={`/${
                    selectedCategory === "Blogs"
                      ? "blogs/academy"
                      : selectedCategory === "How to Videos"
                      ? "how-to-videos"
                      : "strategies"
                  }`}
                  className="text-[20px] mt-6 underline"
                  onClick={toggleMenu}
                >
                  View All
                </Link>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-row items-center justify-center w-full pb-10 pt-10">
          <RoundButtonLinks
            hasText={false}
            isOnMenu={true}
            resolvedTheme={resolvedTheme}
          />
        </div>
      </div>
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
          <p className="text-[34px] font-semibold mb-14 text-left brightTitle">
            Menu
          </p>
          <div
            className="cursor-pointer flex justify-between mb-5"
            onClick={() => setSelectedMenu("About Us")}
          >
            <p
              className={`${
                selectedMenu === "About Us"
                  ? resolvedTheme === "dark"
                    ? "text-[#6B70ED] font-bold border-b-[2px] border-[#6B70ED]"
                    : "text-black font-bold border-b-[2px] border-black"
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
                  selectedMenu === "Blogs" || selectedMenu === "How to Videos"
                    ? resolvedTheme === "dark"
                      ? "text-[#6B70ED] font-bold border-b-[2px] border-[#6B70ED]"
                      : "text-black font-bold border-b-[2px] border-black"
                    : "text-[#6B70ED] dark:text-white font-semibold text_bottom_animation_dark_theme"
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
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  exit={{ height: 0, opacity: 0 }}
                  className="ml-4 space-y-2 overflow-hidden !mt-4"
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
                              ? "text-[#6B70ED] font-bold border-b-[2px] border-[#6B70ED]"
                              : "text-black font-bold border-b-[2px] border-black"
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
                    ? "text-[#6B70ED] font-bold border-b-[2px] border-[#6B70ED]"
                    : "text-black font-bold border-b-[2px] border-black"
                  : "text-[#6B70ED] dark:text-white font-semibold text_bottom_animation_dark_theme"
              } text-[24px]`}
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
                    ? "text-[#6B70ED] font-bold border-b-[2px] border-[#6B70ED]"
                    : "text-black font-bold border-b-[2px] border-black"
                  : "text-[#6B70ED] dark:text-white font-semibold text_bottom_animation_dark_theme"
              } text-[24px]`}
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
                        : selectedMenu === "Blogs"
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

              {selectedMenu !== "About Us" && (
                <motion.div variants={itemVariants} className="mt-4">
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
            </div>
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
