import React from "react";

const TopContributors = () => {
  const contributors = [
    {
      name: "EliteGamer_Pro",
      contributions: 2847,
      rank: 1,
      rankColor:"bg-amber-400",
      img: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      name: "StrategyQueen",
      contributions: 2156,
      rank: 2,
      rankColor:"bg-gray-400",
      img: "https://randomuser.me/api/portraits/women/21.jpg",
    },
    {
      name: "TacticalMind",
      contributions: 1923,
      rank: 3,
      rankColor:"bg-amber-800",
      img: "https://randomuser.me/api/portraits/men/31.jpg",
    },
  ];

  return (
    <div className="p-4 rounded-lg text-white mt-6">
      <h3 className="text-xl font-bold text-cyan-400 mb-6">Top Contributors</h3>
      <div className="space-y-3">
        {contributors.map((contributor, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-gray-800 p-4 rounded-lg border border-gray-700"
          >
            {/* Profile Image with Rank */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                {/* Profile Picture */}
                <img
                  src={contributor.img}
                  alt={contributor.name}
                  className="w-14 h-14 rounded-full border-2 border-gray-600 object-cover"
                />
                {/* Rank Badge */}
                <span className={`absolute -top-1 -right-1 ${contributor.rankColor} text-white text-xs font-bold rounded-full px-2 py-1`}>
                  {contributor.rank}
                </span>
              </div>

              {/* Contributor Info */}
              <div>
                <p className="font-semibold text-lg">{contributor.name}</p>
                <p className="text-sm font-semibold text-gray-400">
                  {contributor.contributions} contributions
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopContributors;
