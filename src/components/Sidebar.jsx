import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaHome,
  FaBook,
  FaClipboardCheck,
  FaDatabase,
  FaQuestion,
  FaSignOutAlt,
  FaChevronDown,
  FaChevronRight,
  FaChartBar
} from 'react-icons/fa';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    navigate('/login');
  };

  const [isTestLibrariesOpen, setIsTestLibrariesOpen] = useState(false);
  const [isResultsStatisticsOpen, setIsResultsStatisticsOpen] = useState(false);
  const [isDataManagementOpen, setIsDataManagementOpen] = useState(false);
  const [isQuestionBanksOpen, setIsQuestionBanksOpen] = useState(false);

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
    <div className="fixed inset-y-0 left-0 w-64 bg-white h-full p-6 z-40 shadow-xl rounded-r-2xl border-r border-gray-200">
      {/* Logo/Header */}
      <div className="mb-8 text-center">
        <img
          src="https://static.wixstatic.com/media/1f4846_ae30323ddefa4372ae79d28da56bd68a~mv2.jpg/v1/fill/w_228,h_101,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/RIGEL%20LOGO%20FINAL%20-%20BORDER.jpg"
          alt="Rigel Company Logo"
          className="mx-auto w-40 h-auto object-contain"
        />
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
          <li className="rounded-lg hover:bg-blue-100 transition-all duration-200 p-3">
            <button
              onClick={() => setIsTestLibrariesOpen(!isTestLibrariesOpen)}
              className="flex items-center justify-between w-full text-blue-900 font-medium"
            >
              <span className="flex items-center">
                <FaBook className="w-5 h-5 mr-3 text-blue-700" />
                Test Libraries
              </span>
              {isTestLibrariesOpen ? <FaChevronDown /> : <FaChevronRight />}
            </button>
            {isTestLibrariesOpen && (
              <ul className="pl-8 mt-2 space-y-1">
                <MenuItem icon={<FaBook />} text="Library A" onClick={() => navigate('/library-a')} />
                <MenuItem icon={<FaBook />} text="Library B" onClick={() => navigate('/library-b')} />
              </ul>
            )}
          </li>

          {/* Results & Statistics */}
          <li className="rounded-lg hover:bg-blue-100 transition-all duration-200 p-3">
            <button
              onClick={() => setIsResultsStatisticsOpen(!isResultsStatisticsOpen)}
              className="flex items-center justify-between w-full text-blue-900 font-medium"
            >
              <span className="flex items-center">
                <FaClipboardCheck className="w-5 h-5 mr-3 text-blue-700" />
                Results & Statistics
              </span>
              {isResultsStatisticsOpen ? <FaChevronDown /> : <FaChevronRight />}
            </button>
            {isResultsStatisticsOpen && (
              <ul className="pl-8 mt-2 space-y-1">
                <MenuItem icon={<FaClipboardCheck />} text="View Results" onClick={() => navigate('/view-results')} />
                <MenuItem icon={<FaChartBar />} text="Statistics" onClick={() => navigate('/view-statistics')} />
              </ul>
            )}
          </li>

          {/* Data Management */}
          <li className="rounded-lg hover:bg-blue-100 transition-all duration-200 p-3">
            <button
              onClick={() => setIsDataManagementOpen(!isDataManagementOpen)}
              className="flex items-center justify-between w-full text-blue-900 font-medium"
            >
              <span className="flex items-center">
                <FaDatabase className="w-5 h-5 mr-3 text-blue-700" />
                Data Management
              </span>
              {isDataManagementOpen ? <FaChevronDown /> : <FaChevronRight />}
            </button>
            {isDataManagementOpen && (
              <ul className="pl-8 mt-2 space-y-1">
                <MenuItem icon={<FaDatabase />} text="Manage Data" onClick={() => navigate('/usermanagement')} />
              </ul>
            )}
          </li>

          {/* Question Banks */}
          <li className="rounded-lg hover:bg-blue-100 transition-all duration-200 p-3">
            <button
              onClick={() => setIsQuestionBanksOpen(!isQuestionBanksOpen)}
              className="flex items-center justify-between w-full text-blue-900 font-medium"
            >
              <span className="flex items-center">
                <FaQuestion className="w-5 h-5 mr-3 text-blue-700" />
                Question Banks
              </span>
              {isQuestionBanksOpen ? <FaChevronDown /> : <FaChevronRight />}
            </button>
            {isQuestionBanksOpen && (
              <ul className="pl-8 mt-2 space-y-1">
                <MenuItem icon={<FaQuestion />} text="View Banks" onClick={() => navigate('/view-banks')} />
              </ul>
            )}
          </li>
        </ul>
      </div>

      {/* Footer with Logout */}
      <div className="absolute bottom-6 left-6 right-6">
        <hr className="border-gray-200 mb-4" />
        <div className="list-none">
          <MenuItem icon={<FaSignOutAlt />} text="Logout" onClick={handleLogout} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
