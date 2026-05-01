import * as S from "./styles.ts";

type NavBarProps = {
    page: string;
}

export default function NavBar({page}: NavBarProps) {
    return (
        <S.NavContainer>
            <S.NavLink
                actualPage={page === "/"}
                href="/">Inicio</S.NavLink>
            <S.NavLink
                actualPage={page === "/PortfolioPage"}
                href="/PortfolioPage">Portfolio</S.NavLink>
            <S.NavLink
                actualPage={page === "/ContactsPage"}
                href="/ContactsPage">Contatos</S.NavLink>
        </S.NavContainer>
    )
}