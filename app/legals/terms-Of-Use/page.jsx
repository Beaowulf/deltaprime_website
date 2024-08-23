import React from "react";
import DynamicPurpleBar from "@/app/components/dynamicPurpleBar/dynamicPurpleBar";
import { fetchTermsOfUse } from "@/lib/getBlogs";
import TermsOfUsePage from "./termsOfUsePage";

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
