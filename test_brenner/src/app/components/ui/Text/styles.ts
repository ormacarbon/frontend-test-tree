import styled from "styled-components";
import { ITextStyled } from "./@interface";

export const TextStyled = styled.p<ITextStyled>`
    font-size: ${({ fontsize }) => fontsize || "1rem"};
    color: ${({ color }) => color || "black"};

    font-weight: bold;
    max-width: 100%;
    word-wrap: break-word; //quebrar linha
`