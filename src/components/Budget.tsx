import React, { useState } from 'react';
import '../styles/budget.css';
import Footer from './Footer';
import BudgetGrid from './BudgetGrid';

function Budget(): JSX.Element {
  return (
    <div className="container">
      <header>
        <h1 className="text-3xl font-bold underline">Lean Life</h1>
      </header>
      <BudgetGrid />
      <Footer />
    </div>
  );
}

export default Budget;


