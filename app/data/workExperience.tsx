import { ProjectTechStackDto } from "./interface/projectDto"

export interface workProject {
    name: string
    highlights: string[]
}

export interface workExperinece{
    name:string
    position:string
    year:string
    stack?:ProjectTechStackDto[]
    logoSrc? : string
    option?:string
    projects?: workProject[]
}

export const workExperience:workExperinece[] =[
    {
        name: "Entronica Co., Ltd",
        position: "Front-end Developer (Cooperative Education)",
        year: "November 2023-March 2024",
        projects: [
            {
                name: "EnterLand (Internal Community Website)",
                highlights: [
                    "Developed a user-search interface enabling users to quickly find and view people who interacted with posts.",
                    "Built a reusable Next.js bottom-sheet component for interactive comment viewing, providing a consistent UI pattern across the platform.",
                ],
            },
        ],
    },
     {
        name: "Entronica Co., Ltd",
        position: "Software Developer (Outsource AIS Employee)",
        year: "May 2024-Present",
        projects: [
            {
                name: "ICreator (Internal Policy Rule Engine Web UI)",
                highlights: [
                    "Delivered three policy-management modules (Product Offering, CFS, Policy Set) from scratch with reusable search, filtering, pagination, and data export.",
                    "Configured role-based UI authorization using Vue Router guards and CASL.",
                    "Designed and maintained the NestJS policy engine for rule sets, conditions, actions, events, and policy variables.",
                ],
            },
            {
                name: "AIS Order Web Portal",
                highlights: [
                    "Bootstrapped a new Next.js order portal from a legacy web app, integrating Vuexy, MUI 7, and Tailwind CSS.",
                    "Built reusable data-table infrastructure with column ordering, field selection, and configurable export.",
                ],
            },
            {
                name: "AIS Backend Microservice",
                highlights: [
                    "Implemented reconnect eligibility validation for bundling packages and Debt/Fraud business rules in Spring Boot.",
                    "Set up Grafana API monitoring tracking RPS, success/failure rates, and P50/P90/P99 latency.",
                ],
            },
        ],
    }

]
