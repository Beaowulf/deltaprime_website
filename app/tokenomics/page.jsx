// app/tokenomics/page.jsx
import TokenomicsClient from "./tokenomicsClient";  // Client component for rendering
import { fetchTokenomicsData } from "@/lib/getTokenomicsData";  // Fetching the tokenomics data

export default async function TokenomicsPage() {
  // Fetch the tokenomics data on the server side
  const tokenomicsData = await fetchTokenomicsData();

  if (!tokenomicsData) {
    return <div>Error: Unable to fetch tokenomics data.</div>;
  }

  // Pass the fetched data to the client component
  return <TokenomicsClient tokenomicsData={tokenomicsData} />;
}
