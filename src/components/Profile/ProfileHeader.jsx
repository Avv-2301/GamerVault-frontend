import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaCrown } from "react-icons/fa";

const ProfileHeader = () => {
  return (
    <div className="bg-gradient-to-r from-sky-950 via-violet-950 to-green-950 text-white p-16 rounded-xl shadow-lg flex flex-col md:flex-row items-center md:items-start gap-6">
      {/* Avatar */}
      <div className="relative">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Profile"
          className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-blue-500"
        />
        <span className="absolute bottom-1 right-1 flex items-center gap-1 text-white bg-green-500 px-2 py-0.5 rounded-full text-xs font-semibold shadow">
          ONLINE
        </span>
      </div>

      {/* Profile Info */}
      <div className="flex-1 space-y-2">
        <div className="flex items-center gap-4 justify-start md:justify-start flex-wrap text-center md:text-left">
          <div className="flex items-start flex-col gap-4 flex-wrap">
            <h2 className="text-4xl font-bold text-cyan-300">AVV</h2>
            <div className="bg-purple-600 text-white text-lg px-3 py-1 rounded-lg font-bold ">
              <span className="flex items-center gap-2">
                <FaCrown /> DIAMOND RANK
              </span>
            </div>
          </div>
          <span className="text-yellow-400 mt-14 font-bold text-lg">
            Level 87
          </span>
        </div>

        <p className="text-md font-semibold text-gray-400">
          Elite gamer with 5+ years of competitive experience. Specializing in
          FPS and Strategy games. Always looking for new challenges and
          teammates to dominate the battlefield.
        </p>

        <div className="flex items-center gap-4 text-md font-semibold text-blue-500 mt-4 flex-wrap ">
          <span className="flex items-center gap-1">
            <FaCalendarAlt /> Joined March 2019
          </span>
          <span className="flex items-center gap-1 text-green-400">
            <FaMapMarkerAlt /> Los Angeles, CA
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
