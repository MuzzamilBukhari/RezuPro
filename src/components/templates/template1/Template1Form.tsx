"use client";

import { useState } from "react";
import { Button, Input, Textarea, Label } from "@/components/ui";
import { Template1 } from "@/data/ResumeData";
import { useRouter } from "next/navigation";
import { useResume } from "@/context/ResumeContext";
import Education from "@/types/Education";
import Project from "@/types/Project";
import Certificate from "@/types/Certificate";

export default function Template1Form() {
  const { setFormData } = useResume();
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
    e.preventDefault();
    // Filter out empty items before submitting
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
    setFormData(filteredData); // Save filtered form data to context
    router.push(`/templates/template1/${resumeData.header.name}`); // Navigate to the template page
  };

  return (
    <div className="w-full md:w-4/5 mx-auto px-4 sm:px-12 ">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center flex-col rounded-xl border-2 border-primary mt-12 bg-gray-300 py-8 "
      >
        {/* Header form */}
        <div className="flex flex-col justify-center items-center w-full sm:px-12 md:px-0">
          <h2 className="text-2xl font-bold">Header Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 w-full justify-center items-center gap-4 p-6 mt-6">
            <div className="w-full">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                value={resumeData.header.name}
                onChange={handleHeaderChange}
                required
              />
            </div>
            <div className="w-full">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={resumeData.header.email}
                onChange={handleHeaderChange}
                required
              />
            </div>
            <div className="w-full">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                value={resumeData.header.phone}
                onChange={handleHeaderChange}
                required
              />
            </div>
            <div className="w-full">
              <Label htmlFor="github">GitHub (Optional)</Label>
              <Input
                id="github"
                name="github"
                value={resumeData.header.github}
                onChange={handleHeaderChange}
              />
            </div>
            <div className="w-full">
              <Label htmlFor="linkedin">LinkedIn (Optional)</Label>
              <Input
                id="linkedin"
                name="linkedin"
                value={resumeData.header.linkedin}
                onChange={handleHeaderChange}
              />
            </div>
          </div>
          <div className="w-[80%] h-[6px] bg-primary rounded-full m-6"></div>
        </div>

        {/* Skills Form */}
        <div className="flex flex-col justify-center items-center w-full px-12 md:px-0 gap-3">
          <h2 className="text-2xl font-bold mb-3">Skills</h2>
          <div className="flex justify-center items-center gap-7 flex-wrap mb-6">
            {resumeData.skills.map((skill, index) => (
              <div
                key={index}
                className="flex gap-3 sm:gap-2 justify-center items-center flex-col sm:flex-row"
              >
                <Input
                  value={skill}
                  onChange={(e) =>
                    handleArrayChange(index, "skills", e.target.value)
                  }
                  readOnly
                  placeholder="Enter a skill"
                />
                <Button
                  type="button"
                  onClick={() => removeArrayItem("skills", index)}
                  className="w-full"
                >
                  Remove
                </Button>
              </div>
            ))}
          </div>
          <div className="flex gap-3 w-full justify-center items-center flex-col sm:flex-row">
            <Input id="newSkill" placeholder="Enter a new skill" />
            <Button type="button" onClick={() => addArrayItem("skills")}>
              Add Skill
            </Button>
          </div>
          <div className="w-[80%] h-[6px] bg-primary rounded-full m-6"></div>
        </div>

        {/* Education form */}
        <div className="flex flex-col justify-center items-center w-full px-12 md:px-0 gap-3">
          <h2 className="text-2xl font-bold">Education</h2>
          <div className="flex justify-center items-center flex-wrap gap-6 px-8 mt-6">
            {resumeData.education.map((edu, index) => (
              <div
                key={edu.id}
                className="flex justify-center items-center flex-col gap-4"
              >
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
                />
                <Input
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
                <Button
                  type="button"
                  onClick={() => removeArrayItem("education", index)}
                >
                  Remove Education
                </Button>
              </div>
            ))}
          </div>
          <Button
            type="button"
            onClick={() => addArrayItem("education")}
            className="mt-4"
          >
            Add Education
          </Button>
          <div className="w-[80%] h-[6px] bg-primary rounded-full m-6"></div>
        </div>

        {/* Projects form */}
        <div className="flex flex-col justify-center items-center w-full px-12 md:px-0 gap-3">
          <h2 className="text-2xl font-bold">Projects</h2>
          <div className="flex justify-center items-center flex-wrap gap-6 px-8 mt-6">
            {resumeData.projects.map((project, index) => (
              <div
                key={project.id}
                className="flex justify-center items-center flex-col gap-4"
              >
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
                />
                <Button
                  type="button"
                  onClick={() => removeArrayItem("projects", index)}
                >
                  Remove Project
                </Button>
              </div>
            ))}
          </div>
          <Button
            type="button"
            onClick={() => addArrayItem("projects")}
            className="mt-4"
          >
            Add Project
          </Button>
          <div className="w-[80%] h-[6px] bg-primary rounded-full m-6"></div>
        </div>

        {/* Certificates form */}
        <div className="flex flex-col justify-center items-center w-full px-12 md:px-0 gap-3">
          <h2 className="text-2xl font-bold">Certificates</h2>
          <div className="flex justify-center items-center flex-wrap gap-6 px-8 mt-6">
            {resumeData.certificates.map((certificate, index) => (
              <div
                key={certificate.id}
                className="flex justify-center items-center flex-col gap-4"
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
                  placeholder="Enter a certificate"
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
                  placeholder="Enter a certificate link"
                />
                <Button
                  type="button"
                  onClick={() => removeArrayItem("certificates", index)}
                >
                  Remove
                </Button>
              </div>
            ))}
          </div>
          <Button type="button" onClick={() => addArrayItem("certificates")}>
            Add Certificate
          </Button>
          <div className="w-[80%] h-[6px] bg-primary rounded-full m-6"></div>
        </div>

        <Button type="submit" className="">
          Generate Resume
        </Button>
      </form>
    </div>
  );
}
