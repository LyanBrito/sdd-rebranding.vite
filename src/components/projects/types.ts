// types.ts ou no topo do arquivo
export interface ProjectData {
    name: string;
    description: string;
    categories: string[];
    images: {
        projectImage: string; // ex: "CTImages"
        projectLogos: string;
        projectsPallet: string;
    };
}