import fetch from 'node-fetch';

export async function getQuote() {
    const response = await fetch('https://quotable.io/random');
    return await response.json();
}
