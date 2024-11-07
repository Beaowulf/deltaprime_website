import { fetchStrategies, fetchStrategyBySlug } from "@/lib/getBlogs";
import StrategyPost from "@/app/strategies/[slug]/strategyPost";

// Generate dynamic metadata for the Strategy page
export async function generateMetadata({ params }) {
  const strategy = await fetchStrategyBySlug(params.slug);

  if (!strategy) {
    return {
      title: "Strategy Not Found | DeltaPrime",
      description: "The requested strategy could not be found on DeltaPrime.",
    };
  }

  // Extract title and description directly from the strategy
  const title = strategy.strategyTitle || "Strategy | DeltaPrime";
  const description = strategy.strategyDescription
    ? strategy.strategyDescription.slice(0, 160) // Limit to 160 chars for SEO purposes
    : "Explore a detailed strategy on DeltaPrime, including its risks and rewards.";

  return {
    title: `${title} | DeltaPrime`,
    description: description,
  };
}

// Generate static paths based on available strategies
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
