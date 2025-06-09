import { IHeadingProps } from "./@interface"
import { HeadingStyled1, HeadingStyled2, DivHeading } from "./styles"

export function Heading1({ ...props }: IHeadingProps) {
    return (

        <DivHeading>
            <HeadingStyled1>{props.children}</HeadingStyled1>
        </DivHeading>
    )
}

export function Heading2({ ...props }: IHeadingProps) {
    return (

        <DivHeading>
            <HeadingStyled2>{props.children}</HeadingStyled2>
        </DivHeading>
    )
}