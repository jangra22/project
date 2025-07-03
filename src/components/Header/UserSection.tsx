import React from 'react';
import { users } from '../../data/mockData';
import { Bell } from 'lucide-react';

const UserSection: React.FC = () => {
  const displayedUsers = users.slice(0, 4);
  const remainingCount = Math.max(0, users.length - 4);

  return (
    <div className="flex items-center space-x-3">
      <div className="flex items-center -space-x-2">
        {displayedUsers.map((user, index) => (
          <div
            key={user.id}
            className={`user-avatar ${user.color}`}
            style={{ zIndex: displayedUsers.length - index }}
            title={user.name}
          >
            {user.initials}
          </div>
        ))}
        {remainingCount > 0 && (
          <div
            className="user-avatar bg-excel-gray-400"
            title={`+${remainingCount} more`}
          >
            {remainingCount}
          </div>
        )}
      </div>
      
      <div className="flex items-center space-x-2">
        <button className="p-1.5 text-excel-gray-600 hover:text-excel-gray-800 hover:bg-excel-gray-100 rounded transition-colors">
          <Bell className="w-4 h-4" />
        </button>
        <div className="flex items-center space-x-2">
          <div className="user-avatar bg-excel-blue">
            JD
          </div>
          <div className="text-sm">
            <div className="font-medium text-excel-gray-800">John Doe</div>
            <div className="text-xs text-excel-gray-600">john.doe@company.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSection;