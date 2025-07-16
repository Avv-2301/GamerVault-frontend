import React from "react";

const genres = [
  { name: "First Person Shooter", color: "bg-purple-400", width: "w-4/5" },
  { name: "Strategy", color: "bg-green-400", width: "w-3/5" },
  { name: "Battle Royale", color: "bg-blue-400", width: "w-2/3" },
  { name: "RPG", color: "bg-yellow-400", width: "w-1/2" },
];

const FavoriteGenres = () => {
  return (
    <div className="bg-gradient-to-r from-[#1a2a3c] to-[#274060] p-6 rounded-xl shadow-lg text-white">
      <h2 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2">
        Favorite Genres
      </h2>
      <div className="space-y-4">
        {genres.map((genre, index) => (
          <div key={index}>
            <p className="text-sm font-medium mb-1">{genre.name}</p>
            <div className="w-full h-3 bg-gray-700 rounded-full">
              <div className={`h-3 rounded-full ${genre.color} ${genre.width}`}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteGenres;
