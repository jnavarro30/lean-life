import React, { useState, useRef, useEffect } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

interface RowData {
    label: string;
    item: number;
}

function BudgetGrid(): JSX.Element {
    const [rows, setRows] = useState<RowData[]>([
        { label: 'Salary', item: 4000 },
        { label: 'Rent', item: 1000 },
        { label: 'Car Insurance', item: 100 },
        { label: 'Utilities', item: 60 },
        { label: 'Dividends', item: 50 }
    ]);

    const labelRefs = useRef<Array<HTMLInputElement | null>>([]);
    const itemRefs = useRef<Array<HTMLInputElement | null>>([]);

    useEffect(() => {
        labelRefs.current.forEach(input => {
            if (input) input.style.width = `${input.scrollWidth}px`;
        });
        itemRefs.current.forEach(input => {
            if (input) input.style.width = `${input.scrollWidth}px`;
        });
    }, [rows]);

    const handleLabelChange = (index: number, value: string) => {
        const newRows = [...rows];
        newRows[index].label = value;
        setRows(newRows);
    };

    const handleItemChange = (index: number, value: number) => {
        const newRows = [...rows];
        newRows[index].item = value;
        setRows(newRows);
    };

    const deleteRow = (index: number) => {
        setRows(rows => rows.filter((_, idx) => idx !== index));
    };

    const addRow = () => {
        const newRows = [...rows, { label: '', item: 0 }];
        setRows(newRows);
    };

    return (
        <div className="w-3/4 border-2 border-black">
            {rows.map((row, index) => (
                <div key={index} className="flex items-center py-2 border-b border-gray-300">
                    <button onClick={() => deleteRow(index)} className="p-2 mr-2"><FaMinus /></button>
                    <div className="flex flex-grow pr-2">
                        <input
                            type="text"
                            value={row.label}
                            onChange={(e) => handleLabelChange(index, e.target.value)}
                            ref={el => labelRefs.current[index] = el}
                            className="input-label outline-none w-full"
                            placeholder="Label"
                        />
                    </div>
                    <div className="flex flex-grow">
                        <input
                            type="text"
                            value={row.item}
                            onChange={(e) => handleItemChange(index, Number(e.target.value))}
                            ref={el => itemRefs.current[index] = el}
                            className="input-item outline-none mr-1 w-full"
                            placeholder="Item"
                        />
                    </div>
                </div>
            ))}
            <div className="flex justify-center py-2">
                <button onClick={addRow} className="p-2"><FaPlus /></button>
            </div>
        </div>
    );
}

export default BudgetGrid;
