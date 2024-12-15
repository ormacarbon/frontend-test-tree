# Checkout Carbon

## App

- https://frontend-test-tree.vercel.app/

## Principais Tecnologias utilizadas

- Next
- daisyUI
- Tailwind
- Typescript

## Instalação

- Clone o repositório com
  ```
  git clone https://github.com/Junior331/frontend-test-tree.git
  ```
- É necessario ter o Node 20x ou superior instalado
- Para iniciar o servidor de desenvolvimento rode os comandos abaixo

```
yarn
yarn dev
```

### To do

- [x] Criar estrutura inicial do projeto
- [x] Implementação de Theme e Style
- [x] Criar componentes
- [x] Criar tela Home
- [x] Criar tela status da compra

  ### Pages

     - [x] Home
     - [x] StatusTransaction

  ### Components

  ## Elements

     - [x] Text  
     - [x] Load  
     - [x] Input 
     - [x] Title 
     - [x] Button
     - [x] Select

  ## Organism

  - [x] Form
  - [x] Layout
  - [x] CreditCard

  ## Modules

     - [x] Header
     - [x] Message

### Descrição da estrutura do projeto

- `Átomo (elements)`: Os átomos são componentes básicos e individuais, como botões, inputs, selects, etc. Um menu lateral geralmente é composto por diversos elementos, como ícones, textos, talvez até mesmo botões para navegação, e cada um desses elementos pode ser considerado um átomo. No entanto, o menu lateral como um todo é mais complexo do que apenas um único átomo.

- `Molécula (modules)`: As moléculas são compostas por átomos e têm uma funcionalidade mais complexa. Um menu lateral poderia ser considerado uma molécula se fosse composto por vários átomos (como botões, ícones, etc.) agrupados de uma maneira específica para uma função específica. No entanto, um menu lateral geralmente representa uma parte maior e mais significativa da interface do usuário.

- `Organismo (organism)`: Os organismos são componentes mais complexos que combinam vários átomos e/ou moléculas para formar uma parte significativa de uma interface. Um menu lateral se encaixa nessa definição, pois geralmente consiste em uma combinação de vários elementos (como itens de menu, ícones, títulos, etc.) agrupados para formar uma parte distinta e funcional da interface do usuário.

- `Hooks`: Os hooks são funções especiais que permitem que você use o estado e outros recursos do React dentro de componentes de função. Eles foram introduzidos no React 16.8 para permitir o uso de estado e outras funcionalidades anteriormente disponíveis apenas em componentes de classe em componentes de função.

- `Context`: A Context API é uma funcionalidade do React que permite compartilhar dados entre componentes sem a necessidade de passá-los explicitamente por meio de props. Ela é especialmente útil quando você tem dados que precisam ser acessados por muitos componentes em diferentes níveis da árvore de componentes. A Context API consiste em três partes principais: o provedor de contexto, o consumidor de contexto e o contexto em si.

- `Pages`: As páginas geralmente representam as diferentes rotas da aplicação, cada uma correspondendo a uma URL específica. As páginas são componentes que são renderizados quando o usuário navega para uma determinada rota. Elas são responsáveis por exibir o conteúdo relevante para essa rota específica e podem conter outros componentes, como formulários, listas, gráficos, etc. As páginas geralmente são compostas por uma combinação de componentes de apresentação e lógica, e podem ser estruturadas de acordo com as necessidades da aplicação.

- `Utils`: desempenha um papel crucial na organização e eficiência do código da aplicação. Ela abriga uma variedade de utilitários que são essenciais para diferentes partes da aplicação, ex: funções e arquivos auxiliares, como emptys, endpoints, types e funções auxiliares.

- `Styles (Theme)`: O tema do projeto é uma parte fundamental da estilização da aplicação, definindo as cores, estilos tipográficos e outros aspectos visuais que são aplicados em toda a interface do usuário. Abaixo, descrevo os principais elementos do tema:

### Estrutura do projeto

   src/
   │
   ├── app/
   │   ├── assets/
   │   │   ├── fonts/
   │   │   │   └── index.ts
   │   │   ├── icons/
   │   │   │   ├── chip.svg
   │   │   │   ├── logo.svg
   │   │   │   ├── plant.svg
   │   │   │   ├── placeholder.png
   │   │   │   ├── error_card_buy.svg
   │   │   │   ├── circular_spinner.png
   │   │   │   ├── success_card_buy.svg
   │   │   │   ├── summary_buy_logo.svg
   │   │   │   └── index.ts
   │   │   ├── images/
   │   │   │   ├── import-png.d.ts
   │   │   │   ├── import-svg.d.ts
   │   │   │   ├── placeholder.png
   │   │   │   ├── bg_credit_card.svg
   │   │   │   ├── image_not_found.png.png
   │   │   │   └── index.ts
   │   ├── components/
   │   │   ├── elements/
   │   │   │   ├── Text
   │   │   │   ├── Load
   │   │   │   ├── Input
   │   │   │   ├── Title
   │   │   │   ├── Button
   │   │   │   ├── Select
   │   │   │   └── index.ts
   │   │   ├── modules/
   │   │   │   ├── Header/
   │   │   │   ├── Message/
   │   │   │   └── index.ts
   │   │   ├── organism/
   │   │   │   ├── Form/
   │   │   │   ├── Layout/
   │   │   │   ├── CreditCard/
   │   │   │   └── index.ts
   │   ├── context/
   │   │   └── formContext.tsx
   │   ├── hooks/
   │   │   ├── useInstallmentOptions.ts
   │   │   └── axiosAdapter.ts
   │   ├── pages/
   │   │   ├── (Home)/
   │   │   └── layout.tsx
   │   ├── state/
   │   │   └── provider.tsx
   │   ├── styles/
   │   │   └── globals.css
   │   ├── utils/
   │   │   ├── utils.ts
   │   │   ├── types.ts
   │   │   ├── emptys.ts
   │   │   └── endpoints.ts

- O diretório `src/app/` contém todos os componentes do projeto, organizados de acordo com o padrão atomic.
  Cada componente é classificado como `átomo (atom)`, `molécula (molecule)` ou `organismo (organism)`, conforme
  sua complexidade e reutilização.

