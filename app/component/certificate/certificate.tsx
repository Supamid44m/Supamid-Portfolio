import { Typography } from "@mui/material";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import SectionTitle from "../sectionTitle";

export default function Certificate() {
  return (
    <div>
      <SectionTitle>Certificate</SectionTitle>
      <div className="flex flex-col items-center gap-2 py-12 text-center">
        <WorkspacePremiumOutlinedIcon color="disabled" sx={{ fontSize: 48 }} />
        <Typography color="text.secondary">Certificates coming soon.</Typography>
      </div>
    </div>
  );
}
