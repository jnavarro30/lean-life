import React, { useState, useRef, useEffect } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

interface RowData {
    label: string;
    item: any;
}

function MyInventoryGrid(): JSX.Element {
    return (
        <div className="w-80 border-2 border-black p-1">
            My Inventory
        </div>
    );
}

export default MyInventoryGrid;
