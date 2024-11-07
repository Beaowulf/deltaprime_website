import { fetchBlogs, fetchBlogBySlug } from "@/lib/getBlogs";
import NewsLetter from "@/app/blogs/news/[slug]/newsLetter";

function getRandomItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

export async function generateMetadata({ params }) {
  const blog = await fetchBlogBySlug(params.slug);

  if (!blog) {
    return {
      title: "Blog Not Found | DeltaPrime",
      description: "The requested blog post could not be found on DeltaPrime.",
    };
  }

  const blogTitle = blog.blogTitle || "Blog | DeltaPrime";
  const blogDescription =
    blog.blogDescription ||
    "Read this blog on DeltaPrime to explore more about DeFi, strategies, and the latest updates.";

  const blogImage = blog.previewImageBlog
    ? `https:${blog.previewImageBlog.fields.file.url}`
    : null;

  return {
    title: `${blogTitle} | DeltaPrime`,
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

  const blogs = await fetchBlogs();
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

    return {
      category,
      blog: randomBlog,
    };
  });

  const previewDataArray = Object.values(blogPreviewCardData);

  return (
    <div key={blog.blogID}>
      <NewsLetter blogPreviewData={previewDataArray} blog={blog} />
    </div>
  );
};

export default BlogPage;
