import { fetchBlogs } from "@/lib/getBlogs";
import LandingPage from "./landingPage";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import { fetchTvlData } from "@/lib/getCryptoData";

// Utility function to format ISO date string
function formatDateString(isoString, locale = "en-GB") {
  const date = new Date(isoString);
  return date.toLocaleDateString(locale, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function countWords(str) {
  // Split by space or any non-word character to correctly count words
  return str.split(/\s+/).filter((word) => word !== "").length;
}

// This is to get a random blog of each category (so that landing page is populated with different blogs each time etc)
function getRandomItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

// HomePage component
const HomePage = async () => {
  // Fetch blogs data
  const blogs = await fetchBlogs();

  // Get and Process blog data to match what we need for the previewCards on the landing page
  const blogsByCategory = blogs.reduce((acc, blog) => {
    const blogCategory = blog.blogCategory;
    if (!acc[blogCategory]) {
      acc[blogCategory] = [];
    }
    acc[blogCategory].push(blog);
    return acc;
  }, {});

  const blogPreviewCardData = Object.keys(blogsByCategory).map((category) => {
    const categoryBlogs = blogsByCategory[category];
    const randomBlog = getRandomItem(categoryBlogs);

    // console.log(randomBlog);
    const processBlog = (blog) => {
      const description = blog.blogDescription;
      const paragraphs = documentToPlainTextString(blog.blogRichTextParagraph);
      const wordCount = countWords(paragraphs);
      const minsToRead = Math.ceil(wordCount / 210);
      const blogID = blog.blogID;

      return {
        ...blog,
        description,
        minsToRead,
        blogID: blogID, // Ensure we have a blog ID for linking
      };
    };

    return {
      category,
      blog: processBlog(randomBlog),
    };
  });

  // Convert preview card data to array
  const previewDataArray = Object.values(blogPreviewCardData);

  const tvlData = await fetchTvlData();

  return (
    <>
      <LandingPage
        totalTvl={tvlData.totalTvl}
        blogPreviewCardData={previewDataArray}
      />
    </>
  );
};

export default HomePage;
