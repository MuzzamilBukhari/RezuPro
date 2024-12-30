import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section className="text-black body-font">
      <div className="container px-5 py-24 mx-auto">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black title-font text-secondary underline text-center pt-4">
          Testimonials
        </h2>
        <div className="flex flex-col text-center w-full mb-11">
          <p className="lg:w-2/3 mx-auto mt-2 leading-relaxed text-base pt-2 sm:pt-12 text-black">
            Our user&apos;s feedback is a testament to the impact of RezuPro.
            From job seekers to professionals looking to enhance their resumes,
            hear from those who have experienced the difference our tool makes
            in shaping their careers. Get inspired by their stories and join the
            growing community of satisfied users who trust RezuPro for building
            a standout resume.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 pt-4">
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <Image
                width={300}
                height={300}
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-secondary bg-black"
                src="/images/1.jpg"
              />
              <p className="leading-relaxed mb-4">
                &quot;RezuPro made building my resume so much easier. The
                templates are sleek and professional, and the process was quick
                and intuitive. I highly recommend it!&quot;
              </p>
              <div className="flex justify-center mb-4">
                {/* Stars rating */}
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-gray-400" />
              </div>
              <span className="inline-block h-1 w-10 rounded bg-secondary mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                Michael Johnson
              </h2>
            </div>
          </div>
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <Image
                width={300}
                height={300}
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-secondary bg-black"
                src="/images/2.jpg"
              />
              <p className="leading-relaxed mb-4">
                &quot;This tool helped me stand out in a competitive job market.
                I was able to create a resume that not only looks great but also
                highlights my skills and experience effectively. I’m very
                satisfied!&quot;
              </p>
              <div className="flex justify-center mb-4">
                {/* Stars rating */}
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
              </div>
              <span className="inline-block h-1 w-10 rounded bg-secondary mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                John Doe
              </h2>
            </div>
          </div>
          <div className="lg:w-1/3 lg:mb-0 p-4">
            <div className="h-full text-center">
              <Image
                width={300}
                height={300}
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-secondary bg-black"
                src="/images/3.jpg"
              />
              <p className="leading-relaxed mb-4">
                &quot;I&apos;ve used several resume builders before, but RezuPro
                is by far the best. The design is sleek, modern, and easy to
                customize. My resume looks fantastic and I feel much more
                confident now.&quot;
              </p>
              <div className="flex justify-center mb-4">
                {/* Stars rating */}
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-gray-400" />
                <FaStar className="text-gray-400" />
              </div>
              <span className="inline-block h-1 w-10 rounded bg-secondary mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                Jane Smith
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
