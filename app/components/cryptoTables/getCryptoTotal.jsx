"use client";
import { BigNumber, ethers } from "ethers";
import { pools } from "@/js/constants";
import POOL from "@/abi/WrappedNativeTokenPool.json";
import { formatUnits } from "ethers/lib/utils";
import Web3 from "web3";

// Define APIs and JSON RPC endpoints
const redstoneAvalancheApi =
  "https://oracle-gateway-2.a.redstone.finance/data-packages/latest/redstone-avalanche-prod";
const redstoneArbitrumApi =
  "https://oracle-gateway-2.a.redstone.finance/data-packages/latest/redstone-arbitrum-prod";
const avaxJsonRpc =
  "https://avalanche-mainnet.core.chainstack.com/ext/bc/C/rpc/0968db18a01a90bac990ff00df6f7da1";
const arbitrumJsonRpc = "https://arb1.arbitrum.io/rpc";

// Initialize providers
const avalancheProvider = new ethers.providers.JsonRpcProvider(avaxJsonRpc);
const arbitrumProvider = new ethers.providers.JsonRpcProvider(arbitrumJsonRpc);

// Initialize Web3 for fromWei utility
const web3 = new Web3();

// Define URLs for fetching TVL data
const deltaPrimeTvlAvalanche =
  "https://88qj68w64k.execute-api.eu-west-3.amazonaws.com/manageProtocol?getLatestTVL";
const deltaPrimeTvlArbitrum =
  "https://88qj68w64k.execute-api.eu-west-3.amazonaws.com/manageProtocolArbi?getLatestTVL";

// Fetch TVL data
const fetchTVLData = async () => {
  console.log("Fetching TVL data...");
  let tvlInfo = await Promise.all([
    fetch(deltaPrimeTvlAvalanche),
    fetch(deltaPrimeTvlArbitrum),
  ]);

  tvlInfo = (await Promise.all(tvlInfo.map((el) => el.json()))).map(
    (el) => el.tvl
  );
  const totalTVL = tvlInfo[0] + tvlInfo[1];

  console.log("Total TVL fetched:", totalTVL);
  return totalTVL;
};

// Fetch pool data
const fetchPoolData = async (provider, poolAddresses) => {
  console.log("Fetching pool data...");
  const poolsInfo = await Promise.all(
    Object.entries(poolAddresses).map(async ([asset, address]) => {
      const poolContract = new ethers.Contract(address, POOL.abi, provider);
      const poolDetails = await Promise.all([
        poolContract.totalSupply(),
        poolContract.getDepositRate(),
        poolContract.totalBorrowed(),
      ]);

      console.log(`Fetched data for pool: ${asset}`, poolDetails);
      return {
        id: asset,
        totalSupply: poolDetails[0],
        depositRate: poolDetails[1],
        totalBorrowed: poolDetails[2],
      };
    })
  );

  console.log("All pool data fetched.");
  return poolsInfo;
};

// Fetch price data
const fetchPriceData = async (apiUrl) => {
  console.log(`Fetching price data from ${apiUrl}...`);
  const priceRequest = await fetch(apiUrl);
  const prices = await priceRequest.json();

  console.log("Price data fetched:", prices);
  return prices;
};

// Main function to get the TVL and liquidity unlocked
const getTVLandLiquidity = async () => {
  console.log("Starting to calculate TVL and unlocked liquidity...");

  const totalTVL = await fetchTVLData();

  const avaxPoolsInfo = await fetchPoolData(
    avalancheProvider,
    pools["avalanche"]
  );

  console.log(avaxPoolsInfo);
  const arbPoolsInfo = await fetchPoolData(arbitrumProvider, pools["arbitrum"]);

  const pricesAvalanche = await fetchPriceData(redstoneAvalancheApi);
  const pricesArbi = await fetchPriceData(redstoneArbitrumApi);

  const avaxPrice = parseFloat(pricesAvalanche.AVAX[0].dataPoints[0].value);
  const btcPrice = parseFloat(pricesAvalanche.BTC[0].dataPoints[0].value);
  const ethPrice = parseFloat(pricesAvalanche.ETH[0].dataPoints[0].value);
  const usdcPrice = parseFloat(pricesAvalanche.USDC[0].dataPoints[0].value);
  const usdtPrice = parseFloat(pricesAvalanche.USDT[0].dataPoints[0].value);
  const arbPrice = parseFloat(pricesArbi.ARB[0].dataPoints[0].value);

  console.log("Prices fetched:", {
    avaxPrice,
    btcPrice,
    ethPrice,
    usdcPrice,
    usdtPrice,
    arbPrice,
  });

  // Calculate liquidity unlocked
  const calculateUnlockedLiquidity = (pool, price, decimals) => {
    if (!pool || !pool.totalBorrowed) {
      console.error(`Missing data for pool ${pool.id}:`, pool);
      return 0;
    }

    const borrowed = formatUnits(pool.totalBorrowed, decimals);
    console.log(`Pool ${pool.id} - Borrowed: ${borrowed}, Price: ${price}`);

    const unlocked = parseFloat(borrowed) * price;
    console.log(`Liquidity unlocked for pool ${pool.id}: ${unlocked}`);
    return unlocked;
  };

  const avaxUsdcPool = avaxPoolsInfo.find(
    (pool) => pool.id.toLowerCase() === "usdc"
  );
  const avaxAvaxPool = avaxPoolsInfo.find(
    (pool) => pool.id.toLowerCase() === "avax"
  );
  const avaxBtcPool = avaxPoolsInfo.find(
    (pool) => pool.id.toLowerCase() === "btc"
  );
  const avaxEthPool = avaxPoolsInfo.find(
    (pool) => pool.id.toLowerCase() === "eth"
  );
  const avaxUsdtPool = avaxPoolsInfo.find(
    (pool) => pool.id.toLowerCase() === "usdt"
  );

  const arbUsdcPool = arbPoolsInfo.find(
    (pool) => pool.id.toLowerCase() === "usdc"
  );
  const arbEthPool = arbPoolsInfo.find(
    (pool) => pool.id.toLowerCase() === "eth"
  );
  const arbBtcPool = arbPoolsInfo.find(
    (pool) => pool.id.toLowerCase() === "btc"
  );
  const arbArbPool = arbPoolsInfo.find(
    (pool) => pool.id.toLowerCase() === "arb"
  );

  const unlockedLiquidity =
    parseFloat(web3.utils.fromWei(avaxAvaxPool.totalBorrowed.toString())) *
      avaxPrice +
    calculateUnlockedLiquidity(avaxBtcPool, btcPrice, "8") +
    parseFloat(web3.utils.fromWei(avaxEthPool.totalBorrowed.toString())) *
      ethPrice +
    calculateUnlockedLiquidity(avaxUsdcPool, usdcPrice, "6") +
    calculateUnlockedLiquidity(avaxUsdtPool, usdtPrice, "6") +
    calculateUnlockedLiquidity(arbEthPool, ethPrice, "18") +
    calculateUnlockedLiquidity(arbUsdcPool, usdcPrice, "6") +
    calculateUnlockedLiquidity(arbBtcPool, btcPrice, "8") +
    calculateUnlockedLiquidity(arbArbPool, arbPrice, "18");

  console.log("Liquidity Unlocked:", unlockedLiquidity);

  return { totalTVL, unlockedLiquidity };
};

// Usage example on client-side
if (typeof window !== "undefined") {
  getTVLandLiquidity().then(({ totalTVL, unlockedLiquidity }) => {
    console.log("Unlocked Liquidity:", unlockedLiquidity);
  });
}
