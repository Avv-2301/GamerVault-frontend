import React from "react";

const SaleBanner = () => {
  return (
    <div className="bg-[#2a94f7] text-black text-center py-3 px-4 flex justify-center items-center gap-10">
      <span className="font-semibold text-white text-lg">
        SUMMER SALE: Up to 80% OFF on selected games!
      </span>
      <button className="bg-[#fcac0a] text-black font-bold px-4 py-2 rounded hover:bg-gray-800">
        Shop Now
      </button>
    </div>
  );
};

export default SaleBanner;
