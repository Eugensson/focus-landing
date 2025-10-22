"use client";

import { motion } from "framer-motion";

import { ButtonTertiary } from "@/components/button-tertiary";

import { fadeInOnScroll } from "@/lib/variants";

export const Trial = () => {
  return (
    <section className="xl:mb-32 w-full ">
      <motion.div
        variants={fadeInOnScroll(0.2, 0.6)}
        initial="hidden"
        whileInView="visible"
        className="py-24 h-full min-h-75 w-full max-w-285 mx-auto flex items-center bg-gradient-to-r from-accent via accent-accent-secondary to-accent xl:rounded-2xl"
      >
        <div className="w-full xl:px-24 flex flex-col xl:flex-row items-center justify-between">
          <div className="mb-12 xl:mb-0 text-center xl:text-left">
            <h2 className="mb-2 text-[40px] leading-tight font-bold">
              Start your 30-day free trial
            </h2>
            <p className="lead px-1 max-w-100 xl:max-w-140 mx-auto xl:mx-0">
              Expirience the full power of our platform wita a 30-day free
              trial. No credit card required.
            </p>
          </div>
          <ButtonTertiary btnText="Get started" />
        </div>
      </motion.div>
    </section>
  );
};
