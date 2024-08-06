import process from 'process';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { StateContextProvider } from './context';
import App from './App';
import './output.css';

if (typeof window !== 'undefined') {
    window.process = process;
}

const AppContainer = () => {
    return (
        <StateContextProvider>
            <App />
        </StateContextProvider>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Router>
        <AppContainer />
    </Router>,
);
