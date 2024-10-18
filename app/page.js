import HomePage from "@/app/landingPage/index";
// Add metadata dynamically
export async function generateMetadata() {
  return {
    title: "Delta Prime",
    description:
      "Join DeltaPrime and explore innovative, secure, and high-performance DeFi solutions. Gain access to dynamic decentralized finance strategies and ensure the safety of your capital.",
  };
}

export default function Home() {
  return (
    <main>
      <HomePage />
    </main>
  );
}
