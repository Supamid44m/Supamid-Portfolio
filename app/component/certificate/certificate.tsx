import { Typography } from "@mui/material";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import SectionTitle from "../sectionTitle";
import CertificateCard from "./certificateCard";
import { certificates } from "@/app/data/certificate";

export default function Certificate() {
  if (certificates.length === 0) {
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

  return (
    <div>
      <SectionTitle>Certificate</SectionTitle>
      <div className="grid gap-4 sm:grid-cols-2">
        {certificates.map((cert) => (
          <CertificateCard key={cert.url} data={cert} />
        ))}
      </div>
    </div>
  );
}
