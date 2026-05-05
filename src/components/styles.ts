import styled, {keyframes} from "styled-components";
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
    border: ${({isPrimal}) => isPrimal ? null : '2px solid' + Colors.black};
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
// Carousel

// Animação para o movimento infinito
const scroll = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
`;


interface QuoteProps {
    bgImg: string;
}

export const QuoteContainer = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    flex-direction: column;
`

export const QuoteSection = styled.div<QuoteProps>`
    display: flex;
    padding: 60px 0;
    justify-content: center;
    align-self: stretch;
    background-image: url(${props => props.bgImg});
    background-position: center;
    align-items: center;
`

export const QuoteText = styled.h3`
    color: ${Colors.black};
    text-align: center;
    font-family: ${Fonts.primalFF};
    font-size: ${Fonts.sizeXL};
    font-style: normal;
    max-width: 926px;
    font-weight: 700;

    span {
        font-weight: 800;
        color: ${Colors.black};
        text-align: center;
        font-family: ${Fonts.primalFF};
        font-size: ${Fonts.sizeLG};
        font-style: normal;
    }
`
export const QuoteSimble = styled.span`
    color: ${Colors.white};
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: ${Colors.black};
    font-family: ${Fonts.logoFF};
    font-size: ${Fonts.size2XL};
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
`

export const BannerStrip = styled.div`
    background-color: ${Colors.black};
    display: flex;
    padding: 0 10px 15px 10px;
    justify-content: center;
    overflow: hidden;
    align-items: center;
    align-self: stretch;
    color: ${Colors.white};
    white-space: nowrap;
`;

export const ScrollingContainer = styled.div`
    display: flex;
    animation: ${scroll} 20s linear infinite;
    /* Pausa ao passar o mouse, se desejar */

    &:hover {
        animation-play-state: paused;
    }
`;

export const BannerItem = styled.span`
    font-family: ${Fonts.carouselFF}; /* Use a fonte do seu design aqui */
    font-size: ${Fonts.size2XL};
    font-weight: 900;
    text-transform: uppercase;
    display: flex;
    align-items: center;

    &::after {
        content: "•";
        margin: 0 30px;
        color: ${Colors.white};
    }
`;

