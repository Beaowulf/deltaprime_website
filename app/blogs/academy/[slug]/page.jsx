import { fetchBlogs, fetchBlogBySlug } from "@/lib/getBlogs";
import BlogPost from "@/app/blogs/academy/[slug]/blogPost";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";

// Utility function to get a random item from an array
function getRandomItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}


const BlogPage = async ({ params }) => {
  const blog = await fetchBlogBySlug(params.slug);

  if (!blog) {
    // Handle the case where the blog is not found (e.g., redirect or show a 404 page)
    return <div>Blog not found</div>;
  }
  function countWords(str) {
    // Split by space or any non-word character to correctly count words
    return str.split(/\s+/).filter((word) => word !== "").length;
  }

  // Organize blogs by category (if needed for additional functionality)
  const blogs = await fetchBlogs(); // You might need all blogs for related posts, etc.
  const blogsByCategory = blogs.reduce((acc, blog) => {
    const blogCategory = blog.blogCategory;
    if (!acc[blogCategory]) {
      acc[blogCategory] = [];
    }
    acc[blogCategory].push(blog);
    return acc;
  }, {});

  // Get random blog for each category (if needed for related posts, etc.)
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

  // Convert preview card data to array (if needed for related posts, etc.)
  const previewDataArray = Object.values(blogPreviewCardData);

  return (
    <div>
      <BlogPost blogPreviewData={previewDataArray} blog={blog} />
    </div>
  );
};

// // or Dynamic metadata
// export async function generateMetadata({ params, searchParams }, parent) {
//   // read route params
//   const slug = params.slug;

//   const blogs = await fetchBlogs();
//   const blog = blogs.find((blog) => blog.slug === slug) || null;

//   // optionally access and extend (rather than replace) parent metadata
//   const previousImages = (await parent).openGraph?.images || [];
//   const blogUrl = typeof window !== "undefined" ? window.location.href : "";

//   return {
//     title: blog.blogTitle,
//     description: blog.blogDescription,
//     url: blogUrl,
//     type: "article",
//     image: `https:${blog.previewImageBlog.fields.file.url}`,
//     openGraph: {
//       title: blog.blogTitle,
//       description:blog.blogDescription,
//       url: blogUrl,
//       type: "article",
//       images: [
//         {
//           url: `https:${blog.previewImageBlog.fields.file.url}`,
//           width: 800,
//           height: 600,
//           alt: blog.previewImageBlog.fields.title
//         },
//       ],
//     },
//     card: 'summary_large_image',
//     title:  blog.blogTitle,
//     description: blog.blogDescription,
//     // siteId: '1467726470533754880',
//     // creator: '@nextjs',
//     // creatorId: '1467726470533754880',
//     images: [`https:${blog.previewImageBlog.fields.file.url}`], // Must be an absolute URL
//   };
// }

export default BlogPage;
