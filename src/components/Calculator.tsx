
import React, { useState } from 'react';
import CalculatorButton from './CalculatorButton';
import CalculatorDisplay from './CalculatorDisplay';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [resetDisplay, setResetDisplay] = useState(false);

  const handleNumberClick = (value: string) => {
    if (resetDisplay) {
      setDisplay(value);
      setResetDisplay(false);
    } else {
      setDisplay(display === '0' ? value : display + value);
    }
  };

  const handleDecimalClick = () => {
    if (resetDisplay) {
      setDisplay('0.');
      setResetDisplay(false);
      return;
    }
    
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const handleOperationClick = (op: string) => {
    const currentValue = parseFloat(display);
    
    if (previousValue === null) {
      setPreviousValue(currentValue);
      setExpression(`${currentValue} ${op}`);
    } else if (operation) {
      const result = calculate(previousValue, currentValue, operation);
      setPreviousValue(result);
      setExpression(`${result} ${op}`);
      setDisplay(result.toString());
    }
    
    setOperation(op);
    setResetDisplay(true);
  };

  const handleEqualsClick = () => {
    if (previousValue === null || operation === null) return;
    
    const currentValue = parseFloat(display);
    const result = calculate(previousValue, currentValue, operation);
    
    setExpression(`${previousValue} ${operation} ${currentValue} =`);
    setDisplay(result.toString());
    setPreviousValue(null);
    setOperation(null);
    setResetDisplay(true);
  };

  const handleClear = () => {
    setDisplay('0');
    setExpression('');
    setPreviousValue(null);
    setOperation(null);
    setResetDisplay(false);
  };

  const handleClearEntry = () => {
    setDisplay('0');
  };

  const handleToggleSign = () => {
    setDisplay(display.startsWith('-') ? display.slice(1) : '-' + display);
  };

  const handlePercentage = () => {
    const currentValue = parseFloat(display);
    const result = currentValue / 100;
    setDisplay(result.toString());
  };

  const calculate = (a: number, b: number, operation: string): number => {
    switch (operation) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '×':
        return a * b;
      case '÷':
        return b !== 0 ? a / b : NaN;
      default:
        return b;
    }
  };

  return (
    <div className="bg-calculator-bg p-5 rounded-3xl shadow-calculator w-full max-w-xs mx-auto animate-fade-in">
      <CalculatorDisplay value={display} expression={expression} />
      
      <div className="grid grid-cols-4 gap-3">
        <CalculatorButton value="C" type="action" onClick={handleClear} />
        <CalculatorButton value="CE" type="action" onClick={handleClearEntry} />
        <CalculatorButton value="%" type="action" onClick={handlePercentage} />
        <CalculatorButton value="÷" type="operation" onClick={handleOperationClick} />
        
        <CalculatorButton value="7" onClick={handleNumberClick} />
        <CalculatorButton value="8" onClick={handleNumberClick} />
        <CalculatorButton value="9" onClick={handleNumberClick} />
        <CalculatorButton value="×" type="operation" onClick={handleOperationClick} />
        
        <CalculatorButton value="4" onClick={handleNumberClick} />
        <CalculatorButton value="5" onClick={handleNumberClick} />
        <CalculatorButton value="6" onClick={handleNumberClick} />
        <CalculatorButton value="-" type="operation" onClick={handleOperationClick} />
        
        <CalculatorButton value="1" onClick={handleNumberClick} />
        <CalculatorButton value="2" onClick={handleNumberClick} />
        <CalculatorButton value="3" onClick={handleNumberClick} />
        <CalculatorButton value="+" type="operation" onClick={handleOperationClick} />
        
        <CalculatorButton value="+/-" onClick={handleToggleSign} />
        <CalculatorButton value="0" onClick={handleNumberClick} />
        <CalculatorButton value="." onClick={handleDecimalClick} />
        <CalculatorButton value="=" type="equals" onClick={handleEqualsClick} />
      </div>
    </div>
  );
};

export default Calculator;
