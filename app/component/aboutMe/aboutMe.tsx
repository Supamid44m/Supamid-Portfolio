"use client";
import { Divider } from "@mui/material";
import PersonalData from "./personalData";
import Contact from "./contact";
import SectionTitle from "../sectionTitle";

export default function AboutMe() {
  return (
    <div>
      <SectionTitle>About Me</SectionTitle>
      <PersonalData />
      <Divider sx={{ my: 3 }} />
      <SectionTitle>Contacts</SectionTitle>
      <Contact />
    </div>
  );
}
