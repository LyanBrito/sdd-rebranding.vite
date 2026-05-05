import ProjectsSection from "./ProjectsSection.tsx";
import PH from "../../assets/images/hero.png";
import {useEffect, useState} from "react";
import type {ProjectData} from "./types.ts";
import {projectAssets} from "../../assets/images/projects/export.ts";
import data from "./data.json";

export default function ProjectsContainer() {
    const [projects, setProjects] = useState<ProjectData[]>([]);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setProjects(data);
    }, []);

    return (
        <>
            <ProjectsSection
                cardNum={"00"}
                cardTitle={"Suporte de Domingo"}
                cardImg={PH}
                secDescription={"A Suporte de Domingo entrega experiências conceituais com design autoral, criando identidades únicas que rompem com o genérico. Estruturamos soluções completas com código orientado ao futuro ⌘ impulsionando conversões, reduzindo custos operacionais e proporcionando uma experiência de usuário memorável & acessível.\n"}
                linkRef={"/"}
                linkLabel={"link"}
                cardImgP={PH}
                cardImgL={PH}/>

            {projects.map((project, index) => {
                const cardImage =
                    project.images.projectImage as keyof typeof projectAssets;

                const cardImagePallet =
                    project.images.projectsPallet as keyof typeof projectAssets;

                const cardImageLogos =
                    project.images.projectLogos as keyof typeof projectAssets;


                return (
                    <ProjectsSection
                        key={index}
                        cardNum={String(index + 1).padStart(2, "0")}
                        cardTitle={project.name}
                        cardImg={projectAssets[cardImage]}
                        secDescription={project.description}
                        linkRef={"/"}
                        linkLabel={"Ver Projeto"}
                        cardImgP={projectAssets[cardImagePallet]}
                        cardImgL={projectAssets[cardImageLogos]}/>
                );
            })}
        </>
    );
}