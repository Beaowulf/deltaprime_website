"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./newsLetter.css";
import ContactForm from "@/app/ui/contactForm/contactForm";
import calendarIcon from "@/public/assets/icons/calendarIcon.svg";
import { useTheme } from "next-themes";
// testing images delete later
import newsletterImageDesktop from "@/public/assets/img/images/newsletter-banner.png";
import newsletterImageMobile from "@/public/assets/img/images/newsletter-mobile.png";
import newsLetterPreviewImageMobile from "@/public/assets/img/images/newsLetter-Mobile-Preview-Image.png";
import newsLetterPreviewImage from "@/public/assets/img/images/newsLetter-Preview-Image.png";
import newsLetterDeltaNewsImage from "@/public/assets/img/images/newsletter-2024-deltaPrime-image.png";
import newsLetterDeltaNewsImageMobile from "@/public/assets/img/images/newsletter-2024-deltaPrime-image-mobile.png";

// Summint
import summmitDesktopImage from "@/public/assets/img/images/summit_desktop_image.png";
import summmitMobileImage from "@/public/assets/img/images/summit_mobile_image.png";

// Partner Spotlight
import partnerSpotlightDesktopImage from "@/public/assets/img/images/defi_desktop_image_newsletter.png";
import partnerSpotlightMobileImage from "@/public/assets/img/images/defi_mobile_image_newsletter.png";

// What's Next
import whatsNextDesktopImageFirst from "@/public/assets/img/images/whats_next_desktop_Image_First.png";
import whatsNextDesktopImageSecond from "@/public/assets/img/images/whats_next_desktop_Image_Second.png";
import whatsNextMobileImageFirst from "@/public/assets/img/images/whats_next_mobile_Image_First.png";
import whatsNextMobileImageSecond from "@/public/assets/img/images/whats_next_mobile_Image_Second.png";

import newsLetterGoGoPoolImage from "@/public/assets/img/images/gogopool_desktop_image_newsletter.png";
import newsLetterGoGoPoolImageMobile from "@/public/assets/img/images/gogopool_mobile_image_newsletter.png";

