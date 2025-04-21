import React from 'react';
import Dashboard from './Dashboard';
import Sidebar from '../components/Sidebar';
import Menu from '../components/Menu';

const Homepage = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      {/* Let content grow without scrollbars */}
      <div className="flex-1 p-4">
        <Dashboard />
        <Menu />
      </div>
    </div>
  );
};

export default Homepage;
