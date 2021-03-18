import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders calculator', () => {
  render(<App />);
  const calculatorElement = screen.getByRole('main');
  expect(calculatorElement).toBeInTheDocument();
});
test('renders footer', () => {
  render(<App />);
  const footerElement = screen.getByRole('navigation');
  expect(footerElement).toBeInTheDocument();
});

