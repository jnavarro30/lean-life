import React from 'react';
import Footer from './Footer';
import BudgetGrid from './BudgetGrid';

function Budget(): JSX.Element {
  return (
    <div className="flex justify-center flex-col min-h-screen">
      <header className="py-4">
        <h1 className="text-3xl font-bold underline">Lean Life</h1>
      </header>
      <div className="flex justify-center w-full flex-grow">
        <BudgetGrid />
      </div>
      <Footer />
    </div>
  );
}

export default Budget;



