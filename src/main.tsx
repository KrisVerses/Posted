import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/routes/AppRoutes";
import { FilterProvider } from "./context/FilterContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FilterProvider>
      <RouterProvider router={router} />
    </FilterProvider>
  </React.StrictMode>
);
