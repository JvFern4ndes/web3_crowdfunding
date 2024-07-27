import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { chainId, ThirdWebProvider } from '@thirdweb-dev/react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ThirdWebProvider desiredChaindId={chainId.Sepolia}>
        <Router>
            <App />
        </Router>
    </ThirdWebProvider>,
);
