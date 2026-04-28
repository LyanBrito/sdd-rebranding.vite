import {NavConatiner, NavLink} from "./styles.ts";

type NavBarProps = {
    page: string;
}

export default function NavBar({ page }: NavBarProps) {
    return (
        <NavConatiner className="nav-bar">
            {page === "/"}
            <NavLink href="">Inicio</NavLink>
            <NavLink href="">Produtos</NavLink>
            <NavLink href="">Serviços</NavLink>
            <NavLink href="">Contatos</NavLink>
        </NavConatiner>
    )
}