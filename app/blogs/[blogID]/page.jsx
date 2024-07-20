import { fetchBlogs } from "@/lib/getBlogs";
import BlogPost from "@/app/blogs/[blogID]/blogPost";

const BlogPage = async ({ params }) => {
  const blogs = await fetchBlogs();
  const blog = blogs.find((blog) => blog.blogID === params.blogID) || null;

  return <BlogPost blog={blog} />;
};

export async function generateStaticParams() {
  const blogs = await fetchBlogs();
  return blogs.map((blog) => ({
    blogID: blog.blogID,
  }));
}

export default BlogPage;
