import styled from "styled-components";

export const ContainerStyled = styled.div`
  display: flex;    
  flex-direction: column;
  //position: relative; // ou fixed/absolute dependendo do layout
  width: 100vw;
  min-height: 100vh;
  
  //background-color: red;
  
  @media (min-width: 1024px) {
    padding-top: 2.875rem;
    max-height: 140vh;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 2rem;
    gap: 2rem;
    //background-color: blue;
  }
`;
