export interface ProjectTag {
    content: string;
}

export interface Project {
    title: string;
    description: string;
    website: string;
    image?: string;
    tags?: ProjectTag[];
}