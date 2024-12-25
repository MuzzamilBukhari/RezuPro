"use client";

import { Button } from "@/components";
import Template1 from "@/components/templates/template1/Template1";
import { useResume } from "@/context/ResumeContext";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const ResumePage = () => {
  const { formData } = useResume();
  const resumeRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: `${formData?.header.name}_Resume`,
    onAfterPrint: () => console.log("PDF generated successfully"),
  });

  const generatePDF = () => {
    if (resumeRef.current) {
      handlePrint();
    }
  };
  return (
    <div className="flex justify-center items-center flex-col mt-12 ">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-black">
        Your Resume
      </h1>
      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-primary font-semibold mt-8">
        Download button is below
      </h3>
      <div className="min-h-screen bg-gray-500 py-12 px-4 sm:px-6 lg:px-8 mt-20 w-full">
        <Template1 ref={resumeRef} />
      </div>
      <div className="max-w-4xl mx-auto mt-8 mb-4">
        <Button type="button" onClick={generatePDF}>
          Download as PDF
        </Button>
      </div>
    </div>
  );
};

export default ResumePage;
