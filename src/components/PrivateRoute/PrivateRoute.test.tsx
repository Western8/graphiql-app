import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { IPrivateRouteProps } from './../utils/types';
import { auth } from './../utils/firebase';
import PrivateRoute from './PrivateRoute';

describe('Renders PrivateRoute correctly', () => {
  it('Should render PrivateRoute with test block', async () => {
    const defaultPrivateRouteProps: Omit<IPrivateRouteProps, 'outlet'> = {
      isAuth: Boolean(auth),
      authPath: '/signin',
    };
    render(<PrivateRoute {...defaultPrivateRouteProps} outlet={<div>Test</div>} />);
    const text = screen.getByText('Test');
    expect(text).toBeDefined();
  });
});
