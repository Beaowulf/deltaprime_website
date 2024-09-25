// lib/getTokenomicsData.js
import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const fetchTokenomicsData = async () => {
  try {
    const response = await client.getEntries({
      content_type: "tokenomicsPage", // Ensure this matches your Contentful content type
    });
    return response.items[0]?.fields.sections;
  } catch (error) {
    console.error("Error fetching tokenomics data:", error);
    throw error;
  }
};
