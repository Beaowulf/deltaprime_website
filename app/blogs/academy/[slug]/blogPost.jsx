"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./blogPost.css";
import RichTextRenderer from "@/app/components/richTetxtRenderer/richTextRenderer";
import ShareButton from "@/app/components/shareButton/shareButton";
import DynamicPurpleBar from "@/app/components/dynamicPurpleBar/dynamicPurpleBar";
import clockIcon from "@/public/assets/icons/clockIcon.svg";
import hashtagIcon from "@/public/assets/icons/hashtagIcon.svg";
import calendarIcon from "@/public/assets/icons/calendarIcon.svg";
import circleOne from "@/public/assets/icons/circleOne.svg";
import circleTwo from "@/public/assets/icons/circleTwo.svg";
import circleThree from "@/public/assets/icons/circleThree.svg";
import ContactForm from "@/app/ui/contactForm/contactForm";
import Header from "@/app/components/header/header";
import BlogCard from "@/app/components/blogCard/blogCard";
import CryptoPreviewTables from "@/app/components/cryptoTables/cryptoTables";
import adImg from "@/public/assets/img/adImg.png";
import {
  AboutButtonDarkBG,
  CTAButton,
} from "@/app/components/buttons/mainButton";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

// Updated extractTextFromChildren function
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

const sanitizeId = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove all non-word, non-space, non-hyphen characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with a single one
    .trim(); // Trim any leading or trailing hyphens or spaces
};

