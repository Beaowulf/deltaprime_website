"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { fetchCryptoData } from "@/app/components/cryptoTables/cryptoData";
import { useSearchParams, usePathname } from "next/navigation";
import { MainButtonDarkBG } from "@/app/components/buttons/mainButton";
import curvedArrowLeft from "@/public/assets/icons/curve_left.svg";
import curvedArrowRight from "@/public/assets/icons/curve_right.svg";
import closeIconBlack from "@/public/assets/icons/closeIconBlack.svg";
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
          <div className="modalParent">
            <div className="absolute top-2 right-4 w-fit h-fit text-black cursor-pointer">
              <Link href={pathname}>
                <Image
                  src={closeIconBlack}
                  width={13}
                  height={13}
                  alt="close_X_Button"
                />
              </Link>
            </div>
            <div className="w-screen h-screen md:h-auto justify-center md:w-[650px] bg-[#f4f4ff] flex flex-col py-12 px-4 md:px-16 rounded-[20px] shadowModal">
              <h4 className="leading-5 text-[32px] text-black text-center font-semibold">
                Launch your App
              </h4>
              <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-32 mt-8">
                {/* Left side */}
                <div className="flex justify-center flex-col gap-1 items-center flex-1">
                  <Image
                    src={curvedArrowLeft}
                    alt="curved_arrow_left"
                    className="h-10 w-auto hidden md:block"
                  />
                  <div className="p-4 bg-white shadow-md shadow-gray-300 rounded-[20px]">
                    <div className="featureBorderWrapLightTheme">
                      <Link
                        target="_blank"
                        href="https://app.deltaprime.io/#/pools"
                      >
                        <MainButtonDarkBG label="Depositor" />
                      </Link>
                    </div>
                    <div className="flex flex-col justify-center pl-2">
                      <div className="my-5">
                        <p className="text-gray-800 font-bold">Arbitrum:</p>
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
                        <p className="text-gray-800 font-bold text-[16px]">
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
                </div>
                {/* Right side */}
                <div className="flex justify-start flex-col gap-1 items-center flex-1">
                  <Image
                    src={curvedArrowRight}
                    alt="curved_arrow_right"
                    className="h-10 w-auto hidden md:block"
                  />
                  <div className="p-4 bg-white shadow-md shadow-gray-300 rounded-[20px]">
                    <div className="featureBorderWrapLightTheme">
                      <Link
                        target="_blank"
                        href="https://app.deltaprime.io/#/prime-account/zaps"
                      >
                        <MainButtonDarkBG
                          className="w-full"
                          label="Prime Account"
                        />
                      </Link>
                    </div>
                    <div className="mt-4 max-w-[200px]">
                      <ul>
                        <li className="text-gray-800 font-medium text-[14px]">
                          <span>•</span> Borrow up to 5x
                        </li>
                        <li className="text-gray-800 font-medium text-[14px]">
                          <span>•</span> Create your strategy{" "}
                        </li>
                        <li className="text-gray-800 font-medium text-[14px]">
                          <span>•</span> With the best of DeFi
                        </li>
                      </ul>
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
