import styled from "styled-components";
import {Colors, Fonts} from "../styles/util/variables.ts";
import {motion} from "motion/react";

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
    gap: 8px;
    width: 147px;
    right: 60px;
    top: 10%;
`

export const LangOptions = styled(motion.p).attrs({
    whileHover: {scale: 1.08}
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