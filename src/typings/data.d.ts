declare module "data" {
  import type { StaticImageData } from "next/image";
  import type { IconProps } from "@phosphor-icons/react";
  import type React from "react";

  export interface SocialMedia {
    name: string;
    url: string;
    icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
  }

  export interface Education {
    school: string;
    degree: string;
    start: string;
    end: string;
  }

  export interface WorkExperience {
    company: string;
    link?: string;
    badges?: string[];
    title: string;
    start: string;
    end: string;
    description: string | React.ReactNode;
  }

  export interface Project {
    title: string;
    techStack: string[];
    description: string;
    link: {
      label: string;
      href: string;
    };
    image: StaticImageData;
    videoPath?: string;
  }

  export interface ResumeData {
    name: string;
    initials: string;
    location: string;
    locationLink: string;
    about: string;
    summary: string;
    avatarUrl: string;
    personalWebsiteUrl: string;
    contact: {
      tel?: string;
      email: string;
      social: SocialMedia[];
    };
    education: Education[];
    work: WorkExperience[];
    skills: string[];
    projects: Project[];
  }
}
