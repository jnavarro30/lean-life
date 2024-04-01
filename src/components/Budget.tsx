import React, { useState } from 'react';
import Footer from './Footer';
import BudgetGrid from './BudgetGrid';
import MyInventoryGrid from './MyInventory';

function Budget(): JSX.Element {
  const [showBudget, setShowBudget] = useState(true); // State to toggle BudgetGrid visibility
  const [showMyInventory, setShowMyInventory] = useState(false); // State to toggle MyInventoryGrid visibility

  const handleToggleBudget = () => {
    setShowBudget(true);
    setShowMyInventory(false);
  };

  const handleToggleMyInventory = () => {
    setShowBudget(false);
    setShowMyInventory(true);
  };

  return (
    <div className="flex justify-center flex-col min-h-screen">
      <header className="py-4">
        <h1 className="text-3xl font-bold underline">MONTHLY</h1>
      </header>
      <div className="flex justify-center w-full flex-grow">
        {showBudget && <BudgetGrid />}
        {showMyInventory && <MyInventoryGrid />}
      </div>
      <Footer 
        onBudgetClick={handleToggleBudget} 
        onMyInventoryClick={handleToggleMyInventory} 
      />
    </div>
  );
}

export default Budget;



