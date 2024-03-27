import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

function BudgetGrid(): JSX.Element {
    const [rowCount, setRowCount] = useState(6); // Initial number of rows
  
    const addRow = () => {
      setRowCount(rowCount + 2);
    };
  
    const removeRow = () => {
      if (rowCount > 1) {
        setRowCount(rowCount - 2);
      }
    };
  
    return (
      <div className="grid">
        {[...Array(rowCount)].map((_, index) => (
          <div key={index} className="grid-item"></div>
        ))}
        <div>
          <button onClick={addRow}><FaPlus /></button>
          <button onClick={removeRow}><FaMinus /></button>
        </div>
      </div>
    );
  }

  export default BudgetGrid;