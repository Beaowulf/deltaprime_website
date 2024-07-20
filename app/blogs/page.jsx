import { fetchBlogs } from "@/lib/getBlogs";
import SearchBar from "@/app/components/searchBar/searchBar";
import Header from "@/app/components/header/header";
import ContactForm from "@/app/ui/contactForm/contactForm";

const BlogsPage = async () => {
  const blogs = await fetchBlogs();

  return (
    <div className="sm:px-[5%] md:px-[8%] lg:px-[10%] 2xl:px-[15%]">
      <Header
        title={"Our blog"}
        subTitle={"Burd Log"}
        paragraph={
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu  fugiat nulla pariatur."
        }
      />
      <SearchBar blogs={blogs} />
      <ContactForm className="relative" />
    </div>
  );
};

export default BlogsPage;
