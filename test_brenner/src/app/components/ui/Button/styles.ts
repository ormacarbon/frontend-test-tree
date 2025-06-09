/*
    Anotacoes

    - Mudar o children do botao
    - cor muda dinamicamente - BackgroundColor
    - Children
    - Variant -> export type ButtonVariantColor = 'primary' | 'success';
        - Cores -> Cinza, branco e Verde -> Pegar as cores em Theme.

    styled
    - border
    - cursor
    - transition: background-color 0.2s;
    - padding
    - disabled
    - borderRadius
    - max-width & max-heigth

*/

import styled, { css } from "styled-components";
import { IButtonStyled } from "./@interface";

const buttonVariants = {
    primary: '#B0B0B0',
    success: '#00A19D'
};

export const ButtonStyled = styled.button<IButtonStyled>`

  ${({ variant = 'primary' }) => css`
    background-color: ${buttonVariants[variant]};
  `}

  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};

  border: none;
  border-radius: 4px;
  color: white;
  font-size: 1.3rem;
  font-weight: bold;
  cursor: pointer;
  padding: 0 16px;
  transition: background-color 0.2s;
  
  &:hover {
    opacity: 0.9;
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (min-width: 1024px) {
  }
`