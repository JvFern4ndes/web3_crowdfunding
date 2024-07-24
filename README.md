# Web3 Crowdfunding Platform

Este projeto é uma plataforma de financiamento coletivo (crowdfunding) baseada em tecnologia Web3, projetada para aproveitar a transparência e a segurança da blockchain. A plataforma permite que criadores de projetos apresentem suas ideias e busquem apoio financeiro diretamente de uma comunidade global de apoiadores, sem a necessidade de intermediários tradicionais.

## Índice

1. [Introdução](#introdução)
2. [Configuração do Ambiente](#configuração-do-ambiente)
3. [Estrutura do Projeto](#estrutura-do-projeto)
4. [Dependências](#dependências)
5. [Sobre o contrato inteligente](#sobre-o-contrato-inteligente-(crowdfunding.sol))
6. [Comandos Úteis](#comandos-úteis)
7. [Contribuindo](#contribuindo)
8. [Licença](#licença)

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

## Sobre o contrato inteligente (CrowdFunding.sol)

### Estrutura `Campaign`

```sh
struct Campaign {
    address owner;
    string title;
    string description;
    uint256 target;
    uint256 deadline;
    uint256 amountCollected;
    string image;
    address[] donators;
    uint256[] donations;
}
```

`owner (address)`: O endereço do proprietário da campanha.<br>
`title (string)`: O título da campanha.<br>
`description (string)`: A descrição da campanha.<br>
`target (uint256)`: O valor alvo a ser arrecadado pela campanha.<br>
`deadline (uint256)`: A data limite para arrecadar os fundos (em timestamp Unix).<br>
`amountCollected (uint256)`: O valor total arrecadado até o momento.<br>
`image (string)`: Um link para a imagem da campanha.<br>
`donators (address[])`: Uma lista de endereços dos doadores.<br>
`donations (uint256[])`: Uma lista de valores das doações correspondentes.<br>

### Funções do contrato inteligente, incluindo seus propósitos, parâmetros de entrada e saída.

### Function `createCampaign`

```sh
function createCampaign(
    address _owner,
    string memory _title,
    string memory _description,
    uint256 _target,
    uint256 _deadline,
    string memory _image
) public returns (uint256)
```

#### Descrição:
Descrição:

Cria uma nova campanha de financiamento coletivo.

#### `Parâmetros`:

`_owner (address)`: O endereço do proprietário da campanha.<br>
`_title (string memory)`: O título da campanha.<br>
`_description (string memory)`: A descrição da campanha.<br>
`_target (uint256)`: O valor alvo a ser arrecadado pela campanha.<br>
`_deadline (uint256)`: A data limite para arrecadar os fundos (em timestamp Unix).<br>
`_image (string memory)`: Um link para a imagem da campanha.<br>

#### `Retorno`:

`uint256`: O ID da campanha recém-criada.

### function `donateToCampaign`

```sh
function donateToCampaign(uint256 _id) public payable
```

#### Descrição:

Permite que os usuários façam doações para uma campanha específica.

#### `Parâmetros`:

`_id (uint256)`: O ID da campanha para a qual a doação está sendo feita.

#### `Retorno`:

Nenhum.

#### Detalhes:

A função adiciona o endereço do doador e o valor da doação à lista de doadores e doações da campanha.
Transfere o valor da doação para o proprietário da campanha.
Se a transferência for bem-sucedida, atualiza o valor total arrecadado pela campanha.

### function `getDonators`

```sh
function getDonators(uint256 _id) view public returns (address[] memory, uint256[] memory)
```

#### Descrição:

Retorna a lista de doadores e o valor das doações para uma campanha específica.

#### `Parâmetros`: 

`_id (uint256)`: O ID da campanha.

#### `Retorno`:

`address[]`: Uma lista de endereços dos doadores.
`uint256[]`: Uma lista de valores das doações correspondentes.

### function `getCampaigns`

```sh
function getCampaigns() public view returns (Campaign[] memory)
```

#### Descrição: 

Retorna uma lista de todas as campanhas criadas.

#### `Parâmetros`:

Nenhum.

#### `Retorno`:

`Campaign[]`: Uma lista de todas as campanhas criadas.

#### Detalhes: 

A função cria uma lista de todas as campanhas com base no número de campanhas existentes e retorna essa lista.

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

# Backlog da Documentação

1 - instalação do dotenv