"use client";

import React, { useState } from "react";
import { Template2 } from "@/data/ResumeData";
import Education from "@/types/Education";
import Project from "@/types/Project";
import Certificate from "@/types/Certificate";
import { Button, Input, Textarea, Label } from "@/components/ui";
import { useRouter } from "next/navigation";
import { useResume } from "@/context/ResumeContext";
import {
  Award,
  Briefcase,
  GraduationCap,
  MinusCircle,
  PlusCircle,
  Send,
} from "lucide-react";
import { FaFolderOpen } from "react-icons/fa";
import { MdWorkspacePremium } from "react-icons/md";

const Template2Form = () => {
  const { setFormData, setSelectedTemplate } = useResume();
  const router = useRouter();

  const [resumeData, setResumeData] = useState<Template2>({
    field: "",
    address: "",
    phone: "",
    email: "",
    dob: "",
    gender: "",
    education: [],
    name: "",
    title: "",
    objective: "",
    experience: [],
    skills: [],
    projects: [],
    certificates: [],
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setResumeData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleExperienceChange = (index: number, value: string) => {
    setResumeData((prevData) => {
      const newExperience = [...prevData.experience];
      newExperience[index] = value;
      return { ...prevData, experience: newExperience };
    });
  };

  const handleArrayChange = (index: number, field: "skills", value: string) => {
    setResumeData((prev) => ({
      ...prev,
      [field]: prev[field].map((item, i) => (i === index ? value : item)),
    }));
  };

  const handleObjectArrayChange = (
    index: number,
    field: "projects" | "certificates" | "education",
    subfield: string,
    value: string
  ) => {
    setResumeData((prev) => ({
      ...prev,
      [field]: prev[
        field
      ].map((item: Project | Certificate | Education, i: number) =>
        i === index ? { ...item, [subfield]: value } : item
      ),
    }));
  };

  const addArrayItem = (
    field: "skills" | "experience" | "projects" | "certificates" | "education"
  ) => {
    if (field === "skills") {
      const newSkill = (document.getElementById(
        "newSkill"
      ) as HTMLInputElement).value.trim();
      if (newSkill) {
        setResumeData((prev) => ({
          ...prev,
          skills: [...prev.skills, newSkill],
        }));
        (document.getElementById("newSkill") as HTMLInputElement).value = "";
      }
    } else if (field === "experience") {
      setResumeData((prev) => ({
        ...prev,
        experience: [...prev.experience, ""],
      }));
    } else {
      let newItem: Education | Certificate | Project;
      if (field === "projects") {
        newItem = { id: Date.now(), name: "", description: "", link: "" };
      } else if (field === "certificates") {
        newItem = { id: Date.now(), name: "", link: "" };
      } else {
        newItem = { id: Date.now(), degree: "", institution: "", details: "" };
      }
      setResumeData((prev) => ({
        ...prev,
        [field]: [...prev[field], newItem],
      }));
    }
  };

  const removeArrayItem = (
    field: "skills" | "experience" | "projects" | "certificates" | "education",
    index: number
  ) => {
    setResumeData((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Filter out empty items before submitting
    const filteredData = {
      ...resumeData,
      skills: resumeData.skills.filter((skill) => skill.trim() !== ""),
      experience: resumeData.experience.filter((exp) => exp.trim() !== ""),
      projects: resumeData.projects.filter(
        (project) =>
          project.name.trim() !== "" ||
          project.description.trim() !== "" ||
          project.link.trim() !== ""
      ),
      certificates: resumeData.certificates.filter(
        (cert) => cert.name.trim() !== "" || cert.link.trim() !== ""
      ),
    };
    console.log(JSON.stringify(filteredData, null, 2));
    setFormData(filteredData); // Save filtered form data to context
    setSelectedTemplate("template2");
    router.push(`/templates/template2/${filteredData.name}`);
    console.log("sfsf");
  };

  return (
    <div className="min-h-screen max-w-5xl bg-gradient-to-br from-[#036BFF] to-[#003EFF] py-12 px-4 sm:px-8 lg:px-10 mx-auto mt-10 mb-14">
      <div className="mx-auto max-w-5xl bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Resume Form</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <Label htmlFor="field">Field Of Studty</Label>
              <Input
                id="field"
                name="field"
                value={resumeData.field}
                onChange={handleInputChange}
                className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
              />
            </div>
            <div>
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                name="address"
                value={resumeData.address}
                onChange={handleInputChange}
                className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                value={resumeData.phone}
                onChange={handleInputChange}
                className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={resumeData.email}
                onChange={handleInputChange}
                className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
              />
            </div>
            <div>
              <Label htmlFor="dob">Date Of Birth</Label>
              <Input
                id="dob"
                name="dob"
                value={resumeData.dob}
                onChange={handleInputChange}
                className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
              />
            </div>
            <div>
              <Label htmlFor="gender">Gender</Label>
              <Input
                id="gender"
                name="gender"
                value={resumeData.gender}
                onChange={handleInputChange}
                className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
              />
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#036BFF] flex items-center">
              <GraduationCap className="mr-2" /> Education
            </h2>
            {resumeData.education.map((edu, index) => (
              <div key={edu.id} className="mb-6 p-4 bg-gray-50 rounded-lg">
                <Input
                  value={edu.degree}
                  onChange={(e) =>
                    handleObjectArrayChange(
                      index,
                      "education",
                      "degree",
                      e.target.value
                    )
                  }
                  placeholder="Degree"
                  className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                />
                <Input
                  value={edu.institution}
                  onChange={(e) =>
                    handleObjectArrayChange(
                      index,
                      "education",
                      "institution",
                      e.target.value
                    )
                  }
                  placeholder="Institution"
                  className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                />
                <Textarea
                  value={edu.details}
                  onChange={(e) =>
                    handleObjectArrayChange(
                      index,
                      "education",
                      "details",
                      e.target.value
                    )
                  }
                  placeholder="Details"
                />

                <button
                  type="button"
                  onClick={() => removeArrayItem("education", index)}
                  className="flex items-center px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200"
                >
                  <MinusCircle size={20} className="mr-2" /> Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addArrayItem("education")}
              className="flex items-center px-4 py-2 bg-secondary text-white rounded-md hover:bg-primary transition-colors duration-200"
            >
              <PlusCircle size={20} className="mr-2" /> Add Education
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                value={resumeData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="title">Job Title</Label>
              <Input
                id="title"
                name="title"
                value={resumeData.title}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="objective">Objective</Label>
            <Textarea
              id="objective"
              name="objective"
              value={resumeData.objective}
              onChange={handleInputChange}
              rows={4}
            />
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#036BFF] flex items-center">
              <MdWorkspacePremium className="mr-2 w-6 h-6" /> Experience
            </h2>
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="mb-2">
                <Textarea
                  value={exp}
                  onChange={(e) =>
                    handleExperienceChange(index, e.target.value)
                  }
                  placeholder="Write your Experience"
                  rows={2}
                  className="w-full bg-primary bg-opacity-10 rounded border border-primary/60  focus:bg-transparent focus:ring-2 focus:ring-primary/40 text-base outline-none text-black leading-8 transition-colors duration-200 ease-in-out l mb-2 px-3 py-2 border-gray-300 shadow-sm focus:ring-secondary focus:border-secondary"
                />
                <button
                  type="button"
                  onClick={() => removeArrayItem("experience", index)}
                  className="flex items-center px-4 py-2 bg-red-500 shadow-none text-white rounded-md hover:bg-red-600 transition-colors duration-200"
                >
                  <MinusCircle size={20} className="mr-2" />
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addArrayItem("experience")}
              className="flex items-center px-4 py-2 bg-secondary shadow-none text-white rounded-md hover:bg-primary transition-colors duration-200"
            >
              <PlusCircle size={20} className="mr-2" />
              Add Experience
            </button>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-[#036BFF] flex items-center">
              <Briefcase className="mr-2" />
              Skills
            </h2>
            <div className="space-y-6">
              {resumeData.skills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-4 ">
                  <Input
                    value={skill}
                    onChange={(e) =>
                      handleArrayChange(index, "skills", e.target.value)
                    }
                    placeholder="Enter a skill"
                    className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                  />
                  <button
                    type="button"
                    onClick={() => removeArrayItem("skills", index)}
                    className="ml-2 bg-red-500 px-3 py-2 text-white rounded-md hover:bg-red-600 transition-colors duration-200 flex items-center gap-2"
                  >
                    <MinusCircle size={20} />
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center space-x-2">
              <Input
                id="newSkill"
                placeholder="Enter a new skill"
                className=" px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
              />
              <button
                type="button"
                onClick={() => addArrayItem("skills")}
                className="flex items-center px-4 py-2 bg-secondary text-white rounded-md hover:bg-primary transition-colors duration-200"
              >
                <PlusCircle size={20} className="mr-2" />
                Add
              </button>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#036BFF] flex items-center">
              <FaFolderOpen className="mr-2 w-6 h-6" /> Projects
            </h2>
            {resumeData.projects.map((project, index) => (
              <div key={project.id} className="mb-4">
                <Input
                  value={project.name}
                  onChange={(e) =>
                    handleObjectArrayChange(
                      index,
                      "projects",
                      "name",
                      e.target.value
                    )
                  }
                  placeholder="Project Name"
                  className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                />
                <Textarea
                  value={project.description}
                  onChange={(e) =>
                    handleObjectArrayChange(
                      index,
                      "projects",
                      "description",
                      e.target.value
                    )
                  }
                  placeholder="Project Description"
                  className="w-full bg-primary bg-opacity-10 rounded border border-primary/60  focus:bg-transparent focus:ring-2 focus:ring-primary/40 text-base outline-none text-black leading-8 transition-colors duration-200 ease-in-out l mb-2 px-3 py-2 border-gray-300 shadow-sm focus:ring-secondary focus:border-secondary"
                />
                <Input
                  value={project.link}
                  onChange={(e) =>
                    handleObjectArrayChange(
                      index,
                      "projects",
                      "link",
                      e.target.value
                    )
                  }
                  placeholder="Project Link"
                  className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                />
                <button
                  type="button"
                  onClick={() => removeArrayItem("projects", index)}
                  className="flex items-center px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200"
                >
                  <MinusCircle size={20} className="mr-2" /> Remove Project
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addArrayItem("projects")}
              className="flex items-center px-4 py-2 bg-secondary text-white rounded-md hover:bg-primary transition-colors duration-200"
            >
              <PlusCircle size={20} className="mr-2" /> Add Project
            </button>
          </div>

          {/* <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#036BFF] flex items-center">
              <Award className="mr-2" /> Certificates
            </h2>
            {resumeData.certificates.map((certificate, index) => (
              <div
                key={certificate.id}
                className="mb-6 p-4 bg-gray-50 rounded-lg"
              >
                <Input
                  value={certificate.name}
                  onChange={(e) =>
                    handleObjectArrayChange(
                      index,
                      "certificates",
                      "name",
                      e.target.value
                    )
                  }
                  placeholder="Certificate Name"
                  className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                />
                <Input
                  value={certificate.link}
                  onChange={(e) =>
                    handleObjectArrayChange(
                      index,
                      "certificates",
                      "link",
                      e.target.value
                    )
                  }
                  placeholder="Certificate Link"
                  className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                />
                <button
                  type="button"
                  onClick={() => removeArrayItem("certificates", index)}
                  className="flex items-center px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200"
                >
                  <MinusCircle size={20} className="mr-2" /> Remove Certificate
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addArrayItem("certificates")}
              className="flex items-center px-4 py-2 bg-secondary text-white rounded-md hover:bg-primary transition-colors duration-200"
            >
              <PlusCircle size={20} className="mr-2" /> Add Certificate
            </button>
          </div> */}

          <button
            type="submit"
            className="w-full py-3 bg-secondary text-white rounded-full font-bold text-lg shadow-lg hover:bg-primary transition-all duration-300"
          >
            <Send size={24} className="inline mr-2" /> Generate Resume
          </button>
        </form>
      </div>
    </div>
  );
};

export default Template2Form;

// "use client";

// import React, { useState } from "react";
// import { Template2 } from "@/data/ResumeData";
// import Education from "@/types/Education";
// import Project from "@/types/Project";
// import Certificate from "@/types/Certificate";
// import { Button, Input, Textarea, Label } from "@/components/ui";
// import { useRouter } from "next/navigation";
// import { useResume } from "@/context/ResumeContext";
// import {
//   Award,
//   Briefcase,
//   GraduationCap,
//   MinusCircle,
//   PlusCircle,
//   Send,
// } from "lucide-react";
// import { MdWorkspacePremium } from "react-icons/md";
// import { FaFolderOpen } from "react-icons/fa";

// const Template2Form = () => {
//   const { setFormData, setSelectedTemplate } = useResume();
//   const router = useRouter();

//   const [resumeData, setResumeData] = useState<Template2>({
//     field: "",
//     address: "",
//     phone: "",
//     email: "",
//     dob: "",
//     gender: "",
//     education: [],
//     name: "",
//     title: "",
//     objective: "",
//     experience: ["", ""],
//     skills: [],
//     projects: [],
//     certificates: [],
//   });

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setResumeData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleExperienceChange = (index: number, value: string) => {
//     setResumeData((prevData) => {
//       const newExperience = [...prevData.experience];
//       newExperience[index] = value;
//       return { ...prevData, experience: newExperience };
//     });
//   };

//   const handleArrayChange = (index: number, field: "skills", value: string) => {
//     setResumeData((prev) => ({
//       ...prev,
//       [field]: prev[field].map((item, i) => (i === index ? value : item)),
//     }));
//   };

//   const handleObjectArrayChange = (
//     index: number,
//     field: "projects" | "certificates" | "education",
//     subfield: string,
//     value: string
//   ) => {
//     setResumeData((prev) => ({
//       ...prev,
//       [field]: prev[
//         field
//       ].map((item: Project | Certificate | Education, i: number) =>
//         i === index ? { ...item, [subfield]: value } : item
//       ),
//     }));
//   };

//   const addArrayItem = (
//     field: "skills" | "experience" | "projects" | "certificates" | "education"
//   ) => {
//     if (field === "skills") {
//       const newSkill = (document.getElementById(
//         "newSkill"
//       ) as HTMLInputElement).value.trim();
//       if (newSkill) {
//         setResumeData((prev) => ({
//           ...prev,
//           skills: [...prev.skills, newSkill],
//         }));
//         (document.getElementById("newSkill") as HTMLInputElement).value = "";
//       }
//     } else if (field === "experience") {
//       setResumeData((prev) => ({
//         ...prev,
//         experience: [...prev.experience, ""],
//       }));
//     } else {
//       const newItem =
//         field === "projects"
//           ? { id: Date.now(), name: "", description: "", link: "" }
//           : { id: Date.now(), degree: "", institution: "", details: "" };

//       setResumeData((prev) => ({
//         ...prev,
//         [field]: [...prev[field], newItem],
//       }));
//     }
//   };

//   const removeArrayItem = (
//     field: "skills" | "experience" | "projects" | "certificates" | "education",
//     index: number
//   ) => {
//     setResumeData((prev) => ({
//       ...prev,
//       [field]: prev[field].filter((_, i) => i !== index),
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Filter out empty items before submitting
//     const filteredData = {
//       ...resumeData,
//       skills: resumeData.skills.filter((skill) => skill.trim() !== ""),
//       experience: resumeData.experience.filter((exp) => exp.trim() !== ""),
//       // education: resumeData.education.filter(
//       //   (edu) =>
//       //     edu.degree.trim() !== "" ||
//       //     edu.institution.trim() !== "" ||
//       //     edu.details.trim() !== ""
//       // ),
//       projects: resumeData.projects.filter(
//         (project) =>
//           project.name.trim() !== "" ||
//           project.description.trim() !== "" ||
//           project.link.trim() !== ""
//       ),
//       certificates: resumeData.certificates.filter(
//         (cert) => cert.name.trim() !== "" || cert.link?.trim() !== ""
//       ),
//     };
//     console.log(JSON.stringify(filteredData, null, 2));
//     setFormData(filteredData); // Save filtered form data to context
//     setSelectedTemplate("template2");
//     router.push(`/templates/template2/${resumeData.name}`); // Navigate to the template page
//   };

// };

// export default Template2Form;
