import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const fetchBlogs = async () => {
  try {
    const res = await client.getEntries({ content_type: "blogTest" });
    // console.log("Fetched Blogs:", res.items); // Debugging line
    return res.items;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};
