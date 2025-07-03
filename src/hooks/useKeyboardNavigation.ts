import { useEffect, useCallback } from 'react';

interface KeyboardNavigationProps {
  selectedCell: { rowId: string; column: string } | null;
  onCellSelect: (rowId: string, column: string) => void;
  data: any[];
  columns: any[];
}

export const useKeyboardNavigation = ({
  selectedCell,
  onCellSelect,
  data,
  columns,
}: KeyboardNavigationProps) => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!selectedCell) return;

      const currentRowIndex = data.findIndex(
        (row) => row.id === selectedCell.rowId
      );
      const currentColumnIndex = columns.findIndex(
        (col) => col.key === selectedCell.column
      );

      if (currentRowIndex === -1 || currentColumnIndex === -1) return;

      let newRowIndex = currentRowIndex;
      let newColumnIndex = currentColumnIndex;

      switch (event.key) {
        case 'ArrowUp':
          event.preventDefault();
          newRowIndex = Math.max(0, currentRowIndex - 1);
          break;
        case 'ArrowDown':
          event.preventDefault();
          newRowIndex = Math.min(data.length - 1, currentRowIndex + 1);
          break;
        case 'ArrowLeft':
          event.preventDefault();
          newColumnIndex = Math.max(0, currentColumnIndex - 1);
          break;
        case 'ArrowRight':
          event.preventDefault();
          newColumnIndex = Math.min(columns.length - 1, currentColumnIndex + 1);
          break;
        case 'Enter':
          event.preventDefault();
          // Enter key could trigger edit mode
          break;
        case 'Escape':
          event.preventDefault();
          // Escape could exit edit mode
          break;
        default:
          return;
      }

      if (
        newRowIndex !== currentRowIndex ||
        newColumnIndex !== currentColumnIndex
      ) {
        const newRow = data[newRowIndex];
        const newColumn = columns[newColumnIndex];
        if (newRow && newColumn) {
          onCellSelect(newRow.id, newColumn.key);
        }
      }
    },
    [selectedCell, onCellSelect, data, columns]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
};