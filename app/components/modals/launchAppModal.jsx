"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import "./modals.css";
import { useSearchParams, usePathname } from "next/navigation";
import { CTAButton } from "@/app/components/buttons/mainButton";
import closeIconColored from "@/public/assets/icons/closeIconColored.svg";
import Link from "next/link";
import { useCryptoData } from "@/app/context/CryptoDataContext";  // Import the context

const LaunchAppModal = () => {
  const { poolsData, loading } = useCryptoData();  // Use the context to get data
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
        <dialog className="modalP fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
          <div className="modalParent relative z-10 w-full md:w-fit">
            <div className="absolute top-2 right-4 pb-2 pt-10 pl-5 pr-5 w-fit h-fit text-black cursor-pointer z-50">
              <Link className="z-100 cursor-pointer" href={pathname}>
                <Image
                  src={closeIconColored}
                  width={20}
                  height={20}
                  alt="close_X_Button"
                />
              </Link>
            </div>
            <div className="w-full h-screen md:h-auto md:w-fit justify-center bg-[#f4f4ff] flex flex-col py-20 px-4 md:px-14 rounded-[25px] shadowModal">
              <h4 className="leading-5 text-[32px] text-[#252948] text-center font-medium mb-10">
                Launch your App
              </h4>
              <div className="flex flex-col md:flex-row justify-center gap-4 md:mt-8 mx-0 items-center">
                {/* Left side */}
                <div className="flex justify-center flex-col gap-1 items-center modalWrapper md:w-full h-full w-[16rem]">
                  <div className="modalContent w-full">
                    <div className="w-full bg-[#6B70ED] py-1 rounded-t-[25px] mt-[0.5px] mx-[0.25px] mb-2">
                      <p className="mx-auto w-fit text-white font-bold">
                        Savings Account
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
                                className="dark:text-blue-950 text-blue-950 font-medium text-[14px]"
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
                                className="dark:text-blue-950 text-blue-950 font-medium text-[14px]"
                                key={index}
                              >
                                {pool.symbol} {pool.apy.toFixed(1)}%
                              </p>
                            ))
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="">
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
                <div className="w-full md:w-fit flex place-items-center">
                  <p className="text-[#252948] font-medium text-[32px] mx-auto md:m-0">
                    OR
                  </p>
                </div>

                {/* Right side */}
                <div className="flex justify-center flex-col gap-1 items-center modalWrapper md:w-full h-full w-[16rem]">
                  <div className="modalContent w-full h-full">
                    <div className="w-full bg-[#6B70ED] py-1 rounded-t-[25px] mt-[0.5px] mx-[0.25px] mb-2">
                      <p className="mx-auto w-fit text-white font-bold">
                        Prime Account
                      </p>
                    </div>
                    <div className="px-4 py-7 rounded-[20px]">
                      <div className="flex gap-4 items-start justify-center mx-4">
                        <div className="mt-4 max-w-[200px]">
                          <ul>
                            <li className="dark:text-blue-950 text-blue-950 font-medium text-[14px]">
                              <span>•</span> Borrow up to 5x
                            </li>
                            <li className="dark:text-blue-950 text-blue-950 font-medium text-[14px]">
                              <span>•</span> Create your strategy
                            </li>
                            <li className="dark:text-blue-950 text-blue-950 font-medium text-[14px]">
                              <span>•</span> With the best of DeFi
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="">
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
