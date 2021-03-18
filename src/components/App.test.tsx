import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders calculator', () => {
  render(<App />);
  const calculatorElement = screen.getByText(/calculator/i);
  expect(calculatorElement).toBeInTheDocument();
});
test('renders footer', () => {
  render(<App />);
  const footerElement = screen.getByRole('footer');
  expect(footerElement).toBeInTheDocument();
});

