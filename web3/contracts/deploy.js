import Web3 from 'web3';
import { abi, bytecode } from './compile.js';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.INFURA_PROJECT_ID || !process.env.ACCOUNT_ADDRESS || !process.env.PRIVATE_KEY) {
    console.error('Variáveis de ambiente não definidas corretamente');
    process.exit(1);
}

const web3 = new Web3(new Web3.providers.HttpProvider(`https://sepolia.infura.io/v3/${process.env.INFURA_PROJECT_ID}`));

const account = process.env.ACCOUNT_ADDRESS;
const privateKey = process.env.PRIVATE_KEY;

const deploy = async () => {
    const contract = new web3.eth.Contract(abi);
    const deployOptions = {
        data: '0x' + bytecode,
        arguments: [],
    };

    const gasEstimate = await contract.deploy(deployOptions).estimateGas();

    const gasPrice = await web3.eth.getGasPrice();

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

deploy();