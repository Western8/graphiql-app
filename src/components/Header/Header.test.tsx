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
    expect(h2.textContent).toEqual('GraphiQL1');
  });
});
