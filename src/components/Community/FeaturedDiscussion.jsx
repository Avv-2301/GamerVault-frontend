import React from "react";
import { FaStar } from "react-icons/fa";
import { FaFireFlameCurved } from "react-icons/fa6";

const discussions = [
  {
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    title: "Best strategies for ranked matches",
    description: "Share your top tips and tricks for climbing the ranks in competitive play.",
    user: "ProGamer_2024",
    icon:<FaFireFlameCurved size={22} className="mb-2 text-cyan-400"/>,
    replies: 47,
    time: "2 hours ago",
  },
  {
    img: "https://randomuser.me/api/portraits/women/45.jpg",
    title: "New update patch notes discussion",
    description: "Share your top tips and tricks for climbing the ranks in competitive play.",
    user: "GameMaster_X",
    icon: <FaStar size={22} className="mb-2 text-violet-500"/>,
    replies: 89,
    time: "5 hours ago",
  },
];

const FeaturedDiscussion = () => {
  return (
    <div className="text-white p-4 rounded-lg mt-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl text-cyan-400 font-bold">Featured Discussions</h3>
        <a href="#" className="text-cyan-400 font-semibold text-md hover:underline">
          View All
        </a>
      </div>
      <div className="space-y-4">
        {discussions.map((d, i) => (
          <div
            key={i}
            className="bg-gray-800 p-6 rounded-lg border border-gray-700 flex items-center gap-6 hover:border-cyan-600 transition"
          >
            {/* Profile Image */}
            <img
              src={d.img}
              alt="Profile"
              className="w-14 h-14 rounded-full mb-10 border-2 border-gray-600 object-cover"
            />

            {/* Discussion Info */}
            <div>
              <div className="flex items-center justify-between gap-2">
                <h4 className="font-semibold text-xl mb-3">{d.title}</h4>
                {d.icon}
              </div>
              <p className="text-gray-400 text-md font-semibold mb-3">
                {d.description}
              </p>
              <p className="text-gray-400 text-md font-semibold">
                {d.user} • {d.replies} replies • {d.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedDiscussion;
