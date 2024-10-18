import React from "react";
import RichTextRenderer from "@/app/components/richTetxtRenderer/richTextRenderer"; // Update the path accordingly

const TermsOfUsePage = ({ termsOfUse }) => {
  if (!termsOfUse || !termsOfUse.termsOfUse.content) {
    return <div>Error: Terms of Use content is not available.</div>;
  }

  return (
    <div className="my-mobile-spacing md:my-desktop-spacing pagePaddingLarge">
      <RichTextRenderer richTextDocument={termsOfUse.termsOfUse} />
    </div>
  );
};

export default TermsOfUsePage;
