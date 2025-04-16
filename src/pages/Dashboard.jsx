import React from 'react';
import { FaFolder } from 'react-icons/fa';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="relative mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 p-6">
          <div className="flex flex-col items-center space-y-4 hover:bg-blue-50 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
            <FaFolder className="w-24 h-24 text-blue-900" />
            <span className="text-lg font-semibold text-blue-900">Create Test</span>
          </div>
          <div className="flex flex-col items-center space-y-4 hover:bg-blue-50 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
            <FaFolder className="w-24 h-24 text-blue-900" />
            <span className="text-lg font-semibold text-blue-900">Assign Test</span>
          </div>
          <div className="flex flex-col items-center space-y-4 hover:bg-blue-50 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
            <FaFolder className="w-24 h-24 text-blue-900" />
            <span className="text-lg font-semibold text-blue-900">Test Lib</span>
          </div>
          <div className="flex flex-col items-center space-y-4 hover:bg-blue-50 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
            <FaFolder className="w-24 h-24 text-blue-900" />
            <span className="text-lg font-semibold text-blue-900">User List</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
