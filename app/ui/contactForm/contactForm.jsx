"use client";
import React from "react";
import "./contactForm.css";
import { ContactUsButton } from "@/app/components/buttons/mainButton";

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="flex flex-col md:flex-row mt-24 pb-36 relative">
      {/* Left Side */}
      <div className="flex-1 flex flex-col justify-center items-start bg-cover bg-center px-10 py-2 md:py-28 2xl:py-40 contactFormBG">
        {/* Add your background image in the above style */}
        <div className="flex flex-col items-start dark:text-white text-black mb-14 max-w-[30rem]">
          <h4 className="uppercase mb-2 featureTitle md:text-[15px] text-[12px] text-center">
            Contact us
          </h4>
          <h1 className="mb-6 featureSubtitle text-[25px] md:text-[34px]">
            Wanna chat? Message us.
          </h1>
          <p className="featureParagraph max-w-xl text-[13px] md:leading-8 sm:text-[17px] leading-6">
            Looking for answers that you can’t find in our documentation or our
            community conversations on Discord? Drop us a line. We’ll be happy
            to assist.
          </p>
        </div>
      </div>
      {/* Right Side */}
      <div className="flex-1 flex flex-col justify-center p-8">
        <form className="w-full max-w-lg mx-auto" onSubmit={handleSubmit}>
          <div className="flex gap-5">
            <div className="mb-4 flex-1">
              <label
                className="block dark:text-white text-[#252948] font-bold mb-2 text-[12px] md:text-[17px]"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border-2 rounded-lg w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline border-[#7C71FF] bg-transparent focus:border-[#B39FFF]"
                id="name"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4 flex-1">
              <label
                className="block dark:text-white text-[#252948] font-bold mb-2 text-[12px] md:text-[17px]"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border-2 rounded-lg w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline border-[#7C71FF] bg-transparent focus:border-[#B39FFF]"
                id="email"
                type="email"
                placeholder="Your Email"
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              className="block dark:text-white text-[#252948] font-bold mb-2 text-[12px] md:text-[17px]"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border-2 rounded-lg w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none border-[#7C71FF] bg-transparent focus:border-[#B39FFF]"
              id="message"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <ContactUsButton label={"SUBMIT"} type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
