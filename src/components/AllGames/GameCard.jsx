import React from "react";
import { Link } from "react-router-dom";

const GameCard = ({ game }) => {
  const {
    image,
    title,
    genres,
    rating,
    reviews,
    price,
    oldPrice,
    isFree,
    isNew,
    isBeta,
    is18Plus,
    discount,
  } = game;
  return (
    <div className="bg-[#1c1c2b] text-white rounded-lg overflow-hidden shadow-md">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-38 object-cover" />

        {isNew && (
          <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
            NEW
          </span>
        )}
        {isBeta && (
          <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
            BETA
          </span>
        )}
        {is18Plus && (
          <span className="absolute top-2 right-2 bg-orange-600 text-white text-xs px-2 py-1 rounded-full">
            18+
          </span>
        )}
        {discount && (
          <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
            {discount}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-400">{genres.join(" • ")}</p>
        <div className="flex items-center text-yellow-400 text-sm mt-1">
          ★ {rating} <span className="ml-1 text-gray-300">({reviews})</span>
        </div>
        <div className="mt-2 font-semibold text-green-400">
          {isFree ? (
            "FREE"
          ) : (
            <>
              <span className="text-sky-400">${price}</span>
              {oldPrice && (
                <span className="ml-2 line-through text-sm text-gray-400">
                  ${oldPrice}
                </span>
              )}
            </>
          )}
        </div>
        <div className="mt-4 flex gap-2">
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1 rounded text-sm">
            Add to Library
          </button>
          <Link to={`/game/${game.id}`} className="ml-auto">
            <button className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm">
            View Details
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
