import { aboutMe } from "@/app/constants/aboutMe";
import { getAge } from "@/app/utils/dateUtils";
import PersonOutlineIcon from "@mui/icons-material/PersonOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import InfoRow from "./infoRow";

export default function PersonalData() {
  const { name, nickname, birthdate } = aboutMe;
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <InfoRow icon={<PersonOutlineIcon />} label="Name" value={name} />
      <InfoRow icon={<BadgeOutlinedIcon />} label="Nickname" value={nickname} />
      <InfoRow
        icon={<CakeOutlinedIcon />}
        label="Birthdate"
        value={`${birthdate} (${getAge(birthdate)} years old)`}
      />
    </div>
  );
}
