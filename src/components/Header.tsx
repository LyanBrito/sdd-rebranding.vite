import NavBar from "./NavBar.tsx";
import * as Icons from "../assets/icons/Icons.tsx";
import LangHandler from "./LangHandler.tsx";
import * as S from "./styles.ts";
import {useState} from "react";

interface HeaderProps {
    page: string;
}

export default function Header({page}: HeaderProps) {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <S.HeaderContainer>
            <Icons.SDDLogo/>
            <NavBar isVisible={isVisible} page={page}/>
            <button onClick={() => setIsVisible(!isVisible)}>=</button>
            {/*estilizar aparecer e sumir dele pelo styled-components*/}
            <LangHandler/>
        </S.HeaderContainer>
    )
}