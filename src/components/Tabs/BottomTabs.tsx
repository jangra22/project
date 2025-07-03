import React from 'react';
import { TabType } from '../../types';
import { Plus } from 'lucide-react';

interface BottomTabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const BottomTabs: React.FC<BottomTabsProps> = ({ activeTab, onTabChange }) => {
  const tabs: TabType[] = ['All Orders', 'Pending', 'Reviewed', 'Arrived'];

  const handleTabClick = (tab: TabType) => {
    onTabChange(tab);
    console.log(`Bottom tab clicked: ${tab}`);
  };

  return (
    <div className="bg-white border-t border-excel-gray-300">
      <div className="flex items-center justify-between px-4">
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <button 
          className="p-2 text-excel-gray-400 hover:text-excel-gray-600 transition-colors duration-150"
          onClick={() => console.log('Add new tab clicked')}
          title="Add new tab"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default BottomTabs;