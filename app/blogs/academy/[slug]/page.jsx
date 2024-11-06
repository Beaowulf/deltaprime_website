import { fetchBlogs, fetchBlogBySlug } from "@/lib/getBlogs";
import BlogPost from "@/app/blogs/academy/[slug]/blogPost";

function getRandomItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

export async function generateMetadata({ params }) {
  const blog = await fetchBlogBySlug(params.slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Delta Prime",
      description: "The requested blog post could not be found on Delta Prime.",
    };
  }

  const blogTitle = blog.blogTitle || "Blog | Delta Prime";
  const blogDescription =
    blog.blogDescription ||
    "Read this blog on Delta Prime to explore more about DeFi, strategies, and the latest updates.";

  // If the blog has a preview image, include it in the OpenGraph metadata
  const blogImage = blog.previewImageBlog
    ? `https:${blog.previewImageBlog.fields.file.url}`
    : null;

  return {
    title: `${blogTitle} | Delta Prime`,
    description: blogDescription,
    openGraph: {
      title: blogTitle,
      description: blogDescription,
      type: "article",
      images: blogImage
        ? [
            {
              url: blogImage,
              width: 800,
              height: 600,
              alt: blog.previewImageBlog.fields.title,
            },
          ]
        : [],
    },
  };
}

const BlogPage = async ({ params }) => {
  const blog = await fetchBlogBySlug(params.slug);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  // Organize blogs by category (if needed for additional functionality)
  const blogs = await fetchBlogs();
  const blogsByCategory = blogs.reduce((acc, blog) => {
    const blogCategory = blog.blogCategory;
    if (!acc[blogCategory]) {
      acc[blogCategory] = [];
    }
    acc[blogCategory].push(blog);
    return acc;
  }, {});

  // Get random blog for each category (if needed for related posts)
  const blogPreviewCardData = Object.keys(blogsByCategory).map((category) => {
    const categoryBlogs = blogsByCategory[category];
    const randomBlog = getRandomItem(categoryBlogs);

    return {
      category,
      blog: randomBlog,
    };
  });

  // Convert preview card data to array (if needed for related posts)
  const previewDataArray = Object.values(blogPreviewCardData);

  return (
    <div key={blog.blogID}>
      <BlogPost blogPreviewData={previewDataArray} blog={blog} />
    </div>
  );
};

export default BlogPage;
