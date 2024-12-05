# Desafio: Checkout para Compensação de Carbono

Neste teste, você deverá reproduzir um layout do figma de checkout fictício para compensação de carbono.

## Requisitos

- **URL do Checkout:** A aplicação deve utilizar um URL no seguinte formato:
https://meu-teste.com/checkout?co2=1

- **Cálculo do Valor Total:** 
- Cada unidade de CO₂ (crédito de carbono) custará R$157.
- O valor total do checkout deve ser atualizado dinamicamente com base na quantidade de CO₂ informada no parâmetro `co2` da URL.

## Exemplo

- Para `co2=1`: O valor será R$157.
- Para `co2=5`: O valor será R$785.

FIGMA:
[LAYOUT](https://www.figma.com/design/3dbuGSs6oCSLkPw9viSsfT/Front-end-Teste?node-id=0-1&t=KvUCyOT5Miiuh0D5-1)

## GIT
- Faça um fork deste repositório.
- Criar uma branch para codar as suas features.
- Criar um pull-request quando o teste for finalizado e submetido.

##### **NOTA: Será avaliado também se o nome da branch, títulos de commit, push e comentários possuem boa legibilidade.**

-----------------------------------------------------

## FRAMEWORK

- [NEXT.JS](https://nextjs.org/docs)

-----------------------------------------------------

## ESTILOS

- Os estilos deste teste devem ser feitos em styled-components (ou tailwind).
- O projeto ser o mais proximo possivel do layout fornecido.
- Deve ser totalmente responsivo.

## REQUISITOS DIFERENCIAIS:

- Animações.
- Código performático.
- Manutenibilidade do Código.
- Utilizar inglês no projeto todo.
- Fazer deploy do mesmo (heroku, netlify, aws, vercel, github pages ou outro da preferência).
