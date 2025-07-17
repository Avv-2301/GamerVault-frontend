import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const GameHero = () => {
  const { id } = useParams();
  console.log(id, "GAMEID")
  return (
    <div
      className="relative h-[600px] bg-cover bg-center rounded-xl overflow-hidden"
      style={{
        backgroundImage: `url(https://storage.googleapis.com/uxpilot-auth.appspot.com/f32ad3fe1d-0f93714a4a49d84a6123.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
        <h1 className="text-4xl font-bold mb-2">Cyber Nexus 2077</h1>
        <p className="mb-2 text-gray-400 font-semibold">
          Experience the ultimate cyberpunk adventure in a world where
          technology and humanity collide.
        </p>
        <p className="text-md font-semibold text-gray-400">
          Developer: <span className="text-white">NeonStorm Studios</span>{" "}
          &nbsp;|&nbsp; Release:{" "}
          <span className="text-white">March 15, 2024</span> &nbsp;|&nbsp;
          Rating: ⭐ 4.8/5
        </p>
        <div className="mt-4 flex gap-3 flex-wrap">
          <button className="bg-indigo-600 px-4 py-2 rounded text-white cursor-pointer font-semibold text-lg ">
            Add To Cart
          </button>
          <Link to={`/checkout/${id}`}>
            <button className="bg-green-600 px-4 py-2 rounded text-white cursor-pointer text-lg font-semibold">
            Buy Now - $59.99
          </button>
          </Link>
          <button className="bg-gray-800 px-4 py-2 rounded text-white cursor-pointer text-lg font-semibold">
            ♡ Wishlist
          </button>
        </div>
        <div className="absolute bottom-6 right-6 bg-gray-800 text-white p-3 w-30 rounded-md">
          <p className="text-3xl text-green-400 font-bold">$59.99</p>
          <p className="text-md line-through text-gray-300">$79.99</p>
          <p className="text-md text-red-400">25% OFF</p>
        </div>
      </div>
    </div>
  );
};

export default GameHero;
