import React from "react";

const GameTags = () => {
  const tags = [
    "Action",
    "RPG",
    "Open World",
    "Cyberpunk",
    "Single Player",
    "PC",
    "PlayStation 5",
    "Xbox Series X",
  ];
  return (
    <div className="flex flex-wrap gap-2 bg-gray-800 px-8 py-3 rounded-lg cursor-pointer font-semibold text-gray-300">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="bg-[#1f1f2e] text-md px-3 py-1 rounded-full text-white p-4 hover:bg-[#2c2c3e] transition duration-200"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default GameTags;
