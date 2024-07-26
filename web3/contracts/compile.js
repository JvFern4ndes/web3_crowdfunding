import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import solc from 'solc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contractPath = path.resolve(__dirname, 'CrowdFunding.sol');
const source = fs.readFileSync(contractPath, 'utf8');

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

const output = JSON.parse(solc.compile(JSON.stringify(input)));

if (output.errors) {
    output.errors.forEach(err => {
        console.error(err.formattedMessage);
    });
}

const contractName = 'CrowdFunding';
const contract = output.contracts['CrowdFunding.sol'][contractName];

if (!contract) {
    throw new Error(`Contrato ${contractName} não encontrado na saída da compilação`);
}

const abi = contract.abi;
const bytecode = contract.evm.bytecode.object;

export { abi, bytecode };

fs.writeFileSync('SimpleStorageABI.json', JSON.stringify(abi, null, 2));
fs.writeFileSync('SimpleStorageBytecode.json', bytecode);

console.log('Compilação concluída com sucesso');