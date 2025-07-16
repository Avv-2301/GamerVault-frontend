import React from "react";

const activities = [
  "Completed “Apex Legends” match",
  "Earned “Headshot Master” badge",
  "Leveled up to 87",
  "Added new friend",
];

const RecentActivity = () => {
  return (
    <div className="bg-gradient-to-r from-[#1a2a3c] to-[#3b2c50] p-6 rounded-xl shadow-lg text-white h-full">
      <h2 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2">
        Recent Activity
      </h2>
      <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
        {activities.map((activity, index) => (
          <li key={index} className="pl-1">{activity}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
