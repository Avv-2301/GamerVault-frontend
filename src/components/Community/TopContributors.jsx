import React from 'react'

const TopContributors = () => {
    const contributors = [
  {
    name: "EliteGamer_Pro",
    contributions: 2847,
    rank: 1,
    badge: "🥇",
  },
  {
    name: "StrategyQueen",
    contributions: 2156,
    rank: 2,
    badge: "🥈",
  },
  {
    name: "TacticalMind",
    contributions: 1923,
    rank: 3,
    badge: "🥉",
  },
];
  return (
    <div className="bg-gray-800 p-4 rounded-lg text-white mt-6">
      <h3 className="text-lg font-bold mb-4">Top Contributors</h3>
      <div className="space-y-3">
        {contributors.map((contributor, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-gray-700 p-3 rounded-md"
          >
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{contributor.badge}</span>
              <div>
                <p className="font-semibold">{contributor.name}</p>
                <p className="text-sm text-gray-400">
                  {contributor.contributions} contributions
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopContributors