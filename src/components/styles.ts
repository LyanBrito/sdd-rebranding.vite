import styled from "styled-components";
import {Colors, Fonts} from "../styles/util/variables.ts";


export const NavConatiner = styled.nav`
    display: flex;
    height: 64px;
    align-items: center;
    gap: 3px;
`
export const NavLink = styled.a`
    display: flex;
    padding: 8px 12px;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: ${Colors.black};
    font-family: ${Fonts.primalFF};
    font-size: ${Fonts.sizeTN};
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 14px */
`