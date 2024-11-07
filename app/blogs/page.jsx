import { fetchBlogs } from "@/lib/getBlogs";
import Header from "@/app/components/header/header";
import ContactForm from "@/app/ui/contactForm/contactForm";
import DynamicPurpleBar from "@/app/components/dynamicPurpleBar/dynamicPurpleBar";
import BlogHomePage from "./blogHomePage";

// Define dynamic metadata for the Blogs page
export const metadata = {
  title: "Blogs | DeltaPrime",
  description:
    "Stay updated with DeltaPrime’s latest blog posts on DeFi, including news, guides, infographics, and more. Deepen your knowledge in the world of decentralized finance.",
};

const BlogsPage = async () => {
  // Fetch data on the server side every time this page is rendered
  const blogs = await fetchBlogs();

  const sortedBlogs = blogs.sort(
    (a, b) => new Date(b.blogDate) - new Date(a.blogDate)
  );

  const categories = [
    "All",
    ...new Set(blogs.map((blog) => blog.blogCategory)),
  ];

  const latestBlog = sortedBlogs.slice(0, 1);
  const latestBlogs = sortedBlogs.slice(0, 5);

  return (
    <div>
      <DynamicPurpleBar title={"Blogs"} />
      <div className="pagePaddingLarge">
        <Header
          subTitle={"Burd Log"}
          paragraph={
            "Tireless Burd talks about all things DeFi. News, Guides, Infographics and more help you deepen your knowledge and stay up-to-date."
          }
        />
        <BlogHomePage
          latestBlogs={latestBlogs}
          latestBlogData={latestBlog}
          categories={categories}
          blogs={blogs}
        />
        <ContactForm className="relative" />
      </div>
    </div>
  );
};

export default BlogsPage;
