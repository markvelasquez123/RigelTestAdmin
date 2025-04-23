import { useState } from 'react';
import { FaSearch, FaSort } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

export default function UserManagement() {
  const [activeTab, setActiveTab] = useState('active');
  const navigate = useNavigate();
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Mark',
      uid: 'ec01',
      dept: 'Engine',
      rank: 'ENGINE CADET',
      nationality: 'Philippines',
      email: 'mark@gmail.com',
    },
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 px-15 pt-30 pb-16 pl-30">
          <h1 className="text-3xl font-semibold text-blue-900 mb-2">User Data Management</h1>
          <p className="text-sm text-gray-500 mb-6">
            All information related to users can be found in the table below.
          </p>

          {/* Search Bar */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search users..."
              className="w-full max-w-xl pl-10 pr-4 py-3 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-xs text-gray-400 mt-2 ml-2">Enter at least 3 characters to search.</p>
          </div>

          {/* Card Container */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            {/* Tabs */}
            <div className="border-b border-gray-200 mb-4">
              <div className="flex space-x-6">
                {['active', 'archived'].map((tab) => (
                  <button
                    key={tab}
                    className={`pb-2 px-1 text-sm font-medium transition-colors duration-200 ${
                      activeTab === tab
                        ? 'border-b-2 border-blue-600 text-blue-600'
                        : 'text-gray-500 hover:text-blue-600'
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab === 'active' ? 'Active Users (1)' : 'Archived Users'}
                  </button>
                ))}
              </div>
            </div>

            {/* User Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-blue-900 text-white">
                  <tr>
                    <th className="px-4 py-3">
                      <input type="checkbox" />
                    </th>
                    <th className="px-4 py-3">Sr</th>
                    <th className="px-4 py-3">
                      Name <FaSort className="inline ml-1" size={12} />
                    </th>
                    <th className="px-4 py-3">
                      UID <FaSort className="inline ml-1" size={12} />
                    </th>
                    <th className="px-4 py-3">
                      Dept <FaSort className="inline ml-1" size={12} />
                    </th>
                    <th className="px-4 py-3">
                      Rank <FaSort className="inline ml-1" size={12} />
                    </th>
                    <th className="px-4 py-3">
                      Nationality <FaSort className="inline ml-1" size={12} />
                    </th>
                    <th className="px-4 py-3">Email</th>
                    <th className="px-4 py-3">Assign</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-3">
                        <input type="checkbox" />
                      </td>
                      <td className="px-4 py-3">{user.id}</td>
                      <td className="px-4 py-3">{user.name}</td>
                      <td className="px-4 py-3">{user.uid}</td>
                      <td className="px-4 py-3">{user.dept}</td>
                      <td className="px-4 py-3">{user.rank}</td>
                      <td className="px-4 py-3">{user.nationality}</td>
                      <td className="px-4 py-3">{user.email}</td>
                      <td className="px-4 py-3">
                        <button className="bg-blue-50 text-blue-800 border border-blue-200 px-4 py-1 rounded-full text-xs hover:bg-blue-100 transition">
                          Assign
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>

        {/* Right Side Panel */}
        <aside className="fixed right-0 top-16 h-[calc(100%-4rem)] w-64 bg-white border-l border-gray-200 p-6 shadow-md z-10">
          <h2 className="text-lg font-semibold text-blue-900 mb-4">Selected User Details</h2>
          <div className="flex items-center justify-center h-60 border-2 border-dashed border-gray-300 rounded-xl">
            <span className="text-gray-500 text-sm text-center">
              Select a User to view their details.
            </span>
          </div>
        </aside>
      </div>
    </div>
  );
}
