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
    <div className="my-mobile-spacing md:my-desktop-spacing pagePaddingLarge">
      <RichTextRenderer richTextDocument={privacyAndPolicy.richText} />
    </div>
  );
};

export default PrivacyAndPolicyPage;
