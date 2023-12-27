import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Welcome from './Welcome';
import { BrowserRouter } from 'react-router-dom';

describe('Renders Welcome page correctly', () => {
  it('Should render welcome page with h1 Welcome to...', async () => {
    render(
      <BrowserRouter>
        <Welcome />
      </BrowserRouter>
    );
    const h1 = await screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toMatch('Welcome to');
  });

  it('Should render welcome page with 3 buttons', async () => {
    render(
      <BrowserRouter>
        <Welcome />
      </BrowserRouter>
    );
    const buttons = await screen.getAllByRole('button');
    expect(buttons).toHaveLength(3);
  });
});
