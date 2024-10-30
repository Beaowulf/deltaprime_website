import Image from "next/image";
import shareIcon from "@/public/assets/icons/shareIcon.svg";
import shareIconBlack from "@/public/assets/icons/shareIconBlack.svg";
import { useTheme } from "next-themes";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { FacebookIcon, TwitterIcon, WhatsappIcon } from "react-share";
import { useEffect, useRef, useState } from "react";
import "./shareButton.css";
const ShareButton = ({ title, text, url }) => {
  const { theme } = useTheme();
  const [showPopup, setShowPopup] = useState(false);
  const [animationClass, setAnimationClass] = useState("hide");
  const [popupStyles, setPopupStyles] = useState({});
  const buttonRef = useRef(null);
  const popupRef = useRef(null);

  const togglePopup = () => {
    if (showPopup) {
      setAnimationClass("hide");
      setTimeout(() => setShowPopup(false), 300);
    } else {
      setShowPopup(true);
      setTimeout(() => {
        setAnimationClass("show");
      }, 10);
    }
  };

  const handleClickOutside = (event) => {
    if (
      popupRef.current &&
      !popupRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setAnimationClass("hide");
      setTimeout(() => setShowPopup(false), 300);
    }
  };

  useEffect(() => {
    if (showPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopup]);

  const handleShare = async () => {
    if (!title || !text || !url) {
      console.error("Missing title, text, or url for sharing");
      return;
    }

    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url,
        });
        // console.log("Article shared successfully");
      } catch (error) {
        console.error("Error sharing the article", error);
      }
    } else {
      togglePopup();
    }
  };

  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
        zIndex: 500,
      }}
      ref={popupRef}
    >
      <button onClick={handleShare} className="w-fit mt-2" ref={buttonRef}>
        {theme === "dark" ? (
          <Image src={shareIcon} alt="share_Icon" width={22} height={22} />
        ) : (
          <Image src={shareIconBlack} alt="share_Icon" width={22} height={22} />
        )}
      </button>

      {showPopup && (
        <div
          className={`text-[#252948] text-sm popup ${animationClass}`}
          ref={popupRef}
          style={{ zIndex: "9999999999999 !important" }}
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            <li
              style={{
                marginBottom: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <h3 className="text-[24px]  text-center  font-bold mb-4">
                Share on:
              </h3>
            </li>
            <li
              style={{
                marginBottom: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <FacebookShareButton url={url} quote={title}>
                <FacebookIcon size={24} round />
              </FacebookShareButton>
              <span style={{ marginLeft: "10px" }}>Facebook</span>
            </li>
            <li
              style={{
                marginBottom: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <TwitterShareButton url={url} title={title}>
                <TwitterIcon size={24} round />
              </TwitterShareButton>
              <span style={{ marginLeft: "10px" }}> X</span>
            </li>
            <li
              style={{
                marginBottom: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <WhatsappShareButton url={url} title={title}>
                <WhatsappIcon size={24} round />
              </WhatsappShareButton>
              <span style={{ marginLeft: "10px" }}> Whatsapp</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ShareButton;
