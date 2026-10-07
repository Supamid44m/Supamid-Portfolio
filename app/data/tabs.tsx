import type { ComponentType } from "react";
import AboutMe from "../component/aboutMe/aboutMe";
import Education from "../component/education/education";
import Resume from "../component/resume/resume";
import WorkExperinece from "../component/workExperience/workExperience";
import Project from "../component/projects/project";
import Certificate from "../component/certificate/certificate";
import Blog from "../component/blog/blog";

export interface TabItem {
  label: string;
  sequence: number;
}

export const tabs: TabItem[] = [
  {
    label: "About Me",
    sequence: 5,
  },
  {
    label: "Certificate",
    sequence: 4,
  },
  {
    label: "Education",
    sequence: 6,
  },
  {
    label: "Projects",
    sequence:  2,
  },
  {
    label: "Blog",
    sequence: 3,
  },
  {
    label: "CV / Resume",
    sequence: 7,
  },
  {
    label:"Work Experience",
    sequence: 1,
  }
];

export const tabContent: Record<string, ComponentType> = {
    "About Me": AboutMe,
    "Certificate": Certificate,
    "Blog": Blog,
    "Education": Education  ,
    "Projects": Project,
    "CV / Resume": Resume,
    "Work Experience": WorkExperinece
}
