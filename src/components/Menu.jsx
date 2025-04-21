import React, { useState } from "react";
import { 
  FaBook, 
  FaChartBar, 
  FaRegFileAlt, 
  FaDatabase, 
  FaCogs, 
  FaQuestionCircle, 
  FaChevronRight,
  FaChevronDown
} from "react-icons/fa";

const Menu = () => {
  const [activeSection, setActiveSection] = useState(null);
  
  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };
  
  const MenuItem = ({ icon, text, onClick, indent = false }) => (
    <div 
      className={`flex items-center justify-between p-4 bg-white rounded-lg hover:bg-blue-50 cursor-pointer transition-colors duration-200 ${indent ? 'ml-4' : ''} border border-gray-100`}
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        {icon}
        <span className="text-lg text-blue-900 font-medium">{text}</span>
      </div>
      {onClick && <FaChevronRight className="text-blue-800 opacity-70" />}
    </div>
  );
  
  const SectionHeader = ({ title, icon, isActive, onClick }) => (
    <div 
      className={`flex items-center justify-between p-4 ${isActive ? 'bg-blue-100' : 'bg-blue-50'} rounded-lg shadow-sm cursor-pointer transition-colors duration-200 mb-3`}
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        {icon}
        <h2 className="text-xl font-semibold text-blue-900">{title}</h2>
      </div>
      {isActive ? 
        <FaChevronDown className="text-blue-800" /> : 
        <FaChevronRight className="text-blue-800" />
      }
    </div>
  );

  return (
    <div className="h-screen bg-gray-50 p-6">
      <div className="overflow-y-auto rounded-xl shadow-lg max-h-full bg-white">
        <div className="sticky top-0 bg-blue-700 p-4 rounded-t-xl">
          <h1 className="text-2xl font-bold text-white">Menu</h1>
        </div>
        
        <div className="p-4 space-y-4">
          {/* Test Libraries Section */}
          <SectionHeader 
            title="Test Libraries" 
            icon={<FaBook className="text-blue-800 text-2xl" />}
            isActive={activeSection === 'libraries'}
            onClick={() => toggleSection('libraries')}
          />
          {activeSection === 'libraries' && (
            <div className="flex flex-col gap-3 pl-2 animate-fadeIn">
              <MenuItem 
                icon={<FaBook className="text-blue-800 text-xl" />}
                text="Sample Library A"
                indent={true}
              />
              <MenuItem 
                icon={<FaBook className="text-blue-800 text-xl" />}
                text="Sample Library B"
                indent={true}
              />
            </div>
          )}
          
          {/* Results & Statistics Section */}
          <SectionHeader 
            title="Result & Statistics" 
            icon={<FaChartBar className="text-green-800 text-2xl" />}
            isActive={activeSection === 'statistics'}
            onClick={() => toggleSection('statistics')}
          />
          {activeSection === 'statistics' && (
            <div className="flex flex-col gap-3 pl-2 animate-fadeIn">
              <MenuItem 
                icon={<FaRegFileAlt className="text-green-800 text-xl" />}
                text="Test Results"
                indent={true}
              />
              <MenuItem 
                icon={<FaChartBar className="text-orange-800 text-xl" />}
                text="Statistics Dashboard"
                indent={true}
              />
            </div>
          )}
          
          {/* Data Management Section */}
          <SectionHeader 
            title="Data Management" 
            icon={<FaDatabase className="text-purple-800 text-2xl" />}
            isActive={activeSection === 'data'}
            onClick={() => toggleSection('data')}
          />
          {activeSection === 'data' && (
            <div className="flex flex-col gap-3 pl-2 animate-fadeIn">
              <MenuItem 
                icon={<FaDatabase className="text-purple-800 text-xl" />}
                text="Database Controls"
                indent={true}
              />
              <MenuItem 
                icon={<FaCogs className="text-teal-800 text-xl" />}
                text="System Settings"
                indent={true}
              />
            </div>
          )}
          
          {/* Question Bank Section */}
          <SectionHeader 
            title="Question Bank" 
            icon={<FaQuestionCircle className="text-gray-800 text-2xl" />}
            isActive={activeSection === 'questions'}
            onClick={() => toggleSection('questions')}
          />
          {activeSection === 'questions' && (
            <div className="flex flex-col gap-3 pl-2 max-h-64 overflow-y-auto pr-2 animate-fadeIn">
              <MenuItem 
                icon={<FaQuestionCircle className="text-gray-800 text-xl" />}
                text="Sample Question 1"
                indent={true}
              />
              <MenuItem 
                icon={<FaQuestionCircle className="text-gray-800 text-xl" />}
                text="Sample Question 2"
                indent={true}
              />
              <MenuItem 
                icon={<FaQuestionCircle className="text-gray-800 text-xl" />}
                text="Sample Question 3"
                indent={true}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;