"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import "./modals.css";
import { useSearchParams, usePathname } from "next/navigation";
import { DeltaPurpleButton } from "@/app/components/buttons/mainButton";
import closeIconColored from "@/public/assets/icons/closeIconColored.svg";
import Link from "next/link";
import { useCryptoData } from "@/app/context/CryptoDataContext"; // Import the context

const LaunchAppModal = () => {
  const { poolsData, loading } = useCryptoData();

  const avalancheData = poolsData.avalanche.filter(
    (item) =>
      item.symbol === "ETH" || item.symbol === "USDT" || item.symbol === "AVAX"
  );

  const arbitrumData = poolsData.arbitrum.filter(
    (item) =>
      item.symbol === "ETH" || item.symbol === "USDC" || item.symbol === "BTC"
  );

  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathname = usePathname();

  useEffect(() => {
    if (modal) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [modal]);

  return (
    <>
      {modal && (
        <dialog className="modalP fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 overflow-auto backdrop-blur flex justify-center items-center">
          <div className="modalParent relative w-full md:w-fit">
            <div className="w-full md:w-fit justify-center bg-[#f4f4ff] flex flex-col px-4 pb-4 md:px-12 rounded-[25px] shadowModal">
              <div className="pt-5 pb-2 pl-5 pr-5 w-full h-fit text-black cursor-pointer z-50 flex items-center justify-end">
                <Link
                  className="z-100 cursor-pointer"
                  href={pathname}
                  scroll={false}
                >
                  <Image
                    src={closeIconColored}
                    width={20}
                    height={20}
                    alt="close_X_Button"
                  />
                </Link>
              </div>
              <h4 className="leading-5 text-[32px] text-[#6B70ED] text-center font-medium mb-10">
                Launch your App
              </h4>
              <div className="flex flex-col md:flex-row justify-center gap-4 md:mt-8 mx-0 items-center">
                {/* Left side */}
                <div className="flex justify-center flex-col gap-1 items-center modalWrapper md:w-full h-[16rem] w-[17rem]">
                  <div className="modalContent w-full h-full">
                    <div className="w-full bg-[#6B70ED] py-1 rounded-t-[25px] mt-[0.5px] mx-[0.25px] mb-2">
                      <p className="mx-auto w-fit text-white font-bold">
                        Savings Account
                      </p>
                    </div>
                    <div className="px-4 pb-7 pt-2 rounded-[20px]">
                      <div className="flex gap-4 items-start justify-center mx-4">
                        <div>
                          <p className="text-[#6B70ED] font-bold">Arbitrum:</p>
                          {loading ? (
                            <div className="loader"></div>
                          ) : (
                            arbitrumData.map((pool, index) => (
                              <h5
                                className="text-[#565AC2] font-medium text-[14px]"
                                key={index}
                              >
                                {pool.symbol} {pool.apy.toFixed(1)}%
                              </h5>
                            ))
                          )}
                        </div>
                        <div>
                          <p className="text-[#6B70ED] font-bold text-[16px]">
                            Avalanche:
                          </p>
                          {loading ? (
                            <div className="loader"></div>
                          ) : (
                            avalancheData.map((pool, index) => (
                              <h5
                                className="text-[#565AC2] font-medium text-[14px]"
                                key={index}
                              >
                                {pool.symbol} {pool.apy.toFixed(1)}%
                              </h5>
                            ))
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full">
                      <div className="flex justify-center items-center pb-4">
                        <Link
                          className="mx-auto"
                          target="_blank"
                          href="https://app.deltaprime.io/#/pools"
                        >
                          <DeltaPurpleButton
                            className="px-3 py-3"
                            label="Launch App"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-fit flex place-items-center">
                  <p className="text-[#6B70ED] font-medium text-[32px] mx-auto md:m-0">
                    OR
                  </p>
                </div>

                {/* Right side */}
                <div className="flex justify-center flex-col gap-1 items-center modalWrapper md:w-full h-[16rem] w-[17rem]">
                  <div className="modalContent w-full h-full">
                    <div className="w-full bg-[#6B70ED] py-1 rounded-t-[25px] mt-[0.5px] mx-[0.25px] mb-2">
                      <p className="mx-auto w-fit text-white font-bold">
                        Prime Account
                      </p>
                    </div>
                    <div className="px-4 pb-7 pt-2 rounded-[20px]">
                      <div className="flex gap-4 items-start justify-center mx-4">
                        <div className="max-w-[200px]">
                          <ul>
                            <li className="text-[#565AC2] font-medium text-[14px]">
                              <span>•</span> Borrow up to 5x
                            </li>
                            <li className="text-[#565AC2] font-medium text-[14px]">
                              <span>•</span> Create your strategy
                            </li>
                            <li className="text-[#565AC2] font-medium text-[14px]">
                              <span>•</span> With the best of DeFi
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2  w-full">
                      <div className="flex justify-center items-center pb-4">
                        <Link
                          className="mx-auto"
                          target="_blank"
                          href="https://app.deltaprime.io/#/prime-account/zaps"
                        >
                          <DeltaPurpleButton
                            className="px-3 py-3"
                            label="Launch App"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default LaunchAppModal;
