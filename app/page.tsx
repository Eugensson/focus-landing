"use client";

import ReactLenis from "lenis/react";

import { Hero } from "@/components/hero";
import { Brands } from "@/components/brands";
import { Features } from "@/components/features";
import { Integrations } from "@/components/integrations";

const Home = () => {
  return (
    <>
      <ReactLenis root>
        <Hero />
        <Brands />
        <Features />
        <Integrations />
        <div className="h-1000" />
      </ReactLenis>
    </>
  );
};

export default Home;
