"use client";

import { workExperience } from "@/app/data/workExperience";
import SectionTitle from "../sectionTitle";
import TimelineList from "../timelineList";

export default function WorkExperinece() {
  // Most recent first
  const items = [...workExperience].reverse().map((work) => ({
    title: work.position,
    subtitle: work.name,
    period: work.year,
  }));

  return (
    <div>
      <SectionTitle>Work Experience</SectionTitle>
      <TimelineList items={items} />
    </div>
  );
}
