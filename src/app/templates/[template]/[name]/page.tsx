"use client";

import { Button, Template2 } from "@/components";
import Template1 from "@/components/templates/template1/Template1";
import { useResume } from "@/context/ResumeContext";
import React, { useRef } from "react";
import { IoMdDownload } from "react-icons/io";
import { useReactToPrint } from "react-to-print";

const templates = {
  template1: {
    component: Template1,
  },
  template2: {
    component: Template2,
  },
};

const Page = () => {
  const { selectedTemplate } = useResume();
  const resumeRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: `resume`,
    onAfterPrint: () => console.log("PDF generated successfully"),
  });

  const generatePDF = () => {
    if (resumeRef.current) {
      handlePrint();
    }
  };
  const SelectedTemplate =
    templates[selectedTemplate as keyof typeof templates].component;
  return (
    <div className="flex justify-center items-center flex-col mt-12 ">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-black pt-14">
        Your Resume
      </h1>
      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-primary font-semibold mt-2">
        Download button is below
      </h3>
      <div className="h-auto bg-gray-600 py-12 px-4 sm:px-6 lg:px-8 mt-20 w-full">
        <SelectedTemplate ref={resumeRef} />
      </div>
      <div className="max-w-4xl mx-auto mt-20 mb-4">
        <Button
          type="button"
          onClick={generatePDF}
          className="flex items-center"
        >
          Download as PDF <IoMdDownload className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default Page;
