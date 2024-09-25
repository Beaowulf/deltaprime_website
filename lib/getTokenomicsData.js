// lib/getTokenomicsData.js
import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,  // Space ID from Contentful
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,  // Delivery API Token
});

export async function fetchTokenomicsData() {
  try {
    const response = await client.getEntries({
      content_type: 'tokenomicsPage',  // Content type in Contentful
      include: 10,  // Include linked entries
    });

    // Ensure there is at least one entry
    if (response.items.length > 0) {
      return response.items[0]?.fields.sections;
    }
    
    return null;  // Return null if no data found
  } catch (error) {
    console.error('Error fetching tokenomics data:', error);
    return null;  // Handle error gracefully
  }
}
