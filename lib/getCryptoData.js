// tvl Data
export async function fetchTvlData() {
  const urls = [
    "https://88qj68w64k.execute-api.eu-west-3.amazonaws.com/prod/getBasicTvlAvalanche",
    "https://88qj68w64k.execute-api.eu-west-3.amazonaws.com/prod/getBasicTvlArbitrum",
  ];

  console.log("URLs to fetch:", urls);

  try {
    const [dataAvalanche, dataArbitrum] = await Promise.all(
      urls.map((url) => fetch(url).then((res) => res.json()))
    );

    console.log("Data fetched for Avalanche:", dataAvalanche);
    console.log("Data fetched for Arbitrum:", dataArbitrum);

    const tvlAvalanche = parseFloat(dataAvalanche.tvl) || 0;
    console.log("Parsed TVL for Avalanche:", tvlAvalanche);

    const tvlArbitrum = parseFloat(dataArbitrum.tvl) || 0;
    console.log("Parsed TVL for Arbitrum:", tvlArbitrum);

    const totalTvl = (tvlAvalanche + tvlArbitrum).toFixed(2);
    console.log("Total TVL:", totalTvl);

    return { tvlAvalanche, tvlArbitrum, totalTvl };
  } catch (error) {
    console.error("Error fetching TVL data:", error);
    throw new Error("Failed to fetch TVL data");
  }
}
