import { FaPlay, FaStar } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";

const GameCard = ({
  title,
  hoursPlayed,
  rating,
  progress,
  totalAchievements,
  installed,
  status,
  tag,
  thumbnail,
}) => {
  return (
    <div className="relative bg-gray-900 p-3 rounded-xl shadow hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
      <img
        src={thumbnail}
        alt={title}
        className="rounded-lg mb-3 h-50 w-full object-cover"
      />

      <div className="absolute top-3 right-4 flex gap-2">
        {tag && (
          <span className="bg-orange-500 text-sm font-semibold px-2 py-1 rounded-full mt-1">
            {tag}
          </span>
        )}
        {installed && (
          <span className="flex mt-1 items-center gap-1 bg-green-600 text-sm font-semibold px-2 py-1 rounded-full">
            {" "}
            <span>
              <FaPlay size={10} className="mt-1" />
            </span>
            Installed
          </span>
        )}
      </div>

      <h3 className="text-xl font-bold p-2">{title}</h3>
      <div className="flex items-center justify-between text-gray-400 mb-2">
        <p className="text-md text-purple-400 p-2 font-bold">
          {hoursPlayed} hours
        </p>
        <div className="text-white text-md mb-2 flex items-center gap-2">
          <FaStar className="text-yellow-400 text-lg" /> {rating}
        </div>
      </div>

      <div className="flex items-center justify-between text-gray-400 mb-1">
        <p className="text-sm text-white mb-2 font-semibold">
          Achievement Progress
        </p>
        <p className="text-sm text-white font-semibold">
          {progress}/{totalAchievements}
        </p>
      </div>
      <div className="w-full bg-gray-700 h-2 rounded-full mb-2">
        <div
          className="bg-gradient-to-r from-violet-800 to-sky-400 h-2 rounded-full"
          style={{ width: `${(progress / totalAchievements) * 100}%` }}
        ></div>
      </div>

      <button
        className={`flex items-center justify-center gap-2 w-full py-2 rounded-md text-lg font-semibold mt-4 ${
          installed
            ? "bg-gradient-to-r from-violet-500 to-sky-600"
            : "bg-gradient-to-r from-green-500 to-sky-700"
        } hover:opacity-90`}
      >
        {installed ? <FaPlay size={20} /> : <FaDownload size={20} />}
        {installed ? "Play Now" : "Download"}
      </button>
    </div>
  );
};

export default GameCard;
