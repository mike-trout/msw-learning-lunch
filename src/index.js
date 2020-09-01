import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { worker } from './msw/worker';

function renderApp() {
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

// This doesn't work
if (process.env.REACT_APP_USE_MOCK === 'true') {
    worker.start();
}
renderApp();

// This works
// if (process.env.REACT_APP_USE_MOCK === 'true') {
//     worker.start().then(() => renderApp());
// } else {
//     renderApp();
// }
