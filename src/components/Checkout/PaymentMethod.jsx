import React from "react";
import { FaCreditCard, FaWallet, FaPaypal  } from "react-icons/fa6";

const PaymentMethod = () => {
  const methods = [
    { name: "Credit/Debit Card", icon: <FaCreditCard className="text-violet-600"/> },
    { name: "PayPal", icon: <FaPaypal className="text-blue-400"/> },
    { name: "GameHub Wallet ($45.20 available)", icon: <FaWallet className="text-yellow-500"/> },
  ];

  return (
    <div className="bg-gray-900 p-5 rounded-xl shadow">
     <div className="flex items-center gap-3">
      <FaCreditCard className="mb-3 text-violet-600" size={24}/>
       <h2 className="text-2xl font-bold mb-4">Payment Method</h2>
     </div>
      <div className="space-y-3 pl-3">
        {methods.map((method, index) => (
          <label
            key={index}
            className="flex items-center gap-6 justify-start p-4 bg-slate-800 rounded-lg cursor-pointer hover:bg-gray-700"
          >
            <input type="radio" name="payment" className="accent-indigo-500" />
            <div className="flex items-center gap-4 font-semibold">
              <span className="text-xl">{method.icon}</span>
              <span>{method.name}</span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethod;
