import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

console.log(client);

// Added an error to check content types
const fetchContentTypes = async () => {
  const contentTypes = await client.getContentTypes();
  console.log(
    "Content Types:",
    contentTypes.items.map((item) => item.sys.id)
  );
};

fetchContentTypes().catch(console.error);

export default client;
