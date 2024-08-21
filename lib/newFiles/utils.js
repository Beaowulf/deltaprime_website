import {avalancheBoostConfig, decimals} from "./constants";
import DEPOSIT_REWARDER from "@/abi/IDepositRewarder.json";
const ethers = require('ethers');


const camelize = (str) => {
  const text = str.replace(/[-_\s.]+(.)?/g, (_, c) =>
    c ? c.toUpperCase() : ""
  );
  return `${text.substr(0, 1).toLowerCase()}${text.substr(1)}`;
};

export const fromWei = (val) => parseFloat(ethers.utils.formatEther(val));

export const formatUnits = ethers.utils.formatUnits;

const utils = {
  camelize,
  fromWei,
  formatUnits
};

export async function getAvalancheBoostRates(poolAsset, redstonePriceData, provider) {
  const avalancheBoostRates = {};
  for (let asset of poolAsset) {
    if (avalancheBoostConfig[asset]) {
      const rewarderContract = new ethers.Contract(avalancheBoostConfig[asset].depositRewarderAddress, DEPOSIT_REWARDER.abi, provider);
      const price = redstonePriceData[avalancheBoostConfig[asset].rewardToken] ? redstonePriceData[avalancheBoostConfig[asset].rewardToken][0].dataPoints[0].value : 0;
      const rate = await rewarderContract.rewardRate();

      avalancheBoostRates[asset] = price * formatUnits(rate, decimals[poolAsset]);
    } else {
      avalancheBoostRates[asset] = 0;
    }
  }


  return avalancheBoostRates;
}

export default utils;
