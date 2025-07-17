import React from "react";
import { LuNotepadText } from "react-icons/lu";
import { FaLock, FaShieldAlt } from "react-icons/fa";

const ReviewOrder = () => {
  return (
    <div className="bg-gray-900 p-5 rounded-xl shadow">
      <div className="flex items-center mb-4 gap-2">
        <LuNotepadText className="text-2xl text-indigo-400 mb-2" />
        <h2 className="text-2xl font-bold mb-3">Review Order</h2>
      </div>
      <div className="space-y-3 text-sm font-semibold text-gray-400">
        <div className="flex justify-between">
          <span>Items</span>
          <span>$69.98</span>
        </div>
        <div className="flex justify-between">
          <span>Savings</span>
          <span className="text-green-500">-$30.00</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span>$3.20</span>
        </div>
        <div className="flex justify-between text-lg font-bold text-indigo-400 border-t pt-3">
          <span>Total</span>
          <span>$73.18</span>
        </div>
      </div>

      <button className="w-full mt-6 bg-indigo-500 py-4 flex items-center justify-center gap-2 rounded-lg font-bold hover:bg-indigo-600 mb-2">
        <FaLock />
        Complete Purchase
      </button>
      <button className="w-full mt-2 border text-md font-bold border-gray-600 py-4 rounded-lg hover:bg-gray-700">
        Continue Shopping
      </button>
      <div className="text-center mt-4 text-gray-500 font-semibold">
        <p className="text-xs text-gray-400 mt-2 flex items-center justify-center gap-2">
          <FaShieldAlt />
          Secure 256-bit SSL encryption
        </p>
        <p className="text-xs text-gray-400 mt-2">
          By completing this purchase, you agree to our Terms of Service and
          Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default ReviewOrder;
