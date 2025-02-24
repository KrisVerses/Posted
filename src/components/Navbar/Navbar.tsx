import React from "react";

export const Navbar: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-around items-center text-content">
      <h1 className="font-heading text-7xl md:text-9xl p-4 tracking-tighter">
        POSTED
      </h1>
      <nav className="flex flex-col items-center font-body">
        <button className="px-6 py-3 mb-4 rounded-full bg-white shadow-lg">
          🔎 Search & Explore
        </button>
        <ul className="flex flex-wrap justify-center lg:flex-row">
          <li className="text-xl px-2 py-1 mb-2 bg-blue-300 hover:bg-blue-600 cursor-pointer hover:text-white border-blue-950 border-2 border-b-4 mx-4 shadow-md">
            Art
          </li>
          <li className="text-xl px-2 py-1 mb-2 bg-blue-300 hover:bg-blue-600 cursor-pointer hover:text-white border-blue-950 border-2 border-b-4 mx-4 shadow-md">
            Science
          </li>
          <li className="text-xl px-2 py-1 mb-2 bg-blue-300 hover:bg-blue-600 cursor-pointer hover:text-white border-blue-950 border-2 border-b-4 mx-4 shadow-md">
            Sports
          </li>
          <li className="text-xl px-2 py-1 mb-2 bg-blue-300 hover:bg-blue-600 cursor-pointer hover:text-white border-blue-950 border-2 border-b-4 mx-4 shadow-md">
            Fashion
          </li>
        </ul>
      </nav>
    </div>
  );
};
