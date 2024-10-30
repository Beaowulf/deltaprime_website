// StrategyLoader.js
import React, { useState, useEffect } from "react";
import { fetchBlogs, fetchHowToVideos } from "@/lib/getBlogs";
import DropdownMenu from "@/app/components/dropdown/dropdown";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";

// todo might not need this with the new mega menu
const DropDownBlogLoader = ({ pathname, resolvedTheme, getLinkClass }) => {
  const [blogs, setBlogs] = useState([]);
  const [howToVideos, setHowToVideoData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchBlogs();
        const howToVideoData = await fetchHowToVideos();
        setBlogs(data);
        setHowToVideoData(howToVideoData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  // Sort blogs by date in descending order
  const sortedBlogs = blogs.sort(
    (a, b) => new Date(b.blogDate) - new Date(a.blogDate)
  );

  // Get the latest blogs as an array with the latest elements
  const latestBlogs = sortedBlogs.slice(0, 2);

  // Function to count words
  function countWords(str) {
    return str.split(/\s+/).filter((word) => word !== "").length;
  }

  // Calculate minsToRead for each blog
  const blogsWithReadTime = latestBlogs.map((blog) => {
    const paragraphs = documentToPlainTextString(blog.blogRichTextParagraph);
    const wordCount = countWords(paragraphs);
    const minsToRead = Math.ceil(wordCount / 210);
    return { ...blog, minsToRead };
  });

  return (
    <div className="text-center">
      <DropdownMenu
        boxTitle={"Latest Posts"}
        boxText={
          "Tireless Burd talks about all things DeFi. News, Guides, Infographics and more help you deepen your knowledge and stay up-to-date."
        }
        burdLogData={blogsWithReadTime}
        howToVideoData={howToVideos}
        menuText={"Burd Log"}
        className={getLinkClass("/blogs", pathname, resolvedTheme)}
        isBlog={true}
        boxLink={"/blogs"}
      />
    </div>
  );
};

export default DropDownBlogLoader;
