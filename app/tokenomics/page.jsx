// app/tokenomics/page.jsx
import TokenomicsClient from "./tokenomicsClient";
import { fetchTokenomicsData } from "@/lib/getTokenomicsData"; // Import your data fetching function

export default async function TokenomicsPage() {
  // Fetch the tokenomics data server-side
  const tokenomicsData = await fetchTokenomicsData();

  // Return the client component with the fetched data
  return <TokenomicsClient tokenomicsData={tokenomicsData} />;
}
