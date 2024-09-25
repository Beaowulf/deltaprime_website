// lib/getTokenomicsData.js
import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,  // Space ID from Contentful
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,  // Delivery API Token
});

export async function fetchTokenomicsData() {
  try {
    console.log('Fetching tokenomics data from Contentful...');
    const response = await client.getEntries({
      content_type: 'tokenomicsPage',
      include: 10,  // Fetch linked entries
    });

    if (response.items.length > 0) {
      console.log('Tokenomics data fetched:', response.items[0].fields.sections);
      return response.items[0]?.fields.sections;
    }

    console.log('No tokenomics data found');
    return null;
  } catch (error) {
    console.error('Error fetching tokenomics data:', error);
    return null;
  }
}
