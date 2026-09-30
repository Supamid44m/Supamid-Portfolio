import { Typography } from "@mui/material";

export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      variant="overline"
      component="h2"
      color="primary"
      sx={{ display: "block", fontWeight: 700, letterSpacing: "0.12em", mb: 2 }}
    >
      {children}
    </Typography>
  );
}
