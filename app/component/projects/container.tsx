"use client";
import { ProjectDto } from "@/app/data/interface/projectDto";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import ProjectStackContainer from "./projectStackContainer";
import OpenLinkChip from "../openLinkChip";

interface ProjectContianerProps {
  data: ProjectDto;
}

export default function ProjectContainer({ data }: ProjectContianerProps) {
  const links = Object.entries(data.projectUrl ?? {}).filter(([, url]) => !!url);

  return (
    <Card
      className="flex h-full flex-col"
      sx={{
        transition: "border-color 150ms, transform 150ms",
        "&:hover": { borderColor: "primary.main", transform: "translateY(-2px)" },
      }}
    >
      <CardContent className="flex-1">
        <Typography variant="h6" gutterBottom>
          {data.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.description}
        </Typography>
        <ProjectStackContainer stack={data.techStack} />
      </CardContent>

      <CardActions sx={{ px: 2, pb: 2, gap: 1, flexWrap: "wrap" }}>
        {data.hasDemo && data.projectUrl?.fe ? (
          <OpenLinkChip label="Try Demo" url={data.projectUrl.fe} primary />
        ) : (
          links.map(([key, url]) => (
            <OpenLinkChip key={key} label={key.toUpperCase()} url={url ?? ""} />
          ))
        )}
      </CardActions>
    </Card>
  );
}
