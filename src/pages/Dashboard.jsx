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

  const cards = [
    {
      title: 'Create a New Test',
      icon: <FaFileAlt className="w-12 h-12 text-blue-600 mb-4" />,
    },
    {
      title: 'Assigned Test Result',
      icon: <FaClipboardCheck className="w-12 h-12 text-blue-600 mb-4" />,
    },
    {
      title: 'View Statistics & Overview',
      icon: <FaChartBar className="w-12 h-12 text-blue-600 mb-4" />,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Navbar />
      <div className="mt-24 px-6 sm:px-10">
        <h1 className="text-4xl font-bold text-blue-900 mb-2">Welcome back, {username} 👋</h1>
        <p className="text-lg text-gray-500 mb-10">Here's what you can do today:</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center bg-white p-6 rounded-2xl shadow-md hover:shadow-xl border hover:border-blue-300 transition-all duration-300 ease-in-out cursor-pointer"
            >
              {card.icon}
              <span className="text-lg font-semibold text-gray-800 group-hover:text-blue-700">
                {card.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
