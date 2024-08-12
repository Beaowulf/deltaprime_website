// app/strategies/[strategyID]/page.jsx
import { fetchStrategies } from "@/lib/getBlogs";
import StrategyPost from "@/app/strategies/[strategyID]/strategyPost";

export async function generateStaticParams() {
  const strategies = await fetchStrategies();
  return strategies.map((strategy) => ({
    strategyID: strategy.strategyID,
  }));
}

const StrategyPage = async ({ params }) => {
  const strategies = await fetchStrategies();
  const strategy =
    strategies.find((strategy) => strategy.strategyID === params.strategyID) ||
    null;

  if (!strategy) {
    return <div>Strategy not found</div>;
  }

  return (
    <div>
      <StrategyPost strategy={strategy} strategies={strategies} />
    </div>
  );
};

export default StrategyPage;
