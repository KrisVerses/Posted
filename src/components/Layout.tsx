import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Layout: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
