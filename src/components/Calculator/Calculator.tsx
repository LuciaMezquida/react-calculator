import React, { useState } from 'react'

const rows = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]];
const operators = ['+', '-', '×', '÷'];
const equal = '=';
const clear = 'C';

const Calculator = () => {
  const renderRows = rows.map((row, index) => {
    return(
      <div key={index} role='row'>
        {index === 3 && <button>{clear}</button>}
        {row.map(number => (
        <button key={number}>{number}</button>
        ))}
        {index === 3 && <button>{equal}</button>}
      </div>
    )
  }
  )
  const renderOperators = operators.map(op => (
    <button key={op}>{op}</button>
  ))
  return(
    <>
    <h1>Calculator</h1>
    <div className="calculator" role='grid'>
      {renderRows}
      {renderOperators}
    </div>
    </>
    
  )
}

export default Calculator