import styled from "styled-components";
import { ITextStyled } from "./@interface";

export const TextStyled = styled.p<ITextStyled>`
    font-size: ${({ fontsize }) => fontsize || "1rem"};
    color: ${({ color }) => color || "black"};

    //font-weight: bold; -> Props
    display: flex;
    justify-content: center;
    /* background-color: orange; */
    margin: 1%;
    max-width: 80%;
    flex-wrap: wrap;
`