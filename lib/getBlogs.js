import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const fetchBlogs = async () => {
  const res = await client.getEntries({ content_type: "blogTest" });

  // console.log(res.items);
  return res.items.map((item) => ({
    ...item.fields,
    blogSYS: item.sys,
    blogID: item.sys.id,
  }));
};

export default client;
