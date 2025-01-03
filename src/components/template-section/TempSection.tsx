import React from "react";

import TempSectionCard from "./TempSectionCard";
import { TbCircleNumber1, TbCircleNumber2 } from "react-icons/tb";
import template1 from "../../../public/images/template-1.jpg";
import template2 from "../../../public/images/template-2.jpg";

const TempSection = () => {
  return (
    <section className="text-black body-font min-h-screen flex items-center pt-28 flex-col">
      <div className="container mx-auto flex px-0 sm:px-5 py-24 items-center justify-center flex-col">
        <div className="flex flex-col text-center w-full mb-11 relative">
          <div
            className="absolute -z-10 left-1/2 transform sm:-translate-x-64 sm:-translate-y-3.5 -translate-x-44 -translate-y-1.5 w-24 h-24  sm:w-32 sm:h-36 bg-no-repeat bg-center bg-contain"
            style={{ backgroundImage: "url('/images/tempsection-01.png')" }}
          ></div>
          <h1 className="text-5xl sm:text-6xl  lg:text-7xl font-black title-font text-white text-center pt-4  ">
            My{" "}
            <span className="text-secondary underline font-black">
              Templates
            </span>
          </h1>
          <p className="lg:w-2/3 mx-auto mt-2 leading-relaxed text-base pt-10 text-black px-5">
            Looking to kickstart your career with a standout resume? Explore our
            professional templates designed to help you shine. Whether
            you&apos;re crafting your first resume or updating an existing one,
            RezuPro makes it simple and effective. Need assistance? We&apos;re
            here to guide you at every step in creating the resume that truly
            represents you!
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <TempSectionCard
            name="template1"
            icon={<TbCircleNumber1 className="text-black" />}
            imgUrl={template1}
          />
          <TempSectionCard
            name="template2"
            icon={<TbCircleNumber2 className="text-black" />}
            imgUrl={template2}
          />
        </div>
      </div>
    </section>
  );
};

export default TempSection;
