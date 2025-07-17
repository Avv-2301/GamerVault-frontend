import React from "react";

const CommunityMembers = () => {
  const members = [
    "/avatars/avatar1.jpg",
    "/avatars/avatar2.jpg",
    "/avatars/avatar3.jpg",
    "/avatars/avatar4.jpg",
    "/avatars/avatar5.jpg",
  ];
  return (
    <div className="bg-gray-800 p-4 rounded-lg mt-6">
      <h3 className="text-lg font-bold text-white mb-4">Community Members</h3>
      <div className="flex -space-x-3 mb-4">
        {members.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="Member Avatar"
            className="w-10 h-10 rounded-full border-2 border-gray-900"
          />
        ))}
      </div>
      <div className="text-center">
        <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
          Connect to Discord
        </button>
        <p className="text-sm text-gray-400 mt-2">1,247 members online</p>
      </div>
    </div>
  );
};

export default CommunityMembers;
