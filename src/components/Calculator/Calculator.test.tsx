import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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
  it("renders an input", () => {
    render(<Calculator />);
    expect(screen.getByPlaceholderText("calculate")).toBeInTheDocument();
  });
  it("renders an input disabled", () => {
    render(<Calculator />);
    expect(screen.getByPlaceholderText("calculate")).toBeDisabled();
  });
  it("displays users inputs", async () => {
    render(<Calculator />);
    const one = screen.getByText("1");
    const two = screen.getByText("2");
    const plus = screen.getByText("+");
    fireEvent.click(one);
    fireEvent.click(plus);
    fireEvent.click(two);

    const result = await screen.findByPlaceholderText("calculate");
    // @ts-ignore
    expect(result.value).toBe("1+2");
  });

  it("displays multiple users inputs", async () => {
    render(<Calculator />);
    const one = screen.getByText("1");
    const two = screen.getByText("2");
    const three = screen.getByText("3");
    const five = screen.getByText("5");
    const divide = screen.getByText("÷");
    const mul = screen.getByText("×");
    const minus = screen.getByText("-");
    fireEvent.click(three);
    fireEvent.click(mul);
    fireEvent.click(two);
    fireEvent.click(minus);
    fireEvent.click(one);
    fireEvent.click(divide);
    fireEvent.click(five);

    const result = await screen.findByPlaceholderText("calculate");
    // @ts-ignore
    expect(result.value).toBe("3×2-1÷5");
  });
})