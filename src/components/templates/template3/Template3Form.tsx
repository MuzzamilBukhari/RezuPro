"use client";

import React, { useState } from "react";
import { useResume } from "@/context/ResumeContext";
import { Input, Textarea, Button } from "@/components/";
import { Template3 } from "@/data/ResumeData";

export const ResumeForm = () => {
  const { setFormData } = useResume();

  const [resumeData, setResumeData] = useState<Template3>({
    name: "",
    profileSummary: "",
    phone: "",
    email: "",
    certifications: [],
    education: [],
    workExperience: [],
    projects: [],
    skills: [],
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setResumeData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleArrayInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    field: keyof typeof resumeData
  ) => {
    const { value } = e.target;
    setResumeData((prev) => {
      const newArray = [...prev[field]];
      newArray[index] = value;
      return { ...prev, [field]: newArray };
    });
  };
  const handleArrayChange = (
    index: number,
    field: keyof typeof resumeData,
    value: string
  ) => {
    setResumeData((prev) => ({
      ...prev,
      [field]: prev[field].map((item, i) => (i === index ? value : item)),
    }));
  };

  const addArrayItem = (field: keyof typeof resumeData) => {
    setResumeData((prev) => ({ ...prev, [field]: [...prev[field], ""] }));
  };

  return (
    <form className="space-y-4 max-w-2xl mx-auto p-4">
      <Input
        name="name"
        value={resumeData.name}
        onChange={handleInputChange}
        placeholder="Full Name"
      />
      <Textarea
        name="profileSummary"
        value={resumeData.profileSummary}
        onChange={handleInputChange}
        placeholder="Profile Summary"
      />
      <Input
        name="phone"
        value={resumeData.phone}
        onChange={handleInputChange}
        placeholder="Phone"
      />
      <Input
        name="email"
        value={resumeData.email}
        onChange={handleInputChange}
        placeholder="Email"
      />

      <div>
        <h3 className="font-bold mb-2">Certifications</h3>
        {resumeData.certifications.map((cert, index) => (
          <Input
            key={index}
            value={cert}
            onChange={(e) => handleArrayInputChange(e, index, "certifications")}
            placeholder={`Certification ${index + 1}`}
            className="mb-2"
          />
        ))}
        <Button type="button" onClick={() => addArrayItem("certifications")}>
          Add Certification
        </Button>
      </div>

      {/* Add similar sections for education, work experience, projects, and skills */}
    </form>
  );
};
