"use server";
import { fetchBlogs } from "@/lib/getBlogs";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import RichTextRenderer from "@/app/blogs/richTextEntries";
import Image from "next/image";
import InlineImage from "@/public/assets/img/thumbnail.png";

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

// Replace placeholders with React components
const replacePlaceholders = (text, replacements) => {
  let newText = text;

  Object.keys(replacements).forEach((placeholder) => {
    newText = newText.split(placeholder).join(replacements[placeholder]);
  });

  return newText;
};

const BlogPreview = async () => {
  const blogs = await fetchBlogs();

  const blogData = blogs.map((blog) => {
    const paragraphs = blog.fields.blogParagraph;
    const wordCount = countWords(paragraphs);
    const minsToRead = Math.ceil(wordCount / 210);

    // Assuming the image is stored in blog.fields.blogImage.fields.file.url
    const blogImage = `https:${blog.fields.blogImage.fields.file.url}`;

    // Get richParagraph and replace it with the inlineElement

    return {
      ...blog.fields,
      paragraphs,
      minsToRead,
      blogImage,
    };
  });

  const latestBlog = blogs.sort(
    (a, b) => new Date(b.sys.updatedAt) - new Date(a.sys.updatedAt)
  )[0];

  const formattedDate = latestBlog
    ? formatDateString(latestBlog.sys.updatedAt, "en-GB")
    : "";

  return (
    <>
      <div>
        <h1>Blogs</h1>
        {blogData.map((blog, index) => (
          <div className="my-2 border-blue-400 border-2" key={index}>
            <h2>{blog.blogTitle}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogPreview;
