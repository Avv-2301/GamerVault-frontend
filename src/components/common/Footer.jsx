import React from "react";
import { Youtube, Facebook, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0d1117] text-white px-8 py-10 border-t border-gray-700">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold text-yellow-500 text-3xl mb-2">
            Gamer's Vault
          </h4>
          <p className="text-gray-400 text-md">
            Your ultimate destination for gaming excellence.
          </p>
          <div className="flex space-x-6 mt-4 text-gray-400 text-lg">
            <Youtube size={24} color="#f80d0d" />
            <Facebook size={24} color="#340df8" />
            <Twitter size={24} color="#0dbdf8" />
          </div>
        </div>

        <div>
          <h5 className="font-semibold mb-2 text-lg">Games</h5>
          <ul className="text-md text-gray-400 space-y-1">
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
          <h5 className="font-semibold mb-2 text-lg">Support</h5>
          <ul className="text-md text-gray-400 space-y-1">
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
          <h5 className="font-semibold mb-2 text-lg">Newsletter</h5>
          <p className="text-md text-gray-400 mb-4">
            Stay updated with the latest games and deals
          </p>
          <form className="flex gap-4">
            <input
              type="email"
              placeholder="Your email"
              className="bg-gray-800 px-3 py-2 text-md text-white rounded-lg w-full outline-none"
            />
            <button
              type="submit"
              className="bg-indigo-600 px-4 rounded-lg hover:bg-indigo-700 flex items-center justify-center gap-2 text-white font-semibold"
            >
              Subscribe
              <Mail size={18} color="#ffffff" />
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-14">
        © 2025 Gamer's Vault. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
