import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
// import { describe, it, vi, expect } from 'vitest';
// import { fireEvent, render, screen, waitFor } from '@testing-library/react';
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
  /*
  it('Should call onclick function for change locale', async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    // const onClickMock = vi.fn();
    const localeEn = await screen.getByText(/En/i);
    fireEvent.click(localeEn);
    await waitFor(async () => {
      const localeRu = screen.getByText(/Ru/i);
      // const localeRu = screen.getByText(/Главная/i);
      // const localeRu = await screen.findByText(/Ru/i);
      console.log('333333333 localeRu ', localeRu);
      expect(localeRu).toBeDefined();
    })
    //expect(true).toBeDefined();
  });
*/
});
