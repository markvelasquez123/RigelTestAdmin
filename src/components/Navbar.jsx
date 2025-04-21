import React, { useState, useRef, useEffect } from "react";
import { FaSearch, FaBell, FaCircle } from "react-icons/fa";
import Notification from "./Notification"; // Make sure the path is correct

const Navbar = () => {
  const [notificationDropdownOpen, setNotificationDropdownOpen] = useState(false);
  const [showAllNotifications, setShowAllNotifications] = useState(false);
  const notificationRef = useRef(null);

  const notifications = [
    {
      id: 1,
      message: "New report generated for Q1 2025 sales data",
      time: "11:00 AM",
      isNew: false,
    },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setNotificationDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [notificationRef]);

  return (
    <>
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

          <div ref={notificationRef} className="relative">
            <div
              className="cursor-pointer"
              onClick={() => setNotificationDropdownOpen(!notificationDropdownOpen)}
            >
              <div className="relative flex items-center text-blue-900">
                <FaBell className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">1</span>
              </div>
            </div>

            {notificationDropdownOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl z-50">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-800">Notifications</h3>
                </div>

                <div className="max-h-96 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="p-4 hover:bg-gray-50">
                      <div className="flex items-start">
                        <FaCircle className="text-blue-800 w-3 h-3 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{notification.message}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-3 text-center border-t border-gray-200">
                  <button
                    onClick={() => {
                      setShowAllNotifications(true);
                      setNotificationDropdownOpen(false);
                    }}
                    className="text-blue-800 hover:underline font-medium"
                  >
                    View All Notifications
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Centered Notification Modal */}
      {showAllNotifications && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-1/2 max-h-[80vh] overflow-auto relative">
            <button
              className="absolute top-3 right-4 text-gray-600 hover:text-red-500 text-lg font-bold"
              onClick={() => setShowAllNotifications(false)}
            >
              ×
            </button>
            <Notification />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
