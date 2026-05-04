import * as S from "./styles.ts"

interface CarProps {
    cardNum: string;
    cardTitle: string;
    cardImg: string;
    secDescription: string;
    linkRef: string;
    linkLabel: string;
    isProject?: boolean;
}

export default function Card({cardNum, secDescription, cardTitle, cardImg, linkRef, linkLabel, isProject}: CarProps) {
    return (
        <S.SectionContainer>
            <S.ContentWrapper isProject={isProject}>
                <S.ProjectTitle>Projetos</S.ProjectTitle>
                <S.ProjectDescription>{secDescription}</S.ProjectDescription>
            </S.ContentWrapper>
            <S.CardContainer>
                 <S.CardNum>{cardNum}</S.CardNum>
                <S.CardTitle>{cardTitle}</S.CardTitle>
                <S.CardImage src={cardImg} alt=""/>
                <S.CardLink href={linkRef}>{linkLabel}</S.CardLink>
            </S.CardContainer>
        </S.SectionContainer>

    )
}