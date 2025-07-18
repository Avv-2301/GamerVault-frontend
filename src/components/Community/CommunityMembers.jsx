import React from "react";
import { FaDiscord } from "react-icons/fa";

const CommunityMembers = () => {
  const members = [
    { img: "https://randomuser.me/api/portraits/men/11.jpg", status: "online" },
    { img: "https://randomuser.me/api/portraits/men/12.jpg", status: "offline" },
    { img: "https://randomuser.me/api/portraits/women/15.jpg", status: "online" },
    { img: "https://randomuser.me/api/portraits/women/18.jpg", status: "offline" },
  ];

  return (
    <div className="p-4 rounded-lg mt-6 bg-gray-900 bg-opacity-70 backdrop-blur-md">
      <h3 className="text-xl font-bold mb-4 text-cyan-400">Community Members</h3>

      {/* Member Avatars with Status Dot */}
      <div className="flex space-x-5 mb-4">
        {members.map((member, index) => (
          <div key={index} className="relative">
            <img
              src={member.img}
              alt="Member Avatar"
              className="w-18 h-18 rounded-lg border-2 border-cyan-600 object-cover"
            />
            {/* Status Dot */}
            <span
              className={`absolute bottom-1 right-1 w-3 h-3 rounded-full border-2 border-gray-900 ${
                member.status === "online" ? "bg-green-500" : "bg-red-400"
              }`}
            ></span>
          </div>
        ))}
      </div>

      {/* Glassmorphism Discord Section */}
      <div className=" bg-gradient-to-r from-purple-950 to-cyan-950 backdrop-blur-md p-6 rounded-lg border border-white/20 shadow-lg">
      <div className="flex items-center text-lg font-bold gap-3">
        <FaDiscord className="text-purple-400" size={24}/>
        <p className="">Join Live Chat</p>
      </div>
      <p className="text-sm font-semibold text-gray-300 mb-2">1,247 members online</p>
        <button className="bg-purple-500 text-white text-md px-4 w-full py-3 rounded-lg hover:bg-purple-700 transition-all font-semibold">
          Connect to Discord
        </button>
        
      </div>
    </div>
  );
};

export default CommunityMembers;
