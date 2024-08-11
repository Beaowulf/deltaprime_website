"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./modals.css";
import { fetchCryptoData } from "@/app/components/cryptoTables/cryptoData";
import { useSearchParams, usePathname } from "next/navigation";
import { CTAButton } from "@/app/components/buttons/mainButton";
import closeIconColored from "@/public/assets/icons/closeIconColored.svg";
import Link from "next/link";

const LaunchAppModal = () => {
  const [poolsData, setPoolsData] = useState({ arbitrum: [], avalanche: [] });
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathname = usePathname();

  useEffect(() => {
    const setupAprs = async () => {
      try {
        const allPoolsData = await fetchCryptoData();
        setPoolsData(allPoolsData);
        setLoading(false);
      } catch (error) {
        // TODO: maybe message to user
        console.error("Error setting up APRs:", error);
      }
    };
    setupAprs();
  }, []);

  return (
    <>
      {modal && (
        <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
          <div className="modalParent relative z-10">
            <div className="absolute top-2 right-4 w-fit h-fit text-black cursor-pointer z-50">
              <Link className="z-100 cursor-pointer" href={pathname}>
                <Image
                  src={closeIconColored}
                  width={13}
                  height={13}
                  alt="close_X_Button"
                />
              </Link>
            </div>
            <div className="w-screen h-screen md:h-auto md:w-fit justify-center bg-[#f4f4ff] flex flex-col py-20 px-4 md:px-14 rounded-[25px] shadowModal">
              <h4 className="leading-5 text-[32px] text-[#252948] text-center font-medium mb-5">
                Launch your App
              </h4>
              <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
                {/* Left side */}
                <div className="flex justify-center flex-col gap-1 items-center modalWrapper">
                  <div className="modalContent">
                    <div className="w-full bg-[#6B70ED] py-1 rounded-t-[20px]">
                      <p className="mx-auto w-fit text-white font-bold">
                        Depositor
                      </p>
                    </div>
                    <div className="px-4 py-7 rounded-[20px]">
                      <div className="flex gap-4 items-start justify-center mx-4">
                        <div>
                          <p className="text-[#6B70ED] font-bold">Arbitrum:</p>
                          {loading ? (
                            <div className="loader"></div>
                          ) : (
                            poolsData.arbitrum.map((pool, index) => (
                              <p
                                className="text-gray-800 font-medium text-[14px]"
                                key={index}
                              >
                                {pool.symbol} {pool.apy.toFixed(1)}%
                              </p>
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
                            poolsData.avalanche.map((pool, index) => (
                              <p
                                className="text-gray-800 font-medium text-[14px]"
                                key={index}
                              >
                                {pool.symbol} {pool.apy.toFixed(1)}%
                              </p>
                            ))
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="featureBorderWrapLightTheme">
                      <div className="flex justify-center items-center pb-4">
                        <Link
                          className="mx-auto"
                          target="_blank"
                          href="https://app.deltaprime.io/#/pools"
                        >
                          <CTAButton label="Launch App" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-fit flex place-items-center">
                  <p className="text-[#252948] font-medium text-[32px]">OR</p>
                </div>

                {/* Right side */}
                <div className="flex justify-center flex-col gap-1 items-center modalWrapper">
                  <div className="modalContent">
                    <div className="w-full bg-[#6B70ED] py-1 rounded-t-[20px]">
                      <p className="mx-auto w-fit text-white font-bold">
                        Borrower
                      </p>
                    </div>
                    <div className="px-4 py-7 rounded-[20px]">
                      <div className="flex gap-4 items-start justify-center mx-4">
                        <div className="mt-4 max-w-[200px]">
                          <ul>
                            <li className="text-gray-800 font-medium text-[14px]">
                              <span>•</span> Borrow up to 5x
                            </li>
                            <li className="text-gray-800 font-medium text-[14px]">
                              <span>•</span> Create your strategy
                            </li>
                            <li className="text-gray-800 font-medium text-[14px]">
                              <span>•</span> With the best of DeFi
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="featureBorderWrapLightTheme">
                      <div className="flex justify-center items-center pb-4">
                        <Link
                          className="mx-auto"
                          target="_blank"
                          href="https://app.deltaprime.io/#/prime-account/zaps"
                        >
                          <CTAButton label="Launch App" />
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
