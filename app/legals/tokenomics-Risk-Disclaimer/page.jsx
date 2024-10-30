import React from "react";
import DynamicPurpleBar from "@/app/components/dynamicPurpleBar/dynamicPurpleBar";

// todos: content will come from contentful

export async function generateMetadata() {
  return {
    title: "Tokenomics Risk Disclaimer | DeltaPrime",
    description: "Read the full risk disclaimer for PRIME and sPRIME tokens. Ensure you understand the risks associated with tokenomics in the DeltaPrime ecosystem before proceeding.",
  };
}

function TokenomicsRiskDisclaimer() {
  return (
    <>
      <DynamicPurpleBar title={"Tokenomics Risk Disclaimer"} />
      <div className="my-mobile-spacing md:my-desktop-spacing pagePaddingLarge">
        <div className="flex justify-center items-center flex-col w-auto h-full md:mt-20 mt-5">
          <p className="featureSubtitle mb-4 text-3xl md:text-[44px] dark:text-white text-[#6B70ED]">
            Tokenomics Risk Disclaimer
          </p>
        </div>
        <div className="flex justify-center flex-col pl-6 pr-6 mt-10">
          <p className="font-extrabold text-2xl mb-2 dark:text-white text-[#6B70ED]">
            RISK DISCLOSURE STATEMENT (Tokens)
          </p>
          <p className="aboutTypographyparagraphWhite font-normal leading-6 md:px-0 px-1 pb-1 mb-10 dark:text-white text-[#565AC2]">
            Before participating in the Delta Prime Ecosystem through PRIME and
            sPRIME tokens, you need to understand the nature of the tokens and
            the associated risks. Please read this disclosure statement
            carefully.
          </p>
        </div>
        <div className="flex justify-center text-justify flex-col pl-6 pr-6 mt-10">
          <p className="font-extrabold text-2xl mb-2 dark:text-white text-[#6B70ED]">
            Before proceeding, you should:
          </p>
          <p className="aboutTypographyparagraphWhite font-normal leading-6 md:px-0 px-1 pb-1 mb-10 dark:text-white text-[#565AC2]">
            Fully understand the nature of the tokens and the extent of your
            exposure to risks; Read this Risk Disclosure Statement completely;
            and Independently determined that the Tokens are appropriate for
            you. DO NOT CONTRIBUTE FUNDS YOU CANNOT AFFORD TO LOSE. THESE
            TRANSACTIONS ARE NOT SUITABLE FOR MANY MEMBERS OF THE PUBLIC.SUCH
            TRANSACTIONS SHOULD BE ENTERED INTO ONLY BY PERSONS WITH A HIGH
            TECHNICAL SKILL LEVEL, ABILITY TO MANAGE CRYPTOGRAPHIC KEYS AND
            PASSWORDS, AND THE ABILITY TO AVOID COMMON SCAMS IN THE DEFI
            MARKETS. PREVIOUS EXPERIENCE WITH DECENTRALIZED FINANCE IS
            RECOMMENDED.{" "}
            <span className="font-bold ">
              Risks: Your contribution to Delta exposes you to various risks,
              including but not limited to:
            </span>
          </p>
          <p className="aboutTypographyparagraphWhite font-normal leading-6 md:px-0 px-1 pb-1 mb-10 dark:text-white text-[#565AC2]">
            Tokens do not provide guaranteed returns and are not covered by any
            deposit insurance; The regulatory regime governing blockchain
            technologies is uncertain, and new regulations or policies may
            adversely affect the development or distribution of the PRIME or
            $sPRIMETokens; DeltaPrime cannot guarantee a specific rate of
            staking reward. Staking rewards are dynamic and can fluctuate over a
            defined staking period; Staked principal is subject to hacking risk.
            If a bad actor penetrates the application or the blockchain itself,
            total loss of principal may occur; Staked principal is subject to
            loss of private keys. Although the system is managed by accounts
            that require multiple signatures to approve transactions, human
            error or the actions of a bad actor may result in the loss of
            control of the majority private keys that make up the
            multiple-signature approval process. If this were to occur, total
            loss of staked principal is likely.
          </p>
          <p className="aboutTypographyparagraphWhite font-normal leading-6 md:px-0 px-1 pb-1 dark:text-white text-[#565AC2]">
            Community members should not construe the contents of this Statement
            as legal, investment, or tax advice. In making participation
            decisions, you should rely on your own examination of the tokens,
            including the merits and risks involved. You are encouraged to
            consult a legal and tax advisor.
          </p>
        </div>
      </div>
    </>
  );
}

export default TokenomicsRiskDisclaimer;
