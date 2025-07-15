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
    <div className="flex flex-wrap gap-2 bg-gray-800 px-8 py-3 rounded-lg cursor-pointer">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="bg-[#1f1f2e] text-sm px-3 py-1 rounded-full text-white"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default GameTags;
