import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const Navigation: React.FC = () => {
  //const [activeTab, setActiveTab] = useState('Spreadsheet 3');
  
  const breadcrumbs = ['Workspace', 'Folder 2', 'Spreadsheet 3'];

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    console.log(`Navigation breadcrumb clicked: ${tab}`);
  };

  return (
    <nav className="flex items-center space-x-2 text-sm">
      {breadcrumbs.map((item, index) => (
        <React.Fragment key={item}>
          <button
            onClick={() => handleTabClick(item)}
            className={`text-excel-gray-600 hover:text-excel-gray-800 transition-colors ${
              index === breadcrumbs.length - 1 ? 'font-medium text-excel-gray-800' : ''
            }`}
          >
            {item}
          </button>
          {index < breadcrumbs.length - 1 && (
            <ChevronRight className="w-4 h-4 text-excel-gray-400" />
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Navigation;
