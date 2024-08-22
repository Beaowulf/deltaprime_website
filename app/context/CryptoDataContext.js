// CryptoDataContext.js
import React, { createContext, useContext, useEffect, useState, useMemo } from "react";
import { fetchCryptoData } from "@/lib/getDetailedData";

const CryptoDataContext = createContext();

export const useCryptoData = () => useContext(CryptoDataContext);

export const CryptoDataProvider = ({ children }) => {
  const [poolsData, setPoolsData] = useState({ arbitrum: [], avalanche: [] });
  const [totalBorrowedLiquidity, setTotalBorrowedLiquidity] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const setupAprs = async () => {
      try {
        const allPoolsData = await fetchCryptoData();
        setPoolsData(allPoolsData.poolsData);
        setTotalBorrowedLiquidity(allPoolsData.totalBorrowedLiquidity);
        setLoading(false);
      } catch (error) {
        console.error("Error setting up APRs:", error);
      }
    };
    setupAprs();
  }, []);

  const value = useMemo(() => ({ poolsData, totalBorrowedLiquidity, loading }), [poolsData, totalBorrowedLiquidity, loading]);

  return (
    <CryptoDataContext.Provider value={value}>
      {children}
    </CryptoDataContext.Provider>
  );
};
