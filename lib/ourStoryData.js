// lib/contentful.js
import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getOurStorySections() {
  const entries = await client.getEntries({
    content_type: 'ourStoryPage', // Replace with your content type ID
    'fields.slug': 'our-story', // Assuming you have a slug field for identification
  });

  // Assuming sections are stored in an array within the entry
  return entries.items[0]?.fields.sections || [];
}