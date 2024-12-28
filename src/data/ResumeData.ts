import Template1 from "@/components/templates/template1/Template1";
import Certificate from "@/types/Certificate";
import Education1 from "@/types/Education1";
import Education2 from "@/types/Education2";
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
  education: Education1[];
  projects: Project[];
  certificates: Certificate[];
};

type Template2 = {
  field: string;
  address: string;
  phone: string;
  email: string;
  dob: string;
  gender: string;
  education: Education2[];
  name: string;
  title: string;
  objective: string;
  experience: string[];
  skills: string[];
  projects: Project[];
  certificates: Certificate[];
};

export const ResumeData: Template1 | Template2 | null = null;

export { Template1 };
export type { Template2 };
