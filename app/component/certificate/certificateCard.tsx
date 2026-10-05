import { Card, CardActions, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import { Certificate } from "@/app/data/certificate";
import OpenLinkChip from "../openLinkChip";

interface CertificateCardProps {
  data: Certificate;
}

export default function CertificateCard({ data }: CertificateCardProps) {
  return (
    <Card className="flex h-full flex-col">
      {data.imagePath && (
        <a href={data.pdfPath ?? data.url} target="_blank" rel="noopener noreferrer">
          <Image
            src={data.imagePath}
            alt={`${data.name} certificate`}
            width={1191}
            height={907}
            className="h-auto w-full"
          />
        </a>
      )}
      <CardContent className="flex-1">
        <Typography variant="h6" gutterBottom>
          {data.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {data.issuer} · {data.date}
        </Typography>
        {data.description && (
          <Typography variant="body2" color="text.secondary">
            {data.description}
          </Typography>
        )}
      </CardContent>
      <CardActions sx={{ px: 2, pb: 2, gap: 1, flexWrap: "wrap" }}>
        <OpenLinkChip label="View Certificate" url={data.url} primary />
        {data.pdfPath && <OpenLinkChip label="PDF" url={data.pdfPath} />}
      </CardActions>
    </Card>
  );
}
