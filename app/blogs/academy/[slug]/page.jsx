import { fetchBlogs } from "@/lib/getBlogs";
import BlogPost from "@/app/blogs/academy/[slug]/blogPost";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";

// Utility function to get a random item from an array
function getRandomItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

const BlogPage = async ({ params }) => {
  const blogs = await fetchBlogs();
  const blog = blogs.find((blog) => blog.slug === params.slug) || null;

  // Organize blogs by category
  const blogsByCategory = blogs.reduce((acc, blog) => {
    const blogCategory = blog.blogCategory;
    if (!acc[blogCategory]) {
      acc[blogCategory] = [];
    }
    acc[blogCategory].push(blog);
    return acc;
  }, {});

  function countWords(str) {
    // Split by space or any non-word character to correctly count words
    return str.split(/\s+/).filter((word) => word !== "").length;
  }

  // Get random blog for each category
  const blogPreviewCardData = Object.keys(blogsByCategory).map((category) => {
    const categoryBlogs = blogsByCategory[category];
    const randomBlog = getRandomItem(categoryBlogs);

    const processBlog = (blog) => {
      const description = blog.blogDescription;
      const paragraphs = documentToPlainTextString(blog.blogRichTextParagraph);
      const wordCount = countWords(paragraphs);
      const minsToRead = Math.ceil(wordCount / 210);
      const slug = blog.slug;

      return {
        ...blog,
        description,
        minsToRead,
        slug,
      };
    };

    return {
      category,
      blog: processBlog(randomBlog),
    };
  });

  // Convert preview card data to array
  const previewDataArray = Object.values(blogPreviewCardData);

  return (
    <div>
      <BlogPost blogPreviewData={previewDataArray} blog={blog} />
    </div>
  );
};

export default BlogPage;