const NewsLetter = ({ blog }) => {
  const [blogData, setBlogData] = useState(blog);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!blogData) {
      const fetchData = async () => {
        const response = await fetch(`/api/blog/${blog.slug}`);
        const data = await response.json();

        setBlogData(data);
      };
      fetchData();
    }
  }, [blog.slug, blogData]);

  if (!blogData) {
    return <div></div>;
  }

  function formatDateString(isoString, locale = "en-GB") {
    const date = new Date(isoString);
    return date.toLocaleDateString(locale, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }

  return (
    <div key={blogData.slug}>
      <div className="newsLetter">
        <div className="md:pagePaddingLarge my-0 mt-10 md:mt-32">
          <div className="flex justify-center">
            <div className="w-fit flex flex-col-reverse gap-4 md:px-0 px-2">
              <div className="flex gap-2 items-center justify-end">
                <Image src={calendarIcon} alt="calendar_Icon" />
                <p className="text-nowrap text-[12px] font-medium text-[#565AC2] dark:text-[#F6F6F6] pr-4 md:pr-0">
                  {formatDateString(
                    blogData.blogSYS.createdAt,
                    blogData.blogSYS.locale
                  )}
                </p>
              </div>
              <Image
                src={newsletterImageDesktop}
                alt="newsletter_image"
                className="md:block hidden w-full md:max-w-[1207px] h-auto object-cover rounded-[25px]"
              />

              <Image
                src={newsletterImageMobile}
                alt="newsletter_image"
                className="rounded-[20px] mr-2 md:mr-10 w-auto h-[350px] xl:h-auto md:h-[600px] md:w-[500px] xl:max-w-[550px] object-cover block md:hidden"
              />
            </div>
          </div>

          <div className="px-0 sm:px-3 md:px-[2%] lg:px-[4%] xl:px-[5%] 2xl:px-[7%]">
            {/* <div className="my-12 md:my-desktop-spacing">
              <p className="brightTitle text-[40px] text-center mb-10">
                DeltaPrime in Numbers
              </p>
              <div className="flex flex-col lg:flex-row gap-4 w-full md:px-0 px-4">
                <div className="newsLetterWrapper lg:w-[30%]">
                  <div className="newsLetterContent px-10 py-6 flex flex-col gap-10 h-full lg:items-start items-center lg:justify-center bg-[#252948] text-white">
                    <div className="text-[24px] flex flex-row font-semibold gap-4">
                      <p>TVL Savings</p>
                      <div className="w-[2px] h-[full] bg-gradient-to-b from-[#FFBB9B] from-60% via-[#FF8FB8] via-70% to-[#AFAFFF] to-90%" />
                      <p>29%</p>
                    </div>
                    <div className="text-[24px] flex flex-row font-semibold gap-4 w-[14rem]">
                      <p>TVL Prime Accounts</p>
                      <div className="w-[2px] h-[full] bg-gradient-to-b from-[#FFBB9B] from-60% via-[#FF8FB8] via-70% to-[#AFAFFF] to-90%" />
                      <p className="m-auto">29%</p>
                    </div>
                    <div className="text-[24px] flex flex-row font-semibold gap-4">
                      <p>TVL Total</p>
                      <div className="w-[2px] h-[full] bg-gradient-to-b from-[#FFBB9B] from-60% via-[#FF8FB8] via-70% to-[#AFAFFF] to-90%" />
                      <p>29%</p>
                    </div>
                  </div>
                </div>
                <div className="newsLetterWrapper flex-grow">
                  <div className="newsLetterContent md:px-10 md:py-6 p-2 bg-[#252948]">
                    <table className="table-auto text-white w-full">
                      <thead>
                        <tr>
                          <th className="brightTitle md:text-[24px] text-[20px] p-2">
                            Avalanche
                          </th>
                          <th className="brightTitle md:text-[24px] text-[20px] p-2">
                            Asset
                          </th>
                          <th className="brightTitle md:text-[24px] text-[20px] p-2">
                            Arbitrum
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="text-center">
                          <td className="px-4 py-2">24%</td>
                          <td className="px-4 py-2">USDC</td>
                          <td className="px-4 py-2">24%</td>
                        </tr>
                        <tr className="text-center">
                          <td className="px-4 py-2">24%</td>
                          <td className="px-4 py-2">USDT</td>
                          <td className="px-4 py-2">24%</td>
                        </tr>
                        <tr className="text-center">
                          <td className="px-4 py-2">24%</td>
                          <td className="px-4 py-2">DAI</td>
                          <td className="px-4 py-2">24%</td>
                        </tr>
                        <tr className="text-center">
                          <td className="px-4 py-2">24%</td>
                          <td className="px-4 py-2">BTC</td>
                          <td className="px-4 py-2">24%</td>
                        </tr>
                        <tr className="text-center">
                          <td className="px-4 py-2">24%</td>
                          <td className="px-4 py-2">ETH</td>
                          <td className="px-4 py-2">24%</td>
                        </tr>
                        <tr className="text-center">
                          <td className="px-4 py-2">24%</td>
                          <td className="px-4 py-2">AVAX</td>
                          <td className="px-4 py-2">24%</td>
                        </tr>
                        <tr className="text-center">
                          <td className="px-4 py-2">24%</td>
                          <td className="px-4 py-2">ARB</td>
                          <td className="px-4 py-2">24%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="my-12 md:my-desktop-spacing flex lg:flex-row flex-col-reverse justify-between items-center w-full gap-6 md:px-0 px-4">
              <div className="rounded-[25px] ">
                <Image
                  className={`rounded-[20px] mr-2 md:mr-10 w-full xl:h-auto md:h-[600px] md:w-[500px] xl:max-w-[550px] object-cover hidden md:block ${
                    resolvedTheme === "dark"
                      ? "shadow-custom-dark"
                      : "shadow-custom-light"
                  }`}
                  src={summmitDesktopImage}
                  alt="newsLetter-Preview-Image"
                />
                <Image
                  className={`rounded-[20px] mr-2 md:mr-10 w-auto px-2 h-[350px] xl:h-auto md:h-[600px] md:w-[500px] xl:max-w-[550px] object-cover block md:hidden ${
                    resolvedTheme === "dark"
                      ? "shadow-custom-dark"
                      : "shadow-custom-light"
                  }`}
                  src={summmitDesktopImage}
                  alt="newsLetter-Preview-Image"
                />
              </div>

              <div className="flex flex-col w-full justify-between items-center lg:items-start h-fit lg:w-fit">
                <h3 className="md:brightText textShadow text-center md:text-left text-wrap max-w-[40rem] my-6 text-3xl md:text-[44px] dark:text-white text-[#6B70ED] leading-[100%]">
                  Review of DeltaPrime at the Summit
                </h3>

                <div className="leading-[150%] whiteMainText pl-3 md:pl-0 text-[15px] md:text-[17px] md:leading-[25.5px] max-w-[40rem] dark:text-white text-[#565AC2] md:text-left">
                  <p>
                    Last month, the biggest Avalanche-centric conference took
                    place in Buenos Aires. It was one that was hard to miss on
                    socials. We at DeltaPrime flocked together at the Summit.
                    This year, we did not have a booth and were unleashed on the
                    floor. This allowed us to seek out our partners, meet up and
                    get that extra bonding to strengthen our ties within
                    Avalanche. Similarly, we had some newer members with us to
                    get to know our partners face-to-face and exchange ideas. 
                  </p>

                  <br />
                  <p>
                    Our presence was also felt on stage. As a central point of
                    Liquidity Providers in the ecosystem, Gavin ‘klazinggav’
                    Hasselbaink attended the panel “All roads lead to liquidity”
                    along with our partners Yield Yak and Trader Joe. The topic
                    covered liquidity, incentives and everything in between. It
                    even included some differing perspectives, making it an
                    interesting fireside among frens. The full show can be found{" "}
                    <a
                      className="underline cursor-pointer"
                      href="https://youtu.be/ZP9V3cJetEg"
                      target="_blank"
                    >
                      here.
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="my-12 md:my-desktop-spacing md:newsLetter_Linear_BG_MD newsLetter_Linear_BG_SM py-10 md:px-10 md:py-20 p-4 md:rounded-[25px]">
              <h3 className="md:brightText textShadow text-center text-wrap max-w-full mb-8 text-3xl md:text-[60px] dark:text-white text-white ">
                DeltaPrime News
              </h3>
              <div className="flex lg:flex-row flex-col-reverse justify-center items-center w-full md:gap-5 gap-2">
                <div className="flex flex-col w-full justify-between items-center lg:items-start h-fit lg:w-fit">
                  <div className="whiteMainText pl-3 md:pl-0 text-[15px] md:text-[17px] md:leading-[25.5px] leading-[150%]  max-w-[40rem] dark:text-white text-white ">
                    <p>
                      A{" "}
                      <a
                        href="https://www.youtube.com/watch?v=EJoY_AH_p2Q"
                        className="underline cursor-pointer"
                        target="_blank"
                      >
                        live video-AMA
                      </a>{" "}
                      was held with the community to discuss recent events and
                      plans to move forward. With the full founding team,
                      answering every question until there were none left, the
                      call lasted for a solid two hours and ten minutes. Due to
                      the positive response to the AMA, this will now be
                      introduced as a recurring event in the DeltaPrime discord:{" "}
                      <span className="font-semibold">The Community Call.</span>
                    </p>
                    <br />
                    <p>
                      Ushering us into a new era: Discord got a new look! The
                      DeltaPrime Discord is now fully equipped with a Discord
                      Banner that invites you on this journey with us. More
                      importantly, no longer will the Discord invite link be a
                      random series of letters and numbers. From now on, it’s
                      simply:{" "}
                      <a
                        className="underline cursor-pointer"
                        href="https://discord.gg/deltaprime"
                      >
                        https://discord.gg/deltaprime
                      </a>
                      . Easy.
                    </p>
                    <br />
                    <p>
                      Simultaneously, it opens the door for quality audio, HD
                      streaming, and Custom Role Icons. As the heart of our
                      community, we would like to invite everyone to join the
                      Discord and get in on the action.
                    </p>
                    <br />
                    <p>
                      In other news, or should we say content, we recently
                      published our first articles of our Burd Log! Last Monday
                      featured a new article with a deep-dive on{" "}
                      <a
                        href="https://deltaprime.io/blogs/academy/cross-margin-maximising-capital-efficiency"
                        className="underline cursor-pointer"
                        target="_blank"
                      >
                        Cross-Margin
                      </a>{" "}
                      with all the details, benefits, and a practical example of
                      how it sets DeltaPrime apart from other protocols.
                    </p>
                  </div>
                </div>
                <div className="rounded-[25px] ">
                  <Image
                    className={`rounded-[20px] mr-2 md:mr-10 w-full xl:h-auto md:h-[550px] md:w-[450px] xl:max-w-[550px] object-cover hidden md:block ${
                      resolvedTheme === "dark"
                        ? "shadow-custom-dark"
                        : "shadow-custom-light"
                    }`}
                    src={newsLetterDeltaNewsImage}
                    alt="newsLetter-Preview-Image"
                  />
                  <Image
                    className={`rounded-[25px] mr-2 md:mr-10 w-auto h-[350px] object-cover block md:hidden mb-4 ${
                      resolvedTheme === "dark"
                        ? "shadow-custom-dark"
                        : "shadow-custom-light"
                    }`}
                    src={newsLetterDeltaNewsImageMobile}
                    alt="newsLetter-Preview-Image-Mobile"
                  />
                </div>
              </div>
            </div>

            <div className="my-12 md:my-desktop-spacing flex lg:flex-row flex-col justify-between items-center w-full md:gap-5 gap-2">
              <div className="rounded-[25px] ">
                <Image
                  className={`rounded-[27px] mr-2 md:mr-10 w-full xl:h-auto md:h-[600px] md:w-[500px] xl:max-w-[550px] object-cover hidden md:block ${
                    resolvedTheme === "dark"
                      ? "shadow-custom-dark"
                      : "shadow-custom-light"
                  }`}
                  src={partnerSpotlightDesktopImage}
                  alt="newsLetter-Preview-Image"
                />{" "}
                <Image
                  className={`rounded-[27px] mr-2 md:mr-10 w-auto h-[350px] object-cover block md:hidden mb-4 ${
                    resolvedTheme === "dark"
                      ? "shadow-custom-dark"
                      : "shadow-custom-light"
                  }`}
                  src={partnerSpotlightDesktopImage}
                  alt="newsLetter-Preview-Image-Mobile"
                />
              </div>

              <div className="flex flex-col w-full justify-between items-center lg:items-start h-fit lg:w-fit md:px-0 px-4">
                <h3 className="md:brightText textShadow text-center md:text-left text-wrap max-w-[40rem] my-6 text-3xl md:text-[44px] dark:text-white text-[#6B70ED] leading-[100%]">
                  Last month in DeFi
                </h3>

                <div className="whiteMainText pl-3 md:pl-0 text-[15px] md:text-[17px] md:leading-[25.5px] leading-[150%]  max-w-[40rem] dark:text-white text-[#565AC2] ">
                  <p>
                    As a protocol of partners, there are a few developments to
                    share from our friends. 
                  </p>
                  <br />
                  <p>
                    At the start of October, GMX launched their GMX Liquidity
                    Vault for AVAX (GLV). GLV is an index of GM Pools, offering
                    exposure to all its underlying pools through a single token.
                    Its aim is diversification and optimisation of yield by
                    allocating capital efficiently - that’s what we like to see.
                    The current composition includes AVAX, LTC, DOGE, and XRP,
                    with the lion’s share (95%) of capital being in the AVAX
                    pool.
                  </p>
                  <br />
                  <p>
                    On Arbitrum, GMX has been rapidly integrating new assets
                    into their protocol. In October alone, they have launched
                    pools for EIGEN, SATS, PEPE, AAVE, UNI, POL, SUI, SEI, and
                    APE. All these new pools, with the exception of APE, are
                    backed by USDC and WETH or WBTC, and are included in their
                    respective GLV. From these pools, UNI, SUI and EIGEN are
                    seeing the most traction and could meaningfully impact GLV.
                    It is too soon to tell whether that persists, so let’s keep
                    an eye on them.
                  </p>
                </div>
                <div className="whiteMainText pl-3 md:pl-0 text-[15px] md:text-[17px] md:leading-[25.5px] leading-[150%]  max-w-[40rem] dark:text-white text-[#565AC2] ">
                  <br />
                  <p>
                    Over at Yield Yak, in the build-up towards Avalanche9000,
                    its creators have announced a necessary protocol going
                    forward. Avalanche9000, with its aim to grow and develop the
                    ecosystem with Avalanche L1s, needs a protocol to connect
                    the liquidity of all those networks. That is where Tesseract
                    comes in.
                  </p>
                  <br />
                  <p>
                    <a
                      href="https://tesseract.ghost.io/introducing-tesseract-revolutionising-cross-l1-swaps-on-avalanche/"
                      className="underline cursor-pointer"
                      target="_blank"
                    >
                      {" "}
                      Tesseract
                    </a>{" "}
                    is a new protocol built by the creators of Yield Yak to
                    offer a trustless, non-custodial, on-chain trading platform
                    connecting all L1s. It hosts several benefits such as deeper
                    liquidity by leveraging all L1s, better prices via the
                    familiar multi-routing of swaps, with none of the
                    RPC-switching. A practical analogy of Tesseract, from our
                    view, is Yak Swap but for all Avalanche L1s. It will be a
                    crucial platform for increased interoperability within
                    Avalanche, and we will be following it closely.
                  </p>
                </div>
              </div>
            </div>

            <div className="my-12 md:my-desktop-spacing flex lg:flex-row flex-col-reverse justify-between items-center w-full md:gap-5 gap-2">
              <div className="flex flex-col w-full justify-between items-center lg:items-start h-fit lg:w-fit md:px-0 px-4">
                <h3 className="md:brightText textShadow text-center md:text-left text-wrap max-w-[40rem] my-6 text-3xl md:text-[44px] dark:text-white text-[#6B70ED] leading-[100%]">
                  In Good Company
                </h3>

                <div className="whiteMainText pl-3 md:pl-0 text-[15px] md:text-[17px] md:leading-[25.5px] leading-[150%]  max-w-[40rem] dark:text-white text-[#565AC2] ">
                  <p>
                    Our partners over at GoGoPool have been GoGo-going at it
                    during October, with some practical updates to back that up.
                    Just before the Summit, Steven hosted the first call with
                    their network of L1 founders. Main take-away? Bullish.
                    Bullish products and value-add. 
                  </p>
                  <br />
                  <p>
                    Unsurprisingly since GoGoPool is so close to the metal of
                    Avalanche. With ACP-77 looming, they are priming themselves
                    to supercharge the Avalanche ecosystem. They have been
                    ‘quietly’ building and are soon coming out with improved
                    support for validators and projects, they teased their
                    l1marketplace, and on top: their{" "}
                    <a
                      href="https://www.gogopool.com/launcher"
                      className="underline cursror-cursor-pointer"
                      target="_blank"
                    >
                      one-click L1 launcher
                    </a>{" "}
                    which Steven himself showcased at the Summit. 
                  </p>
                  <br />
                  <p>
                    Already, ggAVAX has been earning an average +7.5% APY for
                    holders as the highest yielding LST on Avalanche. If you’re
                    curious how, stay tuned. In the meantime, ggAVAX is the
                    centerpiece for a commonly used strategy that yields up to
                    ~45% APY on DeltaPrime. This is a partnership that does more
                    than just deliver yield. 
                  </p>
                </div>
              </div>
              <div className="rounded-[25px] ">
                <Image
                  className={`rounded-[20px] mr-2 md:mr-10 w-full xl:h-auto md:h-[600px] md:w-[500px] xl:max-w-[550px] object-cover hidden md:block ${
                    resolvedTheme === "dark"
                      ? "shadow-custom-dark"
                      : "shadow-custom-light"
                  }`}
                  src={newsLetterGoGoPoolImage}
                  alt="newsLetter-Preview-Image"
                />{" "}
                <Image
                  className={`rounded-[25px] mr-2 md:mr-10 w-auto h-[350px] object-cover block md:hidden mb-4 ${
                    resolvedTheme === "dark"
                      ? "shadow-custom-dark"
                      : "shadow-custom-light"
                  }`}
                  src={newsLetterGoGoPoolImage}
                  alt="newsLetter-Preview-Image-Mobile"
                />
              </div>
            </div>
            {/* Last Section What’s next for DeltaPrime */}

            <div className="my-12 md:my-desktop-spacing md:newsLetter_Linear_BG_MD newsLetter_Linear_BG_SM px-4 py-10 md:px-24 md:py-20 md:rounded-[25px]">
              <div className="flex flex-col gap-10">
                <div className="w-full flex justify-center">
                  <h3 className="md:brightText textShadow text-center text-wrap md:mb-8 text-3xl w-[40rem] md:text-[60px] dark:text-white text-white leading-[100%]">
                    What’s next for DeltaPrime
                  </h3>
                </div>
                <div className="whiteMainText pl-3 md:pl-0 text-[15px] md:text-[17px] md:leading-[25.5px] leading-[150%] w-full dark:text-white text-white">
                  <p>
                    The last couple of months were unique in DeltaPrime’s
                    history. We were forced to take ten steps back, reevaluating
                    every security procedure we have in play. While this led to
                    massive improvements on the security side, it also slowed
                    down development of the protocol significantly. For example,
                    DegenPrime was in the making, getting ready to be more
                    meme-able than BTC’s iconic $69,420.69 itself. This has been
                    put on hold. Prime Account (PA) and Cross Account (CA)
                    statistics were another priority we were excited to launch,
                    until we were forced to slow down.
                  </p>
                  <br />
                  <p>
                    Security remains number one. That will not change. However,
                    as we get to the point where all processes have been
                    evaluated and improved, we will also allocate dev-power to
                    the things you not only care about, but love to see. The
                    first two coming up?
                  </p>
                </div>
                <div className="flex lg:flex-row flex-col w-full justify-around lg:items-start md:items-center gap-4 md:gap-10 md:px-0 px-5">
                  <div className="flex flex-col gap-4 md:justify-start justify-center md:items-start items-center h-auto 2xl:max-w-[600px] lg:max-w-[450px]">
                    <div className="rounded-[25px] w-fit mx-auto">
                      <Image
                        className={`rounded-[25px] h-auto max-w-full object-cover hidden md:block ${
                          resolvedTheme === "dark"
                            ? "shadow-custom-dark"
                            : "shadow-custom-light"
                        }`}
                        src={whatsNextDesktopImageFirst}
                        alt="newsLetter-Preview-Image"
                      />
                      <Image
                        className={`rounded-[25px] mr-2 md:mr-10 w-auto h-[325px] object-contain block md:hidden ${
                          resolvedTheme === "dark"
                            ? "shadow-custom-dark"
                            : "shadow-custom-light"
                        }`}
                        src={whatsNextDesktopImageFirst}
                        alt="newsLetter-Preview-Image"
                      />
                    </div>
                    <div className="w-full">
                      <p className="max-w-[25rem] md:max-w-[30rem] pl-2 whiteMainText md:pl-0 text-[15px] md:text-[17px] md:leading-[25.5px] leading-[150%] w-full dark:text-white text-white md:m-0 mx-auto md:text-left text-center">
                        1. The Bull Meter, showing you how hedged you are on
                        your borrowable assets, regardless of whether you hold
                        them in your balance, GMX, Trader Joe, or elsewhere.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 md:justify-start justify-center md:items-start items-center h-auto 2xl:max-w-[600px] lg:max-w-[450px]">
                    <div className="rounded-[25px] w-fit mx-auto">
                      <Image
                        className={`rounded-[25px] h-auto max-w-full object-cover hidden md:block ${
                          resolvedTheme === "dark"
                            ? "shadow-custom-dark"
                            : "shadow-custom-light"
                        }`}
                        src={whatsNextDesktopImageSecond}
                        alt="newsLetter-Preview-Image"
                      />
                      <Image
                        className={`rounded-[25px] mr-2 md:mr-10 w-auto h-[325px] object-contain block md:hidden ${
                          resolvedTheme === "dark"
                            ? "shadow-custom-dark"
                            : "shadow-custom-light"
                        }`}
                        src={whatsNextDesktopImageSecond}
                        alt="newsLetter-Preview-Image"
                      />
                    </div>
                    <div className="w-full">
                      <p className="max-w-[25rem] md:max-w-[30rem] pl-2 whiteMainText md:pl-0 text-[15px] md:text-[17px] md:leading-[25.5px] leading-[150%] w-full dark:text-white text-white md:m-0 mx-auto md:text-left text-center">
                        2. PA PnL, which tells you how you have been performing
                        so far.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-center md:text-left whiteMainText pl-3 md:pl-0 text-[15px] md:text-[17px] md:leading-[25.5px] leading-[150%] w-full dark:text-white text-white">
                  <p className="md:text-[17px] text-[15px] leading-[150%]">
                    These two features are close to being finished, after which,
                    Elon-willing, we can get some much requested PA and CA
                    statistics in place.
                  </p>
                  <br />
                  <p className="md:text-[17px] text-[15px] leading-[150%]">
                    And after that? The opportunities are endless.
                  </p>
                  <br />
                  <p className="font-semibold text-[20px]">Be The Whale.</p>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
