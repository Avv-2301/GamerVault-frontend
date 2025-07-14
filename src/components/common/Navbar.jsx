import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-[#0d1117] text-white px-8 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-400">Gamer Vault</h1>
      <nav className="space-x-6">
        <Link to="/" className="text-yello-400">
          Home
        </Link>
        <Link to="/all-games">All Games</Link>
        <a href="/">Library</a>
        <a href="/">Profile</a>
        <a href="/">Shop</a>
      </nav>
      <div className="space-x-3">
        <span>🔍</span>
        <span>🛒</span>
        <span>👤</span>
      </div>
    </header>
  );
};

export default Navbar;
