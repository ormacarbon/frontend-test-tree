import styled from "styled-components";

//background color
// width ou height ou Margin
// fazer herança

const CardGeneric = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 2%;
    box-sizing: border-box;
    //background-color: green;


`

export const CardColumnStyled = styled(CardGeneric)`
//card com comportamento de coluna
    display: block;
    background-color: red;
    max-width: 100%;

`

export const CardRowStyled = styled(CardGeneric)`
//card com comportamento de Linha
    flex-direction: row;
    justify-content: center;
    align-items: center;
    //background-color: green;
    margin: 2%;
    gap: 1rem;
    max-width: 100%;
    padding-bottom: 180px;

`

export const PurchaseSummaryCard = styled.div`
  max-width: 100%;
  height: 10.125rem;
  background-color: #ffffff;
  border-radius: 17px 17px 0 0;
  box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.15);
  padding: 16px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  position: fixed;
  bottom: 0;      
  //left: 0;
  width: 100%;    
  z-index: 1000; 
`;