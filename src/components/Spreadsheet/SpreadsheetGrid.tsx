import React, { useState } from 'react';
import { SpreadsheetData } from '../../types';
// import { columns, getColumnLabel } from '../../data/mockData';
import SpreadsheetRow from './SpreadsheetRow';
import SpreadsheetHeader from './SpreadsheetHeader';

interface SpreadsheetGridProps {
  data: SpreadsheetData[];
  onDataChange: (data: SpreadsheetData[]) => void;
}

const SpreadsheetGrid: React.FC<SpreadsheetGridProps> = ({ data, onDataChange }) => {
  const [selectedCell, setSelectedCell] = useState<{ rowId: string; column: string } | null>(null);
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());

  const handleCellChange = (rowId: string, field: keyof SpreadsheetData, value: string) => {
    const newData = data.map(row => 
      row.id === rowId ? { ...row, [field]: value } : row
    );
    onDataChange(newData);
  };

  const handleCellSelect = (rowId: string, column: string) => {
    setSelectedCell({ rowId, column });
  };

  const handleRowSelect = (rowId: string, isSelected: boolean) => {
    const newSelectedRows = new Set(selectedRows);
    if (isSelected) {
      newSelectedRows.add(rowId);
    } else {
      newSelectedRows.delete(rowId);
    }
    setSelectedRows(newSelectedRows);
  };

  // Generate empty rows to fill the screen (Excel-like behavior)
  const emptyRowsCount = Math.max(0, 20 - data.length);
  const emptyRows = Array.from({ length: emptyRowsCount }, (_, index) => ({
    id: `empty-${index}`,
    jobRequest: '',
    submitter: '',
    url: '',
    assigned: '',
    priority: 'Medium' as const,
    dueDate: '',
    estValue: '',
    status: 'To start' as const
  }));

  const allRows = [...data, ...emptyRows];

  return (
    <div className="flex-1 overflow-auto bg-white">
      <div className="min-w-max">
        <SpreadsheetHeader 
          columns={columns}
          selectedRows={selectedRows}
          onSelectAll={(selectAll) => {
            if (selectAll) {
              setSelectedRows(new Set(data.map(row => row.id)));
            } else {
              setSelectedRows(new Set());
            }
          }}
        />
        
        <div>
          {allRows.map((row, index) => (
            <SpreadsheetRow
              key={row.id}
              data={row}
              rowIndex={index + 1}
              columns={columns}
              isSelected={selectedRows.has(row.id)}
              selectedCell={selectedCell}
              onCellChange={handleCellChange}
              onCellSelect={handleCellSelect}
              onRowSelect={handleRowSelect}
              isEmpty={row.id.startsWith('empty-')}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpreadsheetGrid;
