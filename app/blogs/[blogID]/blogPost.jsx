"use client";
import { useEffect, useState } from "react";

const BlogPost = ({ blog }) => {
  const [blogData, setBlogData] = useState(blog);
  console.log(blog);
  useEffect(() => {
    if (!blogData) {
      const fetchData = async () => {
        const response = await fetch(`/api/blog/${blog.id}`);
        const data = await response.json();
        setBlogData(data);
      };
      fetchData();
    }
  }, [blogData, blog.blogID]);

  if (!blogData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{blogData.blogTitle}</h1>
      <div>{blogData.blogParagraph}</div>
    </div>
  );
};

export default BlogPost;
