import React from 'react';
import { FaSearch, FaUserCircle, FaBell } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-64 right-0 h-16 bg-white px-6 flex items-center justify-between shadow-md z-50 rounded-bl-2xl border-b border-gray-200">
      <div className="flex items-center gap-x-4">
        <span className="text-blue-900 font-semibold text-xl">Hello Admin</span>
      </div>

      <div className="flex items-center gap-x-4">
        <div className="relative w-64">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <FaSearch className="text-blue-900" />
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-gray-100 text-blue-900 pl-10 pr-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
          />
        </div>

        <div className="text-blue-900">
          <FaBell className="w-6 h-6" />
        </div>

        <div className="relative group">
          <button className="text-blue-900 focus:outline-none">
            <FaUserCircle className="w-6 h-6 mt-1" />
          </button>
          <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-200 border border-gray-100">
            <ul className="py-2 text-sm text-gray-700">
              <li className="px-4 py-2 hover:bg-gray-100">
                <a href="#">Profile</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <a href="#">Settings</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 text-red-500">
                <a href="#">Log Out</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
