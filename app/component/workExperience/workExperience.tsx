"use client";

import { workExperience } from "@/app/data/workExperience";
import { Typography } from "@mui/material";
import SectionTitle from "../sectionTitle";
import TimelineList from "../timelineList";

export default function WorkExperinece() {
  // Most recent first
  const items = [...workExperience].reverse().map((work) => ({
    title: work.position,
    subtitle: work.name,
    period: work.year,
    details: work.projects && (
      <div className="flex flex-col gap-2">
        {work.projects.map((project) => (
          <div key={project.name}>
            <Typography variant="body2">
              <b>{project.name}</b>
            </Typography>
            <ul className="list-disc pl-5">
              {project.highlights.map((highlight) => (
                <li key={highlight}>
                  <Typography variant="body2">{highlight}</Typography>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    ),
  }));

  return (
    <div>
      <SectionTitle>Work Experience</SectionTitle>
      <TimelineList items={items} />
    </div>
  );
}
