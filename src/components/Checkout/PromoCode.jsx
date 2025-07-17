import React from "react";
import { FaTag } from "react-icons/fa";

const PromoCode = () => {
  return (
    <div className="bg-gray-900 p-5 rounded-xl shadow">
      <div className="flex items-center mb-4 gap-2">
        <FaTag className="mb-2 text-blue-500" size={18}/>
        <h2 className="text-2xl font-semibold mb-3">Promo Code</h2>
      </div>
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Enter promo code"
          className="flex-1 px-3 py-2 rounded-lg bg-gray-800 text-gray-200 font-semibold focus:outline-none"
        />
        <button className="bg-indigo-500 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-600">
          Apply
        </button>
      </div>
    </div>
  );
};

export default PromoCode;
