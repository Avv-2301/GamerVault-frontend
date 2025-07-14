import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0d1117] text-white px-8 py-10 border-t border-gray-700">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold text-blue-400 text-xl mb-2">GameVault</h4>
          <p className="text-gray-400 text-sm">
            Your ultimate destination for gaming excellence.
          </p>
          <div className="flex space-x-3 mt-4 text-gray-400 text-lg">
            <a href="#">🎮</a>
            <a href="#">🐦</a>
            <a href="#">📺</a>
            <a href="#">📷</a>
          </div>
        </div>

        <div>
          <h5 className="font-semibold mb-2">Games</h5>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>
              <a href="#" className="hover:underline">
                New Releases
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Top Rated
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Free Games
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Coming Soon
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-2">Support</h5>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Bug Reports
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Community
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-2">Newsletter</h5>
          <p className="text-sm text-gray-400 mb-2">
            Stay updated with the latest games and deals
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="bg-gray-800 px-3 py-2 text-sm text-white rounded-l w-full outline-none"
            />
            <button
              type="submit"
              className="bg-indigo-600 px-4 rounded-r hover:bg-indigo-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10">
        © 2024 GameVault. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
