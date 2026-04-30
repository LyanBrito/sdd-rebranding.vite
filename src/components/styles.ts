import styled from "styled-components";
import {Colors, Fonts} from "../styles/util/variables.ts";

// Navbar
interface NavProps {
    actualPage?: boolean;
}

export const NavConatiner = styled.nav`
    display: flex;
    height: 64px;
    align-items: center;
    width: 17.96875%;
    gap: 3px;
`
export const NavLink = styled.a<NavProps>`
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
    &:hover {
        font-weight:  ${({actualPage}) => (actualPage ? 700 : 600)};
    }
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