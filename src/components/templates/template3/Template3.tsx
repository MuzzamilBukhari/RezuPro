"use client";

import React from "react";
import { useResume } from "@/context/ResumeContext";

export const ResumeTemplate: React.FC = () => {
  const { formData } = useResume();

  return (
    formData && (
      <div className="bg-white text-black p-8 max-w-4xl mx-auto shadow-lg">
        <h1 className="text-4xl font-bold mb-4">{formData}</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-2">Profile Summary</h2>
            <p className="mb-4">{formData.profileSummary}</p>

            <h2 className="text-2xl font-bold mb-2">Work Experience</h2>
            {formData.workExperience.map((exp, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-xl font-semibold">{exp.position}</h3>
                <p className="italic">
                  {exp.company} | {exp.duration}
                </p>
                <ul className="list-disc pl-5">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}

            <h2 className="text-2xl font-bold mb-2">Education</h2>
            {formData.education.map((edu, index) => (
              <p key={index} className="mb-2">
                {edu.degree}, {edu.institute}, {edu.year}
              </p>
            ))}
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">Contact</h2>
            <p>Phone: {formData.phone}</p>
            <p>Email: {formData.email}</p>

            <h2 className="text-2xl font-bold mt-4 mb-2">Certifications</h2>
            <ul className="list-disc pl-5">
              {formData.certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold mt-4 mb-2">Projects</h2>
            <ul className="list-disc pl-5">
              {formData.projects.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold mt-4 mb-2">Skills & Expertise</h2>
            <ul className="list-disc pl-5">
              {formData.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  );
};
