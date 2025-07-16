import React from "react";
import { useState } from "react";
import { IoEye, IoEyeOff, IoGameController } from "react-icons/io5";
import {
  FaGoogle,
  FaDiscord,
  FaApple,
  FaUser,
  FaEnvelope,
  FaLock,
  FaShieldAlt,
  FaCalendar,
} from "react-icons/fa";
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0e0e0e] text-white px-4">
      <div className="w-full max-w-md p-8 rounded-xl border border-gradient-to-r from-slate-950 to-gray-950 shadow-lg bg-gradient-to-b from-[#fc0324] to-[#2403fc] relative mb-10 mt-10">
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 flex items-center justify-center">
            <IoGameController size={24} className="text-gray-800 animate-bounce" />
          </div>
        </div>

        <h2 className="text-center text-3xl font-bold mb-2 bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
          JOIN THE GAME VAULT
        </h2>
        <p className="text-center text-md font-semibold mb-6 text-gray-400">
          Create your gaming account and level up!
        </p>

        <form className="space-y-4 text-sm">
          <div className="relative">
            <FaUser
              className="absolute top-1/2 left-3 transform -translate-y-1/2 text-blue-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Choose your username"
              className="w-full pl-10 p-3 bg-black border border-gray-700 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-300 font-semibold text-lg"
            />
          </div>

          <div className="relative">
            <FaEnvelope
              className="absolute top-1/2 left-3 transform -translate-y-1/2 text-blue-400"
              size={16}
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full pl-10 p-3 bg-black border border-gray-700 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-300 font-semibold text-lg"
            />
          </div>
          <div className="relative">
            <FaLock
              className="absolute top-1/2 left-3 transform -translate-y-1/2 text-blue-400"
              size={16}
            />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create password"
              className="w-full pl-10 p-3 bg-black border border-gray-700 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-300 font-semibold text-lg"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-3 right-3 text-gray-400"
            >
              {showPassword ? (
                <IoEye className="mt-2 text-gray-300" size={18} />
              ) : (
                <IoEyeOff className="mt-2 text-gray-300" size={18} />
              )}
            </button>
          </div>
          <div className="h-1 w-full bg-gray-600 rounded"></div>
          <div className="relative">
            <FaShieldAlt
              className="absolute top-1/2 left-3 transform -translate-y-1/2 text-blue-400"
              size={16}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full pl-10 p-3 bg-black border border-gray-700 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-300 font-semibold text-lg"
            />
          </div>
          <div className="relative">
            <FaCalendar
              className="absolute top-1/2 left-3 transform -translate-y-1/2 text-blue-400"
              size={16}
            />
            <input
              type="date"
              className="w-full pl-10 p-3 bg-black border border-gray-700 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-300 font-semibold text-lg"
            />
          </div>
          <label className="flex items-center space-x-2 font-semibold text-md text-gray-400">
            <input type="checkbox" className="accent-pink-500 h-10" />
            <span>
              I agree to the{" "}
              <a href="#" className="text-blue-400">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-yellow-400">
                Privacy Policy
              </a>
            </span>
          </label>
          <button
            type="submit"
            className="w-full p-3 rounded-lg text-white font-bold bg-gradient-to-r from-blue-500 to-pink-500 hover:opacity-90 transition"
          >
            JOIN THE GAME
          </button>
        </form>

        <p className="text-center text-lg font-semibold text-gray-500 mt-4">
          Already have an account?{" "}
          <Link to={"/login"} className="text-blue-400">
            Log in here
          </Link>
        </p>

        <div className="flex items-center justify-center gap-4 mt-6">
          <button className="px-10 h-10 rounded-lg bg-black border hover:bg-[#2a2a2a]">
            <FaGoogle size={18} />
          </button>
          <button className="px-10 h-10 rounded-lg bg-black border hover:bg-[#2a2a2a]">
            <FaDiscord size={18} />
          </button>
          <button className="px-10 h-10 rounded-lg bg-black border hover:bg-[#2a2a2a]">
            <FaApple size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
