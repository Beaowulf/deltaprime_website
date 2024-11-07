import TokenomicsClient from "./tokenomicsClient"; // Client component for rendering
import { fetchTokenomicsData } from "@/lib/getTokenomicsData"; // Fetching the tokenomics data
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer"; // Convert rich text JSON to plain text

// Define dynamic metadata for this page
export async function generateMetadata() {
  // Fetch the tokenomics data
  const tokenomicsData = await fetchTokenomicsData();

  // If no data, set fallback metadata
  if (!tokenomicsData || !tokenomicsData.tokenomicsPageCollection?.items[0]) {
    return {
      title: "Tokenomics | DeltaPrime",
      description:
        "Explore DeltaPrime's tokenomics and understand the PRIME and sPRIME tokens.",
    };
  }

  const pageData = tokenomicsData.tokenomicsPageCollection.items[0];

  // Extract the intro text as plain text for the meta description
  const description = pageData.introText
    ? documentToPlainTextString(pageData.introText.json).slice(0, 160) // Limit to 160 characters for SEO
    : "Learn about DeltaPrime's tokenomics, distribution, and utility tokens.";

  return {
    title: `${pageData.title} | DeltaPrime`,
    description: description,
  };
}

export default async function TokenomicsPage() {
  // Fetch the tokenomics data on the server side
  const tokenomicsData = await fetchTokenomicsData();

  if (!tokenomicsData || !tokenomicsData.tokenomicsPageCollection?.items[0]) {
    return <div>Error: Unable to fetch tokenomics data.</div>;
  }

  // Extract the specific tokenomics page data
  const pageData = tokenomicsData.tokenomicsPageCollection.items[0];

  // Pass the fetched data to the client component
  return <TokenomicsClient tokenomicsData={pageData} />;
}
