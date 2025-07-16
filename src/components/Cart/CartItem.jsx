// src/components/Cart/CartItem.jsx
import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const CartItem = ({ item }) => {
  const { image, title, platform, price, originalPrice, discount } = item;

  return (
    <div className="flex items-center justify-between bg-[#1f1f2e] p-4 rounded-lg shadow-md border border-gray-700">
      {/* Image */}
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={title}
          className="w-24 h-24 object-cover rounded-md"
        />
        <div>
          <h3 className="text-xl font-bold text-blue-500">{title}</h3>
          <p className="text-sm font-semibold text-gray-400">{platform}</p>
        </div>
      </div>

      {/* Price Section */}
      <div className="flex flex-col items-end gap-1 text-right">
        {originalPrice && (
          <span className="text-sm line-through text-gray-400">
            ${originalPrice.toFixed(2)}
          </span>
        )}
        <span className="text-lg font-bold text-green-400">
          ${price.toFixed(2)}
        </span>
        {discount && (
          <span className="text-sm font-semibold text-black bg-yellow-500 w-20 text-center rounded-lg">
            -{discount}
            <span> OFF</span>
          </span>
        )}
      </div>

      {/* Remove Button */}
      <button
        className="ml-4 text-red-500 hover:text-red-400 transition text-xl cursor-pointer"
        title="Remove from cart"
      >
        <FaTrashAlt />
      </button>
    </div>
  );
};

export default CartItem;
