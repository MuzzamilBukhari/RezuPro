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

interface Template3 {
  name: string;
  profileSummary: string;
  phone: string;
  email: string;
  certifications: string[];
  education: { institute: string; year: string; degree: string }[];
  workExperience: {
    company: string;
    position: string;
    duration: string;
    responsibilities: string[];
  }[];
  projects: string[];
  skills: string[];
}

export type { Template1 };
export type { Template2 };
export type { Template3 };
