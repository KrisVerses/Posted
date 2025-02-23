import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Home } from "../../pages/Home";
import { Layout } from "../../components/Layout";
import React from "react";
import { About } from "../../pages/About";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);
