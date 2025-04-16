import React from 'react';
import { FaHome, FaCog, FaChartBar, FaUserCircle } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div
      className={`fixed inset-y-0 left-0 w-64 bg-white h-full p-6 z-40 shadow-xl rounded-r-2xl border-r border-gray-200`}
    >
      <div className="mb-6 text-center">
        <h1 className="text-2xl text-blue-900 font-bold">Admin Dashboard</h1>
      </div>
      <hr className="border-gray-300 mb-4" />
      <ul className="space-y-2 font-medium">
        <li className="rounded-lg hover:bg-blue-100 transition p-3">
          <a href="#" className="flex items-center text-blue-900">
            <FaHome className="w-5 h-5 mr-3" />
            Home
          </a>
        </li>
        <li className="rounded-lg hover:bg-blue-100 transition p-3">
          <a href="#" className="flex items-center text-blue-900">
            <FaCog className="w-5 h-5 mr-3" />
            Settings
          </a>
        </li>
        <li className="rounded-lg hover:bg-blue-100 transition p-3">
          <a href="#" className="flex items-center text-blue-900">
            <FaChartBar className="w-5 h-5 mr-3" />
            Reports
          </a>
        </li>
        <li className="rounded-lg hover:bg-blue-100 transition p-3">
          <a href="#" className="flex items-center text-blue-900">
            <FaUserCircle className="w-5 h-5 mr-3" />
            Users
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
