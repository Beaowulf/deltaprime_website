"use client";
import React, { useEffect, useState } from "react";
import { MainButton } from "@/app/components/buttons/mainButton";
import { useRouter } from "next/navigation";
import "./unlockPotentialContainer.css";
import Modal from "react-modal";
import Image from "next/image";
import { MainButtonDarkBG } from "@/app/components/buttons/mainButton";
import curvedArrowRight from "@/public/assets/icons/curve_right.svg";
import curvedArrowLeft from "@/public/assets/icons/curve_left.svg";
import closeIconBlack from "@/public/assets/icons/closeIconBlack.svg";

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
    borderRadius: "20px",
  },
};

const UnlockPotentialContainer = ({ hasMarginTop = true, onClick }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { push } = useRouter();

  useEffect(() => {
    const appElement = document.getElementById("__next");
    if (appElement) {
      Modal.setAppElement(appElement);
    } else {
      console.error("App element not found");
    }
  }, []);

  function poolsHandler() {
    // clear storage before entering (testing this now)
    localStorage.clear();
    localStorage.setItem("launchAppPreference", "poolsAccount");
    console.log("clicked");
    push("https://app.deltaprime.io/#/pools");
  }

  function primeAccountHandler() {
    // clear storage before entering (testing this now)
    localStorage.clear();
    localStorage.setItem("launchAppPreference", "primeAccount");
    console.log("clicked");
    push("https://app.deltaprime.io/#/prime-account/zaps");
  }

  function launchAppClickHandler() {
    const preference = localStorage.getItem("launchAppPreference");
    if (preference == "primeAccount") {
      push("https://app.deltaprime.io/#/prime-account/zaps");
    } else if (preference == "poolsAccount") {
      push("https://app.deltaprime.io/#/pools");
    } else setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div
      className={`hidden sm:block parentColoredBorderWrapper ${
        hasMarginTop ? "mt-20" : "mt-0"
      }`}
    >
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Example Modal"
      >
        <div className="modalParent">
          <div className="w-[500px] bg-[#f4f4ff] flex flex-col py-12 px-16 rounded-[20px] shadowModal">
            <h4 className="leading-5 text-[32px] text-black text-center font-semibold">
              Launch your App
            </h4>
            <div className="flex flex-row justify-center gap-32 mt-8">
              {/* Left side */}
              <div className="flex justify-center flex-col gap-1">
                <Image
                  src={curvedArrowLeft}
                  alt="curved_arrow_left"
                  className="h-10 w-auto"
                />

                <div className="featureBorderWrapLightTheme ">
                  {" "}
                  <MainButtonDarkBG
                    onClick={poolsHandler}
                    label="Depositor"
                  ></MainButtonDarkBG>
                </div>
              </div>
              {/* right side */}
              <div className="flex justify-center flex-col gap-1">
                <Image
                  src={curvedArrowRight}
                  alt="curved_arrow_right"
                  className="h-10 w-auto"
                />
                <div className="featureBorderWrapLightTheme ">
                  <MainButtonDarkBG
                    onClick={primeAccountHandler}
                    label="Prime Account"
                  ></MainButtonDarkBG>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <div className="introTextBtnContainer">
        <div className="flex items-center flex-col lg:flex-row gap-8 lg:gap-0 justify-between lg:px-12 lg:py-8 px-6 py-4 w-full">
          <h5 className="md:text-[30px] 2xl:text-[41px] text-[32px] unlockPotentialTypography">
            Unlock the full potential of your capital
          </h5>
          <MainButton
            onClick={launchAppClickHandler}
            label="LAUNCH APP"
            hasArrowRight={true}
          />
        </div>
      </div>
    </div>
  );
};

export default UnlockPotentialContainer;
