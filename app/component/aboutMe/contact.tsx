import { aboutMe } from "@/app/constants/aboutMe";
import { Link } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InfoRow from "./infoRow";

export default function Contact() {
  const { contact } = aboutMe;
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <InfoRow
        icon={<PhoneOutlinedIcon />}
        label="Phone"
        value={<Link href={`tel:${contact.phone.replace(/\s/g, "")}`} underline="hover">{contact.phone}</Link>}
      />
      <InfoRow
        icon={<EmailOutlinedIcon />}
        label="Email"
        value={<Link href={`mailto:${contact.email}`} underline="hover">{contact.email}</Link>}
      />
      <InfoRow
        icon={<LinkedInIcon />}
        label="LinkedIn"
        value={
          <Link href={contact.linkedin.url} target="_blank" rel="noopener noreferrer" underline="hover">
            {contact.linkedin.name}
          </Link>
        }
      />
    </div>
  );
}
