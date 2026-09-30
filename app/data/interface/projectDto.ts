export interface ProjectDto {
    id: string;
    name: string;
    description: string;
    imageSrc: string;
    projectUrl?: ProjectUrl;
    techStack: ProjectTechStackDto[];
    action?:string[]
    hasDemo:boolean
}

export interface ProjectUrl{
    fe?:string,
    be?:string
}

export interface ProjectTechStackDto {
    name: string;
    iconSrc?: string;
}