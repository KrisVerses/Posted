import React, { useState } from "react";
import krisversesLogo from "../../assets/imgs/KV-logo.png";
import { motion } from "framer-motion";
import { useFilter } from "../../context/FilterContext";

export const Navbar: React.FC = () => {
  const { filterTag, setFilterTag } = useFilter();
  return (
    <header className="flex flex-col lg:flex-row justify-around items-center text-content py-10">
      <div>
        <motion.img
          src={krisversesLogo}
          alt="KrisVerses Logo"
          className="max-w-full h-36 object-contain hover:scale-105 hover:shadow-md transition-all duration-300 rounded-full"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
        <p className="text-sm text-gray-600 mt-4 italic font-body hover:text-gray-800 transition-all">
          Where Art Meets Code
        </p>
      </div>
      <nav className="flex flex-col items-center font-body">
        <button className="px-6 py-3 my-6 border-2 border-b-4 border-blue-950 rounded-full bg-white shadow-md hover:scale-105 transition-transform font-bold tracking-wide">
          Search & Explore
        </button>
        <div>
          {["Art", "Code", "Design", "Tech", "Cybersecurity"].map((tag) => (
            <button
              key={tag}
              onClick={() => setFilterTag(tag)}
              className={`px-3 py-1 mx-2 border-2 border-b-4 border-blue-950 shadow-md ${
                filterTag === tag
                  ? "bg-gray-800 text-white"
                  : "bg-accents text-gray-800"
              } hover:bg-gray-700 hover:text-white transition-all`}
            >
              {tag}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};
