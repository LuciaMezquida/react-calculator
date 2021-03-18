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
    const navElement = screen.getByRole('navigation')
    expect(navElement).toBeInTheDocument();
  });
  it('show a list', ()=>{
    render(<Footer />);
    const listElement = screen.getByRole('list')
    expect(listElement).toBeInTheDocument();
  })
})