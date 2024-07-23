# Web3 Crowdfunding Platform

Este projeto é uma plataforma de financiamento coletivo (crowdfunding) baseada em tecnologia Web3, projetada para aproveitar a transparência e a segurança da blockchain. A plataforma permite que criadores de projetos apresentem suas ideias e busquem apoio financeiro diretamente de uma comunidade global de apoiadores, sem a necessidade de intermediários tradicionais.

## Índice

1. [Introdução](#introdução)
2. [Configuração do Ambiente](#configuração-do-ambiente)
3. [Estrutura do Projeto](#estrutura-do-projeto)
4. [Dependências](#dependências)
5. [Comandos Úteis](#comandos-úteis)
6. [Contribuindo](#contribuindo)
7. [Licença](#licença)

## Introdução

### Objetivo

Nosso objetivo é democratizar o acesso ao financiamento coletivo, oferecendo uma plataforma que alavanca a tecnologia blockchain para proporcionar maior confiança, transparência e eficiência em campanhas de crowdfunding.

### Funcionalidades

Cadastro de Projetos:<br>
Criadores de projetos podem registrar suas iniciativas, descrevendo objetivos, metas de financiamento e recompensas para os apoiadores.

Contribuições Seguras:<br>
Apoiadores podem contribuir com projetos usando criptomoedas, garantindo transações seguras e transparentes via smart contracts.

Descentralização:<br>
Utilizamos a infraestrutura da blockchain para garantir a imutabilidade e a transparência das transações, eliminando a necessidade de intermediários.

Recompensas Automatizadas:<br>
Os smart contracts gerenciam a distribuição de recompensas automaticamente, com base nos critérios definidos pelos criadores dos projetos.

Gestão de Campanhas:<br>
Ferramentas para os criadores monitorarem o progresso das suas campanhas de financiamento, visualizarem contribuições e gerenciarem recompensas.

### Tecnologias Utilizadas

Solidity:<br>
Para desenvolvimento de smart contracts seguros e eficientes.

Ethereum:<br>
Blockchain principal para execução dos contratos inteligentes.

React:<br>
Framework de front-end para construção de uma interface de usuário dinâmica e responsiva.

ThirdWeb:<br>
Ferramenta para simplificar o desenvolvimento e a integração com contratos inteligentes.

## Configuração do Ambiente

Para configurar o ambiente de desenvolvimento, siga os passos abaixo:

### Passo 1: Configuração Inicial

Execute o seguinte comando no terminal para instalar e iniciar a configuração do contrato utilizando Thirdweb:

```sh
npx --force thirdweb@latest create --contract
```

### Passo 2: Seguir as Instruções

Após rodar o comando acima, siga as instruções que aparecerão no terminal para completar a configuração do contrato.

## Estrutura do projeto

Estrutura básica do projeto após a configuração inicial, incluindo diretórios e arquivos importantes criados.

```sh
crowdfunding/
├── client/
├── web3/
│   └── contracts/
│   └── node_modules/
│   └── .gitignore
│   └── hardhat.config.js
│   └── package.json
│   └── README.md
│   └── yarn.lock
└── README.md
```

## Dependências

Todas as dependências necessárias para o desenvolvimento e execução do projeto.

- Node.js
- Thirdweb
- Solc (Solidity compiler)

## Comandos Úteis

```sh
# Para instalar dependências
npm install

# Para compilar os contratos inteligentes
npx hardhat compile

# Para rodar os testes
npx hardhat test

# Para implantar os contratos
npx hardhat run scripts/deploy.js --network <network-name>
```

## Contribuindo

Seja bem-vindo a contribuir para o projeto. Por favor, siga as diretrizes de contribuição.

## Licença

Este projeto é licenciado sob a MIT License.
