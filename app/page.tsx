"use client";

import ReactLenis from "lenis/react";

import { Hero } from "@/components/hero";
import { Trial } from "@/components/trial";
import { Brands } from "@/components/brands";
import { Features } from "@/components/features";
import { Integrations } from "@/components/integrations";
import { Testimonials } from "@/components/testimonials";

const Home = () => {
  return (
    <>
      <ReactLenis root>
        <Hero />
        <Brands />
        <Features />
        <Integrations />
        <Testimonials />
        <Trial />
        <div className="h-1000" />
      </ReactLenis>
    </>
  );
};

export default Home;
