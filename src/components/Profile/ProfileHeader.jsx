import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaCircle } from "react-icons/fa";

const ProfileHeader = () => {
  return (
    <div className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white p-6 rounded-xl shadow-lg flex flex-col md:flex-row items-center md:items-start gap-6">
      {/* Avatar */}
      <div className="relative">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Profile"
          className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-blue-500"
        />
        <span className="absolute bottom-1 right-1 flex items-center gap-1 text-green-400 bg-[#1f2937] px-2 py-0.5 rounded-full text-xs font-semibold shadow">
          <FaCircle className="text-green-400 text-[10px]" />
          ONLINE
        </span>
      </div>

      {/* Profile Info */}
      <div className="flex-1 space-y-2">
        <div className="flex items-center gap-4 flex-wrap">
          <h2 className="text-2xl font-bold">CyberWolf_X</h2>
          <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
            💎 DIAMOND RANK
          </span>
          <span className="text-yellow-400 font-semibold">Level 87</span>
        </div>

        <p className="text-sm text-gray-300">
          Elite gamer with 5+ years of competitive experience. Specializing in FPS and Strategy games. Always looking for new challenges and teammates to dominate the battlefield.
        </p>

        <div className="flex items-center gap-4 text-sm text-gray-400 mt-2 flex-wrap">
          <span className="flex items-center gap-1">
            <FaCalendarAlt /> Joined March 2019
          </span>
          <span className="flex items-center gap-1">
            <FaMapMarkerAlt /> Los Angeles, CA
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
