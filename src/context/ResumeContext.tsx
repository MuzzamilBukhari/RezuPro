"use client";

import { Template1, Template2 } from "@/data/ResumeData";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface ResumeContextType {
  formData: Template1 | Template2 | null;
  setFormData: (data: Template1 | Template2 | null) => void;
  selectedTemplate: string;
  setSelectedTemplate: (template: string) => void;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export const ResumeProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<Template1 | Template2 | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState("template1");

  return (
    <ResumeContext.Provider
      value={{ formData, setFormData, selectedTemplate, setSelectedTemplate }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => {
  const resumeContext = useContext(ResumeContext);
  if (!resumeContext) {
    throw new Error("not found");
  }
  return resumeContext;
};
