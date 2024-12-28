// "use client";

// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { Skills } from "./Skills";
// import { Education } from "./Education";
// import { Projects } from "./Projects";
// import { Certificates } from "./Certificates";
// import { useResume } from "@/context/ResumeContext";
// import React, { forwardRef } from "react";
// import { Template1 as TypeTemplate1 } from "@/data/ResumeData";

// interface ResumeTemplateProps {
//   // Add any props your resume template needs
// }

// const Template1 = forwardRef<HTMLDivElement, ResumeTemplateProps>(
//   (props, ref) => {
//     const { formData } = useResume();

//     if (!formData) {
//       return <div>No resume data available</div>;
//     }

//     const typedFormData = formData as TypeTemplate1;

//     return (
//       <div
//         ref={ref}
//         className="max-w-4xl mx-auto bg-white px-16 pt-20 overflow-hidden"
//       >
//         <header className="text-sky-600">
//           <h1 className="text-lg sm:text-xl text-center font-bold">
//             {typedFormData.header.name}
//           </h1>
//           <div className="text-center text-black text-xs sm:text-sm">
//             <a
//               href={`mailto:${typedFormData.header.email}`}
//               className="hover:underline"
//             >
//               {typedFormData.header.email}
//             </a>
//             <span className="mx-2">|</span>
//             <span>{typedFormData.header.phone}</span>
//           </div>
//           <div className="mt-4 flex justify-between text-black">
//             {typedFormData.header.github && (
//               <a
//                 style={{ display: "flex", alignItems: "center" }}
//                 href={`https://github.com/${typedFormData.header.github}`}
//               >
//                 <FaGithub
//                   style={{ width: "20px", height: "20px" }}
//                   className="mr-2"
//                 />
//                 @
//                 <span style={{ fontSize: "16px", lineHeight: "20px" }}>
//                   {typedFormData.header.github}
//                 </span>
//               </a>
//             )}

//             {typedFormData.header.linkedin && (
//               <a
//                 href={`https://linkedin.com/in/${typedFormData.header.linkedin}`}
//                 style={{ display: "flex", alignItems: "center" }}
//                 className="text-sm hover:underline"
//               >
//                 <FaLinkedin
//                   style={{ width: "20px", height: "20px" }}
//                   className="mr-2"
//                 />
//                 /
//                 <span style={{ fontSize: "16px", lineHeight: "20px" }}>
//                   {typedFormData.header.linkedin}
//                 </span>
//               </a>
//             )}
//           </div>
//         </header>

//         <main className="py-6 px-3">
//           {typedFormData.skills.length > 0 && (
//             <Skills skills={typedFormData.skills} />
//           )}
//           {typedFormData.education.length > 0 && (
//             <Education education={typedFormData.education} />
//           )}
//           {typedFormData.projects.length > 0 && (
//             <Projects projects={typedFormData.projects} />
//           )}
//           {typedFormData.certificates.length > 0 && (
//             <Certificates certificates={typedFormData.certificates} />
//           )}
//         </main>
//       </div>
//     );
//   }
// );

// Template1.displayName = "ResumeTemplate";

// export default Template1;

"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Skills } from "./Skills";
import { Education } from "./Education";
import { Projects } from "./Projects";
import { Certificates } from "./Certificates";
import { useResume } from "@/context/ResumeContext";
import { Template1 as TypeTemplate1 } from "@/data/ResumeData";

import React, { forwardRef } from "react";

interface ResumeTemplateProps {
  // Add any props your resume template needs
}
const Template1 = forwardRef<HTMLDivElement, ResumeTemplateProps>(
  (props, ref) => {
    const { formData } = useResume();
    const typedFormData = formData as TypeTemplate1;
    return (
      <div
        ref={ref}
        className="max-w-4xl mx-auto bg-white px-16 pt-20 overflow-hidden"
      >
        <header className=" text-sky-600 ">
          <h1 className="text-lg sm:text-xl text-center font-bold">
            {typedFormData?.header.name.toUpperCase()}
          </h1>
          <div className=" text-center text-black text-xs sm:text-sm">
            <a
              href={`mailto:${typedFormData?.header.email}`}
              className=" hover:underline"
            >
              {typedFormData.header.email}
            </a>
            <span className="mx-2">|</span>
            <span>{typedFormData.header.phone}</span>
          </div>
          <div className="mt-4 flex justify-between text-black">
            {typedFormData.header.github && (
              <a
                style={{ display: "flex", alignItems: "center" }}
                href={`https://github.com/${typedFormData?.header.github}`}
              >
                <FaGithub
                  style={{ width: "20px", height: "20px" }}
                  className="mr-2"
                />
                @
                <span style={{ fontSize: "16px", lineHeight: "20px" }}>
                  {typedFormData.header.github}
                </span>
              </a>
            )}

            {typedFormData.header.linkedin && (
              <a
                href={`https://linkedin.com/in/${typedFormData?.header.linkedin}`}
                style={{ display: "flex", alignItems: "center" }}
                className=" text-sm hover:underline"
              >
                <FaLinkedin
                  style={{ width: "20px", height: "20px" }}
                  className="mr-2"
                />
                /
                <span style={{ fontSize: "16px", lineHeight: "20px" }}>
                  {typedFormData?.header.linkedin}
                </span>
              </a>
            )}
          </div>
        </header>

        <main className="py-6 px-3">
          {formData?.skills.length ? <Skills skills={formData?.skills} /> : ""}
          {formData?.education.length ? (
            <Education education={typedFormData?.education} />
          ) : (
            ""
          )}
          {formData?.projects.length ? (
            <Projects projects={typedFormData?.projects} />
          ) : (
            ""
          )}
          {formData?.certificates.length ? (
            <Certificates certificates={typedFormData?.certificates} />
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
