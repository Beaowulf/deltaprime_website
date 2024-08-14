// app/strategies/[strategyID]/page.jsx
import { fetchStrategies, fetchStrategyBySlug } from "@/lib/getBlogs";
import StrategyPost from "@/app/strategies/[slug]/strategyPost";

export async function generateStaticParams() {
  const strategies = await fetchStrategies();
  return strategies.map((strategy) => ({
    slug: strategy.slug,
  }));
}


const StrategyPage = async ({ params }) => {
  const strategies = await fetchStrategies();
  const strategy = await fetchStrategyBySlug(params.slug);



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
