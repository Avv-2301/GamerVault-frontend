import React, { useState } from "react";
import { FaTicketSimple } from "react-icons/fa6";

const PromoCode = () => {
  const [code, setCode] = useState("");
  const [status, setStatus] = useState(null);

  const handleApply = () => {
    if (code.trim().toLowerCase() === "SAVE10") {
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="bg-gray-700 p-4 rounded-lg shadow-sm text-white space-y-3 border border-yellow-500">
      <div className="flex items-center gap-2 justify-start">
        <FaTicketSimple size={20} className="text-yellow-500 mt-1"/>
      <h3 className="text-xl font-semibold">Promo code</h3>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <input
          type="text"
          placeholder="Enter promo code"
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
            setStatus(null);
          }}
          className="flex-1 px-3 py-2 rounded-lg bg-[#0f0f1a] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors text-white placeholder-gray-400"
        />
        <button
          onClick={handleApply}
          className="bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-400 transition"
        >
          Apply
        </button>
      </div>

      {status === "success" && (
        <p className="text-green-400 text-sm">
          Promo code applied successfully!
        </p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-md font-semibold">Invalid promo code. Try again.</p>
      )}
    </div>
  );
};

export default PromoCode;
