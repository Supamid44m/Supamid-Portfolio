import { mockProjectData } from "@/app/data/mock/mockProjectData";
import ProjectContainer from "./container";
import SectionTitle from "../sectionTitle";

export default function Project() {
  const mockProject = mockProjectData;
  return (
    <div>
      <SectionTitle>Projects</SectionTitle>
      <div className="grid gap-4 sm:grid-cols-2">
        {mockProject.map((item) => (
          <ProjectContainer data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
