"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { ButtonPrimary } from "@/components/button-primary";

import { integrationData } from "@/lib/data";
import { iconAnimation, fadeInOnScroll } from "@/lib/variants";

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
          initial={{ opacity: 0, y: 60, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: 0.6,
            duration: 0.4,
            ease: [0.6, -0.05, 0.01, 0.99],
            type: "spring",
            stiffness: 100,
          }}
          className="flex flex-col items-center justify-center gap-4"
        >
          <ButtonPrimary btnText="See all" />
        </motion.div>
      </div>
    </section>
  );
};
