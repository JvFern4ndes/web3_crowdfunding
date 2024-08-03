import process from 'process';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

import { StateContextProvider } from './context';
import App from './App';
import './output.css';

if (typeof window !== 'undefined') {
    window.process = process;
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ThirdwebProvider
        desiredChainId={ChainId.Goerli}
        clientId="3219e2c970056fd026c254ac7fcc6c11"
    >
        <Router>
            <StateContextProvider>
                <App />
            </StateContextProvider>
        </Router>
    </ThirdwebProvider>,
);
