import React from "react";
import { FaDiscord } from "react-icons/fa6";

const JoinBanner = () => {
  return (
    <div className="bg-indigo-950 text-center text-white py-32">
      <h2 className="text-6xl font-bold mb-3 text-white drop-shadow-[0_0_6px_white]">
        JOIN THE SQUAD
      </h2>
      <p className="mb-6 font-semibold text-xl text-gray-300">
        Connect with gamers worldwide, share your victories, and dominate
        together
      </p>
      <div className="space-x-4 flex justify-center">
        <button className="bg-cyan-600 px-5 py-3 rounded-lg hover:bg-cyan-500 font-semibold text-lg shadow-[0_0_20px_rgba(6,182,212,0.8)]">
          Join Forums
        </button>
        <button className="border border-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-950 flex items-center gap-2 font-semibold text-lg text-cyan-400 hover:text-white transition-colors">
          <FaDiscord />
          Discord
        </button>
      </div>
    </div>
  );
};

export default JoinBanner;
