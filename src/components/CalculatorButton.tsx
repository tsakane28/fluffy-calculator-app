
import React from 'react';
import { cn } from '@/lib/utils';

type CalculatorButtonProps = {
  value: string;
  type?: 'number' | 'operation' | 'action' | 'equals';
  onClick: (value: string) => void;
  className?: string;
  double?: boolean;
};

const CalculatorButton = ({ 
  value, 
  type = 'number', 
  onClick, 
  className,
  double = false
}: CalculatorButtonProps) => {
  const handleClick = () => {
    onClick(value);
  };

  const typeStyles = {
    number: 'bg-calculator-button-number text-gray-800',
    operation: 'bg-calculator-button-operation text-gray-700',
    action: 'bg-calculator-button-action text-gray-700',
    equals: 'bg-calculator-button-equals text-white'
  };

  return (
    <button
      className={cn(
        'calculator-button h-14 shadow-button',
        typeStyles[type],
        double ? 'col-span-2' : '',
        className
      )}
      onClick={handleClick}
    >
      {value}
    </button>
  );
};

export default CalculatorButton;
