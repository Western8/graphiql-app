import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
// import { describe, it, vi, expect } from 'vitest';
// import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Playground, { prettify } from './Playground';
import { BrowserRouter } from 'react-router-dom';
import { mockQuery, mockQueryPrettified } from '../../test/mocks';

describe('Renders Playground correctly', () => {
  it('Should render header with h2 Playground', async () => {
    render(
      <BrowserRouter>
        <Playground />
      </BrowserRouter>
    );
    const h2s = await screen.getAllByRole('heading', { level: 2 });
    const h2 = h2s.find((item) => item.textContent === 'Playground');
    expect(h2).toBeDefined();
  });

  it('Should prettified text not equal original text', async () => {
    const strPrettified = prettify(mockQuery);
    expect(strPrettified).not.toEqual(mockQuery);
  });

  it('Should prettify text correctly', async () => {
    const strPrettified = prettify(mockQuery);
    expect(strPrettified).toEqual(mockQueryPrettified);
  });

  it('Should add header on click button Add (total 3 headers)', async () => {
    render(
      <BrowserRouter>
        <Playground />
      </BrowserRouter>
    );
    const btnAdd = await screen.getByRole('button', { name: 'Add' });
    fireEvent.click(btnAdd);
    fireEvent.click(btnAdd);
    const headers = await screen.findAllByPlaceholderText('header-key');
    expect(headers).toHaveLength(3);
  });
  /*
    it('Should show doc section on click doc', async () => {
      render(
        <BrowserRouter>
          <Playground />
        </BrowserRouter>
      );
      const btnDoc = await screen.getByRole('button', { name: 'Doc'});
      fireEvent.click(btnDoc);
      await waitFor(async () => {
        const divDoc = screen.getByTestId('doc-test');
        //expect(divDoc).toBeDefined();
         expect(divDoc.getAttribute('class')).toMatch('hidden');
      })
    });
  */
});
