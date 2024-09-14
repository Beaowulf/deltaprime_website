"use client";
import React, { useState } from "react";
import { useTheme } from "next-themes";
import "./contactForm.css";
import { DeltaPurpleButton } from "@/app/components/buttons/mainButton";
import UnlockPotentialContainer from "@/app/components/unlockPotentialContainer/unlockPotentialContainer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = ({ hasUnlockPotentialContainer = true }) => {
  const { resolvedTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("All fields are required.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: resolvedTheme === "dark" ? "dark" : "light",
      });
      return;
    }

    const testSend = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
        // If there's an error, you can call reject() here instead
      }, 2000);
    });

    toast.promise(
      testSend,
      {
        pending: "Pending...",
        success: {
          render:
            "Thanks for reaching out. A member of our team will review your message and contact you shortly.",
          onClose: resetForm(),
        },
        error: "Something went wrong. Please try again later.",
      },
      {
        position: "top-right",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: resolvedTheme === "dark" ? "dark" : "light",
      }
    );
  };

  return (
    <div>
      <ToastContainer />
      {hasUnlockPotentialContainer && (
        <div className="lg:block hidden mt-10">
          <UnlockPotentialContainer hasMarginTop={false} />
        </div>
      )}
      <div className="flex flex-col md:flex-row mt-5 md:mt-20 md:pb-36 pb-5 relative overflow-hidden">
        {/* Left Side */}
        <div className="flex-1 flex flex-col justify-center items-start bg-cover bg-center px-10 py-2 md:py-28 2xl:py-40 contactFormBG ">
          {/* Add your background image in the above style */}
          <div className="flex flex-col items-start mb-14 max-w-[30rem]">
            <h4 className="uppercase mb-2 featureTitle md:text-[15px] text-[12px] text-center dark:text-white text-[#6B70ED] ">
              Contact us
            </h4>
            <h2 className="mb-6 featureSubtitle text-[25px] md:text-[34px] dark:text-white text-[#6B70ED] ">
              Got a question to ask? We're here for you.
            </h2>
            <p className="aboutTypographyparagraphWhite max-w-xl md:leading-8 leading-6 dark:text-white text-[#565AC2] ">
              You couldn't find answers in our Site, Docs or Discord? Ask us.
              We'll be happy to assist.
            </p>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex-1 flex flex-col justify-center p-8">
          <form className="w-full max-w-lg mx-auto" onSubmit={sendEmail}>
            <div className="flex gap-5">
              <div className="mb-4 flex-1">
                <label
                  className="block dark:text-white text-[#6B70ED] font-bold mb-2 text-[12px] md:text-[17px]"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border-2 rounded-lg w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline border-[#7C71FF] bg-transparent focus:border-[#B39FFF]"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4 flex-1">
                <label
                  className="block dark:text-white text-[#6B70ED] font-bold mb-2 text-[12px] md:text-[17px]"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border-2 rounded-lg w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline border-[#7C71FF] bg-transparent focus:border-[#B39FFF]"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                className="block dark:text-white text-[#6B70ED] font-bold mb-2 text-[12px] md:text-[17px]"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border-2 rounded-lg w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none border-[#7C71FF] bg-transparent focus:border-[#B39FFF]"
                id="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <DeltaPurpleButton
                buttonClassName={"w-full"}
                className={"w-full flex items-center justify-center py-3"}
                typographyClass={"text-[15px]"}
                label={"SUBMIT"}
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
