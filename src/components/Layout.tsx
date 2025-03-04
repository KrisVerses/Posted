import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Footer } from "./Footer/Footer";
import { Navbar } from "./Navbar/Navbar";

export const Layout: React.FC = () => {
  return (
    <div className="bg-background min-h-screen w-full">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
