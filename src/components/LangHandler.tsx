import * as I from "../assets/icons/Icons.tsx";
import * as S from "./styles.ts";


export default function LangHandler() {
    return (
        <S.DropdownContainer>
            <I.GlobeIcon />
            <S.DDLabel>Change Region</S.DDLabel>
            <I.ArrowIcon />
        </S.DropdownContainer>
    )
}