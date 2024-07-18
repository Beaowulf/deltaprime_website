// just for loggin delete me later
import React from "react";
import { logBlogs } from "@/lib/getBlogs";

const BlogsPage = () => {
  // Log the blogs when the component mounts
  React.useEffect(() => {
    logBlogs();
  }, []);

  return (
    <div>
      <p>Blogs</p>
    </div>
  );
};

export default BlogsPage;
