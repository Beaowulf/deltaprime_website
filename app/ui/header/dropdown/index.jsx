"use client";
import { useEffect, useState } from "react";
import { fetchStrategies } from "@/lib/getBlogs";
import DropdownMenu from "./dropdown";

const DropDownMain = () => {
  const [strategies, setStrategies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchStrategies();
        setStrategies(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching strategies:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <DropdownMenu strategies={strategies} />
    </div>
  );
};

export default DropDownMain;
