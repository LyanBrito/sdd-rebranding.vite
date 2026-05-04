import styled from "styled-components";
import {Colors, Fonts} from "../styles/util/variables.ts";
import {motion} from "motion/react";

// Button
interface ButtonProps {
    isPrimal?: boolean;
}

export const ButtonContainer = styled(motion.a).attrs<ButtonProps>(() => ({
    whileHover: {
        scale: 1.04,
        boxShadow: "3px 3px 0 0 #FFC700, 3px 3px 0 2px #000, 7px 7px 0 0 #74247A, 7px 7px 0 2px #000",
    }
}))<ButtonProps>`
    display: flex;
    width: fit-content;
    padding: 14px 24px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border-radius: 14px;
    background: ${({isPrimal}) => isPrimal ? Colors.black : Colors.white};
    color: ${({isPrimal}) => isPrimal ? Colors.white : Colors.black};
    border: ${({isPrimal}) => isPrimal ? null : '2px solid'+ Colors.black};
    font-family: ${Fonts.primalFF};
    font-size: ${Fonts.sizeSM}
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

// Navbar
interface NavProps {
    actualPage?: boolean;
}

export const NavContainer = styled.nav`
    display: flex;
    height: 64px;
    align-items: center;
    width: 17.96875%;
    gap: 3px;
`

export const NavLink = styled(motion.a).attrs<NavProps>(() => ({
//     animation props
    whileHover: {
        fontWeight: 600,
    }
}))<NavProps>`
    display: flex;
    padding: 8px 12px;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    background-color: ${({actualPage}) => (actualPage ? Colors.yellow : 'transparent')};
    color: ${Colors.black};
    font-family: ${Fonts.primalFF};
    font-size: ${Fonts.sizeTN};
    font-style: normal;
    font-weight: ${({actualPage}) => (actualPage ? 700 : 400)};
    width: 100%;
    outline: ${({actualPage}) => (actualPage ? '2px solid #000' : '')};
    outline-offset: ${({actualPage}) => (actualPage ? '-1px' : '')};
`

// Header
export const HeaderContainer = styled.header`
    display: flex;
    padding: 0 60px;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: ${Colors.white};
`

// LangHandler
export const DropdownContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2px;
    cursor: pointer;
`
export const DDLabel = styled.p`
    font-family: ${Fonts.primalFF};
    font-size: ${Fonts.sizeTN};
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`
export const LangOptionsWrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background-color: ${Colors.white};
    border: 4px solid ${Colors.black};
    padding: 8px 12px;
    gap: 8px;
    width: 147px;
    right: 60px;
    top: 64px;
`

export const LangOptions = styled(motion.p).attrs({
    whileHover: {
        scale: 1.15,
    }
})`
    color: ${Colors.black};
    font-family: ${Fonts.primalFF};
    font-size: ${Fonts.sizeTN};
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 4px;

    span {
        font-size: ${Fonts.sizeLG};
    }
`

// ProjectsSection

interface SectionProps {
    isProject?: boolean;
}

export const SectionContainer = styled.section<SectionProps>`
    display: flex;
    padding: 60px;
    justify-content: center;
    align-items: ${props => props.isProject ? "flex-start" : "center"};
    gap: 40px;
    width: 100%;
    position: sticky;
    top: 70px;
`;
export const ContentWrapper = styled.div<SectionProps>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    width: 100%;
    background: ${Colors.yellow};
    // height: ${props => props.isProject ? "100%" : "100%"};
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
    max-width: 776px;
`

// Card

export const CardContainer = styled.div`
    display: flex;
    width: 344px;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;
    align-self: stretch;
    border-radius: 22px;
    border: 3px solid ${Colors.purple};
    object-fit: cover;
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