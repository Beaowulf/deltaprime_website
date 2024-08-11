// pages/blogs/page.jsx
import { fetchBlogs } from "@/lib/getBlogs";
import SearchBar from "@/app/components/searchBar/searchBar";
import Header from "@/app/components/header/header";
import ContactForm from "@/app/ui/contactForm/contactForm";
import DynamicPurpleBar from "@/app/components/dynamicPurpleBar/dynamicPurpleBar";
import UnlockPotentialContainer from "@/app/components/unlockPotentialContainer/unlockPotentialContainer";
import BlogHomePage from "./blogHomePage";
import Link from "next/link";

const BlogsPage = async () => {
  const blogs = await fetchBlogs();

  // Sort blogs by date in descending order
  const sortedBlogs = blogs.sort(
    (a, b) => new Date(b.blogDate) - new Date(a.blogDate)
  );

  // Extract unique categories
  const categories = [
    "All",
    ...new Set(blogs.map((blog) => blog.blogCategory)),
  ];

  // Get the latest blog as an array with one element
  const latestBlog = sortedBlogs.slice(0, 1);

  // Get the latest 5 blogs
  const latestBlogs = sortedBlogs.slice(0, 5);

  return (
    <div>
      <DynamicPurpleBar title={"Blogs"} />
      <div className="pagePaddingLarge">
        <Header
          title={"Our blog"}
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
