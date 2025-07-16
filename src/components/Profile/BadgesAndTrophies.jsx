import React from "react";
import { FaTrophy, FaMedal, FaAward } from "react-icons/fa";

const badges = [
  {
    icon: <FaTrophy className=" text-2xl" />,
    title: "Champion",
    color: "yellow",
  },
  {
    icon: <FaMedal className=" text-2xl" />,
    title: "Speed Runner",
    color: "green",
  },
  {
    icon: <FaAward className=" text-2xl" />,
    title: "Collector",
    color: "red",
  },
];

const markerColorMap = {
  red: "bg-red-500",
  green: "bg-green-500",
  yellow: "bg-yellow-500",
};

const BadgesAndTrophies = () => {
  return (
    <div className="bg-gradient-to-r from-sky-950 via-violet-950 to-green-950 p-6 rounded-lg shadow-md space-y-6">
      <h2 className="text-3xl text-blue-400 flex gap-3 items-center font-bold pb-2">
        Badges & Trophies
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {badges.map((badge, index) => (
          <div
            key={index}
            className={`${
              markerColorMap[badge.color] || "bg--gray-400"
            } rounded-lg p-4 flex flex-col items-center text-center hover:shadow-lg transition`}
          >
            {badge.icon}
            <h3 className="mt-3 text-md font-semibold">{badge.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BadgesAndTrophies;
