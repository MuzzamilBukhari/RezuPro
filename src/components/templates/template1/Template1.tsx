"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Skills } from "./Skills";
import { Education } from "./Education";
import { Projects } from "./Projects";
import { Certificates } from "./Certificates";
import { useResume } from "@/context/ResumeContext";

import React, { forwardRef } from "react";

interface ResumeTemplateProps {
  // Add any props your resume template needs
}

const Template1 = forwardRef<HTMLDivElement, ResumeTemplateProps>(
  (props, ref) => {
    const { formData } = useResume();
    return (
      <div
        ref={ref}
        className="max-w-4xl mx-auto bg-white px-16 pt-20 overflow-hidden"
      >
        <header className=" text-sky-600 ">
          <h1 className="text-lg sm:text-xl text-center font-bold">
            {formData?.header.name.toUpperCase()}
          </h1>
          <div className=" text-center text-black text-xs sm:text-sm">
            <a
              href={`mailto:${formData?.header.email}`}
              className=" hover:underline"
            >
              {formData?.header.email}
            </a>
            <span className="mx-2">|</span>
            <span>{formData?.header.phone}</span>
          </div>
          <div className="mt-4 flex justify-between text-black">
            {formData?.header.github && (
              <a
                style={{ display: "flex", alignItems: "center" }}
                href={`https://github.com/${formData?.header.github}`}
              >
                <FaGithub
                  style={{ width: "20px", height: "20px" }}
                  className="mr-2"
                />
                @
                <span style={{ fontSize: "16px", lineHeight: "20px" }}>
                  {formData?.header.github}
                </span>
              </a>
            )}

            {formData?.header.linkedin && (
              <a
                href={`https://linkedin.com/in/${formData?.header.linkedin}`}
                style={{ display: "flex", alignItems: "center" }}
                className=" text-sm hover:underline"
              >
                <FaLinkedin
                  style={{ width: "20px", height: "20px" }}
                  className="mr-2"
                />
                /
                <span style={{ fontSize: "16px", lineHeight: "20px" }}>
                  {formData?.header.linkedin}
                </span>
              </a>
            )}
          </div>
        </header>

        <main className="py-6 px-3">
          {formData?.skills.length ? <Skills skills={formData?.skills} /> : ""}
          {formData?.education.length ? (
            <Education education={formData?.education} />
          ) : (
            ""
          )}
          {formData?.projects.length ? (
            <Projects projects={formData?.projects} />
          ) : (
            ""
          )}
          {formData?.certificates.length ? (
            <Certificates certificates={formData?.certificates} />
          ) : (
            ""
          )}
        </main>
      </div>
    );
  }
);

Template1.displayName = "ResumeTemplate";

export default Template1;
