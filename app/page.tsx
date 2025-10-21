"use client";

import ReactLenis from "lenis/react";

import { Hero } from "@/components/hero";
import { Brands } from "@/components/brands";

const Home = () => {
  return (
    <>
      <ReactLenis root>
        <Hero />
        <Brands />
        <div className="h-1000" />
      </ReactLenis>
    </>
  );
};

export default Home;
