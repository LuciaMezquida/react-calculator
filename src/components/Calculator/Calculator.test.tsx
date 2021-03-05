import React from 'react';
import { render, screen } from '@testing-library/react';
import Calculator from './Calculator';

describe('<Calculator />', () => {
  it('shows numbers', ()=> {
    render(<Calculator />);
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    numbers.forEach(number => {
      expect(screen.getByText(number.toString())).toBeInTheDocument();
    })
  })
  it('show 4 rows', ()=>{
    render(<Calculator />);
    const rows = screen.getAllByRole('row')
    expect(rows).toHaveLength(4)
  })
})