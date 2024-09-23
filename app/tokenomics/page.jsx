import { fetchTokenomicsData } from "@/lib/getTokenomicsData";
import TokenomicsClient from "./TokenomicsClient"; // Import the client-side component

export default async function TokenomicsPage() {
  let tokenomicsData = [];

  try {
    // Fetch data server-side
    tokenomicsData = await fetchTokenomicsData();
  } catch (error) {
    console.error("Error fetching tokenomics data:", error);
  }

  return <TokenomicsClient tokenomicsData={tokenomicsData} />;
}
