// app/our-story/page.jsx
import OurStoryClient from "./ourStoryClient"; // Client component for rendering
import { getOurStorySections } from "@/lib/ourStoryData"; // Fetching the Our Story data
import { fetchTvlData } from "@/lib/getCryptoData";

export default async function OurStoryPage() {
  console.log("OurStoryPage: Fetching our story data..."); // Log when the page is rendered

  // Fetch the Our Story sections data on the server side
  const storyData = await getOurStorySections();

  const tvlData = await fetchTvlData();
  const tvtDataFormatted = tvlData.totalTvl.slice(0, 2);

  if (!storyData) {
    console.log("Error: No Our Story data found"); // Log if no data is returned
    return <div>Error: Unable to fetch Our Story data.</div>;
  }

  console.log("OurStoryPage: Our Story data received:", storyData); // Log the fetched data
  // Pass the fetched data to the client component
  return (
    <OurStoryClient storyData={storyData} tvtDataFormatted={tvtDataFormatted} />
  );
}
