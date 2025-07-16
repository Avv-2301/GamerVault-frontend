import React from "react";
import { FaTrophy, FaMedal, FaAward } from "react-icons/fa";

const badges = [
  {
    icon: <FaTrophy className="text-yellow-400 text-3xl" />,
    title: "Elite Champion",
    description: "Won 10 competitive matches",
  },
  {
    icon: <FaMedal className="text-blue-400 text-3xl" />,
    title: "Speed Runner",
    description: "Completed a game in record time",
  },
  {
    icon: <FaAward className="text-pink-400 text-3xl" />,
    title: "Collector",
    description: "Unlocked 50+ items",
  },
];

const BadgesAndTrophies = () => {
  return (
    <div className="bg-[#1a1a2e] p-6 rounded-lg shadow-md space-y-6">
      <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2">
        🏅 Badges & Trophies
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {badges.map((badge, index) => (
          <div
            key={index}
            className="bg-[#2a2a3c] rounded-lg p-4 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            {badge.icon}
            <h3 className="mt-3 text-lg font-bold">{badge.title}</h3>
            <p className="text-sm text-gray-400">{badge.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BadgesAndTrophies;
