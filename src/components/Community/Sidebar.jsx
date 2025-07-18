import { IoIosChatboxes } from "react-icons/io";
import { FaBook, FaClipboard, FaTrophy } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navigations = [
    { icon: <IoIosChatboxes size={20} />, path: "/forums", label: "Forums" },
    { icon: <FaBook size={20} />, path: "/guides", label: "Guides" },
    { icon: <FaClipboard size={20} />, path: "/events", label: "Events" },
    { icon: <FaTrophy size={20} />, path: "/tournaments", label: "Tournaments" },
  ];

  return (
    <aside className="bg-gray-900 text-gray-200 w-64 p-6 border-r border-cyan-400 border-solid h-screen">
      {/* Navigation */}
      <p className="text-cyan-400 font-bold mb-4 text-md">NAVIGATION</p>
      <div className="space-y-2">
        {navigations.map((nav, index) => (
          <Link
            key={index}
            to={nav.path}
            className={`w-full rounded-lg flex items-center gap-3 text-md font-semibold p-3 cursor-pointer transition
              ${
                currentPath === nav.path
                  ? "bg-cyan-600 text-white"
                  : "hover:bg-gray-700 hover:text-cyan-400"
              }`}
          >
            {nav.icon}
            {nav.label}
          </Link>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="mt-10">
        <p className="text-md font-semibold text-cyan-400 mb-3">QUICK STATS</p>
        <p className="text-2xl font-bold flex flex-col text-cyan-400 bg-gray-700 p-2 rounded-lg">
          24.5K
          <span className="text-xs font-semibold text-gray-400">
            Online Players
          </span>
        </p>
        <p className="text-2xl font-bold mt-4 flex flex-col text-violet-400 bg-gray-700 p-2 rounded-lg">
          156
          <span className="text-xs font-semibold text-gray-400">
            Active Threads
          </span>
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
