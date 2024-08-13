"use client";

import React, { useState } from "react";
import ourStoryIntroImg from "@/public/assets/img/thumbnail.png";
import Image from "next/image";
import { useTheme } from "next-themes";
import GradientButton from "@/app/components/gradientButtonTokenomics/GradientButton";
import primePurpleLogo from "@/public/assets/icons/purpleTokenPrime.svg";
import whiteTokenPrime from "@/public/assets/icons/whiteTokenPrime.svg";
import protocolUsage from "@/public/assets/icons/protocolUsage.svg";
import liquidityPool from "@/public/assets/icons/liquidityPool.svg";
import bufferMarket from "@/public/assets/icons/bufferMarket.svg";
import primeFeatures from "@/public/assets/icons/primeFeatures.svg";
import protocolRevenue from "@/public/assets/icons/protocolRevenue.svg";
import governancePower from "@/public/assets/icons/governancePower.svg";
import TokenomicsCards from "../components/tokenomicsCard/tokenomicsCard";

import "./tokenomics.css";
import SecuritySection from "../landingPage/featureSection/securitySection";
import UnlockPotentialContainer from "../components/unlockPotentialContainer/unlockPotentialContainer";
import ContactForm from "../ui/contactForm/contactForm";

const Tokenomics = () => {
  const { resolvedTheme } = useTheme();
  const [expandedSections, setExpandedSections] = useState([false, false]);

  const toggleText = (index) => {
    setExpandedSections((prevState) => {
      const newExpandedSections = [...prevState];
      newExpandedSections[index] = !newExpandedSections[index];
      return newExpandedSections;
    });
  };

  return (
    <div className="pagePaddingLarge">
      {/* First Section */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-start w-full gap-10 my-10 md:my-20">
        {/* Text Wrapper */}
        <div className="flex flex-col md:mb-8 mb-0 justify-between items-center md:items-start h-fit flex-grow">
          <div className="text-left flex flex-col gap-4 dark:text-white text-[#252948] w-full">
            <div className="clearfix">
              {/* image that shows on desktop only */}
              <Image
                className={`rounded-[20px] border-4 border-[#fff56] float-right ml-4 mb-4 w-full lg:w-1/2 hidden lg:block ${
                  resolvedTheme === "dark"
                    ? "shadow-custom-dark"
                    : "shadow-custom-light"
                }`}
                src={ourStoryIntroImg}
                alt="deltaprime_mascot_img"
              />
              <p className="brightText text-wrap max-w-xl mb-4 text-3xl md:text-[44px]">
                Deep Dive into $PRIME Tokenomics
              </p>
              <Image
                className={`rounded-[20px] border-4 border-[#fff56] float-right ml-4 mb-4 w-full lg:w-1/2 block lg:hidden ${
                  resolvedTheme === "dark"
                    ? "shadow-custom-dark"
                    : "shadow-custom-light"
                }`}
                src={ourStoryIntroImg}
                alt="deltaprime_mascot_img"
              />
              <p className="whiteMainText text-wrap text-[15px] md:text-[17px] md:leading-[25.5px] leading-5 min-w-full mb-4">
                DeltaPrime is a decentralized Prime Brokerage solution that
                offers undercollateralized crypto loans without relying on
                trust. The native tokens $PRIME and $sPRIME feature advanced
                tokenomics on the Arbitrum and Avalanche networks and can be
                acquired from Trader Joe and Uniswap. Their design and
                distribution are in line with DeltaPrime’s commitment towards a
                sustainable, community-governed ecosystem.
                <br />
                {expandedSections[0] && (
                  <>
                    <br />
                    More than 50% of the total 40mil minted $PRIME tokens go to
                    the Community Owned Liquidity (COL) and the DAO treasury.
                    31.49% of the total $PRIME tokens are allocated to COL,
                    while 20% are going to the DAO treasury. The DAO treasury
                    will be governed by eligible community members and used for
                    future developments when at least 40% of $PRIME is in public
                    hands. 10% of the total supply, coming from the COL, will be
                    used to bootstrap liquidity pools paired with AVAX and ETH
                    on Trader Joe and Uniswap.
                    <br />
                    <br />
                    The emissions of $PRIME, i.e. getting the token into public
                    hands, will be executed in such a way that the liquidity
                    pool deepens with time. The COL that is not initially used
                    in the liquidity pool will be automatically used to buy and
                    sell $PRIME according to demand, so as to avoid a price
                    crash or overinflation. Enter stage: $sPRIME, which
                    facilitates a healthy liquidity pool, rewards our community,
                    and assigns governance power to the users.
                  </>
                )}
              </p>
              <div className="h-[50px] md:h-full block w-fit text-left">
                <GradientButton
                  label={expandedSections[0] ? "View Less" : "View More"}
                  onClick={() => toggleText(0)}
                  style={{ padding: "28px !important" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tokenomics Section */}
      <div className="flex flex-col items-center md:items-center mb-8 md:mt-28 mt-5 h-fit flex-grow mx-auto">
        <div className="text-left flex flex-col gap-4 dark:text-white text-[#252948]">
          <p className="brightText text-center max-w-xl text-3xl md:text-[44px]">
            Tokenomics
          </p>
        </div>
        <div className="flex flex-col items-center md:flex-row justify-center md:gap-10 gap-0 mt-10">
          <div className="flex flex-col items-center">
            <p className="text-center text-3xl font-bold mt-4">$PRIME</p>
            <p className="text-center text-2xl font-normal mt-1">
              Tradeable token
            </p>
            <Image
              className="ml-4"
              src={primePurpleLogo}
              alt="$PRIME Logo"
              width={200}
              height={200}
            />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-center text-3xl font-bold mt-4">$sPRIME</p>
            <p className="text-center  text-2xl font-normal mt-1">
              Utility token
            </p>
            <Image
              className="ml-4"
              src={whiteTokenPrime}
              alt="$sPRIME Logo"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>

      {/* $sPRIME Enables Section */}
      <div className="rounded-[20px] flex-1 p-4 parentColoredBorderWrapper mt-12 mb-16">
        <div className="rounded-[20px] px-8 md:px-10 lg:px-18 z-20 pb-12 dark:bg-[#252948] bg-[#E8E8F2] h-full">
          <p className="brightText text-center pt-12 mb-16 !text-2xl !font-bold md:!text-2xl">
            $sPRIME enables DeltaPrime to
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="flex flex-col items-center mb-8 md:mb-0 md:mx-4 lg:mx-12">
              <Image
                src={protocolUsage}
                alt="Boost Protocol Usage"
                className="h-auto w-auto"
              />
              <p className="text-center !text-xl md:!text-xl mt-4 w-[200px]">
                Boost Protocol Usage
              </p>
            </div>
            <div className="flex flex-col items-center mb-8 md:mb-0 md:mx-4 lg:mx-12">
              <Image
                src={bufferMarket}
                alt="Buffer Market Volatility"
                className="h-auto w-auto"
              />
              <p className="text-center !text-xl md:!text-xl mt-4 w-[200px]">
                Buffer Market Volatility
              </p>
            </div>
            <div className="flex flex-col items-center mb-8 md:mb-0 md:mx-4 lg:mx-12">
              <Image
                src={liquidityPool}
                alt="Facilitate a deep, healthy liquidity pool"
                className="h-auto w-auto"
              />
              <p className="text-center !text-xl md:!text-xl mt-4 w-[200px]">
                Facilitate a deep, healthy liquidity pool
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* $sPRIME Allows anyone to */}
      <div className="rounded-[20px] flex-1 p-4 parentColoredBorderWrapper mt-12 mb-16">
        <div className="rounded-[20px] px-8 md:px-10 lg:px-18 z-20 pb-12 dark:bg-[#252948] bg-[#E8E8F2] h-full">
          <p className="brightText text-center pt-12 mb-16 !text-2xl !font-bold md:!text-2xl">
            $sPRIME allows anyone to
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="flex flex-col items-center mb-8 md:mb-0 md:mx-4 lg:mx-12">
              <Image
                src={protocolRevenue}
                alt="Access PRIME Features"
                className="h-auto w-auto"
              />
              <p className="text-center !text-xl md:!text-xl !font-normal mt-4 w-[200px]">
                Access PRIME Features
              </p>
            </div>
            <div className="flex flex-col items-center mb-8 md:mb-0 md:mx-4 lg:mx-12">
              <Image
                src={governancePower}
                alt="Claim a share of 33% of protocol revenue"
                className="h-auto w-auto"
              />
              <p className="text-center !text-xl md:!text-xl !font-normal mt-4 w-[200px]">
                Claim a share of the liquidation fees
              </p>
            </div>
            <div className="flex flex-col items-center mb-8 md:mb-0 md:mx-4 lg:mx-12">
              <Image
                src={primeFeatures}
                alt="Accrue Governance Power points"
                className="h-auto w-auto"
              />
              <p className="text-center !text-xl md:!text-xl !font-normal mt-4 w-[200px]">
                Accrue Governance Power points
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      {/* 22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222 */}
      <div className="flex flex-col md:flex-row justify-between items-start w-full gap-10 my-10 md:my-20">
        {/* Text Wrapper */}
        <div className="flex flex-col md:mb-8 mb-0 justify-between items-center md:items-start h-fit flex-grow">
          <div className="text-left flex flex-col gap-4 dark:text-white text-[#252948] w-full">
            <div className="clearfix">
              <Image
                className={`rounded-[20px] border-4 border-[#fff56] float-left mr-4 mb-4 w-full lg:w-1/2 hidden lg:block ${
                  resolvedTheme === "dark"
                    ? "shadow-custom-dark"
                    : "shadow-custom-light"
                }`}
                src={ourStoryIntroImg}
                alt="deltaprime_mascot_img"
              />
              <p className="brightText text-wrap max-w-full mb-4 text-3xl md:text-[44px]">
                Deep Dive into $PRIME Tokenomics
              </p>
              <Image
                className={`rounded-[20px] border-4 border-[#fff56] float-left mr-4 mb-4 w-full lg:w-1/2 block lg:hidden ${
                  resolvedTheme === "dark"
                    ? "shadow-custom-dark"
                    : "shadow-custom-light"
                }`}
                src={ourStoryIntroImg}
                alt="deltaprime_mascot_img"
              />
              <p className="whiteMainText text-wrap text-[15px] md:text-[17px] md:leading-[25.5px] leading-5 mb-0 min-w-full">
                How $PRIME and $sPRIME work <br />
                $PRIME serves as the main tradable token on Decentralized
                Exchanges (DEXs). The demand for $PRIME will come from the
                demand to hold $sPRIME, a Liquidity Provider(LP)-token that will
                serve as:
                <br />
                <br />
                {expandedSections[1] && (
                  <>
                    <div className="max-w-full mt-10">
                      <span className="pl-2">
                        • A utility token for the DeltaPrime platform, allowing
                        payment for various PRIME features.
                      </span>
                      <br />
                      <span className="pl-2">
                        • An incentive to provide to the $PRIME liquidity pool
                        and be rewarded with a share of the protocol’s
                        liquidation fees.
                      </span>
                      <br />
                      <span className="pl-2">
                        • A token to gain governance power.
                      </span>
                    </div>
                    <br />
                    Traditionally, holding assets has been incentivized through
                    staking, i.e. locking tokens in a smart contract for a
                    certain period of time in order to earn staking rewards. It
                    is the go-to approach to keep holders from selling. Despite
                    this effort, the price of an asset often comes crashing down
                    because of high rewards in the native token of a project. In
                    addition, the expiration of vesting schedules often
                    contributes to high selling pressures, while liquidity pools
                    are often shallow, which results in high selling
                    price-impacts. Instead of following this trend, $sPRIME
                    combines the idea of staking with contributing to the $PRIME
                    liquidity pool.
                    <br />
                    <br />
                    The rewards come from protocol revenue instead of causing
                    inflation by handing out native tokens. This creates
                    effective incentives for holding $PRIME and contributing to
                    its liquidity pool.
                    <br />
                    When a user provides liquidity for $PRIME through the
                    DeltaPrime app, they receive $sPRIME, which represents their
                    share of the pool. $PRIME can be paired with tokens such as
                    AVAX or ETH. LP-tokens with paired $PRIME that were acquired
                    from a DEX directly can also be used to get $sPRIME on the
                    DeltaPrime app. Note that this move will exit the current
                    position of the LP-tokens and rebalance to the default price
                    range set on the app.
                    <br />
                    <br />
                    When the provided liquidity is within the concentrated
                    liquidity price range at which the token is traded, the
                    $sPRIME is considered active. Active $sPRIME holders are
                    eligible to receive a share from 33% of the protocol's
                    liquidation fees. This incentivizes liquidity provision and
                    ensures its depth. Having a deep liquidity pool means that
                    large buys and sells do not have a big impact on the price.
                    At the same time, $sPRIME can be used to pay for any current
                    and future features of the DeltaPrime ecosystem, regardless
                    of being active or idle.
                    <br />
                    <br />
                    Idle $sPRIME is the share in the pool that does not fall
                    within the price range at which the token is traded within a
                    period of time. Idle $sPRIME does not receive a share of the
                    liquidation fees. This incentivizes liquidity providers to
                    rebalance their assets to an active price range position.
                    Doing this means that impermanent loss may be realized.
                    However, their $sPRIME becomes active again and thus the LP
                    is granted the aforementioned rewards, countering realized
                    loss.
                    <br />
                    <br />
                    Not only liquidity providers are eligible for the protocol’s
                    liquidation fees. In the future, staking through the DAO,
                    managed by our community, will reward our most loyal
                    supporters. Governance power within the DAO is exercised by
                    a vote of $sPRIME. The more $sPRIME a user holds, the more
                    voting power they gain.
                  </>
                )}
              </p>
              <div className="mt-0 h-[100%] md:h-full block w-fit text-right flex items-right justify-right">
                <GradientButton
                  label={expandedSections[1] ? "View Less" : "View More"}
                  onClick={() => toggleText(1)}
                  style={{ padding: "28px !important" }} // Override padding here
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222 */}

      <div className="mb-16">
        <p className="brightText text-wrap mb-4 text-3xl md:text-[44px]">
          The Difference Between Unlocked <br />
          and Locked $sPRIME
        </p>
        <p className="whiteMainText text-wrap max-w-[95%] text-[15px] md:text-[17px] md:leading-[25.5px] leading-5 mb-0">
          $sPRIME is designed to counter impermanent loss that liquidity
          providers often suffer from but also reward the community members who
          are most active on the platform. To incentivize and reward the most
          active users, $sPRIME is split into two instances: locked and
          unlocked.
        </p>
      </div>

      <TokenomicsCards />

      <div>
        <p className="whiteMainText text-wrap max-w-[95%] text-[15px] md:text-[17px] md:leading-[25.5px] leading-5 mb-0">
          The way locked $sPRIME is created acts as a way to incentivize users
          to use the protocol, but also as means to reduce idle COL capital.
          Idle COL capital is the COL-derived capital providing liquidity for
          $PRIME that has been out of the trading price range for a while. To
          make this capital active again and retain the depth of the liquidity
          pool, a portion of it is matched with the remaining $PRIME funds of
          the COL that are not yet in the liquidity pool.&nbsp;
          {expandedSections[2] && (
            <>
              These funds are used to rebalance part of the idle AVAX or ETH
              share in the pool to the active price range. The $sPRIME generated
              from this event is thereby locked and is distributed to eligible
              protocol participants. This event does not happen automatically
              but at the discretion of the DeltaPrime team and our community.
              <br />
              <br />
              Note that the nature of achievements required to be eligible for
              this airdrop can change over time based on the protocol and
              community requirements. If a user fails to make the achievements,
              the locked and only the locked $sPRIME is retrieved and
              redistributed to the users who meet the set criteria. As such, the
              locked $sPRIME can be reused to ensure capital efficiency without
              causing inflation. The rewards received while holding locked
              $sPRIME stay with the user even after they stop meeting the
              criteria required to hold it.
            </>
          )}
        </p>
        <p>
          <br />
        </p>

        <div className="h-[50px] md:h-full block w-full text-left">
          <GradientButton
            label={expandedSections[2] ? "View Less" : "View More"}
            onClick={() => toggleText(2)}
          />
        </div>
      </div>

      {/* Third Section */}
      {/* third last */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-start w-full gap-10 my-10 md:my-20">
        {/* Text Wrapper */}
        <div className="flex flex-col md:mb-8 mb-0 justify-between items-center md:items-start h-fit flex-grow">
          <div className="text-left flex flex-col gap-4 dark:text-white text-[#252948] w-full">
            <div className="clearfix">
              {/* image that shows on desktop only */}
              <Image
                className={`rounded-[20px] border-4 border-[#fff56] float-right ml-4 mb-4 w-full lg:w-1/2 hidden lg:block ${
                  resolvedTheme === "dark"
                    ? "shadow-custom-dark"
                    : "shadow-custom-light"
                }`}
                src={ourStoryIntroImg}
                alt="deltaprime_mascot_img"
              />
              <p className="text-wrap max-w-xl mb-4 font-bold text-2xl md:text-[28px]">
                Governance Power and Voting Rights: A Road to DAO
              </p>
              <Image
                className={`rounded-[20px] border-4 border-[#fff56] float-right ml-4 mb-4 w-full lg:w-1/2 block lg:hidden ${
                  resolvedTheme === "dark"
                    ? "shadow-custom-dark"
                    : "shadow-custom-light"
                }`}
                src={ourStoryIntroImg}
                alt="deltaprime_mascot_img"
              />
              <p className="whiteMainText text-wrap text-[15px] md:text-[17px] md:leading-[25.5px] leading-5 mb-0 min-w-full ">
                The perks of owning $sPRIME extend to governance power; $sPRIME
                ownership is required to gain governance points. Points are
                assigned at a 10:1 ratio of a deposited or borrowed token (e.g.
                USDC) to $sPRIME. It is the underlying mechanism of the
                community-centered approach of our tokenomics, which paves the
                way towards making DeltaPrime a Decentralized Autonomous
                Organisation (DAO). The ultimate goal is to have the DeltaPrime
                community support and govern the platform, reaping the benefits
                of its operation while deciding on its position in the DeFi
                industry. 
                <br />
                {expandedSections[3] && (
                  <>
                    <br />
                    <strong>
                      Governance Power points are handled as follows:
                    </strong>
                     <br />
                    <br />
                    For borrowers: 10 points for every 10:1 ratio of tokens
                    held. When borrowing $10 and owning $1 $sPRIME (10:1 ratio),
                    the borrower receives 10 points per year, with a cap at 3
                    years. That means that after 3 years, the borrower will have
                    acquired 30 governance points. If they borrowed $20 and
                    owned $2 $sPRIME, their governance power at 3 years would be
                    60. Points are acquired only with the 10:1 ratio. That means
                    that if $25 was borrowed and $4 $sPRIME was held, the
                    governance power would still be 60 at 3 years, and would
                    continue to be so until the user acquired more or sold. 
                    <br />
                    <br />
                    For depositors: When depositing $10 of a token and owning $1
                    $sPRIME, the depositor receives 50 points per year, with a
                    cap at 3 years as the borrower. Therefore, if they deposited
                    $10 and held $1 $sPRIME they would receive 50 points per
                    year, capped at 150 at year 3. If they deposited $20 and
                    owned $2 $sPRIME, their capped governance points would be
                    300 at 3 years.
                    <br />
                    <br />
                    Locked $sPRIME Governance Power: The governance power of the
                    users holding locked $sPRIME will be determined as mentioned
                    above. However, if they lose their locked $sPRIME for not
                    making the required achievements, they will also lose the
                    matching proportionate amount of governance power. As stated
                    before, any other rewards remain with the user. 
                    <br />
                    <br />
                    Governance Power Reduction: When a borrower or depositor
                    returns or retrieves their funds, their governance points
                    are reduced over a period of 7 days based on their current
                    cap. Therefore, if from an initial $20:$2 ratio of
                    token:$sPRIME funds at 2 years there is a reduction of 50%,
                    their total capped power will reduce by 50%. So from a cap
                    of 60 governance points (if they were a borrower) their cap
                    will go down to 30 points and they will not accumulate more
                    until they increase their funds (borrowed funds and owned
                    $sPRIME). The governance points from lost locked $sPRIME
                    will also be reduced accordingly.
                  </>
                )}
              </p>
              <div className="mt-4 h-[50px] md:h-full block w-fit text-left">
                <GradientButton
                  label={expandedSections[3] ? "View Less" : "View More"}
                  onClick={() => toggleText(3)}
                  style={{ padding: "28px !important" }} // Override padding here
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section */}
      {/* second last */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-start w-full gap-10 my-10 md:my-20">
        {/* Text Wrapper */}
        <div className="flex flex-col md:mb-8 mb-0 justify-between items-center md:items-start h-fit flex-grow">
          <div className="text-left flex flex-col gap-4 dark:text-white text-[#252948] w-full">
            <div className="clearfix">
              {/* image that shows on desktop only */}
              <Image
                className={`rounded-[20px] border-4 border-[#fff56] float-left mr-4 mb-4 w-full lg:w-1/2 hidden lg:block ${
                  resolvedTheme === "dark"
                    ? "shadow-custom-dark"
                    : "shadow-custom-light"
                }`}
                src={ourStoryIntroImg}
                alt="deltaprime_mascot_img"
              />
              <p className="text-wrap min-w-full mb-4 font-bold text-2xl md:text-[28px]">
                Other $PRIME Allocations Explained
              </p>
              <Image
                className={`rounded-[20px] border-4 border-[#fff56] float-right ml-4 mb-4 w-full lg:w-1/2 block lg:hidden ${
                  resolvedTheme === "dark"
                    ? "shadow-custom-dark"
                    : "shadow-custom-light"
                }`}
                src={ourStoryIntroImg}
                alt="deltaprime_mascot_img"
              />
              <p className="whiteMainText text-wrap text-[15px] md:text-[17px] md:leading-[25.5px] leading-5 mb-0 min-w-full ">
                The team receives 16% of the tokens for the work they have put
                in for 3 years, while advisors are allocated a 5% for their
                invaluable contribution in developing the project. The
                allocations to private seed (1.75%), pre-seed(4.67%),
                launchpads(1.11%), and community seed (1.67%) represent the
                price at which the project was funded at the time. 
                <br />
                <br />
                {expandedSections[4] && (
                  <>
                    <br />
                    IEO allocation of 1.43% is used to bootstrap DEX liquidity
                    pools at launch. This is matched with 100% of the launchpad
                    and 50% of the Community Seed raises.
                    <br />
                    <br />
                    Grant from the Avalanche Foundation in the early stages of
                    the development receives a 0.57% allocation. This can be
                    bought at a discount up to the grant amount of $300,000 at a
                    future date. <br />
                    <br />
                    Bounties amount to 2% of the tokens and are to reward
                    individuals or organizations that manage to find any
                    critical bugs on the protocol and report them to DeltaPrime.
                    Informational and up to high severity bugs will be rewarded
                    in FIAT. Though no bug has been found so far, it is not
                    guaranteed that it will not be discovered in the future.
                    This is why DeltaPrime has added this to their suite of
                    security provisions of the platform. <br />
                    <br />
                    Bridge, which came from early private and community adopters
                    in late 2023, is allocated 2.31% of the total tokens. <br />
                    <br />
                    Lastly, 12% of $PRIME is allocated for Ecosystem Growth,
                    which can be utilized either for Market Making on possible
                    CEX listings in order to stabilize price, or to provide
                    grants to future partners and contributing community
                    members.
                  </>
                )}
              </p>
              <div className="mt-0 h-[100%] md:h-full block w-fit text-right flex items-right justify-right">
                <GradientButton
                  label={expandedSections[4] ? "View Less" : "View More"}
                  onClick={() => toggleText(4)}
                  style={{ padding: "28px !important" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section */}
      {/* last section */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-start w-full gap-10 my-10 md:my-20">
        {/* Text Wrapper */}
        <div className="flex flex-col md:mb-8 mb-0 justify-between items-center md:items-start h-fit flex-grow">
          <div className="text-left flex flex-col gap-4 dark:text-white text-[#252948] w-full">
            <div className="clearfix">
              {/* image that shows on desktop only */}
              <Image
                className={`rounded-[20px] border-4 border-[#fff56] float-right ml-4 mb-4 w-full lg:w-1/2 hidden lg:block ${
                  resolvedTheme === "dark"
                    ? "shadow-custom-dark"
                    : "shadow-custom-light"
                }`}
                src={ourStoryIntroImg}
                alt="deltaprime_mascot_img"
              />
              <p className="text-wrap max-w-xl mb-4 font-bold text-2xl md:text-[28px]">
                DeltaPrime Tokenomics Summed Up
              </p>
              <Image
                className={`rounded-[20px] border-4 border-[#fff56] float-right ml-4 mb-4 w-full lg:w-1/2 block lg:hidden ${
                  resolvedTheme === "dark"
                    ? "shadow-custom-dark"
                    : "shadow-custom-light"
                }`}
                src={ourStoryIntroImg}
                alt="deltaprime_mascot_img"
              />
              <p className="whiteMainText text-wrap text-[15px] md:text-[17px] md:leading-[25.5px] leading-5 mb-0 min-w-full ">
                At DeltaPrime, we first implemented a protocol with high
                security considerations, and are now positioned to organically
                transition to a community governed platform, setting checkpoints
                for stability and community rewards through our native tokens
                $PRIME and $sPRIME.&nbsp;
                {expandedSections[5] && (
                  <>
                    The aforementioned tokenomics work in a way to incentivize
                    usage of the platform, reduce price volatility as much as
                    possible, ensure a healthy liquidity pool with a reduced
                    price-impact due to large buys or sells, and mitigate
                    possible selling pressure from early adopters due to release
                    of tokens based on vesting schedules.
                    <br />
                    <br />
                    Meanwhile, development continues with more protocol
                    integrations, allowing for even more curated choices for
                    utilizing crypto capital. Features aiming to elevate the
                    user experience are also in the works and coming soon.
                    <br />
                    <br />A more detailed explanation of the protocol is given
                    in DeltaPrime’s documents available online.
                  </>
                )}
              </p>
              <div className="mt-4 h-[50px] md:h-full block w-fit text-left">
                <GradientButton
                  label={expandedSections[5] ? "View Less" : "View More"}
                  onClick={() => toggleText(5)}
                  style={{ padding: "28px !important" }} // Override padding here
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SecuritySection />
      <ContactForm />
    </div>
  );
};

export default Tokenomics;
