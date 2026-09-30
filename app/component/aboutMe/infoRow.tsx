import { Typography } from "@mui/material";

interface props {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}

export default function InfoRow({ icon, label, value }: props) {
  return (
    <div className="flex items-start gap-3">
      <Typography component="span" color="primary" sx={{ display: "flex", mt: 0.25 }}>
        {icon}
      </Typography>
      <div className="min-w-0">
        <Typography variant="caption" color="text.secondary">
          {label}
        </Typography>
        <Typography sx={{ wordBreak: "break-word" }}>{value}</Typography>
      </div>
    </div>
  );
}
