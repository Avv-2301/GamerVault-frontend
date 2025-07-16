import { FaStar, FaTrophy } from "react-icons/fa";

const LibraryHeader = () => (
  <div className="mb-6 flex justify-between ">
    <div>
      <h1 className="text-4xl font-bold">My Game Library</h1>
      <p className="text-gray-300 mt-2 font-semibold">
        47 games • 1,247 hours played
      </p>
    </div>
    <div className="flex justify-between items-center mt-4 gap-x-6">
      <button>
        <span className="text-md font-bold text-white bg-purple-600 px-4 py-2 rounded hover:bg-purple-700 transition flex items-center gap-x-2">
          <FaTrophy size={16} />
          Level 23
        </span>
      </button>

      <button>
        <span className="text-md font-bold text-white bg-gradient-to-r from-purple-800 to-blue-600 px-4 py-2 rounded hover:bg-purple-700 transition flex items-center gap-x-2">
          <FaStar size={16} />
          8,450 XP
        </span>
      </button>
    </div>
  </div>
);

export default LibraryHeader;
