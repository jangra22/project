import React, { useState, useCallback } from 'react';

interface ColumnResizerProps {
  onResize: (newWidth: number) => void;
  initialWidth: number;
}

const ColumnResizer: React.FC<ColumnResizerProps> = ({
  onResize,
  initialWidth,
}) => {
  const [isResizing, setIsResizing] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startWidth, setStartWidth] = useState(initialWidth);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      setIsResizing(true);
      setStartX(e.clientX);
      setStartWidth(initialWidth);
    },
    [initialWidth]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isResizing) return;
      const diff = e.clientX - startX;
      const newWidth = startWidth + diff;
      onResize(newWidth);
    },
    [isResizing, startX, startWidth, onResize]
  );

  const handleMouseUp = useCallback(() => {
    setIsResizing(false);
  }, []);

  React.useEffect(() => {
    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isResizing, handleMouseMove, handleMouseUp]);

  return (
    <div
      className="absolute right-0 top-0 w-1 h-full cursor-col-resize hover:bg-excel-blue opacity-0 hover:opacity-100 transition-opacity"
      onMouseDown={handleMouseDown}
    />
  );
};

export default ColumnResizer;