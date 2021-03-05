import React, { useState } from 'react'

const rows = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]];
const operators = ['+', '-', '×', '÷'];

const Calculator = () => {
  const renderRows = rows.map(row => {
    return(
      <div key={row.toString()} role='row'>
        {row.map(number => (
        <button key={number}>{number.toString()}</button>

        ))}
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