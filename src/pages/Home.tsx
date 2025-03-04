import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { Posts } from "../components/Posts/Posts";

export const Home: React.FC = () => {
  return (
    <section>
      <Posts />
    </section>
  );
};
