import React from "react";
import DynamicPurpleBar from "@/app/components/dynamicPurpleBar/dynamicPurpleBar";
import { fetchPrivacyPolicy } from "@/lib/getBlogs";
import PrivacyAndPolicyPage from "./privacyAndPolicy";

// Generate dynamic metadata for SEO
export async function generateMetadata() {
  return {
    title: "Privacy and Policy | DeltaPrime",
    description: "Read DeltaPrime's privacy policy to understand how your personal information is collected, used, and protected. We prioritize your privacy and data security.",
  };
}

const PrivacyAndPolicy = async () => {
  const privacyAndPolicy = await fetchPrivacyPolicy();

  return (
    <div>
      <DynamicPurpleBar title={"Privacy And Policy"} />
      <PrivacyAndPolicyPage privacyAndPolicy={privacyAndPolicy} />
    </div>
  );
};

export default PrivacyAndPolicy;
