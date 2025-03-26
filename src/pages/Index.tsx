
import React from 'react';
import Calculator from '@/components/Calculator';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-secondary/50 px-4 py-10">
      <div className="max-w-md w-full mx-auto">
        <div className="text-center mb-8 animate-slide-up">
          <h1 className="text-3xl font-light tracking-tight text-gray-800">Minimal Calculator</h1>
          <p className="text-gray-500 text-sm mt-1">Clean. Simple. Elegant.</p>
        </div>
        
        <Calculator />
        
        <div className="text-center mt-8 text-xs text-gray-400 animate-fade-in">
          <p>Designed with simplicity in mind</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
