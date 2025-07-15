import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../common/Loading";

const FeaturedGames = () => {
  const games = [
    {
      id: 101,
      title: "Dragon’s Quest",
      about: "Epic fantasy adventure",
      price: 29.99,
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/535721123b-23e279b68d6009940677.png",
    },
    {
      id: 102,
      title: "Stellar Odyssey",
      about: "Epic fantasy adventure",
      price: 39.99,
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/3a1224e085-d94ef69050c75a7d0b20.png",
    },
    {
      id: 103,
      title: "Speed Legends",
      about: "Epic fantasy adventure",
      price: 24.99,
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/1151efc11c-058070b917c83701ded6.png",
    },
    {
      id: 104,
      title: "Dark Shadows",
      about: "Epic fantasy adventure",
      price: 34.99,
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/f32ad3fe1d-0f93714a4a49d84a6123.png",
    },
  ];

  const [loading, setLoading] = useState(false);

  return (
    <section className="bg-indigo-950 text-white px-8 py-10">
      <h3 className="text-4xl font-bold mb-8">Featured Games</h3>
      <div className="grid md:grid-cols-4 gap-6">
        {loading ? (
          <Loading/>
        ) : (
          games.map((game, id) => (
            <Link to={`/game/${game.id}`} className="block mb-6" key={game.id}>
              <div className="bg-slate-800 p-4 rounded-lg shadow hover:shadow-lg mb-8">
                <img
                  src={game.image}
                  alt={game.title}
                  className="h-48 w-full object-cover rounded-lg"
                />
                <h4 className="mt-4 text-xl font-semibold">{game.title}</h4>
                <h6 className="mt-2 text-md font-semibold text-gray-500">
                  {game.about}
                </h6>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-yellow-400 text-lg">${game.price.toFixed(2)}</p>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </section>
  );
};

export default FeaturedGames;
