"use client";
import { Avatar, Box, IconButton, Tooltip, Typography } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import { aboutMe } from "../constants/aboutMe";

export default function Header() {
  const { name, role, contact } = aboutMe;
  return (
    <Box
      component="header"
      className="w-full"
      sx={{ bgcolor: "background.paper", borderBottom: 1, borderColor: "divider" }}
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 py-8 text-center sm:flex-row sm:text-left">
        <Avatar
          src="/rick.png"
          alt={name}
          sx={{ width: 96, height: 96, border: 3, borderColor: "primary.main" }}
        />
        <div className="flex-1">
          <Typography variant="h4" component="h1">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {role}
          </Typography>
        </div>
        <div className="flex gap-1">
          <Tooltip title={contact.email}>
            <IconButton href={`mailto:${contact.email}`} aria-label="Email">
              <EmailOutlinedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title={contact.phone}>
            <IconButton href={`tel:${contact.phone.replace(/\s/g, "")}`} aria-label="Phone">
              <PhoneOutlinedIcon />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </Box>
  );
}
