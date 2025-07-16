import React from "react";

const genres = [
  { name: "First Person Shooter", color: "bg-purple-400", width: "w-4/5" },
  { name: "Strategy", color: "bg-green-400", width: "w-3/5" },
  { name: "Battle Royale", color: "bg-blue-400", width: "w-2/3" },
  { name: "RPG", color: "bg-yellow-400", width: "w-1/2" },
];

const FavoriteGenres = () => {
  return (
    <div className="bg-gradient-to-r from-sky-950 via-violet-950 to-green-950 p-6 rounded-xl shadow-lg text-white">
      <h2 className="text-3xl text-blue-400 font-bold mb-4 pb-2">
        Favorite Genres
      </h2>
      <div className="space-y-4">
        {genres.map((genre, index) => (
          <div key={index}>
            <p className="text-lg font-semibold mb-1 text-gray-300">
              {genre.name}
            </p>
            <div className="w-full h-3 bg-gray-700 rounded-full">
              <div
                className={`h-3 rounded-full ${genre.color} ${genre.width}`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteGenres;
