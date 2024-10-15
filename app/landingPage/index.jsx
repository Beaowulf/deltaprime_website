import { fetchBlogs } from "@/lib/getBlogs";
import LandingPage from "./landingPage";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import { fetchTvlData } from "@/lib/getCryptoData";
import { fetchLandingData } from "@/lib/getLandingData";

function countWords(str) {
  // Split by space or any non-word character to correctly count words
  return str.split(/\s+/).filter((word) => word !== "").length;
}

// HomePage component
const HomePage = async () => {
  const blogs = await fetchBlogs();
  const landingData = await fetchLandingData();

  if (!landingData) {
    return <div>Error fetching landing data.</div>;
  }

  const { sectionsCollection } = landingData;

  const selectedBlogs = blogs.slice(0, 3);

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
      blogID,
    };
  };

  // Process the first 3 blogs
  const blogPreviewCardData = selectedBlogs.map(processBlog);

  const tvlData = await fetchTvlData();

  return (
    <>
      <LandingPage
        totalTvl={tvlData.totalTvl}
        blogPreviewCardData={blogPreviewCardData}
        sectionsCollection={sectionsCollection} // Pass sectionsCollection to LandingPage
      />
    </>
  );
};

export default HomePage;
