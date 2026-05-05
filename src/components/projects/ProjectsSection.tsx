import * as S from "./styles.ts"

interface CarProps {
    cardNum: string;
    cardTitle: string;
    cardImg: string;
    cardImgP: string;
    cardImgL: string;
    secDescription: string;
    linkRef: string;
    linkLabel: string;
    isLast?: boolean;
}

export default function ProjectsSection({ isLast, cardImgP, cardImgL, cardNum, secDescription, cardTitle, cardImg, linkRef, linkLabel}: CarProps) {
    return (
        <S.SectionContainer isLast={isLast}>
            <S.ContentWrapper>
                <S.ProjectTitle>{cardTitle}</S.ProjectTitle>
                <S.ProjectDescription>{secDescription}</S.ProjectDescription>
                <S.ProjectImagesWrapper>
                    <S.ProjectImages src={cardImg} alt={cardTitle} />
                    <S.ProjectImages src={cardImgL} alt={cardTitle}/>
                    <S.ProjectImages src={cardImgP} alt={cardTitle}/>
                </S.ProjectImagesWrapper>
            </S.ContentWrapper>
            <S.CardContainer>
                 <S.CardNum>{cardNum}°</S.CardNum>
                <S.CardTitle>Projeto</S.CardTitle>
                <S.CardImage src={cardImg} alt=""/>
                <S.CardLink href={linkRef}>{linkLabel}</S.CardLink>
            </S.CardContainer>
        </S.SectionContainer>

    )
}