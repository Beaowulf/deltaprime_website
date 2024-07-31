"use client";
import React from "react";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import RichTextRenderer from "@/app/components/richTetxtRenderer/richTextRenderer";

const StrategyDetail = ({ strategy }) => {
  const paragraph = documentToPlainTextString(strategy.strategyRichText);

  console.log(strategy);
  return (
    <div>
      <h1>{strategy.strategyTitle}</h1>
      <p>{strategy.strategyDescription}</p>
      <RichTextRenderer
        richTextDocument={strategy.strategyRichText}
        hasTakeaways={strategy?.strategyTakeaways?.length > 0}
      />
      {/* Add more fields as needed */}
    </div>
  );
};

export default StrategyDetail;
