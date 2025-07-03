import React from 'react';
import Navigation from './Navigation';
import UserSection from './UserSection';
import { Search } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-excel-gray-300 sticky top-0 z-50">
      <div className="flex items-center justify-between h-12 px-4">
        <div className="flex items-center space-x-6">
          <Navigation />
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-excel-gray-500" />
            <input
              type="text"
              placeholder="Search within sheet"
              className="pl-10 pr-4 py-1.5 text-sm border border-excel-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-excel-blue focus:border-excel-blue w-64"
            />
          </div>
          <UserSection />
        </div>
      </div>
    </header>
  );
};

export default Header;