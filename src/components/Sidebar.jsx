import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  FaHome,
  FaBook,
  FaClipboardCheck,
  FaDatabase,
  FaQuestion,
  FaSignOutAlt
} from 'react-icons/fa';

const Sidebar = () => {
  const navigate = useNavigate();

  // Handle logout function
  const handleLogout = () => {
    // Clear any auth tokens or user data from localStorage if needed
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    
    // Redirect to login page
    navigate('/login');
  };

  // Function to create menu items with consistent styling
  const MenuItem = ({ icon, text, onClick, active = false }) => (
    <li className={`rounded-lg hover:bg-blue-100 transition-all duration-200 p-3 ${active ? 'bg-blue-50' : ''}`}>
      <button
        onClick={onClick}
        className="flex items-center justify-between w-full text-blue-900 font-medium"
      >
        <span className="flex items-center">
          {React.cloneElement(icon, { className: "w-5 h-5 mr-3 text-blue-700" })}
          {text}
        </span>
      </button>
    </li>
  );

  return (
    <div
      className="fixed inset-y-0 left-0 w-64 bg-white h-full p-6 z-40 shadow-xl rounded-r-2xl border-r border-gray-200"
    >
      {/* Logo/Header */}
      <div className="mb-8 text-center">
        <h1 className="text-2xl text-blue-900 font-bold">Sample Organization</h1>
      </div>
      
      <hr className="border-gray-200 mb-5" />
      
      {/* Navigation */}
      <div className="overflow-y-auto max-h-[calc(100%-180px)]">
        <ul className="space-y-1 font-medium">
          <MenuItem 
            icon={<FaHome />} 
            text="Home" 
            onClick={() => navigate('/home')}
          />

          {/* Test Libraries */}
          <MenuItem 
            icon={<FaBook />} 
            text="Test Libraries" 
            onClick={() => navigate('/test-libraries')}
          />
          
          {/* Results & Statistics */}
          <MenuItem 
            icon={<FaClipboardCheck />} 
            text="Results & Statistics" 
            onClick={() => navigate('/results-statistics')}
          />

          {/* Data Management */}
          <MenuItem 
            icon={<FaDatabase />} 
            text="Data Management" 
            onClick={() => navigate('/data-management')}
          />

          {/* Question Banks */}
          <MenuItem 
            icon={<FaQuestion />} 
            text="Question Banks" 
            onClick={() => navigate('/question-banks')}
          />
        </ul>
      </div>

      {/* Footer with Logout */}
      <div className="absolute bottom-6 left-6 right-6">
        <hr className="border-gray-200 mb-4" />
        <div className="list-none">
          <MenuItem 
            icon={<FaSignOutAlt />} 
            text="Logout" 
            onClick={handleLogout}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
