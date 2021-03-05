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
  it('shows operators', ()=> {
    render(<Calculator />);
    const operators = ['+', '-', '×', '÷'];
    operators.forEach(op => {
      expect(screen.getByText(op.toString())).toBeInTheDocument();
    })
  })
  it('render equal sign', ()=> {
    render(<Calculator />);
    const equal = '=';
    expect(screen.getByText(equal)).toBeInTheDocument()
  })
  it('render clear sign', ()=> {
    render(<Calculator />);
    const clear = 'C';
    expect(screen.getByText(clear)).toBeInTheDocument()
  })
})