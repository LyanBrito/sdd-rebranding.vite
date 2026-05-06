import NavBar from "./NavBar.tsx";
import * as Icons from "../assets/icons/Icons.tsx";
import LangHandler from "./LangHandler.tsx";
import * as S from "./styles.ts";
import {useState} from "react";
import type {Variants} from "motion";

interface HeaderProps {
    page: string;
}

export default function Header({page}: HeaderProps) {
    const [isContainerVisible, setIsContainerVisible] = useState(true)
    const menuVariants: Variants = {
        open: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        },
        closed: {
            opacity: 0,
            y: -20,
            scale: 0.95,
            transition: {
                duration: 0.2,
                ease: "easeIn"
            }
        }
    };

    return (
        <S.HeaderContainer>
            <Icons.SDDLogo/>
            <NavBar isVisible={isContainerVisible} page={page} menuVariants={menuVariants}/>
            <LangHandler isContainerVisible={isContainerVisible} menuVariantes={menuVariants}/>
            <S.HamburguerMenu onClick={() => setIsContainerVisible(!isContainerVisible)}>=</S.HamburguerMenu>
        </S.HeaderContainer>
    )
}