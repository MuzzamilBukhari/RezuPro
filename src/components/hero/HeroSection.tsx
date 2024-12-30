import React from "react";
import Image from "next/image";
import { Button } from "../";
import herowave from "../../../public/images/hero-wave-1.png";
import hero1 from "../../../public/images/hero-1.png";
const HeroSection = () => {
  return (
    <section className="text-black  body-font pt-0 max-xl:pt-8 relative w-full h-screen ">
      <div className=" flex justify-center px-10 py-10 sm:py-6 md:py-24 md:flex-row flex-col-reverse items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center justify-center">
          <h1 className="title-font md:text-6xl text-4xl mb-4 font-black text-secondary">
            Build Your Professional <br className="hidden lg:inline-block" />
            Resume in Minutes!
          </h1>
          <p className="mb-8 leading-relaxed font-medium">
            Create resumes that land you interviews. Simple, fast, and
            customizable.
          </p>
          <Button
            type="button"
            className="inline-flex py-[2px] text-white bg-secondary hover:bg-secondary border-2 border-none shadow-black shadow-md transition-transform hover:scale-105 duration-300"
          >
            <a
              href="/templates"
              className="w-full h-full flex items-center justify-center"
            >
              View Templates
            </a>
          </Button>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src={hero1}
          />
        </div>
      </div>
      {/* Wave Shape */}
      <div className="absolute bottom-0 left-0 right-0 w-full -z-10">
        <Image
          src={herowave} // Replace with the path to your wave PNG
          alt="Wave Shape"
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
