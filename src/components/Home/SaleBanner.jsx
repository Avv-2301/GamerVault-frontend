import React from "react";
import { Link } from "react-router-dom";
import { FaFire } from "react-icons/fa";

const SaleBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#ff416c] via-[#ff4b2b] to-[#ff416c] text-white py-4 px-6 flex flex-col lg:flex-row justify-center items-center gap-6">
      <div className="flex items-center gap-3 text-center lg:text-left">
        <FaFire className="text-3xl text-yellow-300 animate-bounce" />
        <h2 className="text-2xl lg:text-3xl font-extrabold tracking-wide glow">
          SUMMER SALE: <span className="text-yellow-300">Up to 80% OFF</span> on top games!
        </h2>
      </div>

      <Link to="/all-games">
        <button className="bg-gradient-to-r from-yellow-400 to-yellow-200 text-black font-bold px-6 py-2 rounded-full shadow-md hover:scale-105 transition transform duration-300">
          🛍️ Shop Now
        </button>
      </Link>
    </div>
  );
};

export default SaleBanner;
