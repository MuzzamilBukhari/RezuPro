import { useResume } from "@/context/ResumeContext";
import React, { forwardRef } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation, IoPersonCircle, IoSchool } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Template2 as TypeTemplate2 } from "@/data/ResumeData";

interface ResumeTemplateProps {
  // Add any props your resume template needs
}

const Template2 = forwardRef<HTMLDivElement, ResumeTemplateProps>(
  (props, ref) => {
    const { formData } = useResume();
    const typedFormData = formData as TypeTemplate2;
    return (
      <div className="min-h-screen bg-gray-100 p-4 md:p-8" ref={ref}>
        <div className="mx-auto max-w-5xl bg-white shadow-lg">
          <div className="grid grid-cols-2 ">
            <div className="bg-[#DD4B39] text-white p-2 sm:p-6">
              <div className="mb-8">
                <div className="bg-white text-[#DD4B39] p-2 mb-4 inline-block">
                  <h3 className="font-bold text-sm md:text-lg">
                    {typedFormData.field.toUpperCase()}
                  </h3>
                </div>
              </div>

              <div className="space-y-6">
                <section>
                  <h3 className="font-bold mb-2 flex items-center gap-2 text-sm md:text-base">
                    <IoLocation className="w-5 h-5 md:w-6 md:h-6" />
                    ADDRESS
                  </h3>
                  <p className="text-[8px] md:text-sm break-words">
                    {typedFormData.address}
                  </p>
                </section>

                <section>
                  <h3 className="font-bold mb-2 flex items-center gap-2 text-sm md:text-base">
                    <FaPhoneAlt className="w-4 h-4 md:w-5 md:h-5" />
                    CONTACT
                  </h3>
                  <p className="text-[8px] md:text-sm">{typedFormData.phone}</p>
                </section>

                <section>
                  <h3 className="font-bold mb-2 flex items-center gap-2 text-sm md:text-base">
                    <MdEmail className="w-5 h-5 md:w-6 md:h-6" />
                    EMAIL
                  </h3>
                  <p className="text-xs md:text-sm break-words">
                    {typedFormData.email}
                  </p>
                </section>

                <section>
                  <h3 className="font-bold mb-2 flex items-center gap-2 text-sm md:text-base">
                    <IoPersonCircle className="w-5 h-5 md:w-6 md:h-6" />
                    PROFILE
                  </h3>
                  <p className="text-xs md:text-sm">DOB: {typedFormData.dob}</p>
                  <p className="text-xs md:text-sm">
                    GENDER: {typedFormData.gender}
                  </p>
                </section>

                <section>
                  <h3 className="font-bold mb-2 flex items-center gap-2 text-sm md:text-base">
                    <IoSchool className="w-5 h-5 md:w-6 md:h-6" />
                    EDUCATION
                  </h3>
                  <div className="space-y-4">
                    {typedFormData.education.map((edu) => (
                      <div key={edu.id}>
                        <h4 className="font-bold text-xs md:text-sm">
                          {edu.degree}:
                        </h4>
                        <p className="text-xs md:text-sm">{edu.institution}</p>
                        <p className="text-xs md:text-sm">{edu.details}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>

            <div className="p-2 sm:p-6">
              <header className="mb-8">
                <h1 className="text-sm sm:text-base md:text-3xl font-bold text-[#DD4B39] mb-1">
                  {typedFormData.name.toUpperCase()}
                </h1>
                <h2 className="text-xs sm:text-sm md:text-lg lg:text-xl font-bold text-[#DD4B39]">
                  {typedFormData.title.toUpperCase()}
                </h2>
              </header>

              <div className="space-y-6">
                <section>
                  <h3 className="font-bold text-[#DD4B39] mb-2 text-xs sm:text-sm md:text-lg border-b-2 border-[#DD4B39]">
                    OBJECTIVE
                  </h3>
                  <p className="text-[8px] sm:text-xs md:text-sm">
                    {typedFormData.objective}
                  </p>
                </section>

                <section>
                  <h3 className="font-bold text-[#DD4B39] mb-2 text-xs sm:text-sm md:text-lg border-b-2 border-[#DD4B39]">
                    EXPERIENCE
                  </h3>
                  <ul className="text-[8px] sm:text-xs md:text-sm list-disc list-inside">
                    {typedFormData.experience.map((exp, index) => (
                      <li key={index}>{exp}</li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

Template2.displayName = "ResumeTemplate";

export default Template2;
