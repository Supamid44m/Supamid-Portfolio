"use client";
import { education } from "@/app/data/education";
import { Typography } from "@mui/material";
import SectionTitle from "../sectionTitle";
import TimelineList from "../timelineList";

export default function Education() {
  // Most recent first
  const items = [...education].reverse().map((edu) => ({
    title: edu.name,
    subtitle: edu.major,
    period: edu.year,
    details: (
      <Typography variant="body2">
        <b>GPAX {edu.gpax}</b>
        {edu.option && <span> · {edu.option}</span>}
      </Typography>
    ),
  }));

  return (
    <div>
      <SectionTitle>Education</SectionTitle>
      <TimelineList items={items} />
    </div>
  );
}
