import React from "react";
import { IoNewspaperOutline } from "react-icons/io5";

const BillingInformation = () => {
  return (
    <div className="bg-gray-900 p-5 rounded-xl shadow">
      <div className="flex items-center mb-4 gap-3">
        <IoNewspaperOutline className="mb-3 text-violet-500" size={24} />
        <h2 className="text-2xl font-bold mb-4">Billing Information</h2>
      </div>

      <div className="bg-gray-900 p-3 pt-1 rounded-lg space-y-6">
        {/* Payment Info Section */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Card Number */}
            <div className="flex flex-col">
              <label className="text-md text-white font-semibold mb-1">Card Number</label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                className="bg-gray-800 p-3 rounded-lg focus:outline-none text-gray-400 font-semibold"
              />
            </div>
            {/* Cardholder Name */}
            <div className="flex flex-col">
              <label className="text-md text-white font-semibold mb-1">
                Cardholder Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="bg-gray-800 p-3 rounded-lg focus:outline-none text-gray-400 font-semibold"
              />
            </div>
            {/* Expiry Date */}
            <div className="flex flex-col">
              <label className="text-md text-white font-semibold mb-1">
                Expiry Date (MM/YY)
              </label>
              <input
                type="text"
                placeholder="MM/YY"
                className="bg-gray-800 p-3 rounded-lg focus:outline-none text-gray-400 font-semibold"
              />
            </div>
            {/* CVV */}
            <div className="flex flex-col">
              <label className="text-md text-white font-semibold mb-1">CVV</label>
              <input
                type="text"
                placeholder="123"
                className="bg-gray-800 p-3 rounded-lg focus:outline-none text-gray-400 font-semibold"
              />
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div className="border-t border-gray-700 pt-6">
          <h3 className="text-xl font-semibold mb-4 text-white">
            Billing Address
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Street Address */}
            <div className="flex flex-col md:col-span-2">
              <label className="text-md text-white font-semibold mb-1">
                Street Address
              </label>
              <input
                type="text"
                placeholder="123 Main Street"
                className="bg-gray-800 p-3 rounded-lg focus:outline-none text-gray-400 font-semibold"
              />
            </div>
            {/* City */}
            <div className="flex flex-col">
              <label className="text-md text-white font-semibold mb-1">City</label>
              <input
                type="text"
                placeholder="New York"
                className="bg-gray-800 p-3 rounded-lg focus:outline-none text-gray-400 font-semibold"
              />
            </div>
            {/* State */}
            <div className="flex flex-col">
              <label className="text-md text-white font-semibold mb-1">State</label>
              <select className="bg-gray-800 p-3 rounded-lg focus:outline-none font-semibold">
                <option>Select State</option>
                <option>New York</option>
                <option>California</option>
              </select>
            </div>
            {/* ZIP Code */}
            <div className="flex flex-col">
              <label className="text-md text-white font-semibold mb-1">ZIP Code</label>
              <input
                type="text"
                placeholder="10001"
                className="bg-gray-800 p-3 rounded-lg focus:outline-none"
              />
            </div>
            {/* Country */}
            <div className="flex flex-col">
              <label className="text-md text-white font-semibold mb-1">Country</label>
              <select className="bg-gray-800 p-3 rounded-lg focus:outline-none">
                <option>United States</option>
                <option>Canada</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingInformation;
