import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('<Footer />', () => {
  it('render small', () => {
    render(<Footer />);
    const smallElement = screen.getByText(/mezquida/i)
    expect(smallElement).toBeInTheDocument();
  });
  it('renders nav', () => {
    render(<Footer />);
    const navElement = screen.getByRole('nav')
    expect(navElement).toBeInTheDocument();
  });
})