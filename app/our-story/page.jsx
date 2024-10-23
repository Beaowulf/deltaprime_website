import OurStoryClient from "./ourStoryClient"; // Client component for rendering
import { fetchTvlData } from "@/lib/getCryptoData";
import { getOurStorySections } from "@/lib/ourStoryData"; // Fetching the Our Story data
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'; // Convert rich text JSON to plain text

// Define dynamic metadata for this page
export async function generateMetadata() {
  // Fetch the Our Story sections data
  const storyData = await getOurStorySections();

  // If no data, set fallback metadata
  if (!storyData) {
    return {
      title: "Our Story | Delta Prime",
      description: "Learn more about the history and mission of Delta Prime.",
    };
  }

  // Convert the rich text introText to plain text for the meta description
  const description = storyData.introText
    ? documentToPlainTextString(storyData.introText.json).slice(0, 160) // Limit to 160 characters for SEO
    : "Discover Delta Prime's story, mission, and vision.";

  return {
    title: `${storyData.title} | Delta Prime`,
    description: description,
  };
}

export default async function OurStoryPage() {
  console.log("OurStoryPage: Fetching our story data...");

  // Fetch the Our Story sections data on the server side
  const storyData = await getOurStorySections();
  console.log(storyData);




  // Fetch TVL (Total Value Locked) data
  const tvlData = await fetchTvlData();
  const tvtDataFormatted = tvlData.totalTvl.slice(0, 2);

  if (!storyData) {
    console.log("Error: No Our Story data found");
    return <div>Error: Unable to fetch Our Story data.</div>;
  }

  console.log("OurStoryPage: Our Story data received:", storyData);

  // Pass the fetched data to the client component
  return (
    <OurStoryClient
      storyData={storyData.sectionsCollection.items}
      tvtDataFormatted={tvtDataFormatted}
    />
  );
}
