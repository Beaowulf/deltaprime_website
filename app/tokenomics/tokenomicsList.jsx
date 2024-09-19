const tokenomicsData = [
  { label: "Community", percentage: 31.49, color: "#C79BFE" },
  { label: "DAO Treasury", percentage: 20.0, color: "#F8B1FF" },
  { label: "Ecosystem growth", percentage: 12.0, color: "#7B81D9" },
  { label: "Bounties", percentage: 2.0, color: "#84BFFD" },
  { label: "Community seed", percentage: 1.67, color: "#FFBC74" },
  { label: "Launchpads", percentage: 1.11, color: "#FF8DF0" },
  { label: "IEO", percentage: 1.43, color: "#AB9EF3" },
  { label: "Grant", percentage: 0.57, color: "#FFBC75" },
  { label: "Pre-seed", percentage: 4.67, color: "#B86DDC" },
  { label: "Bridge", percentage: 2.31, color: "#FF93C4" },
  { label: "Private seed", percentage: 1.75, color: "#F8A3EE" },
  { label: "Advisors", percentage: 5.0, color: "#85BEFF" },
  { label: "Team", percentage: 16.0, color: "#6A70EC" },
];

export function TokenomicsList() {
  return (
    <ul className="flex flex-col gap-2">
      {tokenomicsData.map((item, index) => (
        <li key={index} className="flex items-center gap-2 text-white">
          <span
            className="inline-block w-4 h-4 rounded-full dark:text-white text-[#6B70ED]"
            style={{ backgroundColor: item.color }}
          ></span>
          <span className="font-semibold dark:text-white text-[#6B70ED]">
            {item.label}
          </span>
          <span className="dark:text-white text-[#6B70ED]">
            {item.percentage}%
          </span>
        </li>
      ))}
    </ul>
  );
}
