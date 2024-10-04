"use client";
import React, { useState } from "react";
import { useTheme } from "next-themes";
import "./contactForm.css";
import { DeltaPurpleButton } from "@/app/components/buttons/mainButton";
import UnlockPotentialContainer from "@/app/components/unlockPotentialContainer/unlockPotentialContainer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = ({ hasUnlockPotentialContainer = true, isLanding = false }) => {
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

    // Validation to check if fields are filled
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

    // Let the form submit to FormSubmit
    e.target.submit();

    toast.success("Thanks for reaching out. We will contact you soon.", {
      position: "top-right",
      autoClose: 6000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: resolvedTheme === "dark" ? "dark" : "light",
    });

    resetForm(); // Reset the form after successful submission
  };

  return (
    <div>
      <ToastContainer />
      {hasUnlockPotentialContainer && (
        <div className="lg:block hidden my-mobile-spacing md:my-desktop-spacing">
          <UnlockPotentialContainer hasMarginTop={false} />
        </div>
      )}
      <div className={`flex flex-col md:flex-row relative overflow-hidden ${isLanding ? 'mb-0 mt-mobile-spacing md:mt-desktop-spacing' : 'my-mobile-spacing md:my-desktop-spacing'}`}>
        {/* Left Side */}
        <div className="flex-1 flex flex-col justify-center items-start bg-cover bg-center contactFormBG">
          <div className="flex flex-col items-start mb-14 max-w-[30rem]">
            <h4 className="uppercase mb-2 featureTitle md:text-[15px] text-[12px] text-center dark:text-white text-[#6B70ED]">
              Contact us
            </h4>
            <h2 className="mb-6 featureSubtitle text-[25px] md:text-[34px] dark:text-white text-[#6B70ED]">
              Got a question to ask? We're here for you.
            </h2>
            <p className="aboutTypographyparagraphWhite max-w-xl md:leading-8 leading-6 dark:text-white text-[#565AC2]">
              You couldn't find answers in our Site, Docs or Discord? Ask us.
              We'll be happy to assist.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex flex-col justify-center px-8">
          <form
            className="w-full max-w-lg mx-auto"
            action="https://formsubmit.co/021c06f8f0e573140e17b029ced2a16b"
            method="POST"
            onSubmit={sendEmail}
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="false" />
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
                  required
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
                  required
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
                required
              ></textarea>
            </div>

            <div className="flex items-center justify-center">
              <DeltaPurpleButton
                buttonClassName={"w-full"}
                className={
                  "w-full flex items-center justify-center py-3 h-[50px] md:h-full"
                }
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
