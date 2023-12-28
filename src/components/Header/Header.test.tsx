import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';

describe('Renders Header correctly', () => {
  it('Should render header with h2 GraphiQL', async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const h2 = await screen.getByRole('heading', { level: 2 });
    expect(h2.textContent).toEqual('GraphiQL');
  });

  it('Should render header with links', async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const links = screen.getAllByRole('link');
    expect(links[0]).toBeDefined();
  });

  it('Should render header with link Sign in', async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const el = await screen.getByText(/Sign in/i);
    expect(el).toBeDefined();
  });
});
