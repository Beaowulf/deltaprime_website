"use client";
// components/AprsComponent.js
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ethers } from "ethers";
import "./tableStyling.css";
import POOL from "./WrappedNativeTokenPool.json";
import { formatUnits } from "ethers/lib/utils";
import avalanche from "@/public/assets/icons/avalanche.svg";
import arbitrum from "@/public/assets/icons/arbitrum.svg";
import Link from "next/link";

const CryptoPreviewTables = () => {
  const [poolsData, setPoolsData] = useState({ arbitrum: [], avalanche: [] });
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const setupAprs = async () => {
      try {
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
                console.log(
                  `Attempt ${i + 1} failed. Retrying in ${delay}ms...`
                );
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

              return {
                symbol,
                apy,
                miningApr,
                formattedTotalSupply,
                price,
              };
            })
            .filter((pool) => pool && pool.formattedTotalSupply !== "$0k");

          allPoolsData[network].sort(
            (a, b) => b.apy + b.miningApr - (a.apy + a.miningApr)
          );
        }

        setPoolsData(allPoolsData);
        setLoading(false); // Set loading to false after data is loaded
        console.log(allPoolsData);
      } catch (error) {
        console.error("Error setting up APRs:", error);
      }
    };

    setupAprs();
  }, []);

  return (
    <div className="flex flex-col gap-10">
      {/* 1 box */}
      <div className="bg-white rounded-[30px] px-4 pb-1 pt-4 md:px-8 md:pb-2 md:pt-8 max-w-[340px]">
        <div className="flex flex-row items-center justify-start gap-3">
          <h4 className="text-black mb-[10px] font-bold">Avalanche</h4>
          <Image
            src={avalanche}
            width={20}
            height={20}
            alt="avalanche_logo"
            className="mb-2"
          />
        </div>
        {/* Headers */}
        <div className="rounded-[80px] bg-[#FBFAFF] border-[2px] border-[#EAEBFF] flex flex-row py-1 px-4 justify-between">
          <p className="text-[#3d3a3a] font-semibold text-nowrap text-[10px]">
            Asset
          </p>
          <p className="text-[#696969] font-semibold text-nowrap text-[10px]">
            Pool Size
          </p>
          <p className="text-[#696969] font-semibold text-nowrap text-[10px] pr-1">
            APY
          </p>
        </div>
        {/* custom table */}
        {/* row */}
        {loading ? (
          <div className="loader">Loading...</div>
        ) : (
          <div>
            {poolsData.avalanche.map((pool) => (
              <React.Fragment key={pool.symbol}>
                <div className="flex flex-row justify-between px-4">
                  <div>
                    <p className="text-black text-[11px] pt-3 font-medium">
                      {pool.symbol}
                    </p>
                  </div>
                  <div>
                    <p className="text-black text-[11px] pt-3 font-medium">
                      {pool.formattedTotalSupply}
                    </p>
                  </div>
                  <div>
                    <p className="text-black text-[11px] pt-3 font-medium">
                      {pool.apy.toFixed(1)}%
                    </p>
                  </div>
                </div>
                <div className="w-full h-1 mt-[12px] bg-gradient-to-r from-[#dfe0ff] from-40% via-[#ffe1c2] via-60% to-[#ffd3e0] to-70% "></div>
              </React.Fragment>
            ))}
            <div className="text-end mt-2">
              <Link
                href="/#"
                className="text-[#808080] font-medium mt-1 text-[11px]"
              >
                ... and more
              </Link>
            </div>
          </div>
        )}
      </div>
      {/* 1 box */}
      <div className="bg-white rounded-[30px] px-4 pb-1 pt-4 md:px-8 md:pb-2 md:pt-8 max-w-[340px]">
        <div className="flex flex-row items-center justify-start gap-3">
          <h4 className="text-black mb-[10px] font-bold">Arbitrum</h4>
          <Image
            src={arbitrum}
            width={20}
            height={20}
            alt="arbitrum_logo"
            className="mb-2"
          />
        </div>
        {/* Headers */}
        <div className="rounded-[80px] bg-[#FBFAFF] border-[2px] border-[#EAEBFF] flex flex-row py-1 px-4 justify-between">
          <p className="text-[#3d3a3a] font-semibold text-nowrap text-[10px]">
            Asset
          </p>
          <p className="text-[#696969] font-semibold text-nowrap text-[10px]">
            Pool Size
          </p>
          <p className="text-[#696969] font-semibold text-nowrap text-[10px] pr-1">
            APY
          </p>
        </div>
        {/* custom table */}
        {/* row */}
        {loading ? (
          <div className="loader">Loading...</div>
        ) : (
          <div>
            {poolsData.arbitrum.map((pool) => (
              <React.Fragment key={pool.symbol}>
                <div className="flex flex-row justify-between px-4">
                  <div>
                    <p className="text-black text-[11px] pt-3 font-medium">
                      {pool.symbol}
                    </p>
                  </div>
                  <div>
                    <p className="text-black text-[11px] pt-3 font-medium">
                      {pool.formattedTotalSupply}
                    </p>
                  </div>
                  <div>
                    <p className="text-black text-[11px] pt-3 font-medium">
                      {pool.apy.toFixed(1)}%
                    </p>
                  </div>
                </div>
                <div className="w-full h-1 mt-[12px] bg-gradient-to-r from-[#dfe0ff] from-40% via-[#ffe1c2] via-60% to-[#ffd3e0] to-70% "></div>
              </React.Fragment>
            ))}
            <div className="text-end mt-2">
              <Link
                href="/#"
                className="text-[#808080] font-medium mt-1 text-[11px]"
              >
                ... and more
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CryptoPreviewTables;
