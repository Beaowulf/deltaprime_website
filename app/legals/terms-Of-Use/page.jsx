import React from "react";
import DynamicPurpleBar from "@/app/components/dynamicPurpleBar/dynamicPurpleBar";
import { fetchTermsOfUse } from "@/lib/getBlogs";
import TermsOfUsePage from "./termsOfUsePage";


// Generate dynamic metadata for SEO
export async function generateMetadata() {
  return {
    title: "Terms of Use | DeltaPrime",
    description: "Read the DeltaPrime terms of use to understand your responsibilities and rights when using our platform. These terms ensure the proper and lawful use of our services.",
  };
}


const TermsOfUse = async () => {
  const termsOfUse = await fetchTermsOfUse();

  return (
    <div>
      <DynamicPurpleBar title={"Terms of Use"} />
      <TermsOfUsePage termsOfUse={termsOfUse} />
    </div>
  );
};

export default TermsOfUse;
