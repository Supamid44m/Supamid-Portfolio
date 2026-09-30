import { Chip } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

interface props {
  label: string;
  url: string;
  primary?: boolean;
}

export default function OpenLinkChip({ label, url, primary = false }: props) {
  return (
    <Chip
      component="a"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      clickable
      label={label}
      icon={<ArrowOutwardIcon fontSize="small" />}
      color={primary ? "primary" : "default"}
      variant={primary ? "filled" : "outlined"}
      size="small"
    />
  );
}
