import { ethers } from "ethers";
import POOL from "./WrappedNativeTokenPool.json";
import IDepositRewarder from "./IDepositRewarder.json";
import { decimals } from "./constants";

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

const redstoneApiAvalanche =
  "https://oracle-gateway-2.a.redstone.finance/data-packages/latest/redstone-avalanche-prod";

const redstoneApiArbitrum =
  "https://oracle-gateway-2.a.redstone.finance/data-packages/latest/redstone-arbitrum-prod";

const LTIPPoolBoostApi =
  "https://2t8c1g5jra.execute-api.us-east-1.amazonaws.com/ltip-pool-boost-apy";

const secondsInYear = 3600 * 24 * 365;

const avalancheBoostConfig = {
  AVAX: {
    depositRewarderAddress: "0x6d149Fcc150A3B097D7647408345898fe9db1ded",
    rewardToken: "sAVAX",
  },
  USDC: {
    depositRewarderAddress: "0xB913aC229910d705297DEB1c168af3dA1416B227",
    rewardToken: "ggAVAX",
  },
  USDT: {
    depositRewarderAddress: "0x3750F8d6Df82699ada6bBd1463C4E91fCf37005D",
    rewardToken: "sAVAX",
  },
  BTC: {
    depositRewarderAddress: "0x50b0b59f14bA882BD511Fe08d1cdc975807a94A4",
    rewardToken: "ggAVAX",
  },
};

// Retry fetch function with limits and reduced memory usage
const fetchPricesWithRetry = async (retries, delay) => {
  let attempt = 0;
  while (attempt < retries) {
    try {
      const [priceRequestAvalanche, priceRequestArbitrum] = await Promise.all([
        fetch(redstoneApiAvalanche),
        fetch(redstoneApiArbitrum),
      ]);

      if (!priceRequestAvalanche.ok || !priceRequestArbitrum.ok) {
        throw new Error(`Failed to fetch prices for one or more networks`);
      }

      const [pricesAvalanche, pricesArbitrum] = await Promise.all([
        priceRequestAvalanche.json(),
        priceRequestArbitrum.json(),
      ]);

      return { ...pricesArbitrum, ...pricesAvalanche };
    } catch (error) {
      console.log(`Error fetching prices, attempt ${attempt + 1}. Retrying...`);
      await new Promise((resolve) => setTimeout(resolve, delay));
      attempt++;
      delay = Math.min(delay * 2, 8000); // Cap the exponential backoff to avoid excessively long delays
    }
  }
  throw new Error("Failed to fetch prices after multiple attempts");
};

// Get boost rates for Avalanche
const getAvalancheBoostRates = async (symbols, prices, provider) => {
  const boostRates = {};

  await Promise.all(
    symbols.map(async (symbol) => {
      const config = avalancheBoostConfig[symbol];
      if (!config) return;

      const rewarderContract = new ethers.Contract(
        config.depositRewarderAddress,
        IDepositRewarder.abi,
        provider
      );

      try {
        const rewardRate = await rewarderContract.rewardRate();
        const rewardRatePerYear = ethers.utils.formatUnits(
          rewardRate.mul(secondsInYear),
          18
        );
        const rewardTokenPrice =
          prices[config.rewardToken]?.[0].dataPoints[0].value || 0;

        boostRates[symbol] = parseFloat(rewardRatePerYear) * rewardTokenPrice;
      } catch (error) {
        console.error(`Error fetching boost rates for ${symbol}:`, error);
      }
    })
  );

  return boostRates;
};

export const fetchCryptoData = async () => {
  let allPoolsData = { arbitrum: [], avalanche: [] };
  let totalAvailableLiquidity = 0;
  let totalBorrowedLiquidity = 0;

  // Fetch prices and LTIP boost data concurrently
  const [prices, LTIPPoolsBoost] = await Promise.all([
    fetchPricesWithRetry(3, 1000),
    fetch(LTIPPoolBoostApi).then((response) => response.json()),
  ]);

  await Promise.all(
    Object.keys(pools).map(async (network) => {
      console.log(`Fetching data for network: ${network}`);
      const jsonRPC = jsonRpcs[network];
      const provider = new ethers.providers.JsonRpcProvider(jsonRPC);

      const poolsInfo = await Promise.all(
        Object.entries(pools[network]).map(async ([asset, address]) => {
          try {
            const poolContract = new ethers.Contract(
              address,
              POOL.abi,
              provider
            );

            const decimalsForAsset = decimals[asset.toUpperCase()] || 18;
            const [totalSupplyRaw, depositRateRaw, totalBorrowedRaw] =
              await Promise.all([
                poolContract.totalSupply(),
                poolContract.getDepositRate(),
                poolContract.totalBorrowed(),
              ]);

            const totalSupply = ethers.utils.formatUnits(
              totalSupplyRaw,
              decimalsForAsset
            );
            const depositRate = ethers.utils.formatUnits(depositRateRaw, 18);
            const totalBorrowed = ethers.utils.formatUnits(
              totalBorrowedRaw,
              decimalsForAsset
            );

            return {
              id: asset,
              totalSupply,
              depositRate,
              totalBorrowed,
            };
          } catch (error) {
            console.error(`Error fetching data for ${asset}: ${error.message}`);
            return null; // Skip this asset if there's an error
          }
        })
      ).then((results) => results.filter((r) => r !== null)); // Filter out any failed fetches

      const AvalancheBoostRates =
        network === "avalanche"
          ? await getAvalancheBoostRates(
              Object.keys(pools[network]),
              prices,
              provider
            )
          : {};

      allPoolsData[network] = poolsInfo
        .map((poolInfo) => {
          const symbol = poolInfo.id;
          const price = prices[symbol]?.[0].dataPoints[0].value;

          if (!price) {
            console.error(`No price found for symbol: ${symbol}`);
            return null;
          }

          const apy = poolInfo.depositRate * 100;
          let miningApr = 0;

          if (network === "arbitrum") {
            miningApr = LTIPPoolsBoost[symbol]
              ? LTIPPoolsBoost[symbol] * 100
              : 0;
          } else {
            miningApr = AvalancheBoostRates[symbol]
              ? (AvalancheBoostRates[symbol] /
                  (parseFloat(poolInfo.totalSupply) * price)) *
                100
              : 0;
          }

          const combinedApy = apy + miningApr;
          const totalSupplyInUsd = poolInfo.totalSupply * price;
          const totalBorrowedInUsd = poolInfo.totalBorrowed * price;
          const availableLiquidity = totalSupplyInUsd - totalBorrowedInUsd;

          totalAvailableLiquidity += availableLiquidity;
          totalBorrowedLiquidity += totalBorrowedInUsd;

          let formattedTotalSupply = "";
          if (totalSupplyInUsd < 1_000_000) {
            formattedTotalSupply = `$${(totalSupplyInUsd / 1_000).toFixed(2)}k`;
          } else {
            formattedTotalSupply = `$${(totalSupplyInUsd / 1_000_000).toFixed(
              2
            )}M`;
          }

          return {
            symbol,
            apy: isNaN(combinedApy) ? apy : combinedApy,
            miningApr: isNaN(miningApr) ? 0 : miningApr,
            availableLiquidity,
            totalBorrowedInUsd,
            price,
            formattedTotalSupply,
          };
        })
        .filter((pool) => pool && pool.formattedTotalSupply !== "$0.00k");

      allPoolsData[network].sort(
        (a, b) => b.apy + b.miningApr - (a.apy + a.miningApr)
      );
    })
  );

  return {
    poolsData: allPoolsData,
    totalBorrowedLiquidity,
  };
};
