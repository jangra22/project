import React from 'react';
import { SpreadsheetData, Column } from '../../types';
import SpreadsheetCell from './SpreadsheetCell';

interface SpreadsheetRowProps {
  data: SpreadsheetData;
  rowIndex: number;
  columns: Column[];
  isSelected: boolean;
  selectedCell: { rowId: string; column: string } | null;
  onCellChange: (rowId: string, field: keyof SpreadsheetData, value: string) => void;
  onCellSelect: (rowId: string, column: string) => void;
  onRowSelect: (rowId: string, isSelected: boolean) => void;
  isEmpty?: boolean;
}

const SpreadsheetRow: React.FC<SpreadsheetRowProps> = ({
  data,
  rowIndex,
  columns,
  isSelected,
  selectedCell,
  onCellChange,
  onCellSelect,
  onRowSelect,
  isEmpty = false
}) => {
  return (
    <div className={`flex ${isSelected ? 'bg-excel-lightblue' : 'hover:bg-excel-gray-50'}`}>
      {/* Row selector */}
      <div className="excel-row-number w-12">
        {!isEmpty && (
          <input
            type="checkbox"
            checked={isSelected}
            onChange={(e) => onRowSelect(data.id, e.target.checked)}
            className="w-3 h-3 text-excel-blue rounded border-excel-gray-400 focus:ring-excel-blue mr-1"
          />
        )}
      </div>
      
      {/* Row number */}
      <div className="excel-row-number w-16">
        {rowIndex}
      </div>
      
      {/* Data cells */}
      {columns.map((column) => (
        <SpreadsheetCell
          key={`${data.id}-${column.key}`}
          value={data[column.key] as string}
          column={column}
          rowId={data.id}
          isSelected={selectedCell?.rowId === data.id && selectedCell?.column === column.key}
          onValueChange={(value) => !isEmpty && onCellChange(data.id, column.key, value)}
          onCellSelect={() => onCellSelect(data.id, column.key)}
          isEmpty={isEmpty}
        />
      ))}
      
      {/* Additional empty cells for Excel-like appearance */}
      {Array.from({ length: 10 }, (_, index) => (
        <div
          key={`empty-cell-${index}`}
          className="excel-cell w-24"
          onClick={() => onCellSelect(data.id, `empty-${index}`)}
        />
      ))}
    </div>
  );
};

export default SpreadsheetRow;