"use client";

import React, { useState } from "react";
import { Template2 } from "@/data/ResumeData";
import Education2 from "@/types/Education2";
import Project from "@/types/Project";
import Certificate from "@/types/Certificate";
import { Button, Input, Textarea, Label } from "@/components/ui";
import { useRouter } from "next/navigation";
import { useResume } from "@/context/ResumeContext";

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
    education: [
      { level: "Graduation", degree: "", institution: "", year: "" },
      {
        level: "Intermediate",
        degree: "",
        institution: "",
        year: "",
        division: "",
      },
      {
        level: "Matriculation",
        degree: "",
        institution: "",
        year: "",
        division: "",
      },
    ],
    name: "",
    title: "",
    objective: "",
    experience: ["", ""],
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

  const handleEducationChange = (
    index: number,
    field: keyof Education2,
    value: string
  ) => {
    setResumeData((prevData) => {
      const newEducation = [...prevData.education];
      newEducation[index] = { ...newEducation[index], [field]: value };
      return { ...prevData, education: newEducation };
    });
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
    field: "projects" | "certificates",
    subfield: string,
    value: string
  ) => {
    setResumeData((prev) => ({
      ...prev,
      [field]: prev[field].map((item: Project | Certificate, i: number) =>
        i === index ? { ...item, [subfield]: value } : item
      ),
    }));
  };

  const addArrayItem = (
    field: "skills" | "experience" | "projects" | "certificates"
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
      const newItem =
        field === "projects"
          ? { id: Date.now(), name: "", description: "", link: "" }
          : { id: Date.now(), name: "", link: "" };

      setResumeData((prev) => ({
        ...prev,
        [field]: [...prev[field], newItem],
      }));
    }
  };

  const removeArrayItem = (
    field: "skills" | "experience" | "projects" | "certificates",
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
    router.push(`/templates/template2/${resumeData.name}`); // Navigate to the template page
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="mx-auto max-w-5xl bg-white shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Resume Form</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="field">Field of Study</Label>
              <Input
                id="field"
                name="field"
                value={resumeData.field}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                name="address"
                value={resumeData.address}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                value={resumeData.phone}
                onChange={handleInputChange}
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
              />
            </div>
            <div>
              <Label htmlFor="dob">Date of Birth</Label>
              <Input
                id="dob"
                name="dob"
                value={resumeData.dob}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="gender">Gender</Label>
              <Input
                id="gender"
                name="gender"
                value={resumeData.gender}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">Education</h2>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-bold">{edu.level}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Degree"
                    value={edu.degree}
                    onChange={(e) =>
                      handleEducationChange(index, "degree", e.target.value)
                    }
                  />
                  <Input
                    placeholder="Institution"
                    value={edu.institution}
                    onChange={(e) =>
                      handleEducationChange(
                        index,
                        "institution",
                        e.target.value
                      )
                    }
                  />
                  <Input
                    placeholder="Year"
                    value={edu.year}
                    onChange={(e) =>
                      handleEducationChange(index, "year", e.target.value)
                    }
                  />
                  {edu.division !== undefined && (
                    <Input
                      placeholder="Division"
                      value={edu.division}
                      onChange={(e) =>
                        handleEducationChange(index, "division", e.target.value)
                      }
                    />
                  )}
                </div>
              </div>
            ))}
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

          <div>
            <h2 className="text-xl font-bold mb-2">Experience</h2>
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="mb-2">
                <Textarea
                  value={exp}
                  onChange={(e) =>
                    handleExperienceChange(index, e.target.value)
                  }
                  rows={2}
                />
                <Button
                  type="button"
                  onClick={() => removeArrayItem("experience", index)}
                >
                  Remove Experience
                </Button>
              </div>
            ))}
            <Button type="button" onClick={() => addArrayItem("experience")}>
              Add Experience
            </Button>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">Skills</h2>
            <div className="flex flex-wrap gap-2 mb-2">
              {resumeData.skills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <Input
                    value={skill}
                    onChange={(e) =>
                      handleArrayChange(index, "skills", e.target.value)
                    }
                    className="mr-2"
                  />
                  <Button
                    type="button"
                    onClick={() => removeArrayItem("skills", index)}
                  >
                    Remove
                  </Button>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <Input id="newSkill" placeholder="Enter a new skill" />
              <Button type="button" onClick={() => addArrayItem("skills")}>
                Add Skill
              </Button>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">Projects</h2>
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
                  className="mb-2"
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
                  className="mb-2"
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
                  className="mb-2"
                />
                <Button
                  type="button"
                  onClick={() => removeArrayItem("projects", index)}
                >
                  Remove Project
                </Button>
              </div>
            ))}
            <Button type="button" onClick={() => addArrayItem("projects")}>
              Add Project
            </Button>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">Certificates</h2>
            {resumeData.certificates.map((certificate, index) => (
              <div key={certificate.id} className="mb-4">
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
                  className="mb-2"
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
                  className="mb-2"
                />
                <Button
                  type="button"
                  onClick={() => removeArrayItem("certificates", index)}
                >
                  Remove Certificate
                </Button>
              </div>
            ))}
            <Button type="button" onClick={() => addArrayItem("certificates")}>
              Add Certificate
            </Button>
          </div>

          <Button type="submit">Generate Resume</Button>
        </form>
      </div>
    </div>
  );
};

export default Template2Form;
