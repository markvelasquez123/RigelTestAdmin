import React from "react";

function Notification() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-blue-900">All Notifications</h2>
      <ul className="space-y-4">
        <li className="bg-gray-100 p-4 rounded shadow-sm">
          New report generated for Q1 2025 sales data - <span className="text-sm text-gray-600">11:00 AM</span>
        </li>
        {/* Add more notifications here as needed */}
      </ul>
    </div>
  );
}

export default Notification;
