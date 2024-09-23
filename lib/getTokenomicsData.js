import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const fetchTokenomicsData = async () => {
  try {
    const response = await client.getEntries({
      content_type: 'tokenomicsPage', // Make sure this matches the Content Type ID in Contentful
    });
    return response.items[0]?.fields.sections;
  } catch (error) {
    console.error('Error fetching tokenomics data:', error);
    throw error;
  }
};
