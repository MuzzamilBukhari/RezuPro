"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Template1 } from "@/data/ResumeData";
// Define the shape of the form data

// Define the shape of the context
interface ResumeContextType {
  formData: Template1 | null;
  setFormData: (data: Template1) => void;
}

// Create the context
const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

// Create a provider component
export const ResumeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState<Template1>({
    header: {
      name: "",
      email: "",
      phone: "",
      github: "",
      linkedin: "",
    },
    skills: [""],
    education: [{ id: 0, degree: "", institution: "", details: "" }],
    projects: [{ id: 0, name: "", description: "", link: "" }],
    certificates: [{ id: 0, name: "", link: "" }],
  });

  return (
    <ResumeContext.Provider value={{ formData, setFormData }}>
      {children}
    </ResumeContext.Provider>
  );
};

// Hook to use the context
export const useResume = (): ResumeContextType => {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error("useResume must be used within a ResumeProvider");
  }
  return context;
};
