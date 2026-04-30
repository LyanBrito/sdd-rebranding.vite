import {NavConatiner, NavLink} from "./styles.ts";

type NavBarProps = {
    page: string;
}

export default function NavBar({ page }: NavBarProps) {
    return (
        <NavConatiner className="nav-bar">
            <NavLink actualPage={page === "/"} href="/">Inicio</NavLink>
            <NavLink actualPage={page === "/PortfolioPage"} href="/PortfolioPage">Portfolio</NavLink>
            <NavLink actualPage={page === "/ContactsPage"} href="/ContactsPage">Contatos</NavLink>
        </NavConatiner>
    )
}