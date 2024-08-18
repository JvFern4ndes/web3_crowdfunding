# Web3 Crowdfunding Platform

Este projeto é uma plataforma de financiamento coletivo (crowdfunding) baseada em tecnologia Web3, projetada para aproveitar a transparência e a segurança da blockchain. A plataforma permite que criadores de projetos apresentem suas ideias e busquem apoio financeiro diretamente de uma comunidade global de apoiadores, sem a necessidade de intermediários tradicionais.

## Índice

1. [Introdução](#introdução)
2. [Configuração do Ambiente](#configuração-do-ambiente)
3. [Estrutura do Projeto](#estrutura-do-projeto)
4. [Dependências](#dependências)
5. [Sobre o contrato inteligente](#sobre-o-contrato-inteligente)
6. [Deploy do contrato com web3js](#Deploy-do-contrato-com-web3js)
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

#### Utilização da Biblioteca Web3.js para Interações com a Rede Sepolia

Este documento descreve o processo de configuração e uso da biblioteca `web3.js` para interagir com a rede Sepolia. A partir da versão mais recente, a rede Goerli foi descontinuada, tornando a rede Sepolia a principal rede de testes. Devido a limitações de suporte de algumas bibliotecas, optei por utilizar `web3.js` para interações diretas com contratos inteligentes na rede Sepolia.

### 1. Configuração Inicial

#### 1.1 Instalação do Web3.js

Para começar, precisamos instalar a biblioteca `web3.js` em nosso projeto:

````
npm install web3
````

#### 1.2 Criação do Componente de Contexto

Criamos um componente `StateContextProvider` para gerenciar o estado global do Web3 e do contrato inteligente. Ele é responsável por inicializar o Web3 e fornecer métodos para interação com o contrato.

````
import React, { createContext, useEffect, useState, useContext } from 'react';
import Web3 from 'web3';
import CrowdFundingABI from '../../../web3/contracts/CrowdFundingABI.js';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const [web3, setWeb3] = useState(null);
    const [contract, setContract] = useState(null);
    const [address, setAddress] = useState(null);

    useEffect(() => {
        const initWeb3 = async () => {
            if (window.ethereum) {
                const web3Instance = new Web3(window.ethereum);
                setWeb3(web3Instance);

                const accounts = await web3Instance.eth.requestAccounts();
                setAddress(accounts[0]);

                const contractAddress = '0x55fb15f589e581329650af0b6bf2c9ded71f5352';
                const contractInstance = new web3Instance.eth.Contract(
                    CrowdFundingABI,
                    contractAddress
                );
                setContract(contractInstance);
            } else {
                console.error('Por favor, instale uma carteira Ethereum como MetaMask.');
            }
        };

        initWeb3();
    }, []);

    const publishCampaign = async (form) => {
        try {
            const data = await contract.methods
                .createCampaign(
                    address,
                    form.title,
                    form.description,
                    form.target,
                    new Date(form.deadline).getTime(),
                    form.image
                )
                .send({ from: address });

            console.log('contract call success', data);
        } catch (error) {
            console.log('contract call failure', error);
        }
    };

    return (
        <StateContext.Provider
            value={{
                address,
                contract,
                createCampaign: publishCampaign,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
````

#### 2. Integração com o React

#### 2.1 Encapsulamento do `StateContextProvider`

Para garantir que o estado do Web3 e do contrato inteligente seja gerenciado corretamente, encapsulamos o `StateContextProvider` em um componente de nível superior, que é então usado no arquivo principal do React:

````
import process from 'process';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Web3 from 'web3';
import { StateContextProvider } from './context';
import App from './App';
import './output.css';

if (typeof window !== 'undefined') {
    window.process = process;
}

const AppContainer = () => {
    const [web3, setWeb3] = useState(null);

    useEffect(() => {
        const initWeb3 = async () => {
            if (window.ethereum) {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                const web3Instance = new Web3(window.ethereum);
                setWeb3(web3Instance);
            } else {
                console.error('Por favor, instale uma carteira Ethereum como MetaMask.');
            }
        };

        initWeb3();
    }, []);

    return (
        <StateContextProvider>
            <App web3={web3} />
        </StateContextProvider>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Router>
        <AppContainer />
    </Router>,
);
````

#### 3. Uso das Funções do Contrato

#### 3.1 Criação de uma Campanha

Dentro do `StateContextProvider`, criamos a função `publishCampaign` que utiliza o método `createCampaign` do contrato inteligente. Essa função é responsável por enviar os dados da nova campanha para a blockchain:

````
const publishCampaign = async (form) => {
    try {
        const data = await contract.methods
            .createCampaign(
                address,
                form.title,
                form.description,
                form.target,
                new Date(form.deadline).getTime(),
                form.image
            )
            .send({ from: address });

        console.log('contract call success', data);
    } catch (error) {
        console.log('contract call failure', error);
    }
};
````

#### 4. Conclusão

Esse processo permite que sua aplicação React interaja diretamente com um contrato inteligente na rede Sepolia usando `web3.js`. A configuração abordada garante que as interações com a blockchain sejam gerenciadas de maneira eficiente e com o devido suporte de estado dentro da aplicação.

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

##

### ESLint e Prettier

Este projeto utiliza o [ESLint](https://eslint.org/) para garantir a qualidade do código e o [Prettier](https://prettier.io/) para formatação automática. Abaixo estão os passos para configurar e utilizar essas ferramentas no projeto.

#### 1. Instalação das Dependências

Instale o ESLint e os plugins necessários:

```sh
yarn add eslint eslint-plugin-react eslint-plugin-prettier eslint-config-prettier prettier --dev
````

#### 2. Configuração do ESLint

Crie ou edite o arquivo de configuração do ESLint (`.eslintrc.js`) na raiz do projeto:

```sh
import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
      },
    },
    plugins: {
      js: pluginJs,
      react: pluginReact,
      prettier: pluginPrettier,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "prettier/prettier": "error",
      "semi": ["error", "always"],
      "quotes": ["error", "single"],
      "indent": ["error", 2],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
````

#### 3. Configuração do EditorConfig

Adicione um arquivo `.editorconfig` na raiz do projeto para garantir consistência na formatação entre diferentes editores:

```sh
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false

[*.{js,jsx,ts,tsx}]
indent_style = space
indent_size = 2
````

#### 4. Configuração do Visual Studio Code

Para garantir que o ESLint e o Prettier funcionem corretamente ao salvar arquivos, adicione as seguintes configurações no arquivo `settings.json` do VS Code:

```sh
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "prettier.requireConfig": true
}
````

#### 5. Executando o ESLint

Para verificar o código e aplicar correções automáticas, execute o ESLint com a opção `--fix`:

````sh
yarn lint --fix
````

##

### Tailwind CSS

O Tailwind CSS é um framework de CSS utilitário que permite criar interfaces de usuário (UI) de forma rápida e eficiente. Ao contrário de outros frameworks de CSS, como Bootstrap, que oferecem componentes prontos e pré-estilizados, o Tailwind CSS fornece uma coleção de classes utilitárias de baixo nível que você pode combinar para criar layouts e designs personalizados.

#### 1. Instalação do Tailwind CSS

Execute o seguinte comando para instalar o Tailwind CSS no seu projeto:

````sh
npm install tailwindcss
````

Após a instalação, você pode gerar um arquivo de configuração padrão do Tailwind CSS usando o seguinte comando:

````
npx tailwindcss init
````

#### 2. Configuração do Tailwind CSS

Edite o arquivo `tailwind.config.js` para definir os caminhos dos arquivos onde o Tailwind deve procurar por classes CSS:

````
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ajuste conforme sua estrutura de diretórios
    './public/index.html',
  ],
  theme: {
    extend: {
      // Adicione personalizações aqui
    },
  },
  plugins: [],
};
````

#### 3. Adicionando o Tailwind CSS ao Projeto

Na pasta `src` do seu projeto, crie um arquivo CSS (ex: `tailwind.css`) e adicione as diretivas do Tailwind:

````
@tailwind base;
@tailwind components;
@tailwind utilities;
````

No arquivo de entrada principal do seu projeto (ex: src/index.js ou src/App.js), importe o arquivo CSS criado:

````
import './tailwind.css';
````

#### 4. Configurando o Processador CSS

Se você estiver usando um framework como Next.js, o Tailwind CSS será processado automaticamente. Para outros setups, você pode precisar configurar o PostCSS.

Instale o PostCSS e o Autoprefixer:

````
npm install -D postcss autoprefixer
````

Crie um arquivo `postcss.config.js` na raiz do projeto com o seguinte conteúdo:

````
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
````

#### 5. Utilizando Tailwind CSS no Projeto

Você pode começar a usar as classes utilitárias do Tailwind CSS em seus componentes. Por exemplo:

````
function App() {
  return (
    <div className="bg-blue-500 text-white p-4">
      <h1 className="text-2xl font-bold">Hello, Tailwind CSS!</h1>
    </div>
  );
}

export default App;
````

Você pode personalizar o tema do Tailwind editando o arquivo `tailwind.config.js`, adicionando novas cores, espaçamentos, e outras customizações.

#### 6. Formatação e Integração com o Editor

Para garantir que o Tailwind funcione bem com seu editor de código, siga os passos abaixo:

* Instale a extensão `Tailwind CSS IntelliSense` para obter auto-complete, dicas e a documentação do Tailwind direto no editor.

* Adicione as seguintes configurações ao arquivo `settings.json` do VS Code:

````
{
  "tailwindCSS.includeLanguages": {
    "javascript": "javascript",
    "javascriptreact": "javascriptreact",
    "typescript": "typescript",
    "typescriptreact": "typescriptreact"
  },
  "editor.quickSuggestions": {
    "strings": true
  }
}
````

#### 7. Build Final

Ao finalizar o desenvolvimento, utilize o comando de build do Tailwind para gerar um CSS otimizado:

````
npx tailwindcss -o build.css --minify
````

##

### Ethers.js

Este projeto utiliza a biblioteca `ethers.js` para interagir com a blockchain Ethereum. A seguir, estão os passos para instalar e configurar o `ethers.js`:

#### 1. Instalação

Execute o comando abaixo para instalar a biblioteca `ethers.js`:

````
npm install ethers
````

#### 2. Importação

No arquivo JavaScript onde você deseja utilizar o `ethers.js`, importe a biblioteca:

````
const { ethers } = require("ethers");
````

#### 3. Configuração do Provedor

Antes de realizar qualquer interação com a blockchain, configure um provedor. Um provedor é responsável por conectar-se a uma rede Ethereum.

* Usando o Infura:

````
const provider = new ethers.providers.InfuraProvider("homestead", "YOUR_INFURA_PROJECT_ID");
````

#### 4. Criando uma Carteira

Você pode criar uma nova carteira ou usar uma chave privada existente. 

* Gerando uma nova carteira:

````
const wallet = ethers.Wallet.createRandom();
console.log("Address: ", wallet.address);
console.log("Private Key: ", wallet.privateKey);
````

* Usando uma chave privada existente:

````
const wallet = new ethers.Wallet("SUA_CHAVE_PRIVADA", provider);
````

#### 5. Exemplos de Uso

* Consultar saldo de uma conta:

````
const address = "ENDEREÇO_DA_CONTA";
provider.getBalance(address).then((balance) => {
    console.log("Saldo: ", ethers.utils.formatEther(balance));
});
````

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

1 - Importação dos módulos necessários.<br>
2 - Definição do caminho e leitura do código fonte do contrato.<br>
3 - Configuração das opções de compilação.<br>
4 - Compilação do contrato utilizando o compilador Solidity (`solc`).<br>
5 - Extração do ABI e do bytecode do resultado da compilação.<br>
6 - Exportação do ABI e do bytecode para uso posterior.<br>
7 - Escrita do ABI e do bytecode em arquivos JSON.<br>

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

* `__filename` e `__dirname`: Utilizados para determinar o diretório atual do script.
* `contractPath`: Caminho absoluto para o arquivo do contrato `CrowdFunding.sol`.
* `source`: Conteúdo do arquivo do contrato lido como uma string.

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

* `input`: Objeto de configuração que especifica a linguagem, as fontes do contrato e as opções de saída.
* `sources`: Contém o nome do contrato e seu conteúdo.
* `outputSelection`: Especifica que queremos tanto o ABI quanto o bytecode do contrato compilado.

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

* `output`: Resultado da compilação do contrato, convertido de JSON para um objeto JavaScript.
* `output.errors`: Lista de erros encontrados durante a compilação, se houver. Os erros são exibidos no console.

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

* `contractName`: Nome do contrato que estamos compilando.
* `contract`: Objeto contendo os detalhes do contrato compilado.
* `abi`: Interface binária da aplicação do contrato.
* `bytecode`: Código de byte do contrato, pronto para ser implantado na blockchain.

#### 6. Exportação do ABI e do Bytecode

Exportamos o ABI e o bytecode para uso posterior:

```sh
export { abi, bytecode };
````

* Esta linha torna o ABI e o bytecode disponíveis para serem importados por outros scripts.

#### 7. Escrita do ABI e do Bytecode em Arquivos JSON

Finalmente, escrevemos o ABI e o bytecode em arquivos JSON para facilitar o acesso e a utilização:

```sh
fs.writeFileSync('SimpleStorageABI.json', JSON.stringify(abi, null, 2));
fs.writeFileSync('SimpleStorageBytecode.json', bytecode);

console.log('Compilação concluída com sucesso');
````

* `fs.writeFileSync`: Função que escreve dados em arquivos. Neste caso, estamos salvando o ABI e o bytecode em arquivos JSON.
* `JSON.stringify`: Converte o ABI para uma string JSON formatada.

#### Resumindo

O arquivo compile.js permite a compilação eficiente do contrato CrowdFunding.sol, extraindo e salvando o ABI e o bytecode necessários para a implantação do contrato na blockchain. Este processo garante que o contrato esteja pronto para ser implantado com todas as informações necessárias.

### Segundo passo: Criação do arquivo `deploy.js`

O arquivo `deploy.js` é usado para implantar o contrato inteligente `CrowdFunding.sol` na rede de teste Sepolia. Ele utiliza a biblioteca `web3.js` para interagir com a rede Ethereum e o provedor Infura para conectar-se à blockchain. O arquivo também faz uso de variáveis de ambiente para proteger informações sensíveis, como a chave privada e o endereço da conta.

#### Estrutura do Arquivo

O arquivo `deploy.js` está estruturado nos seguintes passos:

1. Importação dos módulos necessários.
2. Carregamento das variáveis de ambiente.
3. Configuração do provedor de rede e das informações da conta.
4. Estimativa de gás e preparação da transação de implantação.
5. Assinatura e envio da transação.
6. Exibição do endereço do contrato implantado.

#### Passo a Passo do Desenvolvimento

#### 1. Importação dos Módulos Necessários

Primeiramente, importamos os módulos necessários, incluindo o ABI e o bytecode gerados no arquivo `compile.js`:

```sh
import Web3 from 'web3';
import { abi, bytecode } from './compile.js';
import dotenv from 'dotenv';
````

* `Web3`: Biblioteca para interação com a blockchain Ethereum.
* `{ abi, bytecode }`: ABI e bytecode do contrato inteligente, gerados no arquivo `compile.js`.
* `dotenv`: Biblioteca para gerenciar variáveis de ambiente.

#### 2. Carregamento das Variáveis de Ambiente

As variáveis de ambiente são carregadas e verificadas para garantir que todas as informações necessárias estejam disponíveis:

```sh
dotenv.config();

if (!process.env.INFURA_PROJECT_ID || !process.env.ACCOUNT_ADDRESS || !process.env.PRIVATE_KEY) {
    console.error('Variáveis de ambiente não definidas corretamente');
    process.exit(1);
}
````

* `dotenv.config()`: Carrega as variáveis de ambiente do arquivo `.env`.
* Verificação para garantir que `INFURA_PROJECT_ID`, `ACCOUNT_ADDRESS`, e `PRIVATE_KEY` estejam definidas.

#### 3. Configuração do Provedor de Rede e Informações da Conta

Configuramos o provedor de rede usando a URL da Infura e as credenciais da conta:

```sh
const web3 = new Web3(new Web3.providers.HttpProvider(`https://sepolia.infura.io/v3/${process.env.INFURA_PROJECT_ID}`));

const account = process.env.ACCOUNT_ADDRESS;
const privateKey = process.env.PRIVATE_KEY;
````

* `Web3.providers.HttpProvider`: Configura o provedor HTTP para conexão com a rede Sepolia através do Infura.
* `account` e `privateKey`: Armazenam o endereço da conta e a chave privada, respectivamente.

#### 4. Estimativa de Gás e Preparação da Transação de Implantação

A transação de implantação é preparada com a estimativa de gás necessária:

```sh
const deploy = async () => {
    const contract = new web3.eth.Contract(abi);
    const deployOptions = {
        data: '0x' + bytecode,
        arguments: [],
    };

    const gasEstimate = await contract.deploy(deployOptions).estimateGas();

    const gasPrice = await web3.eth.getGasPrice();
````

* `contract.deploy({ data: bytecode })`: Prepara a transação de implantação com o bytecode do contrato.
* `estimateGas()`: Estima a quantidade de gás necessária para a implantação.
* `getGasPrice()`: Obtém o preço atual do gás na rede.

#### 5. Assinatura e Envio da Transação

A transação é assinada com a chave privada e enviada à rede:

```sh
    const tx = {
        from: account,
        gas: gasEstimate,
        gasPrice: gasPrice,
        data: contract.deploy(deployOptions).encodeABI(),
    };

    const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);

    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    console.log('Contract deployed at address:', receipt.contractAddress);
};
````

* `signTransaction(tx, privateKey)`: Assina a transação com a chave privada.
* `sendSignedTransaction(signedTx.rawTransaction)`: Envia a transação assinada para a rede.

#### 6. Exibição do Endereço do Contrato Implantado

Após a implantação bem-sucedida, o endereço do contrato é exibido no console:

```sh
    console.log('Contract deployed at address:', receipt.contractAddress);
};

deploy();
````

* `receipt.contractAddress`: Exibe o endereço onde o contrato foi implantado.

#### Resumindo

O arquivo `deploy.js` automatiza a implantação do contrato `CrowdFunding.sol` na rede de teste Sepolia, garantindo que todos os passos, desde a configuração do provedor até o envio da transação, sejam realizados de forma segura e eficiente.

### Terceiro passo: Utilizando Infura para Conectar ao Ethereum

Neste projeto, utilizamos o Infura como provedor de infraestrutura para conectar à rede Ethereum. Abaixo estão os passos para configurar e utilizar o Infura.

#### 1. Criar uma Conta no Infura

* Acesse [Infura](https://infura.io/).
* Crie uma conta ou faça login se já tiver uma.
* No painel de controle, crie um novo projeto.
* Copie o `PROJECT ID` do seu projeto. Você precisará dele para conectar ao Ethereum.

#### 2. Configurar Variáveis de Ambiente

Crie um arquivo .env na raiz do seu projeto (se ainda não existir) e adicione as seguintes variáveis:

````
INFURA_PROJECT_ID=your_infura_project_id
ACCOUNT_ADDRESS=your_ethereum_account_address
PRIVATE_KEY=your_private_key
````

Substitua your_infura_project_id pelo PROJECT ID copiado no passo anterior, e adicione o endereço da sua conta Ethereum e a chave privada correspondente.

#### 3. Atualizar o Código para Usar Infura

No arquivo `deploy.js`, a conexão com a rede Sepolia é estabelecida da seguinte forma:

````
import Web3 from 'web3';
import dotenv from 'dotenv';

dotenv.config();

const web3 = new Web3(new Web3.providers.HttpProvider(`https://sepolia.infura.io/v3/${process.env.INFURA_PROJECT_ID}`));
````

Aqui, estamos utilizando o `INFURA_PROJECT_ID` definido no arquivo `.env` para conectar à rede Sepolia através do Infura.

#### 4. Deploy do Contrato Inteligente

Agora que a conexão está configurada, você pode seguir com o deploy do seu contrato inteligente, utilizando o script `deploy.js` conforme mostrado abaixo:

````
node deploy.js
````

Este comando irá implantar o contrato na rede Ethereum através da infraestrutura da Infura.

## Contribuindo

Seja bem-vindo a contribuir para o projeto. Por favor, siga as diretrizes de contribuição.

## Licença

Este projeto é licenciado sob a MIT License.

# Backlog da Documentação

11 - A importância do toLowerCase na hora de comparar endereços. <br />
