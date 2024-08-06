// tvl Data
export async function fetchTvlData() {
  const urls = [
    "https://88qj68w64k.execute-api.eu-west-3.amazonaws.com/prod/getBasicTvlAvalanche",
    "https://88qj68w64k.execute-api.eu-west-3.amazonaws.com/prod/getBasicTvlArbitrum",
  ];

  try {
    const [dataAvalanche, dataArbitrum] = await Promise.all(
      urls.map((url) => fetch(url).then((res) => res.json()))
    );

    const tvlAvalanche = parseFloat(dataAvalanche.tvl) || 0;
    const tvlArbitrum = parseFloat(dataArbitrum.tvl) || 0;
    const totalTvl = (tvlAvalanche + tvlArbitrum).toFixed(2);

    return { tvlAvalanche, tvlArbitrum, totalTvl };
  } catch (error) {
    console.error("Error fetching TVL data:", error);
    throw new Error("Failed to fetch TVL data");
  }
}
