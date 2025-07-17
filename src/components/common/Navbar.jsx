import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"; 

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const token = true;
  const user = true;

  return (
    <header className="bg-[#0d1117] text-white px-8 py-6 flex justify-between items-center">
      <Link to="/" className="text-4xl font-bold text-blue-500">
        Gamer's <span className="text-4xl font-bold text-yellow-500">Vault</span>
      </Link>

      <nav className="space-x-6 font-semibold text-xl">
        <Link to="/store">Store</Link>
        <Link to="/community">Community</Link>
        <a href="/">About</a>
        <a href="/">Support</a>
      </nav>

      <div className="flex items-center gap-4 relative">
        <input
          type="text"
          placeholder="Search games..."
          className="px-4 py-2 rounded-xl bg-[#1f1f2e] text-sm text-white font-semibold placeholder-gray-300 focus:outline-none border border-gray-600 focus:border-yellow-500 transition-colors w-64"
        />

        {token && user ? (
          <div className="flex items-center gap-4">
            <Link
              to="/cart"
              className="relative text-xl cursor-pointer hover:text-yellow-400"
            >
              <FaShoppingCart />
            </Link>
            <div className="relative">
              <span className="text-xl cursor-pointer" onClick={toggleDropdown}>
                <img
                  src="https://github.com/shadcn.png"
                  alt="Profile"
                  className="rounded-full h-10 w-10 cursor-pointer"
                />
              </span>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition-colors font-semibold text-md"
            >
              Login
            </Link>
            <Link
              to="/sign-up"
              className="px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition-colors font-semibold text-md"
            >
              Sign-Up
            </Link>
          </div>
        )}

        {isDropdownOpen && (
          <div className="absolute right-0 top-10 mt-2 w-40 bg-[#1f1f2e] rounded-md shadow-lg py-2 z-50 border border-gray-600">
            <Link
              to="/profile"
              className="block px-4 py-2 text-md font-semibold text-white hover:bg-gray-700"
            >
              Profile
            </Link>
            <Link
              to="/library"
              className="block px-4 py-2 text-md font-semibold text-white hover:bg-gray-700"
            >
              My Library
            </Link>
            <button
              onClick={() => alert("Logged out")}
              className="w-full text-left px-4 py-2 text-md font-semibold text-white hover:bg-gray-700"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
