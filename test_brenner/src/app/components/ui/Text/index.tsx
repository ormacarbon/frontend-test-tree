import { ITextProps } from "./@interface";
import { TextStyled } from "./styles";

export function Text({...props}: ITextProps){
    return <TextStyled fontsize={props.fontsize} color={props.color}>{props.children}</TextStyled>
}