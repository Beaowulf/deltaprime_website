"use client";
// components/AprsComponent.js
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import "./tableStyling.css";
import POOL from "./WrappedNativeTokenPool.json";
import { formatUnits } from "ethers/lib/utils";

const AprsComponent = () => {
  const [poolsData, setPoolsData] = useState({ arbitrum: [], avalanche: [] });

  useEffect(() => {
    const setupAprs = async () => {
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

      let allPoolsData = { arbitrum: [], avalanche: [] };

      for (let network of Object.keys(pools)) {
        const jsonRPC = jsonRpcs[network];
        const provider = new ethers.providers.JsonRpcProvider(jsonRPC);

        const poolsInfo = await Promise.all(
          Object.entries(pools[network]).map(async ([asset, address]) => {
            const poolContract = new ethers.Contract(
              address,
              POOL.abi,
              provider
            );
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

        const fetchPricesWithRetry = async (retries, delay) => {
          for (let i = 0; i < retries; i++) {
            try {
              const priceRequest = await fetch(redstoneApi);
              const prices = await priceRequest.json();
              return prices;
            } catch (error) {
              console.log(`Attempt ${i + 1} failed. Retrying in ${delay}ms...`);
              await new Promise((resolve) => setTimeout(resolve, delay));
            }
          }
          throw new Error("Failed to fetch prices after several attempts");
        };

        const prices = await fetchPricesWithRetry(5, 1000);

        const LTIPPoolsBoostRequest = await fetch(LTIPPoolBoostApi);
        const LTIPPoolsBoost = await LTIPPoolsBoostRequest.json();

        allPoolsData[network] = Object.keys(pools[network])
          .map((symbol) => {
            const poolInfo = poolsInfo.find(
              (pool) => pool.id.toLowerCase() === symbol.toLowerCase()
            );
            const price = prices[symbol]?.[0].dataPoints[0].value;
            if (!price) {
              return null; // Skip this pool if price is not available
            }
            const apy =
              ethers.utils.formatUnits(poolInfo.depositRate, 18) * 100;
            const tvl = formatUnits(poolInfo.totalSupply, 18);
            const miningApr =
              network === "arbitrum" ? LTIPPoolsBoost[symbol] * 100 : 0;

            let formattedTotalSupply;
            if (!tvl) formattedTotalSupply = "";
            const tvlInUsd = tvl * price;
            if (tvlInUsd < 1000000) {
              formattedTotalSupply = `$${(tvlInUsd / 1000).toFixed()}k`;
            } else {
              formattedTotalSupply = `$${(tvlInUsd / 1000000).toFixed()}M`;
            }

            return { symbol, apy, miningApr, formattedTotalSupply, price };
          })
          .filter((pool) => pool && pool.formattedTotalSupply !== "$0k");

        allPoolsData[network].sort(
          (a, b) => b.apy + b.miningApr - (a.apy + a.miningApr)
        );
      }

      setPoolsData(allPoolsData);
      console.log(allPoolsData);
    };

    setupAprs();
  }, []);

  return (
    <div>
      <h1>Arbitrum Pools</h1>

      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block w-[400px] py-2 sm:px-6 lg:px-8 rounded-[30px] bg-white">
            <div className="overflow-hidden roundedTableHheads">
              <table className="min-w-full text-center text-sm font-light text-surface dark:text-white">
                <thead className="headerTable font-medium">
                  <tr className="text-black headerTable">
                    <div className="flex w-full flex-row justify-between">
                      <div>hello 1</div>
                      <div>hello 2</div>
                      <div>hello 3</div>
                    </div>
                    {/* <th scope="col" className="px-6 py-4">
                      Asset
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Pool Size
                    </th>
                    <th scope="col" className="px-6 py-4">
                      APY
                    </th> */}
                  </tr>
                </thead>
                <tbody>
                  {poolsData.arbitrum.map((pool) => (
                    <tr
                      key={pool.symbol}
                      className="border-b border-neutral-200 dark:border-white/10 "
                    >
                      <td className="whitespace-nowrap px-6 py-4 text-black font-medium">
                        {pool.symbol}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-[12px] font-medium text-black">
                        {pool.formattedTotalSupply}
                      </td>
                      <td className="whitespace-nowrap tableAPYData px-6 py-4">
                        <p className="text-[12px] font-semibold">
                          {pool.apy.toFixed(1)}%
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[30px] p-8 max-w-[340px]">
        <div>
          <h4 className="text-black">Header</h4>
        </div>
        {/* Headers */}
        <div className="rounded-[80px] bg-[#FBFAFF] border-[2px] border-[#EAEBFF] flex flex-row py-4 px-4 justify-between">
          <p className="text-[#3d3a3a] font-semibold text-nowrap">Asset</p>
          <p className="text-[#696969] font-semibold text-nowrap">Pool Size</p>
          <p className="text-[#696969] font-semibold text-nowrap">APY</p>
        </div>
        {/* custom table */}
        <div className="flex flex-row justify-between">
          <div>
            <p className="text-black">Hello Data 1</p>
          </div>
          <div>
            <p className="text-black">Hello Data 1</p>
          </div>
          <div>
            <p className="text-black">Hello Data 1</p>
          </div>
        </div>
      </div>

      {/* <table className="table-auto mb-40">
        <thead>
          <tr>
            <th>Asset</th>
            <th>Pool Size</th>
            <th>APY</th>
          </tr>
        </thead>
        <tbody>
          {poolsData.arbitrum.map((pool) => (
            <tr key={pool.symbol}>
              <td className="tableSymbol">{pool.symbol}</td>
              <td className="tableSupplyTotal">{pool.formattedTotalSupply}</td>
              <td className="text-[12px] text-[#00BF68] font-semibold">
                {pool.apy.toFixed(1)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}

      <h1>Avalanche Pools</h1>

      {/* <table className="table-auto mb-40">
        <thead>
          <tr>
            <th>Asset</th>
            <th>Pool Size</th>
            <th>APY</th>
          </tr>
        </thead>
        <tbody>
          {poolsData.avalanche.map((pool) => (
            <tr key={pool.symbol}>
              <td className="tableSymbol">{pool.symbol}</td>
              <td className="tableSupplyTotal">{pool.formattedTotalSupply}</td>
              <td className="text-[12px] text-[#00BF68] font-semibold">
                {pool.apy.toFixed(1)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default AprsComponent;
