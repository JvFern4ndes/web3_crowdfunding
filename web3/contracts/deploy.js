require('dotenv').config();

const { abi, bytecode } = require('./compile');

const Web3 = require('web3');
const web3 = new Web3('https://')

const account = process.env.ACCOUNT_ADDRESS;
const privateKey = process.env.PRIVATE_KEY;