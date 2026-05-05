import styled from "styled-components";
import {Colors, Fonts} from "../../styles/util/variables.ts";
// ProjectsSection

interface SectionProps {
    isProject?: boolean;
}

export const SectionContainer = styled.section`
    display: flex;
    padding: 60px;
    align-items: center;
    gap: 40px;
    width: 100%;
    max-width: 1200px;
    position: sticky;
    top: 70px;
`;
export const ContentWrapper = styled.div<SectionProps>`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    background: ${Colors.yellow};
    height: -webkit-fill-available;
`
export const ProjectImagesWrapper = styled.div`
    display: flex;
    height: 254px;
    align-items: flex-start;
    width: 100%;
    overflow: scroll;
    scrollbar-width: none;
    border: 3px solid ${Colors.purple};
`

export const ProjectImages = styled.img`
    width: 508px;
    align-self: stretch;
    object-fit: cover;
`

export const ProjectTitle = styled.h4`
    color: ${Colors.purple};
    font-family: ${Fonts.primalFF};
    font-size: ${Fonts.sizeXL};
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const ProjectDescription = styled.p`
    color: ${Colors.purple};
    font-family: ${Fonts.primalFF};
    font-size: ${Fonts.sizeLG};
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 100%;
`

// Card

export const CardContainer = styled.div`
    display: flex;
    width: 415px;
    padding: 25px 30px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 30px;
    border-radius: 24px;
    border: 3px solid ${Colors.purple};
    background: ${Colors.yellow};
    box-shadow: 4px 4px 0 0 ${Colors.purple};
`

export const CardTitle = styled.h6`
    color: ${Colors.purple};
    font-family: ${Fonts.primalFF};
    font-size: ${Fonts.sizeLG};
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: -30px;
    width: 100%;
`

export const CardNum = styled.span`
    color: ${Colors.purple};
    font-family: ${Fonts.primalFF};
    font-size: ${Fonts.sizeSM};
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 100%;
`

export const CardImage = styled.img`
    align-self: stretch;
    border-radius: 22px;
    border: 3px solid ${Colors.purple};
    object-fit: cover;
    height: 293px;
`

export const CardLink = styled.a`
    color: ${Colors.purple};
    font-family: ${Fonts.primalFF};
    font-size: ${Fonts.sizeTN};
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration: underline;
`