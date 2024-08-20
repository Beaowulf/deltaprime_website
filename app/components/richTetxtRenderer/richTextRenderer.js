import Image from "next/image";
import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import UnlockPotentialContainer from "@/app/components/unlockPotentialContainer/unlockPotentialContainer";

const CustomButton = ({ buttonText, url }) => (
  <a href={url} className="custom-button">
    {buttonText}
  </a>
);

const sanitizeId = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove all non-word, non-space, non-hyphen characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with a single one
    .trim(); // Trim any leading or trailing hyphens or spaces
};

const extractTextFromChildren = (children) => {
  if (!Array.isArray(children)) {
    children = [children];
  }

  return children
    .map((child) => {
      if (typeof child === "string") {
        return child;
      } else if (React.isValidElement(child)) {
        return extractTextFromChildren(child.props.children);
      }
      return "";
    })
    .join("");
};

const RichTextRenderer = ({
  richTextDocument,
  hasTakeaways,
  blogTakeaways,
  onHeadingRender,
  lastRevisionDate,
}) => {
  const options = {
    renderNode: {
      [BLOCKS.HEADING_4]: (node, children) => {
        const text = extractTextFromChildren(children);
        const id = sanitizeId(text);
        if (onHeadingRender) onHeadingRender(id, text);
        return (
          <h4 id={id} className="text-lg font-bold my-4">
            {children}
          </h4>
        );
      },
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="my-4">{children}</p>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="ml-10 list-disc list-inside">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className="ml-10 list-decimal list-inside">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <li className="my-2">{children}</li>
      ),
      [BLOCKS.TABLE]: (node, children) => (
        <div className="styled-table-container">
          <table className="styled-table">
            <tbody>{children}</tbody>
          </table>
        </div>
      ),
      [BLOCKS.TABLE_ROW]: (node, children) => <tr>{children}</tr>,
      [BLOCKS.TABLE_CELL]: (node, children) => (
        <td className="p-4 border">{children}</td>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { file, title } = node.data.target.fields;
        const { url, details } = file;
        const { width, height } = details.image;

        return (
          <Image
            className="inlineImage"
            src={`https:${url}`}
            alt={title || ""}
            width={width}
            height={height}
          />
        );
      },
      [INLINES.EMBEDDED_ENTRY]: (node) => {
        const { buttonText, url } = node.data.target.fields;
        return <CustomButton buttonText={buttonText} url={url} />;
      },
      [INLINES.HYPERLINK]: (node) => {
        return <p>Link</p>;
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
        const text = node.content[0]?.value;
        if (text.includes("{{inline_Takeaways}}") && hasTakeaways) {
          return (
            <div className="my-10 p-2">
              <div className="gradient-border p-3 sm:p-12">
                <div>
                  <h4 className="text-[24px] font-bold mb-10 text-[#FFBB9B]">
                    Key Takeaways
                  </h4>
                  <ul>
                    {blogTakeaways.map((takeaway, index) => (
                      <li
                        key={index}
                        className="mb-8 text-[18px] dark:text-[#F6F6F6] text-[#252948]"
                      >
                        <span>•</span> {takeaway}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        } else if (text.includes("{{inline_Takeaways}}") && !hasTakeaways) {
          return null;
        }

        if (text.includes("{{Terms_Of_Use_Title}}")) {
          return (
            <div className="flex justify-center flex-col items-center">
              <p className="mb-8 featureSubtitle md:text-[30px] text-[22px] text-center">
                Delta Prime
              </p>
              <p className="mb-8 featureSubtitle md:text-[34px] text-[24px] text-center">
                Terms of Use
              </p>
              <p className="text-[20px] font-medium md:leading-6 height max-w-xl text-center md:px-0 px-1 pb-1">
                Important information
              </p>
            </div>
          );
        }

        if (text.includes("{{Terms_Of_Use_Title}}")) {
          return (
            <div className="flex justify-center flex-col items-center">
              <p className="mb-8 featureSubtitle md:text-[30px] text-[22px] text-center">
                Delta Prime
              </p>
              <p className="mb-8 featureSubtitle md:text-[34px] text-[24px] text-center">
                Risk Disclosure
              </p>
              <p className="text-[20px] font-medium md:leading-6 height max-w-xl text-center md:px-0 px-1 pb-1">
                Important information
              </p>
            </div>
          );
        }

        if (text.includes("{{inline_CTA}}")) {
          return (
            <div className="mb-20">
              <UnlockPotentialContainer />
            </div>
          );
        }
        return (
          <div className="my-4 blogStyling text-[#252948] dark:text-[#F6F6F6]">
            {children}
          </div>
        );
      },
    },
  };

  return <>{documentToReactComponents(richTextDocument, options)}</>;
};

export default RichTextRenderer;
