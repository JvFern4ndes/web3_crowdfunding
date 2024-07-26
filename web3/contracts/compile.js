const fs = require('fs');
const path = require('path');
const solc = require('solc');

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

const contract = output.contracts['CrowdFunding.sol'].SimpleStorage;
const abi = contract.abi;
const bytecode = contract.evm.bytecode.object;

module.exports = { abi, bytecode };