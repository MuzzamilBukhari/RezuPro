import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { PiReadCvLogoFill } from "react-icons/pi";

const BestTemplate = () => {
  return (
    <section className="py-8 bg-gray-50 relative pt-16">
      <div className="text-center mb-10">
        <h3 className="text-5xl sm:text-6xl lg:text-7xl font-black title-font text-secondary underline text-center pt-4">
          Best Templates
        </h3>
        <p className="lg:w-2/3 mx-auto mt-2 leading-relaxed text-base pt-2 sm:pt-12 text-black">
          Explore our curated collection of the best resume templates, designed
          to help you stand out in the competitive job market. Whether
          you&apos;re a fresh graduate or a seasoned professional, these
          templates provide the perfect foundation to showcase your skills,
          experience, and achievements. Select your favorite, customize it, and
          take the first step toward landing your dream job!
        </p>
      </div>

      <div className="flex justify-center">
        <Image
          className="mb-10 object-cover object-center rounded transition-transform hover:scale-105 duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:shadow-black hover:shadow-lg w-80% md:w-[400px] lg:w-[450px]"
          alt="resume"
          src="/images/template-1.jpg"
          width={450}
          height={550}
        />
      </div>
      <div className="flex justify-center">
        <Button
          type="button"
          className="inline-flex py-[2px] px-6 text-white bg-secondary hover:bg-secondary border-2 border-none shadow-black shadow-md transition-transform hover:scale-105 duration-300"
        >
          <Link
            href="/templates"
            className="w-full h-full flex items-center justify-center gap-x-2"
          >
            Explore Templates
            <PiReadCvLogoFill />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default BestTemplate;
