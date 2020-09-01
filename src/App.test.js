import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('the random quote app', () => {
    it('renders without crashing', () => {
        render(<App />);
    });

    it("renders a quote's content", async () => {
        render(<App />);
        expect(await screen.findByText('Like white on rice.')).toBeInTheDocument();
    });

    it("renders a quote's author", async () => {
        render(<App />);
        expect(await screen.findByText('Sam Watson')).toBeInTheDocument();
    });
});
