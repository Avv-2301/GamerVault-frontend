import React from "react";
import { Link } from "react-router-dom";

const RecommendedGames = () => {
  const games = [
    {
      id: 1,
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/5cae88c6c9-8a5fa9fdf34438b7b765.png",
      name: "Stellar Odyssey",
      price: "$49.99",
    },
    {
      id: 2,
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/082ee5791a-a261ba00656b7bf1810e.png",
      name: "Neon Uprising",
      price: "$39.99",
    },
  ];

  return (
    <div className="bg-[#1f1f2e] p-6 rounded-md">
      <h4 className="text-lg font-semibold mb-4 text-white">
        You Might Also Like
      </h4>
      <ul className="space-y-4">
        {games.map((game, idx) => (
          <Link to={`/game/${game.id}`} className="block" key={idx}>
            <li key={idx} className="flex items-center gap-4">
              <img
                src={game.image}
                alt={game.name}
                className="w-12 h-12 object-cover rounded-md"
              />
              <div className="text-sm">
                <p className="text-gray-300">{game.name}</p>
                <p className="text-white font-medium">{game.price}</p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default RecommendedGames;
