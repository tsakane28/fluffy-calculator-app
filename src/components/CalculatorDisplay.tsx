
import React from 'react';
import { cn } from '@/lib/utils';

type CalculatorDisplayProps = {
  value: string;
  expression: string;
  className?: string;
};

const CalculatorDisplay = ({ value, expression, className }: CalculatorDisplayProps) => {
  return (
    <div className={cn('bg-calculator-display p-4 rounded-2xl shadow-display mb-3', className)}>
      <div className="flex flex-col items-end">
        <div className="text-gray-500 text-sm h-5 overflow-hidden">{expression}</div>
        <div className="text-3xl sm:text-4xl font-light text-gray-800 transition-all duration-200 animate-fade-in w-full text-right overflow-hidden text-ellipsis">
          {value}
        </div>
      </div>
    </div>
  );
};

export default CalculatorDisplay;
