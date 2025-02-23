import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Layout: React.FC = () => {
  return (
    <div>
      <nav className="p-4 bg-gray-800 text-white">
        <Link to="/" className="mr-4">
          Home
        </Link>
        <Link to="/about" className="mr-4">
          About
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};
