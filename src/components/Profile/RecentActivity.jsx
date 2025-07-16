import React from "react";

const activities = [
  { disc: "green", value: "Completed “Apex Legends” match" },
  { disc: "yellow", value: "Earned “Headshot Master” badge" },
  { disc: "violet", value: "Leveled up to 87" },
  { disc: "blue", value: "Added new friend" },
];

const markerColorMap = {
  blue: "marker:text-blue-500",
  green: "marker:text-green-500",
  yellow: "marker:text-yellow-500",
  purple: "marker:text-purple-500",
};

const RecentActivity = () => {
  return (
    <div className="bg-gradient-to-r from-sky-950 via-violet-950 to-green-950 p-6 rounded-xl shadow-lg text-white h-full">
      <h2 className="text-3xl font-bold text-blue-400 mb-4 pb-2">
        Recent Activity
      </h2>
      <ul className="space-y-2 text-md font-semibold list-disc list-inside">
        {activities.map((activity, index) => (
          <li
            key={index}
            className={`pl-1 text-gray-400 ${
              markerColorMap[activity.disc] || "marker:text-gray-400"
            }`}
          >
            {activity.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
