import React from "react";
import SectionTitle from "../SectionTitle";
import { IoSend } from "react-icons/io5";
import Image from "next/image";
import ContWave from "../../../public/images/cont-wave-01.png";

const Contact = () => {
  return (
    <div>
      <section className="text-black body-font relative">
        <div className="relative top-0 left-0 right-0 w-full -z-10">
          <Image
            src={ContWave}
            alt="wave shape"
            className="absolute top-0 left-0 w-full h-auto -z-10"
          />
        </div>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-11">
            <SectionTitle first="Contact" second="Us" />
            <p className="lg:w-2/3 mx-auto mt-2 leading-relaxed text-base pt-2  sm:pt-12 text-black">
              Have questions or need help getting started with building your
              professional resume? Reach out to us—we’re here to help you every
              step of the way in creating the perfect resume with RezuPro!
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-md text-black"
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-transparent rounded border border-secondary focus:border-primary focus:bg-white focus:ring-2 focus:ring-secondary text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-md text-black"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-transparent rounded border border-secondary focus:border-primary focus:bg-white focus:ring-2 focus:ring-secondary text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-md text-black"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-transparent rounded border border-secondary focus:border-primary focus:bg-white focus:ring-2 focus:ring-secondary h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex items-center justify-center mx-auto py-2 px-8 rounded text-lg font-semibold text-white bg-secondary hover:bg-secondary border-2 border-none shadow-black shadow-md transition-transform hover:scale-105 duration-300">
                  Send <IoSend className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
