import { useState } from 'react'
import { evaluate } from "mathjs";
import './Calculator.scss'

const rows: number[][] = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]];
const operators: string[] = ['+', '-', '×', '÷'];
const equal: string = '=';
const clear: string = 'C';

const getLastChar = (str: string) => (str.length ? str[str.length - 1] : "");
const isNumber = (str: string) => !isNaN(Number(str));

export const calculateExpression = (expression: string) => {
  if (!expression || expression.length === 0) {
    return;
  }
  const mulRegex: RegExp = /×/g;
  const divRegex: RegExp = /÷/g;
  const divideByZero: RegExp = /\/0/g;
  let toEvaluate = expression.replace(mulRegex, "*").replace(divRegex, "/");
  
  try {
    if (divideByZero.test(toEvaluate)) {
      throw new Error("Can not divide by 0!");
    }
    const lastCharaterIsNumber = isNumber(getLastChar(toEvaluate));
    if (!lastCharaterIsNumber) {
      toEvaluate = toEvaluate.slice(0, -1);
    }
    
    const result = evaluate(toEvaluate);
    return result;

    } catch (err) {
    console.error(err);
    return 0;
    }
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
        {index === 3 && <button className="button" onClick={clearValue}>{clear}</button>}
        {row.map((n) => (
        <button className="button" onClick={() => setValue(value.toString().concat(n.toString()))} key={n}>{n}</button>
        ))}
        {index === 3 && <button className="button" onClick={calculate}>{equal}</button>}
      </div>
    )
  }
  )
  const renderOperators = operators.map(op => (
    <button className="button orange" key={op} onClick={() => setValue(value.toString().concat(op))} >{op.toString()}</button>
  ))
  console.log(value);
  return(
    
    <>
      <main className='main'>
        <div className="main__container">
          <input className="main__results" type="text" defaultValue={value} placeholder="0" disabled/>
          <div className="main__calculator" role='grid'>
            <div className="main__calculator--numbers">
              {renderRows}
            </div>
            <div className="main__calculator--operators">
              {renderOperators}
            </div>
          </div>
        </div>
      </main>
    </>
    
  )
}

export default Calculator