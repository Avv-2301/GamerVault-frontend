import React from "react";
import { Link } from "react-router-dom";

const SaleBanner = () => {
  return (
    <div className="bg-[#2a94f7] text-black text-center py-3 px-4 flex justify-center items-center gap-10">
      <span className="font-bold text-white text-xl">
        SUMMER SALE: Up to 80% OFF on selected games!
      </span>
      <Link to={'/all-games'}>
      <button className="bg-[#fcac0a] text-black font-bold px-4 py-2 rounded hover:bg-yellow-600 cursor-pointer transition duration-300">
        Shop Now
      </button>
      </Link>
    </div>
  );
};

export default SaleBanner;
