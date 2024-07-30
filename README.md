# Web3 Crowdfunding Platform

Este projeto é uma plataforma de financiamento coletivo (crowdfunding) baseada em tecnologia Web3, projetada para aproveitar a transparência e a segurança da blockchain. A plataforma permite que criadores de projetos apresentem suas ideias e busquem apoio financeiro diretamente de uma comunidade global de apoiadores, sem a necessidade de intermediários tradicionais.

## Índice

1. [Introdução](#introdução)
2. [Configuração do Ambiente](#configuração-do-ambiente)
3. [Estrutura do Projeto](#estrutura-do-projeto)
4. [Dependências](#dependências)
5. [Sobre o contrato inteligente](#sobre-o-contrato-inteligente)
6. [Deploy do contrato com web3js](#Deploy-do-contrato-com-web3js)
7. [Comandos Úteis](#comandos-úteis)
8. [Contribuindo](#contribuindo)
9. [Licença](#licença)

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

### Node.js

Node.js é um ambiente de execução JavaScript assíncrono, orientado a eventos, que permite a execução de código JavaScript no lado do servidor. Desenvolvido inicialmente por Ryan Dahl em 2009, o Node.js utiliza o motor V8 do Google Chrome para executar código JavaScript fora de um navegador.

#### Principais Características do Node.js

- **Assíncrono e Orientado a Eventos**: Node.js utiliza um modelo de I/O não-bloqueante, permitindo que operações como leitura/escrita de arquivos, operações de rede e consultas a banco de dados sejam realizadas de forma assíncrona. Isso resulta em alta performance e escalabilidade para aplicações que precisam lidar com um grande número de conexões simultâneas.
- **Motor V8**: Utiliza o motor V8 do Google Chrome para compilar código JavaScript diretamente para código de máquina, proporcionando alta velocidade de execução.
- **NPM (Node Package Manager)**: Node.js vem com um gerenciador de pacotes integrado chamado npm, que facilita a instalação e gerenciamento de bibliotecas e dependências de terceiros.

#### Requisitos

Para executar este projeto, você precisará ter o Node.js instalado em sua máquina. É recomendado utilizar a mesma versão de Node.js que foi usada para desenvolver o projeto para evitar problemas de compatibilidade.

O projeto foi desenvolvido usando a seguinte versão do Node.js:

```sh
Node.js v20.14.0
````

#### Instalação do Node.js

**1 - Você pode baixar e instalar o Node.js a partir do site oficial.**

- Acesse o [site oficial do Node.js](https://nodejs.org/).
- Baixe o instalador da versão recomendada (LTS).
- Execute o instalador e siga as instruções.

**2 - Verificação da Instalação**

Após instalar o Node.js, verifique a instalação executando:

```sh
node -v

```

##

### dotenv

O projeto utiliza a biblioteca dotenv para carregar variáveis de ambiente a partir de um arquivo .env. Isso é útil para manter configurações sensíveis e específicas do ambiente fora do código-fonte.

#### Instalação

Instale o dotenv usando o npm:

````sh
npm install dotenv
````

##

### Web3.js

`Web3.js` é uma biblioteca JavaScript que permite a interação com a blockchain `Ethereum`. Ela fornece uma interface para a comunicação com contratos inteligentes, envio de transações, leitura de dados da blockchain e muito mais. Desenvolvida e mantida pela `Ethereum Foundation`, `web3.js` é amplamente utilizada em aplicações descentralizadas (dApps).

#### Principais Características do Web3.js

- **Interação com Contratos Inteligentes**: Permite a leitura e escrita de contratos inteligentes na blockchain Ethereum.
- **Envio de Transações**: Facilita o envio de transações e a gestão de carteiras Ethereum.
- **Acesso aos Dados da Blockchain**: Fornece métodos para acessar dados armazenados na blockchain, como saldos de contas, estados de contratos, etc.
- **Compatibilidade com Vários Provedores**: Suporta diferentes provedores, incluindo `Infura`, `Alchemy`, `Ganache` e conexões locais ao cliente Ethereum.

#### Requisitos

Para usar a biblioteca `web3.js` no seu projeto, você precisará ter o `Node.js` e o `npm` instalados em sua máquina. Certifique-se de usar uma versão compatível com a biblioteca `web3.js`.

#### Instalação do Web3.js

Para instalar a biblioteca `web3.js`, use o `npm`:

```sh
npm install web3
```

##

### Solc

`Solc` é um compilador de `Solidity`, a linguagem de programação usada para escrever contratos inteligentes na blockchain `Ethereum`. Ele traduz o código fonte escrito em Solidity para bytecode executável pela Ethereum Virtual Machine (EVM).

#### Principais Características do Solc

- **Compilação de Contratos Inteligentes**: Transforma código `Solidity` em bytecode e ABI (Application Binary Interface) utilizáveis na blockchain.
- **Suporte para Diversas Versões de Solidity**: Permite a compilação de contratos com diferentes versões de `Solidity`.
- **Compatibilidade com Ferramentas de Desenvolvimento Ethereum**: Integra-se bem com outras ferramentas como `web3.js` e frameworks de desenvolvimento como `Truffle` e `Hardhat`.

#### Requisitos

Para usar a biblioteca `solc` no seu projeto, você precisará ter o `Node.js` e o `npm` instalados em sua máquina. Certifique-se de usar uma versão compatível com a biblioteca `solc`.

##### Instalação do Solc

Para instalar a biblioteca `solc`, use o `npm`:

```sh
npm install solc
```

##

### Thirdweb

`Thirdweb` é uma plataforma que facilita a criação, implantação e interação com contratos inteligentes na blockchain. Ela fornece uma interface simples para desenvolvedores construírem aplicações descentralizadas (dApps) rapidamente, sem a necessidade de conhecimento profundo sobre contratos inteligentes.

#### Principais Características do Thirdweb

- **Implantação Simples de Contratos**: Fornece ferramentas e modelos para implantar contratos inteligentes sem esforço.
- **Interface Intuitiva**: Interface fácil de usar para gerenciar contratos inteligentes.
- **Suporte para Várias Blockchains**: Compatível com várias blockchains, incluindo Ethereum, Polygon, e Binance Smart Chain.
- **SDK e APIs**: SDKs e APIs robustos para interagir com contratos inteligentes a partir de diferentes linguagens de programação e plataformas.

#### Requisitos

Para usar a biblioteca `thirdweb` no seu projeto, você precisará ter o `Node.js` e o `npm` instalados em sua máquina. Certifique-se de usar uma versão compatível com a biblioteca `thirdweb`.

##### Instalação do Thirdweb

Para instalar a biblioteca `thirdweb`, use o `npm`:

```sh
npm install @thirdweb-dev/sdk
````

#### Problemas Encontrados com Thirdweb

Embora `Thirdweb` ofereça muitas vantagens, enfrentei dificuldades ao tentar utilizá-lo para o deploy do contrato inteligente. Após várias tentativas de verificações na plataforma do thirdweb, onde não consegui configurar o meu device (estava dando erro, mas não havia explicação de qual era o erro, e o suporte também não deu um retorno, talvez por conta de eu estar utilizando o plano gratuito), optei por usar uma abordagem alternativa para garantir a continuidade do desenvolvimento do projeto.

#### Alternativa: Deploy com Web3.js

Devido às dificuldades encontradas com o `Thirdweb`, decidi usar a biblioteca `web3.js` para fazer o deploy do contrato inteligente. [Aqui você encontrará os detalhes de como eu consegui fazer o deploy do contrato.](#deploy-do-contrato-com-web3js)

## Sobre o contrato inteligente

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

`owner (address)` : O endereço do proprietário da campanha.<br>
`title (string)` : O título da campanha.<br>
`description (string)` : A descrição da campanha.<br>
`target (uint256)` : O valor alvo a ser arrecadado pela campanha.<br>
`deadline (uint256)` : A data limite para arrecadar os fundos (em timestamp Unix).<br>
`amountCollected (uint256)` : O valor total arrecadado até o momento.<br>
`image (string)` : Um link para a imagem da campanha.<br>
`donators (address[])` : Uma lista de endereços dos doadores.<br>
`donations (uint256[])` : Uma lista de valores das doações correspondentes.<br>

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

Cria uma nova campanha de financiamento coletivo.

#### `Parâmetros` :
`_owner (address)` : O endereço do proprietário da campanha.<br>
`_title (string memory)` : O título da campanha.<br>
`_description (string memory)` : A descrição da campanha.<br>
`_target (uint256)` : O valor alvo a ser arrecadado pela campanha.<br>
`_deadline (uint256)` : A data limite para arrecadar os fundos (em timestamp Unix).<br>
`_image (string memory)` : Um link para a imagem da campanha.<br>

#### `Retorno` :
`uint256` : O ID da campanha recém-criada.

### function `donateToCampaign`

```sh
function donateToCampaign(uint256 _id) public payable
```

#### Descrição:
Permite que os usuários façam doações para uma campanha específica.

#### `Parâmetros` :
`_id (uint256)` : O ID da campanha para a qual a doação está sendo feita.

#### `Retorno` :
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

#### `Parâmetros` : 
`_id (uint256)` : O ID da campanha.

#### `Retorno` :
`address[]` : Uma lista de endereços dos doadores.<br>
`uint256[]` : Uma lista de valores das doações correspondentes.

### function `getCampaigns`

```sh
function getCampaigns() public view returns (Campaign[] memory)
```

#### Descrição: 
Retorna uma lista de todas as campanhas criadas.

#### `Parâmetros` :
Nenhum.

#### `Retorno` :
`Campaign[]` : Uma lista de todas as campanhas criadas.

#### Detalhes: 
A função cria uma lista de todas as campanhas com base no número de campanhas existentes e retorna essa lista.

## Deploy do contrato com web3js

### Primeiro passo: Criação do arquivo `compile.js`

O arquivo `compile.js` é responsável por compilar o contrato inteligente `CrowdFunding.sol` utilizando o compilador Solidity (`solc`). Este processo envolve a leitura do código fonte do contrato, a compilação do contrato e a extração do ABI (Application Binary Interface) e do bytecode gerado. Este guia documenta cada etapa do desenvolvimento do arquivo `compile.js`.

#### Estrutura do Arquivo

O arquivo `compile.js` está estruturado da seguinte forma:

1 - Importação dos módulos necessários.
2 - Definição do caminho e leitura do código fonte do contrato.
3 - Configuração das opções de compilação.
4 - Compilação do contrato utilizando o compilador Solidity (`solc`).
5 - Extração do ABI e do bytecode do resultado da compilação.
6 - Exportação do ABI e do bytecode para uso posterior.
7 - Escrita do ABI e do bytecode em arquivos JSON.

#### Passo a Passo do Desenvolvimento

#### 1. Importação dos Módulos Necessários

Primeiramente, importamos os módulos necessários:

```sh
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import solc from 'solc';
````

* `fs`: Módulo do Node.js para manipulação de arquivos.
* `path`: Módulo do Node.js para manipulação de caminhos de arquivos.
* `fileURLToPath` e `url`: Utilizados para obter o diretório do arquivo atual.
* `solc`: Compilador Solidity

#### 2. Definição do Caminho e Leitura do Código Fonte do Contrato

Definimos o caminho para o contrato `CrowdFunding.sol` e lemos seu conteúdo:

```sh
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contractPath = path.resolve(__dirname, 'CrowdFunding.sol');
const source = fs.readFileSync(contractPath, 'utf8');
````

#### 3. Configuração das Opções de Compilação

Configuramos as opções de compilação para o `solc`:

```sh
const input = {
    language: 'Solidity',
    sources: {
        'CrowdFunding.sol': {
            content: source,
        },
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['abi', 'evm.bytecode'],
            },
        },
    },
};
````

#### 4. Compilação do Contrato

Compilamos o contrato utilizando `solc`:

```sh
const output = JSON.parse(solc.compile(JSON.stringify(input)));

if (output.errors) {
    output.errors.forEach(err => {
        console.error(err.formattedMessage);
    });
}
````

#### 5. Extração do ABI e do Bytecode

Extraímos o ABI e o bytecode do resultado da compilação:

```sh
const contractName = 'CrowdFunding';
const contract = output.contracts['CrowdFunding.sol'][contractName];

if (!contract) {
    throw new Error(`Contrato ${contractName} não encontrado na saída da compilação`);
}

const abi = contract.abi;
const bytecode = contract.evm.bytecode.object;
````

#### 6. Exportação do ABI e do Bytecode

Exportamos o ABI e o bytecode para uso posterior:

```sh
export { abi, bytecode };
````

#### 7. Escrita do ABI e do Bytecode em Arquivos JSON

Finalmente, escrevemos o ABI e o bytecode em arquivos JSON para facilitar o acesso e a utilização:

```sh
fs.writeFileSync('SimpleStorageABI.json', JSON.stringify(abi, null, 2));
fs.writeFileSync('SimpleStorageBytecode.json', bytecode);

console.log('Compilação concluída com sucesso');
````

#### Resumindo

O arquivo compile.js permite a compilação eficiente do contrato CrowdFunding.sol, extraindo e salvando o ABI e o bytecode necessários para a implantação do contrato na blockchain. Este processo garante que o contrato esteja pronto para ser implantado com todas as informações necessárias.

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

3 - Sobre o thirdweb não ter funcionado e ao invés disso eu ter usado apenas o web3.js
4 - criação do arquivo compile.js
5 - criação do arquivo deploy.js
6 - Sobre a utilização do infura para fazer o deploy
7 - Utilização do thirdweb para criar a interface (criada com vite)
8 - instalação do react-router-dom
9 - Sobre a instalação do tailwindcss
