import React, { useEffect, useState } from 'react';
import { FaFileAlt, FaClipboardCheck, FaChartBar } from 'react-icons/fa';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div className="w-full">
      <Navbar />
      <div className="mt-20 px-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Hello {username},</h1>
        <p className="text-xl text-gray-400 mb-10">What can I do for you today?</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center hover:bg-blue-50 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer">
            <FaFileAlt className="w-16 h-16 text-blue-700 mb-4" />
            <span className="text-lg font-semibold text-blue-900">Create a New Test</span>
          </div>

          <div className="flex flex-col items-center text-center hover:bg-blue-50 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer">
            <FaClipboardCheck className="w-16 h-16 text-blue-700 mb-4" />
            <span className="text-lg font-semibold text-blue-900">Assigned Test Result</span>
          </div>

          <div className="flex flex-col items-center text-center hover:bg-blue-50 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer">
            <FaChartBar className="w-16 h-16 text-blue-700 mb-4" />
            <span className="text-lg font-semibold text-blue-900">View Statistics & Overview</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
