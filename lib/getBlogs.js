import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const fetchBlogs = async () => {
  const res = await client.getEntries({ content_type: "blogTest" });

  console.log(res.items);
  return res.items.map((item) => ({
    ...item.fields,
    blogSYS: item.sys,
    blogID: item.sys.id,
  }));
};

export async function fetchGlossaryEntries() {
  const res = await client.getEntries({ content_type: "glossary" });
  return res.items.map((item) => item.fields);
}

export const fetchStrategies = async () => {
  const res = await client.getEntries({ content_type: "strategy" });
  return res.items.map((item) => ({
    ...item.fields,
    strategySYS: item.sys,
    strategyID: item.sys.id,
  }));
};
export default client;
// todo: rename file into getContentfulData
