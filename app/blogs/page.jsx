import { fetchBlogs } from "@/lib/getBlogs";
import SearchBar from "@/app/components/searchBar/searchBar";
import Header from "@/app/components/header/header";
import ContactForm from "@/app/ui/contactForm/contactForm";
import DynamicPurpleBar from "@/app/components/dynamicPurpleBar/dynamicPurpleBar";
import UnlockPotentialContainer from "@/app/components/unlockPotentialContainer/unlockPotentialContainer";
import BlogHomePage from "./blogHomePage";

const BlogsPage = async () => {
  const blogs = await fetchBlogs();

  // Sort blogs by date in descending order
  const sortedBlogs = blogs.sort(
    (a, b) => new Date(b.blogDate) - new Date(a.blogDate)
  );

  // Get the latest blog as an array with one element
  const latestBlog = sortedBlogs.slice(0, 1);

  // Get the latest 5 blogs
  const latestBlogs = sortedBlogs.slice(0, 5);

  return (
    <div>
      <DynamicPurpleBar blogs={blogs} />
      <div className="sm:px-[5%] md:px-[8%] lg:px-[10%] xl:px-[16%] 2xl:px-[20%] px-4">
        <Header
          title={"Our blog"}
          subTitle={"Burd Log"}
          paragraph={
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu  fugiat nulla pariatur."
          }
        />
        <SearchBar blogs={blogs} />
        {/* Pass the latest blog to BlogHomePage */}
        <BlogHomePage latestBlogs={latestBlogs} latestBlogData={latestBlog} />
        {/* Unlock Potential block / hide on ipads and smaller screens */}

        <div className="hidden lg:block">
          <UnlockPotentialContainer />
        </div>
        <ContactForm className="relative" />
      </div>
    </div>
  );
};

export default BlogsPage;
