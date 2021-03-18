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
  it('show 3 list', ()=>{
    render(<Footer />);
    const listElement = screen.getAllByRole('list')
    expect(listElement).toHaveLength(3)
  })
})