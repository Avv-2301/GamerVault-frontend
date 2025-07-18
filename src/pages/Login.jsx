import React from "react";
import { useState } from "react";
import {
  FaUser,
  FaLock,
  FaEye,
  FaGoogle,
  FaDiscord,
  FaGlobe,
} from "react-icons/fa";
import { IoGameController, IoEye, IoEyeOff } from "react-icons/io5";
import {Link} from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <div className="min-h-screen bg-[#0e0e0e] flex items-center justify-center relative overflow-hidden">
      <div className="border border-gradient-to-r from-slate-950 to-gray-950 shadow-lg bg-gradient-to-b from-[#fc0324] to-[#2403fc] p-8 rounded-xl shadow-xl w-full max-w-md border border-blue-300">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 flex items-center justify-center">
            <IoGameController size={24} className="text-gray-800 animate-bounce" />
          </div>
        </div>

        <h2 className="text-center text-3xl font-bold text-white mb-1 space-x-2">
          <span className="text-sky-500">GAMER</span>
          <span className="text-yellow-400">VAULT</span>
        </h2>
        <p className="text-center text-gray-400 text-md font-semibold mb-6">
          Welcome back, Gamer!
        </p>

        {/* Username/Email */}
        <div className="mb-4 relative">
          <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-blue-500" />
          <input
            type="text"
            placeholder="Enter username or email"
            className="w-full pl-10 p-3 bg-black border border-gray-700 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-300 font-semibold text-lg"
          />
        </div>

        {/* Password */}
        <div className="mb-2 relative">
          <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-blue-500" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
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

        <div className="flex justify-between items-center text-md font-semibold mb-4 text-white">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox accent-blue-500" />
            Remember me
          </label>
          <a href="#" className="text-blue-400 hover:underline">
            Forgot Password?
          </a>
        </div>

        <button className="w-full bg-gradient-to-r from-blue-500 to-pink-500 hover:opacity-90 text-white font-semibold py-2 rounded mb-4 shadow-md text-lg">
          🔓 Login to Gamer Vault
        </button>

        <div className="flex items-center mb-4">
          <hr className="flex-grow border-gray-600" />
          <span className="mx-3 text-gray-400 text-md font-semibold">or continue with</span>
          <hr className="flex-grow border-gray-600" />
        </div>

        {/* Social Buttons */}
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-2 border border-gray-600 rounded p-2 text-white hover:bg-[#1e263a] font-semibold">
            <FaGoogle className="text-red-500" /> Continue with Google
          </button>
          <div className="flex gap-3">
            <button className="flex-1 border border-gray-600 rounded p-2 text-white hover:bg-[#1e263a] flex justify-center items-center">
              <FaDiscord className="text-indigo-400" size={20} />
            </button>
            <button className="flex-1 border border-gray-600 rounded p-2 text-white hover:bg-[#1e263a] flex justify-center items-center">
              <FaGlobe className="text-blue-400" size={20} />
            </button>
          </div>
        </div>

        <p className="text-center text-lg font-semibold text-gray-400 mt-6">
          New to Gamer Vault?{" "}
          <Link to={"/sign-up"} className="text-blue-400 hover:underline">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
