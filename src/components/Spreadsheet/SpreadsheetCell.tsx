import React, { useState, useRef, useEffect } from 'react';
import { Column } from '../../types';

interface SpreadsheetCellProps {
  value: string;
  column: Column;
  rowId: string;
  isSelected: boolean;
  onValueChange: (value: string) => void;
  onCellSelect: () => void;
  isEmpty?: boolean;
}

const SpreadsheetCell: React.FC<SpreadsheetCellProps> = ({
  value,
  column,
  isSelected,
  onValueChange,
  onCellSelect,
  isEmpty = false
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setEditValue(value);
  }, [value]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleDoubleClick = () => {
    if (!isEmpty) {
      setIsEditing(true);
    }
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (!isEmpty) {
      onValueChange(editValue);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setIsEditing(false);
      if (!isEmpty) {
        onValueChange(editValue);
      }
    } else if (e.key === 'Escape') {
      setIsEditing(false);
      setEditValue(value);
    }
  };

  const renderCellContent = () => {
    if (isEmpty || !value) return '';
    
    if (column.key === 'status') {
      const statusClass = value.toLowerCase().replace(/[^a-z]/g, '-');
      return (
        <span className={`status-badge status-${statusClass}`}>
          {value}
        </span>
      );
    }
    
    if (column.key === 'priority') {
      const priorityClass = value.toLowerCase();
      return (
        <span className={`status-badge priority-${priorityClass}`}>
          {value}
        </span>
      );
    }
    
    if (column.key === 'url' && value) {
      return (
        <a 
          href={`https://${value}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-excel-blue hover:underline truncate"
          onClick={(e) => e.stopPropagation()}
        >
          {value}
        </a>
      );
    }
    
    if (column.key === 'submitter' && value) {
      return (
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-excel-green rounded-full flex items-center justify-center text-white text-xs font-medium">
            {value.split(' ').map(n => n[0]).join('').toUpperCase()}
          </div>
          <span className="truncate">{value}</span>
        </div>
      );
    }
    
    return <span className="truncate">{value}</span>;
  };

  return (
    <div
      className={`excel-cell ${isSelected ? 'selected' : ''}`}
      style={{ width: column.width }}
      onClick={onCellSelect}
      onDoubleClick={handleDoubleClick}
    >
      {isEditing ? (
        <input
          ref={inputRef}
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className="w-full h-full border-0 outline-none bg-transparent text-sm"
        />
      ) : (
        <div className="w-full">
          {renderCellContent()}
        </div>
      )}
    </div>
  );
};

export default SpreadsheetCell;