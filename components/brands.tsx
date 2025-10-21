"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { brandsData } from "@/lib/data";
import { fadeInOnScroll } from "@/lib/variants";

export const Brands = () => {
  return (
    <section className="w-full h-[35vh] pt-24 flex flex-col items-center justify-center">
      <p className="lead text-center mb-6 max-w-160">
        Trusted by 200+ companies growing with Focus — the modern task
        management solution.
      </p>
      <motion.ul
        variants={fadeInOnScroll(0.2, 0.6)}
        initial="hidden"
        whileInView="visible"
        className="container overflow-hidden flex"
      >
        {Array.from({ length: 2 }).map((_, index) => (
          <li key={index}>
            <motion.ul
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="flex gap-12"
            >
              {brandsData.map(({ src, alt }, index) => (
                <div key={index} className="relative mr-12 w-52 h-20">
                  <Image src={src} alt={alt} fill className="object-contain" />
                </div>
              ))}
            </motion.ul>
          </li>
        ))}
      </motion.ul>
    </section>
  );
};
