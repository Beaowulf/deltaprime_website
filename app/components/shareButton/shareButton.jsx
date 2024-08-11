import Image from "next/image";
import shareIcon from "@/public/assets/icons/shareIcon.svg";
import shareIconBlack from "@/public/assets/icons/shareIconBlack.svg";
import { useTheme } from "next-themes";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from 'react-share';
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from 'react-share';
import { useEffect, useRef, useState } from "react";
import "./shareButton.css"
const ShareButton = ({ title, text, url }) => {
  const { theme } = useTheme();
  const [showPopup, setShowPopup] = useState(false);
  const [animationClass, setAnimationClass] = useState('hide');
  const [popupStyles, setPopupStyles] = useState({});
  const buttonRef = useRef(null);
  const popupRef = useRef(null);

  const togglePopup = () => {
    if (showPopup) {
      setAnimationClass('hide');
      setTimeout(() => setShowPopup(false), 300);
    } else {
      setShowPopup(true);
      setTimeout(() => {
        setAnimationClass('show');
      }, 10);
    }
  };

  // Close popup when clicking outside
  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target) && buttonRef.current && !buttonRef.current.contains(event.target)) {
    // if (popupRef.current && !popupRef.current.contains(event.target)) {
      setAnimationClass('hide');
      setTimeout(() => setShowPopup(false), 300); 
    }
  };


  const positionPopupToLeft = () => {
    if (buttonRef.current && popupRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const left = buttonRect.left - popupRef.current.offsetWidth + window.scrollX;
      const top = buttonRect.top + buttonRect.height + window.scrollY;

      setPopupStyles({
        top: `${top}px`,
        left: `${left}px`,
      });
    }
  };

  useEffect(() => {
    if (showPopup) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
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
        console.log("Article shared successfully");
      } catch (error) {
        console.error("Error sharing the article", error);
      }
    } else {
      togglePopup();
      // try {

      //   await navigator.clipboard.writeText(url);
      //   alert("URL copied to clipboard. You can now share it manually.");
      // } catch (error) {
      //   console.error("Error copying URL to clipboard", error);
      //   alert(
      //     "Web Share API is not supported in your browser. Failed to copy URL to clipboard."
      //   );
      // }
    }
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }} ref={popupRef}>
      <button onClick={handleShare} className="w-fit"  ref={buttonRef}>
        {theme === "dark" ? (
          <Image src={shareIcon} alt="share_Icon" width={22} height={22} />
        ) : (
          <Image src={shareIconBlack} alt="share_Icon" width={22} height={22} />
        )}
      </button>

      {showPopup && (
        <div
          // style={{
          //   position: "absolute",
          //   top: "100%",
          //   left: "50%",
          //   transform: "translateX(-50%)",
          //   background: "#fff",
          //   border: "1px solid #ccc",
          //   borderRadius: "8px",
          //   padding: "10px",
          //   zIndex: 1000,
          //   boxShadow: "0px 8px 16px rgba(0,0,0,0.2)",
          //   width: "200px",
          // }}

          className= {`text-[#252948] text-sm popup ${animationClass}` }
          ref={popupRef}
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            <li
              style={{
                marginBottom: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {/* <FaLink style={{ marginRight: "8px" }} /> */}
              {/* <button
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => navigator.clipboard.writeText(url)}
              >
                Copy link
              </button> */}
               <h1 className="text-[24px]  text-center  font-bold mb-4">
             Share on:
            </h1>
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
            {/* <li
              style={{
                marginBottom: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <LinkedinShareButton url={url} title={title}>
                <LinkedinIcon size={24} round />
              </LinkedinShareButton>
              <span style={{ marginLeft: "10px" }}> LinkedIn</span>
            </li> */}
          </ul>
        </div>
       )} 
    </div>
  );
};

export default ShareButton;
