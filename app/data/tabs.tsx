import type { ComponentType } from "react";
import AboutMe from "../component/aboutMe/aboutMe";
import Education from "../component/education/education";
import Resume from "../component/resume/resume";
import WorkExperinece from "../component/workExperience/workExperience";
import Project from "../component/projects/project";
import Certificate from "../component/certificate/certificate";

export interface TabItem {
  label: string;
  sequence: number;
}

export const tabs: TabItem[] = [
  {
    label: "About Me",
    sequence: 1,
  },
  // {
  //   label: "Certificate",
  //   sequence: 5,
  // },
  {
    label: "Education",
    sequence: 2,
  },
  {
    label: "Projects",
    sequence: 4,
  },
  {
    label: "CV / Resume",
    sequence: 6,
  },
  {
    label:"Work Experience",
    sequence: 3,
  }
];

export const tabContent: Record<string, ComponentType> = {
    "About Me": AboutMe,
    "Certificate": Certificate,
    "Education": Education  ,
    "Projects": Project,
    "CV / Resume": Resume,
    "Work Experience": WorkExperinece
}
