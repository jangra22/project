import React from 'react';
import { 
  EyeOff, 
  ArrowUpDown, 
  Filter, 
  Download, 
  Upload, 
  Share2,
  Plus
} from 'lucide-react';

const Toolbar: React.FC = () => {
  const handleButtonClick = (action: string) => {
    console.log(`Toolbar action: ${action}`);
  };

  return (
    <div className="bg-white border-b border-excel-gray-300 px-4 py-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <span className="text-sm text-excel-gray-600 mr-3">Tool bar</span>
          
          <button 
            className="excel-button"
            onClick={() => handleButtonClick('Hide fields')}
          >
            <EyeOff className="w-4 h-4" />
            <span>Hide fields</span>
          </button>
          
          <button 
            className="excel-button"
            onClick={() => handleButtonClick('Sort')}
          >
            <ArrowUpDown className="w-4 h-4" />
            <span>Sort</span>
          </button>
          
          <button 
            className="excel-button"
            onClick={() => handleButtonClick('Filter')}
          >
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          
          <button 
            className="excel-button"
            onClick={() => handleButtonClick('Import')}
          >
            <Download className="w-4 h-4" />
            <span>Import</span>
          </button>
          
          <button 
            className="excel-button"
            onClick={() => handleButtonClick('Export')}
          >
            <Upload className="w-4 h-4" />
            <span>Export</span>
          </button>
          
          <button 
            className="excel-button"
            onClick={() => handleButtonClick('Share')}
          >
            <Share2 className="w-4 h-4" />
            <span>Share</span>
          </button>
          
          <button 
            className="excel-button excel-button-primary"
            onClick={() => handleButtonClick('New Action')}
          >
            <span>New Action</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;