# Nome do Projeto

Breve descrição do projeto.

## Índice

1. [Introdução](#introdução)
2. [Configuração do Ambiente](#configuração-do-ambiente)
3. [Estrutura do Projeto](#estrutura-do-projeto)
4. [Dependências](#dependências)
5. [Comandos Úteis](#comandos-úteis)
6. [Contribuindo](#contribuindo)
7. [Licença](#licença)

## Introdução

Aqui você pode adicionar uma introdução ao seu projeto, explicando o propósito e os principais objetivos.

## Configuração do Ambiente

Para configurar o ambiente de desenvolvimento, siga os passos abaixo:

### Passo 1: Configuração Inicial

Execute o seguinte comando no terminal para instalar e iniciar a configuração do contrato utilizando Thirdweb:

```sh
npx --force thirdweb@latest create --contract

### Passo 2: Seguir as Instruções

Após rodar o comando acima, siga as instruções que aparecerão no terminal para completar a configuração do contrato.

nome-do-projeto/
├── contracts/
│   └── MyContract.sol
├── scripts/
│   └── deploy.js
├── test/
│   └── MyContract.test.js
├── package.json
└── README.md

- Node.js
- Thirdweb
- Solc (Solidity compiler)

# Para instalar dependências
npm install

# Para compilar os contratos inteligentes
npx hardhat compile

# Para rodar os testes
npx hardhat test

# Para implantar os contratos
npx hardhat run scripts/deploy.js --network <network-name>
