import {servicesData} from './data.ts';
import * as S from './styles.ts';
import ServiceCard from "./ServiceCard.tsx";

export default function ServicesSection() {
    return (
        <S.SectionContainer>
            <S.SectionTitle>Servçios</S.SectionTitle>
            <S.SectionText>dfghjkl;</S.SectionText>
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