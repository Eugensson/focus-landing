"use client";

import ReactLenis from "lenis/react";

import { Hero } from "@/components/hero";

const Home = () => {
  return (
    <>
      <ReactLenis root>
        <Hero />
        <div className="h-1000" />
      </ReactLenis>
    </>
  );
};

export default Home;
