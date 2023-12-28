import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Sign from './Sign';
import { BrowserRouter } from 'react-router-dom';

describe('Renders Sign page correctly', () => {
  it('Should render page with h1 Sign up', async () => {
    render(
      <BrowserRouter>
        <Sign isSignUp={true} />
      </BrowserRouter>
    );
    const h1 = await screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toEqual('Sign up');
  });

  it('Should render page with password input', async () => {
    render(
      <BrowserRouter>
        <Sign isSignUp={false} />
      </BrowserRouter>
    );
    const password = await screen.getByLabelText('Password :');
    expect(password).toBeDefined();
  });
});
