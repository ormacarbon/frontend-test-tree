import { IButtonStyled } from "./@interface";
import { ButtonStyled } from "./styles";

export function Button({...props}: IButtonStyled) {
    return <ButtonStyled variant={props.variant}>{props.children}</ButtonStyled>
}