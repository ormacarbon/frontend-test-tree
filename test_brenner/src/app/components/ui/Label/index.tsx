import { LabelHTMLAttributes } from "react";
import { LabelStyled } from "./styles";
import { ILabelProps } from "./@interface";

export function Label({...props}: ILabelProps) {
    return <LabelStyled>{props.children}</LabelStyled>
}