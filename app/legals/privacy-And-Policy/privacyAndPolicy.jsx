import React from "react";
import RichTextRenderer from "@/app/components/richTetxtRenderer/richTextRenderer"; // Update the path accordingly

const PrivacyAndPolicyPage = ({ privacyAndPolicy }) => {
  if (!privacyAndPolicy) {
    return (
      <div className="flex justify-center items-center py-[25%]">
        Error: Terms of Use content is not available.{" "}
      </div>
    );
  }

  return (
    <div className="pagePaddingLarge mb-40">
      <RichTextRenderer richTextDocument={privacyAndPolicy.richText} />
    </div>
  );
};

export default PrivacyAndPolicyPage;
