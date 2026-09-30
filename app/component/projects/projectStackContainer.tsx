import { ProjectTechStackDto } from "@/app/data/interface/projectDto";
import { Chip } from "@mui/material";

interface props {
  stack: ProjectTechStackDto[];
}

export default function ProjectStackContainer({ stack }: props) {
  return (
    <div className="mt-3 flex flex-wrap gap-1.5">
      {stack.map((item) => (
        <Chip key={item.name} label={item.name} size="small" color="primary" variant="outlined" />
      ))}
    </div>
  );
}
