"use client";
import * as React from "react";
import { Pie, PieChart, ResponsiveContainer } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A responsive donut chart with wrapped text";

const chartData = [
  { label: "Community", value: 31.49, fill: "#C79BFE" },
  { label: "DAO Treasury", value: 20.0, fill: "#F8B1FF" },
  { label: "Ecosystem growth", value: 12.0, fill: "#7B81D9" },
  { label: "Bounties", value: 2.0, fill: "#84BFFD" },
  { label: "Community seed", value: 1.67, fill: "#FFBC74" },
  { label: "Launchpads", value: 1.11, fill: "#FF8DF0" },
  { label: "IEO", value: 1.43, fill: "#AB9EF3" },
  { label: "Grant", value: 0.57, fill: "#FFBC75" },
  { label: "Pre-seed", value: 4.67, fill: "#B86DDC" },
  { label: "Bridge", value: 2.31, fill: "#FF93C4" },
  { label: "Private seed", value: 1.75, fill: "#F8A3EE" },
  { label: "Advisors", value: 5.0, fill: "#85BEFF" },
  { label: "Team", value: 16.0, fill: "#6A70EC" },
];

const chartConfig = {
  value: {
    label: "Percentage",
  },
  Community: {
    label: "Community",
    color: "#C79BFE",
  },
  "DAO Treasury": {
    label: "DAO Treasury",
    color: "#F8B1FF",
  },
  "Ecosystem growth": {
    label: "Ecosystem growth",
    color: "#7B81D9",
  },
  Bounties: {
    label: "Bounties",
    color: "#84BFFD",
  },
  "Community seed": {
    label: "Community seed",
    color: "#FFBC74",
  },
  Launchpads: {
    label: "Launchpads",
    color: "#FF8DF0",
  },
  IEO: {
    label: "IEO",
    color: "#AB9EF3",
  },
  Grant: {
    label: "Grant",
    color: "#FFBC75",
  },
  "Pre-seed": {
    label: "Pre-seed",
    color: "#B86DDC",
  },
  Bridge: {
    label: "Bridge",
    color: "#FF93C4",
  },
  "Private seed": {
    label: "Private seed",
    color: "#F8A3EE",
  },
  Advisors: {
    label: "Advisors",
    color: "#85BEFF",
  },
  Team: {
    label: "Team",
    color: "#6A70EC",
  },
};

export function TokenomicsGraph() {
  const [activeIndex, setActiveIndex] = React.useState(-1);
  const [size, setSize] = React.useState(0);
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setSize(Math.min(width, height));
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(-1);
  };

  const centerLabel =
    activeIndex !== -1 ? (
      <foreignObject
        x="50%"
        y="50%"
        width="200"
        height="100"
        transform="translate(-100, -50)"
      >
        <div xmlns="http://www.w3.org/1999/xhtml" className="text-center">
          <p className="text-lg font-medium mt-3 break-words w-[10rem] mx-auto">
            {chartData[activeIndex].label}
          </p>
          <p className="text-lg font-medium ">{`${chartData[activeIndex].value}%`}</p>
        </div>
      </foreignObject>
    ) : null;

  return (
    <Card className="flex flex-col border-none shadow-none">
      <CardContent className="flex-1 pb-0" ref={containerRef}>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[550px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <ChartTooltip
                className="bg-white text-black"
                cursor={false}
                content={<ChartTooltipContent hideLabel percentage={true} />}
              />
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="label"
                innerRadius={size * 0.22}
                outerRadius={size * 0.36}
                strokeWidth={5}
                onMouseEnter={onPieEnter}
                onMouseLeave={onPieLeave}
              />
              {centerLabel}
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
