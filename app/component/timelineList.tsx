"use client";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  timelineItemClasses,
  TimelineSeparator,
} from "@mui/lab";
import { Chip, Typography } from "@mui/material";
import type { ReactNode } from "react";

export interface TimelineEntry {
  title: string;
  subtitle: ReactNode;
  period: string;
  details?: ReactNode;
}

interface props {
  items: TimelineEntry[];
}

// Left-aligned timeline: readable on narrow screens, unlike position="alternate".
export default function TimelineList({ items }: props) {
  return (
    <Timeline
      sx={{
        p: 0,
        m: 0,
        [`& .${timelineItemClasses.root}:before`]: { flex: 0, padding: 0 },
      }}
    >
      {items.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot color="primary" variant={index === 0 ? "filled" : "outlined"} />
            {index < items.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent sx={{ pb: 4 }}>
            <Chip label={item.period} size="small" variant="outlined" sx={{ mb: 1 }} />
            <Typography variant="h6">{item.title}</Typography>
            <Typography color="text.secondary">{item.subtitle}</Typography>
            {item.details && <div className="mt-1">{item.details}</div>}
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
