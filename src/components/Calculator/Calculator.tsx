import React, { useState } from 'react'

const rows = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]];
const operators = ['+', '-', '×', '÷'];
const equal: string = '=';
const clear: string = 'C';
const calculateExpression = (expression: string) => {
  const mulRegex = /×/g;
  const divRegex = /÷/g;
  const toEvaluate = expression.replace(mulRegex, "*").replace(divRegex, "/");
  // todo - refactor eval later
  const result = eval(toEvaluate);
  return result;
};

const Calculator = () => {
  const [value, setValue] = useState('')
  const calculate = () => {
    const results = calculateExpression(value);
    setValue(results);
  };
  const clearValue = () => {setValue('')}
  const renderRows = rows.map((row, index) => {
    return(
      <div key={index} role='row'>
        {index === 3 && <button onClick={clearValue}>{clear}</button>}
        {row.map(n => (
        <button onClick={() => setValue(value.concat(n.toString()))} key={n}>{n}</button>
        ))}
        {index === 3 && <button onClick={calculate}>{equal}</button>}
      </div>
    )
  }
  )
  const renderOperators = operators.map(op => (
    <button key={op} onClick={() => setValue(value.concat(op))} >{op.toString()}</button>
  ))
  return(
    <>
    <h1>Calculator</h1>
    <input type="text" defaultValue={value} placeholder="calculate" disabled/>
    <div className="calculator" role='grid'>
      {renderRows}
      {renderOperators}
    </div>
    </>
    
  )
}

export default Calculator