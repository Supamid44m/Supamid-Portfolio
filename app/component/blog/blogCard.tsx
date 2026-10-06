import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { Blog } from "@/app/data/blog";
import OpenLinkChip from "../openLinkChip";

interface BlogCardProps {
  data: Blog;
}

export default function BlogCard({ data }: BlogCardProps) {
  return (
    <Card className="flex h-full flex-col">
      <CardContent className="flex-1">
        <Typography variant="h6" gutterBottom>
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {data.date ? `${data.platform} · ${data.date}` : data.platform}
        </Typography>
        {data.description && (
          <Typography variant="body2" color="text.secondary">
            {data.description}
          </Typography>
        )}
      </CardContent>
      <CardActions sx={{ px: 2, pb: 2, gap: 1, flexWrap: "wrap" }}>
        <OpenLinkChip label="Read Article" url={data.url} primary />
      </CardActions>
    </Card>
  );
}
