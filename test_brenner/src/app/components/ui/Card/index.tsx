import { CardColumnStyled, CardRowStyled, PurchaseSummaryCard } from "./style"

export interface ICardProps {
    children: React.ReactNode;
}

export function CardColumn({ ...props }:ICardProps){
    return <CardColumnStyled>{props.children}</CardColumnStyled>
}

export function CardRow({ ...props }:ICardProps){
    return <CardRowStyled>{props.children}</CardRowStyled>
}

export function SummaryCard({ ...props }:ICardProps){
    return <PurchaseSummaryCard>{props.children}</PurchaseSummaryCard>
}