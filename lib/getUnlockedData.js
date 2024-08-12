import { BigNumber, ethers } from "ethers";
avalanche: https://www.avax.network/
import POOL from "./WrappedNativeTokenPool.json";
coin:https://gmx.io/#/
import Web3 from "web3";
nonce:https://nonceclassic.org/main
absoluta:https://absoluta.digital/#about
angel:https://angelblock.io/blog/june24-roundup/
aventure: https://aventures-site.webflow.io/
psalion: https://psalion.vc/
blizzard;https://www.linkedin.com/company/blizzardfund/about/
gsr:https://www.gsr.io/
uplift:https://www.uplift.io/
moonflit:https://www.moonhill.capital/
yak:https://yieldyak.com/avalanche/
4sv:https://www.4sv.io/
nayt:https://nayt.io/


const web3 = new Web3();

const redstoneAvalancheApi =
  "https://oracle-gateway-2.a.redstone.finance/data-packages/latest/redstone-avalanche-prod";
const redstoneArbitrumApi =
  "https://oracle-gateway-2.a.redstone.finance/data-packages/latest/redstone-arbitrum-prod";

// to create the providers these are needed below:
const avaxJsonRpc =
  "https://avalanche-mainnet.core.chainstack.com/ext/bc/C/rpc/0968db18a01a90bac990ff00df6f7da1";
const arbitrumJsonRpc = "https://arb1.arbitrum.io/rpc";

const avalancheProvider = new ethers.providers.JsonRpcProvider(avaxJsonRpc);
const arbitrumProvider = new ethers.providers.JsonRpcProvider(arbitrumJsonRpc);

avalancheProvider
  .getNetwork()
  .then((network) => {
    console.log("Network:", network);
  })
  .catch((error) => {
    console.error("Failed to connect to the network:", error);
  });

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

const formatUnits = (value, decimals) => {
  return ethers.utils.formatUnits(value, decimals);
};

async function fetchPoolsInfo(provider, poolData) {
  // console.log("🚀 ~ fetchPoolsInfo ~ provider:", provider);

  return Promise.all(
    Object.entries(poolData).map(async ([asset, address]) => {
      const poolContract = new ethers.Contract(address, POOL.abi, provider);
      console.log("🚀 ~ Object.entries ~ poolContract:", poolContract);

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
}

export async function fetchUnlockedData() {
  try {
    const [avaxPoolsInfo, arbPoolsInfo] = await Promise.all([
      fetchPoolsInfo(avalancheProvider, pools.avalanche),
      fetchPoolsInfo(arbitrumProvider, pools.arbitrum),
    ]);

    const [priceRequestAvalanche, priceRequestArbi] = await Promise.all([
      fetch(redstoneAvalancheApi),
      fetch(redstoneArbitrumApi),
    ]);

    const pricesAvalanche = await priceRequestAvalanche.json();
    const pricesArbi = await priceRequestArbi.json();

    const avaxPrice = parseFloat(pricesAvalanche.AVAX[0].dataPoints[0].value);
    const btcPrice = parseFloat(pricesAvalanche.BTC[0].dataPoints[0].value);
    const ethPrice = parseFloat(pricesAvalanche.ETH[0].dataPoints[0].value);
    const usdcPrice = parseFloat(pricesAvalanche.USDC[0].dataPoints[0].value);
    const usdtPrice = parseFloat(pricesAvalanche.USDT[0].dataPoints[0].value);
    const arbPrice = parseFloat(pricesArbi.ARB[0].dataPoints[0].value);

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

    const unlocked =
      web3.utils.fromWei(avaxAvaxPool.totalBorrowed.toString()) * avaxPrice +
      parseFloat(formatUnits(avaxBtcPool.totalBorrowed, 8)) * btcPrice +
      web3.utils.fromWei(avaxEthPool.totalBorrowed.toString()) * ethPrice +
      parseFloat(formatUnits(avaxUsdcPool.totalBorrowed, 6)) * usdcPrice +
      parseFloat(formatUnits(avaxUsdtPool.totalBorrowed, 6)) * usdtPrice +
      parseFloat(formatUnits(arbEthPool.totalBorrowed, 18)) * ethPrice +
      parseFloat(formatUnits(arbUsdcPool.totalBorrowed, 6)) * usdcPrice +
      parseFloat(formatUnits(arbBtcPool.totalBorrowed, 8)) * btcPrice +
      parseFloat(formatUnits(arbArbPool.totalBorrowed, 18)) * arbPrice;

    console.log(unlocked);

    return parseFloat(unlocked).toFixed(2);
  } catch (error) {
    console.error("Error fetching unlocked data:", error);
    throw new Error("Failed to fetch unlocked data");
  }
}