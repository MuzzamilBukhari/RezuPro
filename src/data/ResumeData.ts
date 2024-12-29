import Certificate from "@/types/Certificate";
import Education from "@/types/Education";
import Project from "@/types/Project";

interface Template1 {
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
}

interface Template2 {
  field: string;
  address: string;
  phone: string;
  email: string;
  dob: string;
  gender: string;
  name: string;
  title: string;
  objective: string;
  experience: string[];
  skills: string[];
  education: Education[];
  projects: Project[];
  certificates: Certificate[];
}

export type { Template1 };
export type { Template2 };
