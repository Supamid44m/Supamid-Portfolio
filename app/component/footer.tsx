import { aboutMe } from "../constants/aboutMe";

export default function Footer() {
  return (
    <footer className="mt-auto w-full py-6 text-center text-sm opacity-60">
      <p>&copy; {new Date().getFullYear()} {aboutMe.name}. All rights reserved.</p>
    </footer>
  );
}
