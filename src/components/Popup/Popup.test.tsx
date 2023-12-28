import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Popup from './Popup';

describe('Renders Popup correctly', () => {
  it('Should render popup with test message', async () => {
    render(<Popup message="test" />);
    const message = screen.getByText('test');
    expect(message).toBeDefined();
  });
});
