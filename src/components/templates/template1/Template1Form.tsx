"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useResume } from "@/context/ResumeContext";
import { Template1 } from "@/data/ResumeData";
import Project from "@/types/Project";
import Certificate from "@/types/Certificate";
import Education from "@/types/Education";
import {
  Award,
  Briefcase,
  GraduationCap,
  MinusCircle,
  PlusCircle,
  Send,
  User,
} from "lucide-react";
import { Input, Label } from "@/components";

export default function Template1Form() {
  const { setFormData, setSelectedTemplate } = useResume();
  const [loader, setLoader] = useState(false);
  const router = useRouter();

  const [resumeData, setResumeData] = useState<Template1>({
    header: {
      name: "",
      email: "",
      phone: "",
      github: "",

      linkedin: "",
    },
    skills: [],
    education: [],
    projects: [],
    certificates: [],
  });

  const handleHeaderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setResumeData((prev) => ({
      ...prev,
      header: { ...prev.header, [name]: value },
    }));
  };

  const handleArrayChange = (index: number, field: "skills", value: string) => {
    setResumeData((prev) => ({
      ...prev,
      [field]: prev[field].map((item, i) => (i === index ? value : item)),
    }));
  };

  const handleObjectArrayChange = (
    index: number,
    field: "education" | "projects" | "certificates",
    subfield: string,
    value: string
  ) => {
    setResumeData((prev) => ({
      ...prev,
      [field]: prev[
        field
      ].map((item: Education | Project | Certificate, i: number) =>
        i === index ? { ...item, [subfield]: value } : item
      ),
    }));
  };

  const addArrayItem = (
    field: "skills" | "education" | "projects" | "certificates"
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
    } else {
      const newItem =
        field === "education"
          ? { id: Date.now(), degree: "", institution: "", details: "" }
          : field === "projects"
          ? { id: Date.now(), name: "", description: "", link: "" }
          : { id: Date.now(), name: "", link: "" };

      setResumeData((prev) => ({
        ...prev,
        [field]: [...prev[field], newItem],
      }));
    }
  };

  const removeArrayItem = (
    field: "skills" | "education" | "projects" | "certificates",
    index: number
  ) => {
    setResumeData((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    setLoader(true);
    e.preventDefault();
    const filteredData = {
      ...resumeData,
      skills: resumeData.skills.filter((skill) => skill.trim() !== ""),
      education: resumeData.education.filter(
        (edu) =>
          edu.degree.trim() !== "" ||
          edu.institution.trim() !== "" ||
          edu.details.trim() !== ""
      ),
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
    setSelectedTemplate("template1");
    setFormData(filteredData);
    router.push(`/templates/template1/${resumeData.header.name}`);
    setLoader(false);
  };

  return (
    <section className="min-h-screen max-w-5xl  bg-gradient-to-br from-[#036BFF] to-[#003EFF] py-12 px-4 sm:px-8 lg:px-10 mx-auto mt-10 mb-14">
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
      >
        <div className="px-5 py-8 sm:p-10">
          <h1 className="text-3xl font-bold text-black text-center mb-8">
            Create Your Resume
          </h1>

          {/* Header form */}
          <div className="mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-[#036BFF] flex items-center">
              <User className="mr-2" /> Personal Information
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <Label htmlFor="name"> Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={resumeData.header.name}
                  onChange={handleHeaderChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={resumeData.header.email}
                  onChange={handleHeaderChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <input
                  id="phone"
                  name="phone"
                  value={resumeData.header.phone}
                  onChange={handleHeaderChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                />
              </div>
              <div>
                <Label htmlFor="github">GitHub (Optional)</Label>
                <input
                  id="github"
                  name="github"
                  value={resumeData.header.github}
                  onChange={handleHeaderChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                />
              </div>
              <div>
                <Label htmlFor="linkedin">LinkedIn (Optional)</Label>
                <input
                  id="linkedin"
                  name="linkedin"
                  value={resumeData.header.linkedin}
                  onChange={handleHeaderChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                />
              </div>
            </div>
          </div>

          {/* Skills Form */}
          <div className="mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-[#036BFF] flex items-center">
              <Briefcase className="mr-2" /> Skills
            </h2>
            <div className="space-y-4">
              {resumeData.skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center flex-wrap justify-center gap-2"
                >
                  <input
                    value={skill}
                    onChange={(e) =>
                      handleArrayChange(index, "skills", e.target.value)
                    }
                    placeholder="Enter a skill"
                    className="flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                  />
                  <button
                    type="button"
                    onClick={() => removeArrayItem("skills", index)}
                    className="ml-2 bg-red-500 px-3 py-2  text-white rounded-md hover:bg-red-600 transition-colors duration-200"
                  >
                    <MinusCircle size={20} />
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center flex-wrap justify-center gap-2">
              <input
                id="newSkill"
                placeholder="Enter a new skill"
                className="flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
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

          {/* Education form */}
          <div className="mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-[#036BFF] flex items-center">
              <GraduationCap className="mr-2" /> Education
            </h2>
            {resumeData.education.map((edu, index) => (
              <div key={edu.id} className="mb-6 p-4 bg-gray-50 rounded-lg">
                <input
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
                <input
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
                <textarea
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
                  className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                />
                <button
                  type="button"
                  onClick={() => removeArrayItem("education", index)}
                  className="flex items-center px-4 py-2 bg-red-500 text-white rounded-md hover:bg-primary transition-colors duration-200"
                >
                  <MinusCircle size={20} className="mr-2" /> Remove Education
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

          {/* Projects form */}
          <div className="mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-[#036BFF] flex items-center">
              <Briefcase className="mr-2" /> Projects
            </h2>
            {resumeData.projects.map((project, index) => (
              <div key={project.id} className="mb-6 p-4 bg-gray-50 rounded-lg">
                <input
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
                <textarea
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
                  className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                />
                <input
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

          {/* Certificates form */}
          <div className="mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-[#036BFF] flex items-center">
              <Award className="mr-2" /> Certificates
            </h2>
            {resumeData.certificates.map((certificate, index) => (
              <div
                key={certificate.id}
                className="mb-6 p-4 bg-gray-50 rounded-lg"
              >
                <input
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
                <input
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
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-secondary text-white rounded-full font-bold text-base sm:text-lg shadow-lg hover:bg-primary transition-all duration-300"
          >
            {loader ? (
              "loading"
            ) : (
              <span>
                {" "}
                <Send size={24} className="inline mr-2" /> Generate Resume
              </span>
            )}
          </button>
        </div>
      </form>
    </section>
  );
}
