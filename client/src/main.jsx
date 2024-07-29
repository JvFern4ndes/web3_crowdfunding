import process from 'process';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

import App from './App';
import './output.css';

if (typeof window !== 'undefined') {
    window.process = process;
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ThirdwebProvider desiredChaindId={ChainId.Goerli}>
        <Router>
            <App />
        </Router>
    </ThirdwebProvider>,
);
