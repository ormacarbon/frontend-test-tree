import styled from "styled-components";



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
    align-items: center;
    background-color: yellow;
    max-width: 100%;

`

export const CardRowStyled = styled(CardGeneric)`
//card com comportamento de Linha

    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 2%;
    gap: 1rem;
    
    //max-width: 100%;
    //padding-bottom: 180px;
    
    @media (min-width: 1024px) {
      //background-color: orange;
    
    //left: 0; 
  }

`

export const CardSummaryRow = styled.div`
  display: flex;
  gap: 2%;
  align-items: center;
  justify-content: center;
  height: 5rem;
  //background-color: red;
  padding: 3%;

  & > div {
    flex: 1;
  }
`;

export const PurchaseSummaryCard = styled.div`
  //Mobile First
  max-width: 100%;
  //max-height: 100%;
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
  width: 100%;    
  z-index: 1000; 

  @media (min-width: 1024px) {
    margin: 3%;
    width: 55%;
    //border: 2px solid orange;
    position: relative;
     border-radius: 10px 10px 10px 10px;
     box-shadow: -5px 5px  rgba(0, 0, 0, 0.05);
    //left: 0; 
  }
`;