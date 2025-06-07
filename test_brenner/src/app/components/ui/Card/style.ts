import styled from "styled-components";

//background color
// width ou height
// fazer herança

const CardGeneric = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 2%;
    //background-color: green;


`

export const CardColumnStyled = styled(CardGeneric)`
//card com comportamento de coluna
    max-width: 100%;

`

export const CardRowStyled = styled(CardGeneric)`
//card com comportamento de Linha
    flex-direction: row;
    background-color: green;
    max-width: 100%;

`