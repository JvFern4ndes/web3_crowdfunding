import React, { useContext, createContext, useEffect, useState } from 'react';
import Web3 from 'web3';
import CrowdFundingABI from '../../../web3/contracts/CrowdFundingABI.js';

import connectWallet from '../utils/index.js'; // Importe a função connectWallet

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

                // Solicitar acesso à conta
                const accounts = await web3Instance.eth.requestAccounts();
                setAddress(accounts[0]);

                // Criar uma instância do contrato
                const contractAddress =
                    '0x55fb15f589e581329650af0b6bf2c9ded71f5352';
                const contractInstance = new web3Instance.eth.Contract(
                    CrowdFundingABI,
                    contractAddress,
                );
                setContract(contractInstance);
            } else {
                console.error(
                    'Por favor, instale uma carteira Ethereum como MetaMask.',
                );
            }
        };

        initWeb3();
    }, []);

    const publishCampaign = async (form) => {
        try {
            const deadlineTimestamp = new Date(form.deadline).getTime();
            if (isNaN(deadlineTimestamp)) {
                console.error('A data de prazo fornecida é inválida.');
                return;
            }

            const targetValue = parseInt(form.target);
            if (isNaN(targetValue)) {
                console.error('O valor do alvo fornecido é inválido.');
                return;
            }

            const data = await contract.methods
                .createCampaign(
                    address,
                    form.title,
                    form.description,
                    targetValue,
                    deadlineTimestamp,
                    form.image,
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
                web3,
                address,
                contract,
                connect: connectWallet(),
                createCampaign: publishCampaign,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
