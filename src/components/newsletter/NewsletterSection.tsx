import React from "react";
import { IoSend } from "react-icons/io5";

const Newsletter = () => {
  return (
    <section className="text-black body-font pb-16">
      <div className="container px-5 py-20 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-6xl text-4xl font-bold title-font mb-4 text-secondary">
            Stay Updated with RezuPro
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Sign up for our newsletter to receive the latest updates,
            resume-building tips, career advice, and exclusive offers directly
            to your inbox. Join the RezuPro community and stay ahead in your
            professional journey!
          </p>
        </div>
        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
          <div className="relative flex-grow w-full">
            <label htmlFor="full-name" className="leading-7 text-sm text-black">
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-primary focus:border-secondary focus:bg-transparent focus:ring-2 focus:ring-secondary text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative flex-grow w-full">
            <label htmlFor="email" className="leading-7 text-sm text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-primary focus:border-secondary focus:bg-transparent focus:ring-2 focus:ring-secondary text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="flex items-center justify-center mx-auto py-2 px-8 rounded text-lg font-semibold text-white bg-secondary hover:bg-secondary border-2 border-none shadow-black shadow-md transition-transform hover:scale-105 duration-300">
            Send <IoSend className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
