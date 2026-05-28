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
            animate={isVisible ? "open" : "closed"}
            variants={menuVariants}
            style={{pointerEvents: isVisible ? "auto" : "none"}}>
            <S.NavLink
                actualPage={page === "/"}
                href="/"
            >Inicio</S.NavLink>
            <S.NavLink
                actualPage={page === "/PortfolioPage"}
                // href="/PortfolioPage"
                href="#PortfolioSection"
            >Portfolio</S.NavLink>
            <S.NavLink
                actualPage={page === "/ServicesPage"}
                // href="/ContactsPage"
                href="#ServicesSection"
            >Serviços</S.NavLink>
        </S.NavContainer>
    )
}