// networkInfo.js

import Web3 from 'web3';
import dotenv from 'dotenv';

dotenv.config();

// Use a rede onde o contrato foi implantado
const web3 = new Web3(new Web3.providers.HttpProvider(`https://sepolia.infura.io/v3/${process.env.INFURA_PROJECT_ID}`));

// Endereço do contrato que você deseja verificar
const contractAddress = `${process.env.CONTRACT_ADDRESS}`;

async function getNetworkInfo() {
  try {
    const networkId = await web3.eth.net.getId();
    const networkName = getNetworkName(networkId);
    return { networkId, networkName };
  } catch (err) {
    console.error('Error:', err);
    return null;
  }
}

function getNetworkName(networkId) {
  switch (networkId) {
    case 1:
      return 'Mainnet';
    case 3:
      return 'Ropsten';
    case 4:
      return 'Rinkeby';
    case 5:
      return 'Goerli';
    case 42:
      return 'Kovan';
    case 11155111n:
      return 'Sepolia';
    default:
      return 'Unknown';
  }
}

async function verifyContract(address) {
  try {
    const code = await web3.eth.getCode(address);
    return code !== '0x';
  } catch (err) {
    console.error('Error:', err);
    return false;
  }
}

async function main() {
  const networkInfo = await getNetworkInfo();
  console.log('Network Info:', networkInfo);

  const contractExists = await verifyContract(contractAddress);
  if (contractExists) {
    console.log(`O contrato ${contractAddress} existe na rede ${networkInfo.networkName}`);
  } else {
    console.log(`O contrato ${contractAddress} não existe na rede ${networkInfo.networkName}`);
  }

  // Outras operações, se necessário...
}

main();
