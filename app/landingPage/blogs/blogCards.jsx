import client from "@/app/lib/getBlogs";
import { BlogHeader, BlogCard } from "@/app/landingPage/blogs/blogCards";
import previewBlogImage from "@/public/assets/img/blogImages/blogPreviewImageGuides.png";

export const getStaticProps = async () => {
  const res = await client.getEntries({ content_type: "blogTest" });
  const blogs = res.items;

  return {
    props: {
      blogs,
    },
    revalidate: 60, // Revalidate data every 60 seconds
  };
};

const BlogsPage = ({ blogs }) => {
  return (
    <section className="pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px] flex justify-center">
      <div className="container">
        <div className="flex items-center justify-center">
          <BlogHeader
            title="Blog"
            subTitle="Burd Log"
            paragraph="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu  fugiat nulla pariatur."
          />
        </div>
        <div className="mx-0 sm:mx-20 md:mx-12  flex md:flex-nowrap flex-wrap gap-6">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.sys.id}
              blogType={blog.fields.blogType}
              blogTitle={blog.fields.title}
              blogDescription={blog.fields.description}
              previewBlogImage={previewBlogImage}
              roundedImage="●"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsPage;
