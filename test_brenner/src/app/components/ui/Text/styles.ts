import styled from "styled-components";
import { ITextStyled } from "./@interface";

export const TextStyled = styled.p<ITextStyled>`
    font-size: ${({ fontsize }) => fontsize || "1rem"};
    color: ${({ color }) => color || "black"};

    //font-weight: bold;
    margin: 1%;
    max-width: 8   0%;
    flex-wrap: wrap;
    //word-wrap: break-word; 
`