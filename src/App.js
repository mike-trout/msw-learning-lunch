import React, { useEffect, useRef, useState } from 'react';
import { getQuote } from './services/quote';
import logo from './logo.svg';
import './App.css';

function App() {
    const mounted = useRef(true);

    const [quote, setQuote] = useState({
        author: '',
        content: '',
    });

    useEffect(() => {
        getQuote().then((q) => {
            if (mounted.current) setQuote(q);
        });
    }, []);

    useEffect(() => {
        return function cleanUp() {
            mounted.current = false;
        };
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <q id="quote-content">{quote.content}</q>&mdash;
                <i id="quote-author">{quote.author}</i>
            </header>
        </div>
    );
}

export default App;
