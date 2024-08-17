import React from "react";
import RichTextRenderer from "@/app/components/richTetxtRenderer/richTextRenderer"; // Update the path accordingly

const TermsOfUsePage = ({ termsOfUse }) => {
  if (!termsOfUse || !termsOfUse.termsOfUse.content) {
    return <div>Error: Terms of Use content is not available.</div>;
  }

  console.log("Passing to RichTextRenderer:", termsOfUse.termsOfUse);

  return (
    <div className="pagePaddingLarge mb-40">
      <RichTextRenderer richTextDocument={termsOfUse.termsOfUse} />
    </div>
  );
};

export default TermsOfUsePage;
