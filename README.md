# Desafio

Neste desafio, você deverá recriar um layout de checkout fictício para compensação de carbono, conforme o design fornecido no Figma. Além disso, será necessário consumir dois endpoints da API:

1. **Obter o valor do crédito**: Esse endpoint será responsável por retornar o valor do crédito de carbono, que deve ser exibido durante o checkout.
2. **Simulação de processamento de pagamento**: O segundo endpoint será utilizado para simular o processamento de um pagamento após o usuário completar o checkout.

Ambos os endpoints devem ser integrados na aplicação de forma que a experiência do usuário no checkout seja fluida e os valores exibidos no sistema estejam corretos.

## Requisitos

- **URL do Checkout:** A aplicação deve utilizar um URL no seguinte formato:
  `https://meu-teste.com/checkout?co2=1&cred=2`

Onde:

- **`co2`**: Representa a quantidade de carbono.
- **`cred`**: Representa o valor unitario do crédito (ou creditPriceId).

O valor do crédito de carbono, que será atribuído ao parâmetro `cred` (ou `creditPriceId`), deve ser recuperado através do endpoint **`get credit price`**. Esse endpoint está documentado na pasta **`doc`** e retorna o valor do crédito de carbono associado ao `creditPriceId`. A aplicação deve realizar a requisição para esse endpoint para obter o valor correspondente e preenchê-lo dinamicamente o valor no checkout.

A requisição ao endpoint `Get Credit Price` é necessária para garantir que o valor do crédito esteja sempre atualizado e de acordo com as especificações do sistema.

# Rodando o projeto localmente

Você deverá clonar o repositório, depois rodar os comandos abaixo:

```
$ npm install
$ npm run dev

```

**Obs:** Lembre-se de criar o arquivo .env e fornecer a URL da API

```
 NEXT_PUBLIC_API

```

# API Mock

A MockAPI utilizada para a aplicação está disponibilizada dentro da {{url}} do Postman mas para facilitar está aqui:

```
 https://6751f822d1983b9597b4fa68.mockapi.io/api

```

# Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [Tailwindcss](https://tailwindcss.com/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [React-hook-form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [@hookform/resolvers](https://www.npmjs.com/package/@hookform/resolvers/v/1.3.7)

---

## Deploy na Vercel

O frontend da aplicação foi implantado na Vercel, garantindo fácil acesso e escalabilidade. A Vercel oferece integração contínua e deploy automático sempre que alterações são feitas no repositório.

A aplicação pode ser acessada através do seguinte link:

- [Clique aqui para ver em projeto em produção](https://frontend-test-tree-lyart.vercel.app/)
