import React from 'react';
import { Column } from '../../types';
//import { getColumnLabel } from '../../data/mockData';

interface SpreadsheetHeaderProps {
  columns: Column[];
  selectedRows: Set<string>;
  onSelectAll: (selectAll: boolean) => void;
}

const SpreadsheetHeader: React.FC<SpreadsheetHeaderProps> = ({ 
  columns, 
  selectedRows, 
  onSelectAll 
}) => {
  const isAllSelected = selectedRows.size > 0;

  return (
    <div className="flex bg-excel-gray-100 border-b border-excel-gray-300 sticky top-0 z-40">
      {/* Row selector column */}
      <div className="excel-header-cell w-12">
        <input
          type="checkbox"
          checked={isAllSelected}
          onChange={(e) => onSelectAll(e.target.checked)}
          className="w-3 h-3 text-excel-blue rounded border-excel-gray-400 focus:ring-excel-blue"
        />
      </div>
      
      {/* Excel-style column letters */}
      <div className="excel-header-cell w-16">
        A
      </div>
      
      {/* Column headers */}
      {columns.map((column, index) => (
        <div
          key={column.key}
          className="excel-header-cell"
          style={{ width: column.width }}
          onClick={() => console.log(`Column header clicked: ${column.label}`)}
        >
          <span className="truncate">
            {column.label}
          </span>
        </div>
      ))}
      
      {/* Additional empty columns for Excel-like appearance */}
      {Array.from({ length: 10 }, (_, index) => (
        <div
          key={`empty-col-${index}`}
          className="excel-header-cell w-24"
        >
          {getColumnLabel(columns.length + index + 1)}
        </div>
      ))}
    </div>
  );
};

export default SpreadsheetHeader;
