import * as I from "../assets/icons/Icons.tsx";
import {ButtonContainer} from "./styles.ts";


interface ButtonProps {
    label: string;
    hasIcon?: boolean;
    isPrimal?: boolean;
    ref: string;
}

export default function Button({ label, hasIcon, isPrimal, ref }: ButtonProps) {

    return (
        <ButtonContainer href={ref} isPrimal={isPrimal}>
            {label}
            {hasIcon ? (<I.ArrowIcon />) : null}
        </ButtonContainer>
    )
}