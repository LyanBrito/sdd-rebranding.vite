import {servicesData} from './data.ts';
import * as S from './styles.ts';
import ServiceCard from "./ServiceCard.tsx";

export default function ServicesSection() {
    return (
        <S.SectionContainer id="ServicesSection">
            <S.SectionTitle>Servçios</S.SectionTitle>
            <S.SectionText>Do branding à experiência digital ✶
                Soluções integradas em design, software, automação e capacitação para gerar valor e impulsionar
                resultados.</S.SectionText>
            <S.Grid>
                {servicesData.map((service) => (
                    <ServiceCard
                        key={service.id}
                        title={service.title}
                        description={service.description}
                        link={service.link}
                        image={service.image}
                    />
                ))}
            </S.Grid></S.SectionContainer>
    );
}