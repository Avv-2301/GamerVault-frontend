import React from 'react'

const TrendingTopics = () => {
    const topics = [
  { name: "Season 12 Meta", status: "Hot", color: "from-blue-500 to-blue-700" },
  { name: "Tournament Prep", status: "Rising", color: "from-purple-500 to-purple-700" },
  { name: "Team Building", status: "Active", color: "from-green-500 to-green-700" },
  { name: "Bug Reports", status: "New", color: "from-orange-500 to-orange-700" },
];
  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      {topics.map((t, i) => (
        <div key={i} className={`bg-gradient-to-r ${t.color} text-white p-4 rounded-lg`}>
          <h4 className="font-semibold">#{t.name}</h4>
          <p className="text-sm">{t.status}</p>
        </div>
      ))}
    </div>
  )
}

export default TrendingTopics