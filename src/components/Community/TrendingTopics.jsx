import React from "react";
import { FaHashtag } from "react-icons/fa";

const TrendingTopics = () => {
  const topics = [
    {
      name: "Season 12 Meta",
      status: "Hot",
      statusColor: "bg-cyan-800",
      discussions: "1247",
      color: "from-sky-900 to-blue-950 border-cyan-700",
      icon: <FaHashtag className="mt-1 text-cyan-400" />,
    },
    {
      name: "Tournament Prep",
      status: "Rising",
      statusColor: "bg-purple-800",
      discussions: "892",
      color: "from-purple-900 to-fuchsia-950 border-purple-700",
      icon: <FaHashtag className="mt-1 text-purple-400" />,
    },
    {
      name: "Team Building",
      status: "Active",
      statusColor: "bg-green-800",
      discussions: "634",
      color: "from-green-900 to-emerald-950 border-green-700",
      icon: <FaHashtag className="mt-1 text-green-400" />,
    },
    {
      name: "Bug Reports",
      status: "New",
      statusColor: "bg-orange-800",
      discussions: "421",
      color: "from-orange-900 to-amber-950 border-orange-700",
      icon: <FaHashtag className="mt-1 text-orange-400" />,
    },
  ];
  return (
    <div className="mt-6 font-bold text-2xl text-cyan-400">
      <h3>Trending Topics</h3>

      <div className="grid grid-cols-2 gap-4 mt-5">
        {topics.map((t, i) => (
          <div
            key={i}
            className={`bg-gradient-to-r bg-opacity-30 border ${t.color} text-white p-5 rounded-lg`}
          >
            <div className="flex items-center gap-3">
              {t.icon}
              <h4 className="font-semibold text-lg">{t.name}</h4>
              <p
                className={`text-xs rounded-full ${t.statusColor} font-semibold w-11.5 h-6 p-1 text-center`}
              >
                {t.status}
              </p>
            </div>
            <p className="text-gray-300 font-semibold mt-2 text-md">
              {t.discussions} discussions
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingTopics;
