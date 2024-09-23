import TokenomicsClient from "./tokenomicsClient"; // Import the client-side component
import { fetchTokenomicsData } from "@/lib/getTokenomicsData"; // Import the function to fetch data

// This is a server component where data fetching is handled
export default async function TokenomicsPage() {
  let tokenomicsData = [];

  try {
    // Fetch data directly in this component (server-side fetching)
    tokenomicsData = await fetchTokenomicsData();
  } catch (error) {
    console.error("Error fetching tokenomics data:", error);
  }

  return <TokenomicsClient tokenomicsData={tokenomicsData} />;
}
