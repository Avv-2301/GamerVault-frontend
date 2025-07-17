import React from "react";
import { FaGamepad } from "react-icons/fa6";

const OrderSummary = () => {
  return (
    <div className="bg-gray-900 p-5 rounded-xl shadow">
      <div className="flex items-center gap-2">
        <FaGamepad className="mb-3 text-blue-600" size={24} />
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
      </div>
      <div className="space-y-4">
        {/* Example Product */}
        <div className="flex flex-col justify-start bg-gray-800 p-3 rounded-lg border-b border-gray-400">
          <div className="flex items-center gap-3">
            <img
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/2bca39aaad-aff93bbb8c305adb3498.png"
              alt="title"
              className="h-16 w-16 rounded-lg"
            />
            <div>
              <p className="font-semibold text-lg">Cyberpunk 2077</p>
              <p className="text-sm font-semibold text-gray-400">Digital Download</p>
              <span className="text-green-500 font-semibold">$29.99</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-md text-gray-400 font-semibold">
          <span>Subtotal</span>
          <span>$69.98</span>
        </div>
        <div className="flex justify-between text-md font-semibold text-green-500">
          <span>Discount</span>
          <span>-$30.00</span>
        </div>
        <div className="flex justify-between text-md font-semibold text-gray-400">
          <span>Tax</span>
          <span>$3.20</span>
        </div>
        </div>
        <div className="flex justify-between text-lg font-bold text-indigo-400 border-t pt-3">
          <span>Total</span>
          <span>$73.18</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
