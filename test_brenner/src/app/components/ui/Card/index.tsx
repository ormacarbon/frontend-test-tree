import { CardColumnStyled, CardRowStyled } from "./style";


export interface ICardProps {
    children: React.ReactNode;
}

export function CardColumn({ ...props }:ICardProps){
    return <CardColumnStyled>{props.children}</CardColumnStyled>
}

export function CardRow({ ...props }:ICardProps){
    return <CardRowStyled>{props.children}</CardRowStyled>
}