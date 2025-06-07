import { IHeadingProps } from "./@interface"
import { HeadingStyled1, HeadingStyled2 } from "./styles"

export function Heading1({...props}: IHeadingProps){
    return <HeadingStyled1>{props.children}</HeadingStyled1>
}

export function Heading2({...props}: IHeadingProps){
    return <HeadingStyled2>{props.children}</HeadingStyled2>
}