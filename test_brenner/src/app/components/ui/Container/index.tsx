import { ContainerStyled } from "./styles";
import { IContainer } from "./@interface";


export function Container({ children }: IContainer) {
    return <ContainerStyled>{children}</ContainerStyled>
}