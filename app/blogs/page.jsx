import client from "@/app/lib/getBlogs";

// TODO see how much revalidate should be TODO
export const revalidate = 60;

const fetchBlogs = async () => {
  const res = await client.getEntries({ content_type: "blogTest" });
  return res.items;
};

// Utility function to format ISO date string
// getting date like this updatedAt: '2024-07-17T20:21:45.895Z',
// formatting to 14-6-2024 (day-month-year)
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

const Blogs = async () => {
  const blogs = await fetchBlogs();

  // Get all paragraphs and calculate word counts
  const blogData = blogs.map((blog) => {
    const paragraphs = blog.fields.blogParagraph;
    const wordCount = countWords(paragraphs);
    return {
      ...blog.fields,
      paragraphs,
      wordCount,
    };
  });

  // Get the latest blog by updatedAt date
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
          <div key={index}>
            <h2>{blog.blogTitle}</h2>
            <p>{blog.blogDescription}</p>
            <p>Word Count: {blog.wordCount}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 flex flex-col gap-8">
        <p>LATEST BLOG title WAS {latestBlog.fields.blogTitle}</p>
        <p>LATEST BLOG paragraph WAS {latestBlog.fields.blogParagraph}</p>
        <p>Created at {formattedDate}</p>
      </div>
    </>
  );
};

export default Blogs;
