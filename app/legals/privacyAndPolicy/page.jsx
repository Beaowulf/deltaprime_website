import React from "react";
import Link from "next/link";
import DynamicPurpleBar from "@/app/components/dynamicPurpleBar/dynamicPurpleBar";

// content will come from contentful

function PrivacyandPolicy() {
  return (
    <>
      <DynamicPurpleBar title={"Privacy Policy"} />
      <div className="pb-4 pagePaddingLarge">
        <div className="flex justify-center items-center flex-col w-auto h-full md:mt-20 mt-5">
          <p className="brightText mb-4 text-3xl md:text-[44px] mt-10">
            Privacy Policy
          </p>
        </div>
        <div className="flex justify-center text-justify flex-col pl-6 pr-6 mt-16 text-2xl">
          <p className="font-extrabold"> Lorem ipsum dolor</p>
          <p className="pt-5 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            veritatis ab amet, provident minima excepturi modi est, dolore
            quibusdam ad quaerat earum aliquam tempore maxime fuga consequuntur
            inventore, illo debitis? Fuga quaerat officia, magni consequuntur
            iste itaque non!
          </p>
          <p className="pt-5 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            veritatis ab amet, provident minima excepturi modi est, dolore
            quibusdam ad quaerat earum aliquam tempore maxime fuga consequuntur
            inventore, illo debitis inventore, illo debitis?
          </p>
        </div>
        <div className="flex justify-center text-justify flex-col pl-6 pr-6 mt-16 text-2xl mb-20">
          <p className="font-extrabold">Lorem ipsum dolor</p>
          <p className="pt-5 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            veritatis ab amet, provident minima excepturi modi est, dolore
            quibusdam ad quaerat earum aliquam tempore maxime fuga consequuntur
            inventore, illo debitis? Fuga quaerat officia, magni consequuntur
            iste itaque non!
          </p>
          <p className="pt-5 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            veritatis ab amet, provident minima excepturi modi est, dolore
            quibusdam ad quaerat earum aliquam tempore maxime fuga consequuntur
            inventore, illo debitis inventore, illo debitis?
          </p>
        </div>
      </div>
    </>
  );
}

export default PrivacyandPolicy;
