import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Renders App correctly', () => {
  it('Should run tests', async () => {
    expect(true).toBeTruthy();
  });

  it('Should render App React with welcome title', async () => {
    render(<App />);
    const h1 = await screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toMatch('Welcome to');
  });
});
