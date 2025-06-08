// FormCheckout.styles.ts
import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  //background-color: red;
  padding: 6%;
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  //background-color: red;
  gap: 12px;
  margin-top: 24px;
  width: 100%;
  height: 5rem;

  & > button {
    flex: 1;
    min-width: 120px;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    & > button {
      width: 100%;
    }
  }
`;

