import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <div className="flex space-x-6">
          <a
            href="#"
            className="text-white text-2xl hover:text-gray-400 transition"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="#"
            className="text-white text-2xl hover:text-gray-400 transition"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="mailto:example@example.com"
            className="text-white text-2xl hover:text-gray-400 transition"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>

        <p className="text-sm text-gray-400">© 2025 Kris Norful • KrisVerses</p>
      </div>
    </footer>
  );
};
