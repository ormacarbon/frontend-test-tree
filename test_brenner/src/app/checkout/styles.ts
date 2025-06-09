import styled from "styled-components";

export const DivCheckout = styled.div<{ marginBottom?: string }>`
    //Mobile First
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 5%;
    margin-bottom: ${({ marginBottom }) => marginBottom || ""};
    max-width: 100%;
    
    @media (min-width: 1024px) {
        display: flex;
        margin: 0;
        //background-color: red;
        align-items: center;
        width: 100%;
        box-sizing: border-box;
        //  border: 2px solid black;

    }
`

export const DivImage = styled.div`
display: none;
//background-color: red;
    
    @media (min-width: 1024px) {
        display: flex;
        margin: 3%;
        //border: 2px solid green;
        max-height: 50%;

    }
`