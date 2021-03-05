import React, { useState } from 'react'


const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const Calculator = () => {
  const renderNumbers = numbers.map(number => (
    <button key={number}>{number.toString()}</button>
  ))
  return(
    <>
    <h1>Calculator</h1>
    <div className="calculator">
      {renderNumbers}
    </div>
    </>
    
  )
}

export default Calculator