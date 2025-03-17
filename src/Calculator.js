import { useState } from "react";
import "./style.css"

function Calculator(){
  
      const[result, setResult]=useState('');

      const[calculation, setCalculation]=useState('');

      const handleButtonClick=(buttonValue)=>{
        if (buttonValue=== '='){
            calculateResult();
        }
        else if (buttonValue=== 'C'){
            clearCalculation();
        }else{
            updateCalculation(buttonValue);
        }
      }
  const updateCalculation =(buttonValue)=>{
    setCalculation(calculation + buttonValue);
  }
  const clearCalculation=()=>{
    setCalculation('');
    setResult('');
    };

    const calculateResult =()=>{
        try{
            const resultValue = eval (calculation);
            setResult(resultValue.toString());
        }
catch (error){
  setResult('Error');
}
    };
    return (
      <div className = "calculator">
        <div className="screen">
          <p>{calculation}</p>
          <p>{result}</p>
        </div>
<div className="button-grid">
        <div className="buttons">
          <button className="button" onClick={()=>handleButtonClick('7')}>7</button>
        </div>

        <div className="buttons">
          <button className="button" onClick={()=>handleButtonClick('8')}>8</button>
        </div>

        <div className="buttons">
          <button className="button" onClick={()=>handleButtonClick('9')}>9</button>
        </div>

        <div className="buttons">
          <button className="button" onClick={()=>handleButtonClick('/')}>/</button>
        </div>

        <div className="buttons">
          <button className="button" onClick={()=>handleButtonClick('4')}>4</button>
        </div>

        <div className="buttons">
          <button className="button" onClick={()=>handleButtonClick('6')}>6</button>
        </div>

        <div className="buttons">
          <button className="button" onClick={()=>handleButtonClick('*')}>*</button>
        </div>

        <div className="buttons">
          <button className="button" onClick={()=>handleButtonClick('1')}>1</button>
        </div>

        <div className="buttons">
          <button className="button" onClick={()=>handleButtonClick('2')}>2</button>
        </div>

        <div className="buttons">
          <button className="button" onClick={()=>handleButtonClick('3')}>3</button>
        </div>

        <div className="buttons">
          <button className="button" onClick={()=>handleButtonClick('-')}>-</button>
        </div>

        <div className="buttons">
          <button className="button" onClick={()=>handleButtonClick('0')}>0</button>
        </div>

        <div className="buttons">
          <button className="button" onClick={()=>handleButtonClick('.')}>.</button>
        </div>

        <div className="buttons">
          <button className="button" onClick={()=>handleButtonClick('C')}>C</button>
        </div>
     
        <div className="buttons">
          <button className="button" onClick={()=>handleButtonClick('=')}>=</button>
        </div>

        <div className="buttons">
          <button className="button" onClick={()=>handleButtonClick('+')}>+</button>
        </div>

        </div>
      </div>
    );
  }

      
export default Calculator;
