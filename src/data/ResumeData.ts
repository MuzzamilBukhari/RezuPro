import Template1 from "@/components/templates/template1/Template1";
import Certificate from "@/types/Certificate";
import Education from "@/types/Education";
import Project from "@/types/Project";

type Template1 = {
  header: {
    name: string;
    email: string;
    phone: string;
    github: string;
    linkedin: string;
  };
  skills: string[];
  education: Education[];
  projects: Project[];
  certificates: Certificate[];
};

export const ResumeData: Template1 | null = null;

export { Template1 };
