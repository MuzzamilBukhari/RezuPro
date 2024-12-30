import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import muzzPic from "../../../public/images/pic.jpg";
import huzaifPic from "../../../public/images/huzaifa-pic.jpg";
const About = () => {
  return (
    <>
      <section className="text-black bg-white body-font pt-20">
        <div className="container mx-auto flex px-5 sm:px-20 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-4xl mb-4 font-black text-secondary">
              Transforming Dreams
              <br className="hidden lg:inline-block" /> into Careers
            </h1>
            <p className="mb-8 leading-relaxed">
              RezuPro is your ultimate solution for creating standout resumes
              effortlessly. Designed to meet the needs of professionals,
              students, and job seekers, RezuPro offers a seamless platform to
              craft visually appealing and impactful resumes that highlight your
              skills and achievements.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded"
              width={820}
              height={700}
              alt="hero"
              src="/images/about-01.png"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="flex flex-col text-center w-full mb-14">
          <h1 className="sm:text-6xl text-4xl font-bold title-font mb-6 text-secondary">
            Meet the Creators of RezuPro
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700">
            RezuPro was born from a shared vision to empower individuals with
            exceptional resume-building tools. Combining technical expertise
            with a passion for innovation, we aim to simplify the job-seeking
            process and help users make a lasting impression.
          </p>
        </div>

        <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 pb-12">
          {/* Muzzamil's Profile */}
          <div className="bg-white rounded-xl shadow-black shadow-md p-8 flex flex-col items-center">
            <Image
              src={muzzPic}
              alt="Muzzamil Bukhari"
              className="w-32 h-32 object-cover object-top rounded-full mb-4 border-4 border-secondary"
            />
            <h2 className="text-2xl font-bold text-secondary mb-2">
              Muzzamil Bukhari
            </h2>
            <p className="text-black text-center mb-4">
              A 2nd-year university student passionate about development,
              specializes in creating responsive and user-friendly solutions
              using modern technologies, I aim to deliver impactful digital
              experiences.
            </p>
            <p className="text-black text-center mb-4">
              In the Resume Builder project, I contributed by implementing
              dynamic functionality, allowing users to fill out a form and
              instantly generate a resume. Additionally, I ensured the
              responsiveness of both the resume form and templates for seamless
              usability across devices.
            </p>
            <a
              href="https://www.linkedin.com/in/muzzamilbukhari/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-white bg-secondary rounded-lg hover:bg-opacity-90 flex items-center space-x-2"
            >
              <FaLinkedin className="text-xl" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>

          {/* Huzaifa's Profile */}
          <div className="bg-white rounded-xl shadow-black shadow-md p-8 flex flex-col items-center">
            <Image
              src={huzaifPic}
              alt="Huzaifa Naeem"
              className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-secondary"
            />
            <h2 className="text-2xl font-bold text-secondary mb-2">
              Huzaifa Naeem
            </h2>
            <p className="text-black text-center mb-4">
              A second-year Pre-Engineering student with a passion for graphic
              design and front-end development. Specializing in crafting
              intuitive user interfaces and responsive web designs for seamless
              digital experiences.
            </p>
            <p className="text-black text-center mb-4">
              I contributed significantly to the Resume Builder project by
              designing an intuitive and visually appealing user interface. I
              also worked on enhancing the responsiveness of the overall design,
              ensuring a consistent experience across devices.
            </p>
            <a
              href="https://www.linkedin.com/in/huzaifa-naeem-8949692b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-white bg-secondary rounded-lg hover:bg-opacity-90 flex items-center space-x-2"
            >
              <FaLinkedin className="text-xl" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
