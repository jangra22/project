import { useState, useCallback } from 'react';
import { Column } from '../types';

export const useColumnResize = (initialColumns: Column[]) => {
  const [columns, setColumns] = useState<Column[]>(initialColumns);
  const [hiddenColumns, setHiddenColumns] = useState<Set<string>>(new Set());

  const resizeColumn = useCallback((columnKey: string, newWidth: number) => {
    setColumns((prev) =>
      prev.map((col) =>
        col.key === columnKey ? { ...col, width: Math.max(50, newWidth) } : col
      )
    );
  }, []);

  const toggleColumnVisibility = useCallback((columnKey: string) => {
    setHiddenColumns((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(columnKey)) {
        newSet.delete(columnKey);
      } else {
        newSet.add(columnKey);
      }
      return newSet;
    });
  }, []);

  const visibleColumns = columns.filter((col) => !hiddenColumns.has(col.key));

  return {
    columns: visibleColumns,
    hiddenColumns,
    resizeColumn,
    toggleColumnVisibility,
  };
};