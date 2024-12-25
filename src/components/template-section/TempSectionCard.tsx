import React from "react";
import Image from "next/image";
import { Button } from "../";
import { IoCreateOutline } from "react-icons/io5";
import Link from "next/link";

const TempSectionCard = ({ name }: { name: string }) => {
  return (
    <section className="text-black body-font min-h-screen flex items-center pb-16 ">
      <div className="container mx-auto flex px-5 py-6 items-center justify-center flex-col">
        <div>
          <Image
            className="mb-10 object-cover object-center rounded transition-transform hover:scale-105 duration-500 shadow-black shadow-md hover:shadow-black hover:shadow-lg"
            alt="resume"
            src="/images/resume-template.jpg"
            width={350}
            height={500}
          />
        </div>

        <div className="flex justify-center">
          <Button
            type="button"
            className="inline-flex py-[2px] ml-8 text-white bg-secondary hover:bg-secondary border-2 border-none shadow-black shadow-md transition-transform hover:scale-105 duration-300"
          >
            <Link
              href={`/templates/${name}`}
              className="w-full h-full flex items-center justify-center gap-x-2"
            >
              <IoCreateOutline />
              Create Resume
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TempSectionCard;
