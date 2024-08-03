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
                // Solicitar acesso à conta
                await window.ethereum.request({
                    method: 'eth_requestAccounts',
                });

                // Criar uma nova instância do Web3
                const web3Instance = new Web3(window.ethereum);
                setWeb3(web3Instance);
            } else {
                console.error(
                    'Por favor, instale uma carteira Ethereum como MetaMask.',
                );
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