const BlogPost = ({ blog, blogPreviewData }) => {
  const [headings, setHeadings] = useState([]);
  const [blogData, setBlogData] = useState(blog);
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
  }, [blogData, blogData.slug]);

  useEffect(() => {
    const extractedHeadings = [];
    const options = {
      renderNode: {
        [BLOCKS.HEADING_4]: (node, children) => {
          const text = extractTextFromChildren(children);
          const id = sanitizeId(text);
          console.log("Generated ID:", id); // Log the ID for debugging
          if (text) {
            extractedHeadings.push({ id, title: text });
          }
        },
      },
    };

    documentToReactComponents(blog.blogRichTextParagraph, options);
    setHeadings(extractedHeadings);
  }, [blog]);

  const handleScrollTo = (id) => (e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // Adjust this value to change the scroll offset
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
    const CircleOne = () => {
      return (
        <Image
          src={circleOne}
          alt="circle_with_gradient_color"
          width={15}
          height={15}
        />
      );
    };

    const CircleTwo = () => {
      return (
        <Image
          src={circleTwo}
          alt="circle_with_gradient_color"
          width={15}
          height={15}
        />
      );
    };

    const CircleThree = () => {
      return (
        <Image
          src={circleThree}
          alt="circle_with_gradient_color"
          width={15}
          height={15}
        />
      );
    };

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

  // Extract plain text from rich text document
  const plainText = documentToPlainTextString(blogData.blogRichTextParagraph);
  const wordCount = countWords(plainText);
  const minsToRead = Math.ceil(wordCount / 210);
  const heroImage = blogData.blogImage.fields.file.url;

  return (
    <div key={blogData.slug}>
      <DynamicPurpleBar
        title={blogData.blogTitle}
        link={<Link href={"/blogs"}>Burd Log</Link>}
      />
      {/* BIG TWO SECTION WRAPPER */}

      <div className="flex flex-col lg:flex-row gap-10 mt-20 pagePaddingLarge">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-9/12">
          <div className="px-4 ">
            {/* blog title */}
            <h1 className="text-[24px] md:text-[35px] text-center md:text-left leading-10 text-[#252948] dark:text-[#F6F6F6] font-bold mb-10 md:mb-20">
              {blogData.blogTitle}
            </h1>

            {/* writteb by - icons - share article  */}
            <div className="w-full flex md:flex-row flex-col justify-between items-center gap-4 text-[#252948] dark:text-[#F6F6F6]">
              <div>
                <p className="text-[#252948] dark:text-[#F6F6F6]">
                  Written By Joe Smith
                </p>
              </div>

              <div className="flex justify-center items-center gap-4">
                <div className="flex gap-2">
                  <Image src={clockIcon} alt="clock_Icon" />
                  <p className="text-nowrap text-[#252948] dark:text-[#F6F6F6]">
                    {minsToRead} min
                  </p>
                </div>
                <div className="flex gap-2">
                  <Image src={calendarIcon} alt="calendar_Icon" />
                  <p className="text-nowrap text-[#252948] dark:text-[#F6F6F6]">
                    {formatDateString(
                      blogData.blogSYS.createdAt,
                      blogData.blogSYS.locale
                    )}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Image src={hashtagIcon} alt="hashtag_Icon" />
                  <p className="text-nowrap text-[#252948] dark:text-[#F6F6F6]">
                    {blogData.blogCategory}
                  </p>
                </div>
              </div>

              <div className="md:flex hidden place-items-center gap-4">
                <p className="text-nowrap text-[#252948] dark:text-[#F6F6F6]">
                  Share article:
                </p>
                <ShareButton
                  title={blogData.blogTitle}
                  text={blogData.blogDescription}
                  url={blogUrl}
                />
              </div>
            </div>

            {/* blog Image  */}
            <div className="mt-6">
              <img
                src={`https:${heroImage}`}
                alt="blog_Post_Image"
                className="w-auto max-h-450px rounded-[20px]"
              />
            </div>
            <div className="md:hidden w-full flex justify-center mt-6 gap-4">
              <p className="text-nowrap text-[#252948] dark:text-[#F6F6F6]">
                Share article:
              </p>
              <ShareButton
                title={blogData.blogTitle}
                text={blogData.blogDescription}
                url={blogUrl}
              />
            </div>
            <div className="md:hidden block bg-white mt-6 p-10 rounded-[20px]">
              <p className="font-bold leading-6 uppercase text-[18px] text-[#252948]">
                Table of contents
              </p>
              <div className="w-full bg-black h-[2px] my-5" />
              <ul className="flex flex-col gap-10">
                {headings.map((heading) => (
                  <li key={heading.id}>
                    <a
                      href={`#${heading.id}`}
                      onClick={handleScrollTo(heading.id)}
                      className="text-[#252948] text-[15px]"
                    >
                      <span className="text-[8px]">●</span> {heading.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="blogPostWrapper mt-10">
              <RichTextRenderer
                blogTakeaways={blogData.blogTakeaways}
                hasTakeaways={blogData?.blogTakeaways?.length > 0}
                richTextDocument={blogData.blogRichTextParagraph}
              />
            </div>
            <div className="fullWidthButtonChildren h-[60px] mt-12 md:h-full block md:hidden w-full text-center">
              <Link href="?modal=true">
                <CTAButton
                  className="mx-auto w-full p-4"
                  label="LAUNCH APP"
                  hasArrowRight={true}
                  typographyClass="text-[15px]"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="hidden md:block md:w-3/12">
          <div className="flex flex-col gap-10 sticky top-32">
            <div className="bg-white p-4 md:p-10 rounded-[20px]">
              <p className="font-bold leading-6 uppercase text-[18px] text-[#252948]">
                Table of contents
              </p>
              <div className="w-full bg-black h-[2px] my-5" />
              <ul className="flex flex-col gap-10">
                {headings.map((heading) => (
                  <li key={heading.id}>
                    <a
                      href={`#${heading.id}`}
                      onClick={handleScrollTo(heading.id)}
                      className="text-[#252948] text-[15px]"
                    >
                      <span className="text-[8px]">●</span> {heading.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <CryptoPreviewTables />
            <div className="flex flex-col gap-10 px-5 pt-8 rounded-[20px] bg-gradient-to-b from-[#FFBB9B] from-10% via-[#FF8FB8] via-60% to-[#AFAFFF] to-80%">
              <h3 className="text-[24px] text-[#1B153C] font-extrabold leading-9 tracking-[-0.72px]">
                This can be anything you want an ad, a new product anything
              </h3>
              <div className="sm:w-fit w-full featureBorderWrapLightTheme rounded-[20px]">
                <AboutButtonDarkBG
                  customClass="w-full"
                  hasWhiteArrowRight={true}
                  label={"LEARN MORE"}
                />
              </div>
              <Image src={adImg} alt="deltaPrime_mascot_Holding_Keys_" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="hidden md:block bg-[#A79DFF] w-screen mt-28 h-1" />
        <div className="px-8">
          <Header
            subTitle={"Related Articles"}
            paragraph={"Follow Burd on a journey of knowledge and discovery."}
          />
        </div>

        <div className="flex flex-wrap gap-6 items-center justify-center mb-20 md:mb-0">
          {blogPreviewData.slice(0, 3).map((blogPreviewData) => (
            <BlogCard
              key={blogPreviewData.blog.slug}
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
        {/* contanct form */}
        <div className="px-4 sm:px-[5%] md:px-[8%] lg:px-[10%] 2xl:px-[15%]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
