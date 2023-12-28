import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Page404 from './Page404';

describe('Renders Page404 correctly', () => {
  it('Should render not-found-page with 404 text', async () => {
    render(
      <BrowserRouter>
        <Page404 />
      </BrowserRouter>
    );
    const h1 = await screen.getByText(/404/i);
    expect(h1).toBeDefined();
  });
});
