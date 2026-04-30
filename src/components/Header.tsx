import NavBar from "./NavBar.tsx";
import * as Icons from "../assets/icons/Icons.tsx";
import LangHandler from "./LangHandler.tsx";
import * as S from "./styles.ts";

interface HeaderProps {
    page: string;
}

export default function Header({page}: HeaderProps) {
    return (
        <S.HeaderContainer>
            <Icons.SDDLogo />
            <NavBar page={page} />
            <LangHandler />
        </S.HeaderContainer>
    )
}