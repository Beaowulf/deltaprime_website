"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./blogPost.css";
import RichTextRenderer from "@/app/components/richTetxtRenderer/richTextRenderer";
import ShareButton from "@/app/components/shareButton/shareButton";
import DynamicPurpleBar from "@/app/components/dynamicPurpleBar/dynamicPurpleBar";
import ContactForm from "@/app/ui/contactForm/contactForm";
import Header from "@/app/components/header/header";
import BlogCard from "@/app/components/blogCard/blogCard";
import CryptoPreviewTables from "@/app/components/cryptoTables/cryptoTables";
import {
  AboutButtonDarkBG,
  DeltaPurpleButton,
} from "@/app/components/buttons/mainButton";
import clockIcon from "@/public/assets/icons/clockIcon.svg";
import hashtagIcon from "@/public/assets/icons/hashtagIcon.svg";
import calendarIcon from "@/public/assets/icons/calendarIcon.svg";
import circleOne from "@/public/assets/icons/circleOne.svg";
import circleTwo from "@/public/assets/icons/circleTwo.svg";
import circleThree from "@/public/assets/icons/circleThree.svg";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

// Function to sanitize IDs (heading links)
const sanitizeId = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove all non-word, non-space, non-hyphen characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with a single one
    .trim(); // Trim any leading or trailing hyphens or spaces
};

// Function to extract text from children nodes
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

