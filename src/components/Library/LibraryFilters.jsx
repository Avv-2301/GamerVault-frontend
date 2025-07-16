import { GiHamburgerMenu } from "react-icons/gi";
import { FaClock, FaRegCircleQuestion, FaPuzzlePiece } from "react-icons/fa6";
import { FaHeart, FaCar } from "react-icons/fa";

const filters = [
  { icon: <GiHamburgerMenu />, category: "All Games" },
  { icon: <FaClock />, category: "Recently Played" },
  { icon: <FaHeart />, category: "Favorites" },
  { icon: <FaRegCircleQuestion />, category: "Action" },
  { icon: <FaPuzzlePiece />, category: "Puzzle" },
  { icon: <FaCar />, category: "Racing" },
];

const LibraryFilters = () => (
  <div className="flex flex-wrap gap-3 mb-4">
    {filters.map((filter, idx) => (
      <button
        key={idx}
        className={`px-4 py-2 rounded-lg text-lg font-semibold flex items-center gap-4 cursor-pointer ${
          idx === 0
            ? "bg-purple-600 transition-colors duration-300 hover:bg-purple-500 text-white"
            : "bg-gray-800 hover:bg-gray-700 text-gray-300"
        }`}
      >
        {filter.icon}
        {filter.category}
      </button>
    ))}
  </div>
);

export default LibraryFilters;
