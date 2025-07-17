import React from 'react';

const discussions = [
  {
    title: "Best strategies for ranked matches",
    user: "ProGamer_2024",
    replies: 47,
    time: "2 hours ago",
  },
  {
    title: "New update patch notes discussion",
    user: "GameMaster_X",
    replies: 89,
    time: "5 hours ago",
  },
];

const FeaturedDiscussion = () => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg mt-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">Featured Discussions</h3>
        <a href="#" className="text-blue-400 text-sm">View All</a>
      </div>
      <div className="space-y-4">
        {discussions.map((d, i) => (
          <div key={i} className="bg-gray-700 p-4 rounded-lg">
            <h4 className="font-semibold">{d.title}</h4>
            <p className="text-gray-400 text-sm">
              {d.user} • {d.replies} replies • {d.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedDiscussion