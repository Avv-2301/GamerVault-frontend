import React from "react";
import { Link } from "react-router-dom";
import { FaCreditCard, FaShieldAlt } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";

const CartSummary = ({ subtotal }) => {
  const estimatedTax = (subtotal * 0.1).toFixed(2); // 10% tax estimate
  const total = (subtotal + parseFloat(estimatedTax)).toFixed(2);

  return (
    <div className="bg-[#1f1f2e] p-6 rounded-lg shadow-lg space-y-4 text-white">
      <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2">
        Order Summary
      </h2>

      <div className="space-y-2 text-md">
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Estimated Tax:</span>
          <span>${estimatedTax}</span>
        </div>
        <div className="flex justify-between font-bold text-yellow-400 text-base border-t border-gray-700 pt-2">
          <span>Total:</span>
          <span>${total}</span>
        </div>
      </div>

      <Link to="/checkout">
        <button className="w-full bg-yellow-500 text-black py-4 rounded-md font-bold hover:bg-yellow-400 transition cursor-pointer flex items-center justify-center gap-2 mb-4">
          <FaCreditCard size={24} /> Proceed to Checkout
        </button>
      </Link>

      <Link to="/store">
        <button className="w-full bg-gray-600 text-white py-4 rounded-md font-bold hover:bg-gray-500 transition cursor-pointer flex items-center justify-center gap-2">
          <IoMdArrowBack size={24} /> Continue Shopping
        </button>
      </Link>

      <div className="text-sm text-gray-400 mt-8 w-full flex flex-col border-t border-gray-700 pt-4 rounded-md bg-gray-700 p-4 space-y-1">
        <p className="text-white text-md font-semibold flex items-center gap-2">
          <FaShieldAlt className="text-green-400" />
          Secure Checkout
        </p>
        <span className="text-gray-400 text-md">
          Your payment information is encrypted and secure
        </span>
      </div>
    </div>
  );
};

export default CartSummary;
