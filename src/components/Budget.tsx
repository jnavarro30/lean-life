import React, { useState } from 'react';
import Footer from './Footer';
import BudgetGrid from './BudgetGrid';

function Budget(): JSX.Element {
  return (
    <div className="container flex flex-col items-center">
      <header className="py-4">
        <h1 className="text-3xl font-bold underline">Lean Life</h1>
      </header>
      <BudgetGrid />
      <Footer />
    </div>
  );
}

export default Budget;


