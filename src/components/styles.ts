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
