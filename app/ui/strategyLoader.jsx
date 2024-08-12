// StrategyLoader.js
import React, { useState, useEffect } from "react";
import { fetchStrategies } from "@/lib/getBlogs";
import DropdownMenu from "@/app/components/dropdown/dropdown";

const DropDownStrategyLoader = ({ pathname, resolvedTheme, getLinkClass }) => {
  const [strategies, setStrategies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchStrategies();
        setStrategies(data);
      } catch (error) {
        console.error("Error fetching strategies:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="text-center">
      <DropdownMenu
        strategyData={strategies}
        boxTitle={"Strategies"}
        boxText={
          "DeltaPrime allows for a range of new and unique strategies. Every strategy is accompanied by a practical example, getting deeper into the risk and rewards of the specific strategy."
        }
        menuText={"Strategies"}
        className={getLinkClass("/strategies", pathname, resolvedTheme)}
        boxLink={"/strategies"}
        isStrategy={true}
      />
    </div>
  );
};

export default DropDownStrategyLoader;
