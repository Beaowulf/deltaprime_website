// lib/getTokenomicsData.js
import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,  // Space ID from Contentful
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,  // Delivery API Token
});

export async function fetchTokenomicsData() {
  try {
    console.log('Fetching tokenomics data from Contentful...');  // Log that the function is being executed
    const response = await client.getEntries({
      content_type: 'tokenomicsPage',  // Content type in Contentful
      include: 10,  // Include linked entries
    });

    // Ensure there is at least one entry
    if (response.items.length > 0) {
      console.log('Tokenomics data fetched:', response.items[0].fields.sections);  // Log the sections data
      return response.items[0]?.fields.sections;
    }
    
    console.log('No tokenomics data found');  // Log if no data is returned
    return null;  // Return null if no data found
  } catch (error) {
    console.error('Error fetching tokenomics data:', error);
    return null;  // Handle error gracefully
  }
}
