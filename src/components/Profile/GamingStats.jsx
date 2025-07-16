import React from "react";

const stats = [
  { label: "Hours Played", value: "2,847" },
  { label: "Games Won", value: "342" },
  { label: "Current Level", value: "87" },
  { label: "Achievements", value: "156" },
];

const GamingStats = () => {
  return (
    <div className="bg-gradient-to-r from-sky-950 via-violet-950 to-green-950 p-6 rounded-xl shadow-lg text-white">
      <h2 className="text-3xl font-bold mb-4 text-blue-400 pb-2">
        Gaming Statistics
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-lg p-4 text-center shadow-md hover:shadow-blue-500/30 transition"
          >
            <div className="text-3xl font-bold text-yellow-400">
              {stat.value}
            </div>
            <div className="text-md font-semibold text-gray-400 mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamingStats;
