import { ethers } from "ethers";
import POOL from "./WrappedNativeTokenPool.json";
import { formatUnits } from "ethers/lib/utils";

const pools = {
  arbitrum: {
    ETH: "0x0BeBEB5679115f143772CfD97359BBcc393d46b3",
    USDC: "0x8FE3842e0B7472a57f2A2D56cF6bCe08517A1De0",
    ARB: "0x2B8C610F3fC6F883817637d15514293565C3d08A",
    BTC: "0x5CdE36c23f0909960BA4D6E8713257C6191f8C35",
    DAI: "0xd5e8f691756c3d7b86fd8a89a06497d38d362540",
  },
  avalanche: {
    USDC: "0x2323dAC85C6Ab9bd6a8B5Fb75B0581E31232d12b",
    AVAX: "0xD26E504fc642B96751fD55D3E68AF295806542f5",
    BTC: "0x475589b0Ed87591A893Df42EC6076d2499bB63d0",
    ETH: "0xD7fEB276ba254cD9b34804A986CE9a8C3E359148",
    USDT: "0xd222e10D7Fe6B7f9608F14A8B5Cf703c74eFBcA1",
  },
};

const jsonRpcs = {
  arbitrum: "https://arb1.arbitrum.io/rpc",
  avalanche:
    "https://avalanche-mainnet.core.chainstack.com/ext/bc/C/rpc/0968db18a01a90bac990ff00df6f7da1",
};

const redstoneApi =
  "https://oracle-gateway-1.b.redstone.finance/data-packages/latest/redstone-main-demo";

const LTIPPoolBoostApi =
  "https://2t8c1g5jra.execute-api.us-east-1.amazonaws.com/ltip-pool-boost-apy";

const fetchTokenDecimals = async (contract) => {
  try {
    const decimals = await contract.decimals();
    return decimals;
  } catch (error) {
    console.error("Error fetching token decimals:", error);
    return 18; // Fallback to 18 decimals if fetching fails
  }
};

export const fetchCryptoData = async () => {
  let allPoolsData = { arbitrum: [], avalanche: [] };
  let totalAvailableLiquidity = 0;
  let totalBorrowedLiquidity = 0;

  for (let network of Object.keys(pools)) {
    console.log(`Fetching data for network: ${network}`);
    const jsonRPC = jsonRpcs[network];
    const provider = new ethers.providers.JsonRpcProvider(jsonRPC);

    const poolsInfo = await Promise.all(
      Object.entries(pools[network]).map(async ([asset, address]) => {
        console.log(`Fetching data for asset: ${asset} with address: ${address}`);
        const poolContract = new ethers.Contract(address, POOL.abi, provider);

        // Fetch the correct decimals for the token
        const decimals = await fetchTokenDecimals(poolContract);
        console.log(`Decimals for ${asset}: ${decimals}`);

        // Exponential backoff logic for fetching pool details
        const fetchWithRetry = async (retries, delay) => {
          for (let i = 0; i < retries; i++) {
            try {
              const poolDetails = await Promise.all([
                poolContract.totalSupply(),
                poolContract.getDepositRate(),
                poolContract.totalBorrowed(),
              ]);
              console.log(`Pool details for ${asset}:`, poolDetails);

              const totalSupply = ethers.utils.formatUnits(poolDetails[0], decimals);
              const depositRate = ethers.utils.formatUnits(poolDetails[1], 18); // Assuming APY is returned with 18 decimals
              const totalBorrowed = ethers.utils.formatUnits(poolDetails[2], decimals);

              return {
                id: asset,
                totalSupply,
                depositRate,
                totalBorrowed,
              };
            } catch (error) {
              console.log(`Attempt ${i + 1} failed. Retrying in ${delay}ms...`, error);
              await new Promise((resolve) => setTimeout(resolve, delay));
              delay *= 2; // Exponential backoff
            }
          }
          throw new Error(`Failed to fetch details for ${asset} after several attempts`);
        };

        return fetchWithRetry(5, 1000);
      })
    );

    console.log(`Pools info for ${network}:`, poolsInfo);

    const fetchPricesWithRetry = async (retries, delay) => {
      for (let i = 0; i < retries; i++) {
        try {
          console.log(`Fetching prices from Redstone API (Attempt ${i + 1})`);
          const priceRequest = await fetch(redstoneApi);
          if (!priceRequest.ok) {
            throw new Error(`Failed to fetch prices. Status: ${priceRequest.status}`);
          }
          const prices = await priceRequest.json();
          console.log("Prices fetched:", prices);
          return prices;
        } catch (error) {
          console.log(`Attempt ${i + 1} failed. Retrying in ${delay}ms...`, error);
          await new Promise((resolve) => setTimeout(resolve, delay));
          delay *= 2; // Exponential backoff
        }
      }
      throw new Error("Failed to fetch prices after several attempts");
    };

    const prices = await fetchPricesWithRetry(5, 1000);

    const LTIPPoolsBoostRequest = await fetch(LTIPPoolBoostApi);
    const LTIPPoolsBoost = await LTIPPoolsBoostRequest.json();
    console.log("LTIP Pools Boost data:", LTIPPoolsBoost);

    allPoolsData[network] = Object.keys(pools[network])
      .map((symbol) => {
        const poolInfo = poolsInfo.find(
          (pool) => pool.id.toLowerCase() === symbol.toLowerCase()
        );

        if (!poolInfo) {
          console.error(`No pool info found for symbol: ${symbol}`);
          return null;
        }

        console.log(`Processing pool data for symbol: ${symbol}`);
        const price = prices[symbol]?.[0].dataPoints[0].value;

        if (!price) {
          console.error(`No price found for symbol: ${symbol}`);
          return null;
        }

        const apy = poolInfo.depositRate * 100;
        const miningApr = network === "arbitrum" ? LTIPPoolsBoost[symbol] * 100 : 0;
        const combinedApy = apy + miningApr; // Adding the LTIPP boost to the base APY

        const totalSupplyInUsd = poolInfo.totalSupply * price;
        const totalBorrowedInUsd = poolInfo.totalBorrowed * price;
        const availableLiquidity = totalSupplyInUsd - totalBorrowedInUsd; // Available liquidity

        // Sum up the total available liquidity and total borrowed liquidity
        totalAvailableLiquidity += parseFloat(availableLiquidity);
        totalBorrowedLiquidity += parseFloat(totalBorrowedInUsd);

        return {
          symbol,
          apy: combinedApy, // Using the combined APY for display
          miningApr,
          availableLiquidity,
          totalBorrowedInUsd,
          price,
        };
      })
      .filter((pool) => pool);

    allPoolsData[network].sort((a, b) => b.apy - a.apy);
  }

  console.log("Final allPoolsData:", allPoolsData);
  console.log("Total Available Liquidity (USD):", totalAvailableLiquidity.toFixed(2));
  console.log("Total Borrowed Liquidity (USD):", totalBorrowedLiquidity.toFixed(2));
  return {
    poolsData: allPoolsData,
    totalBorrowedLiquidity,
  };
};
