import { IoIosChatboxes } from "react-icons/io";
import { FaBook, FaClipboard, FaTrophy } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="bg-gray-900 text-gray-200 w-64 p-6 border-r border-cyan-400 border-solid h-screen">
      <p className="text-cyan-400 font-bold mb-2 text-md">NAVIGATION</p>
      <div className="space-y-4">
        <p className="w-full rounded-lg flex items-center gap-3 text-md font-semibold hover:bg-gray-700 p-3 cursor-pointer hover:text-cyan-400">
          <span>
            <IoIosChatboxes className="mt-1" size={20} />
          </span>
          Forums
        </p>
        <p className="w-full rounded-lg flex items-center gap-3 text-md font-semibold hover:bg-gray-700 p-3 cursor-pointer hover:text-cyan-400">
          <span>
            <FaBook className="mt-1" size={20} />
          </span>
          Guides
        </p>
        <p className="w-full rounded-lg flex items-center gap-3 text-md font-semibold hover:bg-gray-700 p-3 cursor-pointer hover:text-cyan-400">
          <span>
            <FaClipboard className="mt-1" size={20} />
          </span>
          Events
        </p>
        <p className="w-full rounded-lg flex items-center gap-3 text-md font-semibold hover:bg-gray-700 p-3 cursor-pointer hover:text-cyan-400">
          <span>
            <FaTrophy className="mt-1" size={20} />
          </span>
          Tournaments
        </p>
      </div>
      <div className="mt-10">
        <p className="text-md font-semibold text-cyan-400 mb-3">QUICK STATS</p>
        <p className="text-2xl font-bold flex flex-col text-cyan-400 bg-gray-700 p-2 rounded-lg">
          24.5K{" "}
          <span className="text-xs font-semibold text-gray-400">
            Online Players
          </span>
        </p>
        <p className="text-2xl font-bold mt-4 flex flex-col text-violet-400 bg-gray-700 p-2 rounded-lg">
          156{" "}
          <span className="text-xs font-semibold text-gray-400">
            Active Threads
          </span>
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
