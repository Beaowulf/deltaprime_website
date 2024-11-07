import Glossary from "./glossary"; // Import client component

// Define static metadata for the Glossary page
export const metadata = {
  title: "Glossary | DeltaPrime",
  description:
    "Explore DeltaPrime's glossary for quick definitions and explanations of key terms related to DeFi. Browse or search to learn more.",
};

export default function GlossaryPage() {
  return <Glossary />;
}
