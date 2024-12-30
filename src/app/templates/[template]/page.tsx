"use client";

import React from "react";
import { Template2Form, Template1Form } from "@/components";

const templates = {
  template1: {
    form: Template1Form,
  },
  template2: {
    form: Template2Form,
  },
};

const Page = ({ params }: { params: { template: string } }) => {
  const template = params.template;
  const SelectedTemplateForm =
    templates[template as keyof typeof templates]?.form;

  if (!SelectedTemplateForm) {
    return (
      <div className="flex justify-center items-center flex-col mt-36">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-black">
          Invalid Template
        </h1>
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-primary font-semibold mt-8">
          Please select a valid resume template.
        </h3>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-28 text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-black">
        Build your Resume
      </h1>
      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-primary font-semibold mt-2">
        Enter your Resume details
      </h3>
      <SelectedTemplateForm />
    </div>
  );
};

export default Page;
