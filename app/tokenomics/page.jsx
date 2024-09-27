// app/tokenomics/page.jsx
import TokenomicsClient from "./tokenomicsClient";  // Client component for rendering
import { fetchTokenomicsData } from "@/lib/getTokenomicsData";  // Fetching the tokenomics data

export default async function TokenomicsPage() {
  console.log('TokenomicsPage: Fetching tokenomics data...');  // Log when the page is rendered

  // Fetch the tokenomics data on the server side
  const tokenomicsData = await fetchTokenomicsData();

  if (!tokenomicsData) {
    console.log('Error: No tokenomics data found');  // Log if no data is returned
    return <div>Error: Unable to fetch tokenomics data.</div>;
  }

  console.log('TokenomicsPage: Tokenomics data received:', tokenomicsData);  // Log the fetched data
  // Pass the fetched data to the client component
  return <TokenomicsClient tokenomicsData={tokenomicsData} />;
}
