import { BigNumber, ethers } from "ethers";
import { pools } from "@/js/constants";
import POOL from "@/abi/WrappedNativeTokenPool.json";
import { formatUnits, fromWei } from "@/js/utils";

import { formatUnits } from "ethers/lib/utils";

// Define APIs and JSON RPC endpoints
const redstoneAvalancheApi =
  "https://oracle-gateway-2.a.redstone.finance/data-packages/latest/redstone-avalanche-prod";
const redstoneArbitrumApi =
  "https://oracle-gateway-2.a.redstone.finance/data-packages/latest/redstone-arbitrum-prod";
const avaxJsonRpc =
  "https://avalanche-mainnet.core.chainstack.com/ext/bc/C/rpc/0968db18a01a90bac990ff00df6f7da1";
const arbitrumJsonRpc = "https://arb1.arbitrum.io/rpc";

const avalancheProvider = new ethers.providers.JsonRpcProvider(avaxJsonRpc);
const arbitrumProvider = new ethers.providers.JsonRpcProvider(arbitrumJsonRpc);

// Define URLs for fetching TVL data
const deltaPrimeTvlAvalanche =
  "https://88qj68w64k.execute-api.eu-west-3.amazonaws.com/manageProtocol?getLatestTVL";
const deltaPrimeTvlArbitrum =
  "https://88qj68w64k.execute-api.eu-west-3.amazonaws.com/manageProtocolArbi?getLatestTVL";

// Fetch TVL data
const fetchTVLData = async () => {
  let tvlInfo = await Promise.all([
    fetch(deltaPrimeTvlAvalanche),
    fetch(deltaPrimeTvlArbitrum),
  ]);

  tvlInfo = (await Promise.all(tvlInfo.map((el) => el.json()))).map(
    (el) => el.tvl
  );
  const totalTVL = tvlInfo[0] + tvlInfo[1];

  return totalTVL;
};

// Fetch pool data
const fetchPoolData = async (provider, poolAddresses) => {
  const poolsInfo = await Promise.all(
    Object.entries(poolAddresses).map(async ([asset, address]) => {
      const poolContract = new ethers.Contract(address, POOL.abi, provider);
      const poolDetails = await Promise.all([
        poolContract.totalSupply(),
        poolContract.getDepositRate(),
        poolContract.totalBorrowed(),
      ]);

      return {
        id: asset,
        totalSupply: poolDetails[0],
        depositRate: poolDetails[1],
        totalBorrowed: poolDetails[2],
      };
    })
  );

  return poolsInfo;
};

// Fetch price data
const fetchPriceData = async (apiUrl) => {
  const priceRequest = await fetch(apiUrl);
  const prices = await priceRequest.json();

  return prices;
};

// Main function to get the TVL and liquidity unlocked
const getTVLandLiquidity = async () => {
  const totalTVL = await fetchTVLData();

  const avaxPoolsInfo = await fetchPoolData(
    avalancheProvider,
    pools["avalanche"]
  );
  const arbPoolsInfo = await fetchPoolData(arbitrumProvider, pools["arbitrum"]);

  const pricesAvalanche = await fetchPriceData(redstoneAvalancheApi);
  const pricesArbi = await fetchPriceData(redstoneArbitrumApi);

  const avaxPrice = parseFloat(pricesAvalanche.AVAX[0].dataPoints[0].value);
  const btcPrice = parseFloat(pricesAvalanche.BTC[0].dataPoints[0].value);
  const ethPrice = parseFloat(pricesAvalanche.ETH[0].dataPoints[0].value);
  const usdcPrice = parseFloat(pricesAvalanche.USDC[0].dataPoints[0].value);
  const usdtPrice = parseFloat(pricesAvalanche.USDT[0].dataPoints[0].value);
  const arbPrice = parseFloat(pricesArbi.ARB[0].dataPoints[0].value);

  // Calculate liquidity unlocked
  const calculateUnlockedLiquidity = (pool, price, decimals) => {
    return (
      parseFloat(formatUnits(pool.totalBorrowed, BigNumber.from(decimals))) *
      price
    );
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
    fromWei(avaxAvaxPool.totalBorrowed) * avaxPrice +
    calculateUnlockedLiquidity(avaxBtcPool, btcPrice, "8") +
    fromWei(avaxEthPool.totalBorrowed) * ethPrice +
    calculateUnlockedLiquidity(avaxUsdcPool, usdcPrice, "6") +
    calculateUnlockedLiquidity(avaxUsdtPool, usdtPrice, "6") +
    calculateUnlockedLiquidity(arbEthPool, ethPrice, "18") +
    calculateUnlockedLiquidity(arbUsdcPool, usdcPrice, "6") +
    calculateUnlockedLiquidity(arbBtcPool, btcPrice, "8") +
    calculateUnlockedLiquidity(arbArbPool, arbPrice, "18");

  return { totalTVL, unlockedLiquidity };
};

// Usage example
getTVLandLiquidity().then(({ totalTVL, unlockedLiquidity }) => {
  console.log("Total TVL:", totalTVL);
  console.log("Liquidity Unlocked:", unlockedLiquidity);
});
