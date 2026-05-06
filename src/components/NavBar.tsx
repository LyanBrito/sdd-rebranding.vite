import * as S from "./styles.ts";
import type {Variants} from "motion";

type NavBarProps = {
    page: string;
    menuVariants?: Variants;
    isVisible: boolean;
}

export default function NavBar({page, menuVariants, isVisible}: NavBarProps) {
    return (
        <S.NavContainer
            initial={false}
            animate={isVisible ? "closed" : "open"}
            variants={menuVariants}
            style={{pointerEvents: isVisible ? "none" : "auto"}}>
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