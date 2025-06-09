// FormCheckout.styles.ts
import styled from "styled-components";

export const FormWrapper = styled.form`
  //Mobile First
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  //background-color: red;
  padding: 6%;

  @media (min-width: 1024px) {
    display: flex;
    padding: 1%;
    gap: 2%;
    max-width: 100%;
    box-sizing: border-box;
    //border: 2px solid green;
    max-height: 50%;

    }

`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  //background-color: red;
  padding: 2%;
`;

export const Row = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  height: 5rem;

  & > div {
    flex: 1;
  }
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Select = styled.select`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  background-color: #F4F4F499;
  color: #979797;
  font-weight: bold;
  border: 1px solid #ccc;
  font-size: 14px;
`;

export const ButtonsContainer = styled.div`
  //Mobile first
  flex-direction: column;
  background-color: green;
  height: 10vh;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: 1%;
    background-color: red;
    gap: 12px;
    margin-top: 24px;
    width: 50%;
    height: 3rem;
  }

`;

