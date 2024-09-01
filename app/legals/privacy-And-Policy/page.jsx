import React from "react";
import DynamicPurpleBar from "@/app/components/dynamicPurpleBar/dynamicPurpleBar";
import { fetchPrivacyPolicy } from "@/lib/getBlogs";
import PrivacyAndPolicyPage from "./privacyAndPolicy";

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
