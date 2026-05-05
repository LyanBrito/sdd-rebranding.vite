import React from 'react';
import * as S from './styles.ts';
import PH from "../../assets/images/react.svg"

interface ServiceCardProps {
    title: string;
    description: string;
    link: string;
    image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({title, description, link}) => {
    return (
        <S.CardContainer>
            <S.CardTitle>{title}</S.CardTitle>
            <S.CardBody>
                <img src={PH} alt="placehodler"/>
                <S.CardText>{description}</S.CardText>
            </S.CardBody>
            <S.CardLink href={link}>Ver Documentação {'>'}</S.CardLink>
        </S.CardContainer>
    );
};

export default ServiceCard;