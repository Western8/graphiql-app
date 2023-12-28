import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';

describe('Renders ErrorBoundary correctly', () => {
  it('Should render ErrorBoundary with child', async () => {
    render(
      <ErrorBoundary>
        <h1>Test</h1>
      </ErrorBoundary>
    );
    const h1 = await screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toMatch('Test');
  });
});
