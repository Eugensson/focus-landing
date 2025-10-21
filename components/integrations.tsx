"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { ButtonPrimary } from "@/components/button-primary";

import { integrationData } from "@/lib/data";
import { iconAnimation, fadeInOnScroll, fadeInUpSpring } from "@/lib/variants";

export const Integrations = () => {
  return (
    <section className="py-23 xl:py-32 xl:mt-32 min-h-180">
      <div className="container flex flex-col items-center justify-center gap-8 xl:gap-16">
        <motion.div
          variants={fadeInOnScroll(0.2, 0.6)}
          initial="hidden"
          whileInView="visible"
          className="text-center"
        >
          <h2 className="h2 mb-3">All Your Tools, Working as One</h2>
          <p className="lead">
            Bring your favorite apps together and create a truly unified
            workspace — connected, effortless, and productive.
          </p>
        </motion.div>
        <ul className="w-full max-w-256 mb-8 mx-auto flex flex-wrap gap-8 place-content-center">
          {integrationData.map(({ src, alt }, index) => (
            <motion.li
              key={index}
              custom={index}
              variants={iconAnimation}
              initial="initial"
              whileInView="animate"
              className="relative size-20"
            >
              <Image src={src} alt={alt} fill />
            </motion.li>
          ))}
        </ul>
        <motion.div
          variants={fadeInUpSpring(0.6, 0.8)}
          initial="hidden"
          whileInView="visible"
        >
          <ButtonPrimary btnText="See all" />
        </motion.div>
      </div>
    </section>
  );
};
