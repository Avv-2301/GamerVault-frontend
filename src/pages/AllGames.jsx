import React from "react";
import GameCard from "../components/AllGames/GameCard";

const AllGames = () => {
  const gamesData = [
    {
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/5e7ce7a9b3-54bb67d6d36db9172eec.png",
      title: "Cyber Nexus",
      genres: ["Action", "Sci-Fi"],
      rating: 4.2,
      reviews: "1.2k",
      price: 39.99,
      isNew: true,
    },
    {
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/fafdaf68e7-ebb5bb8f2e7aaf856938.png",
      title: "Dragon’s Quest",
      genres: ["RPG", "Fantasy"],
      rating: 4.8,
      reviews: "3.5k",
      price: 24.99,
      oldPrice: 49.99,
      discount: "-50%",
    },
    {
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/ca7b4fabb0-68dd6658c9be3c98481f.png",
      title: "Stellar Odyssey",
      genres: ["Adventure", "Space"],
      rating: 4.1,
      reviews: "890",
      isFree: true,
    },
    {
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/aa080a80ce-643c83053c1bb07679c0.png",
      title: "Speed Legends",
      genres: ["Racing", "Sports"],
      rating: 4.6,
      reviews: "2.1k",
      price: 29.99,
    },
    {
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/43b050755b-429ffffae487d99b14ff.png",
      title: "Dark Shadows",
      genres: ["Horror", "Survival"],
      rating: 4.3,
      reviews: "756",
      price: 34.99,
      is18Plus: true,
    },
    {
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/1205996c17-ac06273c373f4348b493.png",
      title: "Mind Maze",
      genres: ["Puzzle", "Strategy"],
      rating: 4.0,
      reviews: "432",
      price: 14.99,
    },
    {
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/16658825d2-b51ed5a1b68424471e8b.png",
      title: "Battle Zone",
      genres: ["Shooter", "Multiplayer"],
      rating: 4.7,
      reviews: "5.2k",
      isFree: true,
      isBeta: true,
    },
    {
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/9e5314fd73-ae4cfcfe0cbfc8887cd5.png",
      title: "Pixel Journey",
      genres: ["Platformer", "Indie"],
      rating: 4.9,
      reviews: "1.8k",
      price: 19.99,
    },
  ];
  return (
    <div className="bg-[#0f0f1c] min-h-screen text-white px-8 py-10">
      {/* Search bar */}
      <div className="mb-6 flex items-center justify-center">
        <input
          type="text"
          placeholder="Search for games..."
          className="w-1/2 bg-[#1c1c2b] text-white px-4 py-3 rounded-md placeholder-gray-400 focus:outline-none"
        />
      </div>

      {/* Filters */}
      <div className="flex items-center justify-center gap-4 mb-8 bg-gray-900 p-4 rounded-md w-3/4 mx-auto">
        <h4 className="mt-2 mb-2 text-sm text-gray-400">Genre: </h4>
        <select className="bg-[#1c1c2b] px-6 py-2 rounded-md text-white">
          <option>All Genres</option>
        </select>
        <h4 className="mt-2 mb-2 text-sm text-gray-400">Price: </h4>
        <select className="bg-[#1c1c2b] px-4 py-2 rounded-md text-white">
          <option>All Prices</option>
          <option>Free</option>
        </select>
        <h4 className="mt-2 mb-2 text-sm text-gray-400">Platform: </h4>
        <select className="bg-[#1c1c2b] px-4 py-2 rounded-md text-white">
          <option>All Platforms</option>
        </select>
        <div className="flex items-center gap-2 ml-auto">
          <h4 className="text-sm text-gray-400">Sort By:</h4>
          <select className="bg-[#1c1c2b] px-4 py-2 rounded-md text-white">
            <option>Popularity</option>
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Grid of Games */}
      <div className="w-11/12 max-w-screen-xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">All Games</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mb-6">
          {gamesData.map((game, index) => (
            <GameCard key={index} game={game} />
          ))}
        </div>
      </div>

      {/* Load More */}
      <div className="text-center mt-10">
        <button className="bg-[#2c2c3e] hover:bg-[#3b3b53] text-white px-6 py-3 rounded-md">
          Load More Games
        </button>
      </div>
    </div>
  );
};

export default AllGames;
