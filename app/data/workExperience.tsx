import { ProjectTechStackDto } from "./interface/projectDto"

export interface workExperinece{
    name:string
    position:string
    year:string
    stack?:ProjectTechStackDto[]
    logoSrc? : string
    option?:string
}

export const workExperience:workExperinece[] =[
    {
        name: "Entronica Co., Ltd",
        position: "Front-end Developer (Cooperative Education)",
        year: "November 2023-March 2024"
    },
     {
        name: "Entronica Co., Ltd",
        position: "Software Developer",
        year: "May 2024-Present"

    }

]