const BlogPost = ({ blog, blogPreviewData }) => {
  const [headings, setHeadings] = useState([]);
  const [blogData, setBlogData] = useState(blog);
  const [activeHeading, setActiveHeading] = useState(null);
  const blogUrl = typeof window !== "undefined" ? window.location.href : "";

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

  useEffect(() => {
    const collectedHeadings = [];
    const handleHeadingRender = (id, title) => {
      collectedHeadings.push({ id, title });
    };

    documentToReactComponents(blog.blogRichTextParagraph, {
      renderNode: {
        [BLOCKS.HEADING_2]: (node, children) => {
          const text = extractTextFromChildren(children);
          const id = sanitizeId(text);
          handleHeadingRender(id, text);
          return (
            <h4 id={id} className="text-lg font-bold my-4">
              {children}
            </h4>
          );
        },
      },
    });

    setHeadings(collectedHeadings);

    const handleScroll = () => {
      let closestHeading = null;
      let closestDistance = Infinity;

      collectedHeadings.forEach((heading) => {
        const element = document.getElementById(heading.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = 100;
          const distance = rect.top - offset;

          if (distance >= 0 && distance < closestDistance) {
            closestDistance = distance;
            closestHeading = heading.id;
          }
        }
      });

      if (closestHeading) {
        setActiveHeading(closestHeading);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [blog]);

  const handleScrollTo = (id) => (e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const yPosition =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };

  if (!blogData) {
    return <div></div>;
  }

  function getRandomNumber() {
    const randomIndex = Math.floor(Math.random() * 3) + 1;
    return randomIndex;
  }

  const Circles = (randomNumber) => {
    const CircleOne = () => (
      <Image
        src={circleOne}
        alt="circle_with_gradient_color"
        width={15}
        height={15}
      />
    );

    const CircleTwo = () => (
      <Image
        src={circleTwo}
        alt="circle_with_gradient_color"
        width={15}
        height={15}
      />
    );

    const CircleThree = () => (
      <Image
        src={circleThree}
        alt="circle_with_gradient_color"
        width={15}
        height={15}
      />
    );

    switch (randomNumber) {
      case 1:
        return <CircleOne />;
      case 2:
        return <CircleTwo />;
      case 3:
        return <CircleThree />;
      default:
        return null;
    }
  };

  function formatDateString(isoString, locale = "en-GB") {
    const date = new Date(isoString);
    return date.toLocaleDateString(locale, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }

  function countWords(str) {
    return str.split(/\s+/).filter((word) => word !== "").length;
  }

  const plainText = documentToPlainTextString(blogData.blogRichTextParagraph);
  const wordCount = countWords(plainText);
  const minsToRead = Math.ceil(wordCount / 210);
  const heroImage = blogData.blogImage.fields.file.url;

  return (
    <div key={blogData.slug}>
      <DynamicPurpleBar
        mediumPadding={true}
        title={blogData.blogTitle}
        link={<Link href={"/blogs"}>Burd Log</Link>}
      />
      <div className="my-mobile-spacing md:my-desktop-spacing flex flex-col lg:flex-row gap-10 pagePaddingMedium">
        <div className="w-full lg:w-9/12">
          <div className="px-4 ">
            <h3 className="text-[24px] md:text-[35px] text-center md:text-left leading-10 text-[#6B70ED] dark:text-[#F6F6F6] font-bold mb-10 md:mb-20">
              {blogData.blogTitle}
            </h3>
            <div className="w-full flex md:flex-row flex-col justify-between items-center gap-4 text-[#6B70ED] dark:text-[#F6F6F6]">
              <div>
                <p className="text-[#565AC2] dark:text-[#F6F6F6]">
                  Written By {blogData.blogAuthor}
                </p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <div className="flex gap-2">
                  <Image src={clockIcon} alt="clock_Icon" />
                  <p className="text-nowrap text-[#565AC2] dark:text-[#F6F6F6]">
                    {minsToRead} min
                  </p>
                </div>
                <div className="flex gap-2">
                  <Image src={calendarIcon} alt="calendar_Icon" />
                  <p className="text-nowrap text-[#565AC2] dark:text-[#F6F6F6]">
                    {formatDateString(
                      blogData.blogSYS.createdAt,
                      blogData.blogSYS.locale
                    )}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Image src={hashtagIcon} alt="hashtag_Icon" />
                  <p className="text-nowrap text-[#565AC2] dark:text-[#F6F6F6]">
                    {blogData.blogCategory}
                  </p>
                </div>
              </div>
              <div className="md:flex hidden place-items-center gap-4">
                <p className="text-nowrap text-[#565AC2] dark:text-[#F6F6F6]">
                  Share article:
                </p>
                <ShareButton
                  title={blogData.blogTitle}
                  text={blogData.blogDescription}
                  url={blogUrl}
                />
              </div>
            </div>
            <div className="mt-6">
              <Image
                src={`https:${heroImage}`}
                alt="blog_Post_Image"
                className="w-auto mx-auto max-h-450px rounded-[20px]"
                width={450}
                height={450}
                loading="lazy"
              />
            </div>
            <div className="md:hidden w-full flex justify-center mt-6 gap-4 items-center">
              <p className="text-nowrap text-[#565AC2] dark:text-[#F6F6F6] ">
                Share article:
              </p>
              <div>
                <ShareButton
                  title={blogData.blogTitle}
                  text={blogData.blogDescription}
                  url={blogUrl}
                />
              </div>
            </div>
            {/* hide on desktop */}
            <div className="md:hidden block bg-white mt-6 p-10 rounded-[20px]">
              <p className="font-bold leading-6 uppercase text-[18px] text-[#6B70ED]">
                Table of contents
              </p>
              <div className="w-full bg-black h-[2px] my-5" />
              <ul className="flex flex-col gap-10">
                {headings.map((heading) => (
                  <li key={heading.id}>
                    <a
                      href={`#${heading.id}`}
                      onClick={handleScrollTo(heading.id)}
                      className={`text-[#565AC2] text-[15px] line-clamp-2 ${
                        activeHeading === heading.id ? "font-bold" : ""
                      }`}
                    >
                      <span className="text-[8px]">●</span> {heading.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="blogPostWrapper mt-10 text-[#565AC2] dark:text-[#F6F6F6]">
              <RichTextRenderer
                blogTakeaways={blogData.blogTakeaways}
                hasTakeaways={blogData?.blogTakeaways?.length > 0}
                richTextDocument={blogData.blogRichTextParagraph}
              />
            </div>
            <div className="fullWidthButtonChildren h-[60px] mt-12 md:h-full block md:hidden w-full text-center">
              <Link href="?modal=true" scroll={false}>
                <DeltaPurpleButton
                  label="LAUNCH APP"
                  hasArrowRight={true}
                  typographyClass="text-[15px]"
                />
              </Link>
            </div>
          </div>
        </div>
        {/* hide on mobile */}
        <div className="hidden md:block md:w-3/12">
          <div className="flex flex-col gap-10 sticky top-32">
            <div className="coloredBoxBorder max-w-[340px]">
              <div className="deltaWhiteLinearBG p-4 md:p-6 rounded-[30px]">
                <p className="font-bold leading-6 uppercase text-[18px] text-[#6B70ED]">
                  Table of contents
                </p>
                <div className="w-full bg-black h-[2px] my-5" />
                <ul className="flex flex-col gap-4">
                  {headings.map((heading) => (
                    <div key={heading.id}>
                      <li>
                        <a
                          href={`#${heading.id}`}
                          onClick={handleScrollTo(heading.id)}
                          className={`text-[#565AC2] text-[15px] line-clamp-2 ${
                            activeHeading === heading.id ? "font-bold" : ""
                          }`}
                        >
                          <span className="text-[8px]">●</span> {heading.title}
                        </a>
                      </li>
                      <span className="bg-gray-200 h-[1px] w-1/2 -my-1 mx-auto"></span>
                    </div>
                  ))}
                </ul>
              </div>
            </div>

            <CryptoPreviewTables />
            <div className="flex flex-col justify-center items-center gap-4 px-5 rounded-[20px] cta_background">
              <h3 className="text-[32px] text-white text-center max-w-[12rem] leading-7">
                <span className="font-extrabold">Explore Strategies</span> for
                Any Risk Appetite
              </h3>
              <div className="sm:w-fit w-full featureBorderWrapLightTheme rounded-[20px]">
                <AboutButtonDarkBG
                  href={"/strategies"}
                  hasArrowRight={true}
                  customClass="w-full"
                  hasWhiteArrowRight={true}
                  label={"LEARN MORE"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="hidden md:block bg-[#A79DFF] w-full mt-28 h-1" />
        <div className="px-8">
          <Header
            subTitle={"Related Articles"}
            paragraph={"Follow Burd on a journey of knowledge and discovery."}
          />
        </div>
        <div className="flex flex-wrap gap-6 items-center justify-center mb-20 md:mb-0">
          {blogPreviewData.slice(0, 3).map((blogPreviewData) => (
            <BlogCard
              key={blogPreviewData.blog.blogID}
              blogSlug={blogPreviewData.blog.slug}
              blogCategory={blogPreviewData.blog.blogCategory}
              blogTitle={blogPreviewData.blog.blogTitle}
              blogDescription={blogPreviewData.blog.blogDescription}
              minsToRead={blogPreviewData.blog.minsToRead}
              previewBlogImage={`https:${blogPreviewData.blog.previewImageBlog.fields.file.url}`}
              roundedImage={Circles(getRandomNumber())}
            />
          ))}
        </div>
        <div className="px-4 sm:px-[5%] md:px-[8%] lg:px-[10%] 2xl:px-[15%]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
