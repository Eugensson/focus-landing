"use client";

import { motion } from "framer-motion";

import { TestimonialCard } from "@/components/testimonial-card";

import { testimonialsData } from "@/lib/data";
import { fadeInOnScroll } from "@/lib/variants";

export const Testimonials = () => {
  return (
    <section className="w-full mb-24 xl:mb-32 xl:py-24 flex items-center justify-center">
      <div className="container overflow-hidden">
        <motion.div
          variants={fadeInOnScroll(0.2, 0.4)}
          initial="hidden"
          whileInView="visible"
          className="text-center"
        >
          <h2 className="mb-6 h2">What Our Clients Say</h2>
          <p className="mb-24 lead">
            Hear directly from those who have improved their efficiency and
            organization.
          </p>
        </motion.div>
        <motion.ul
          variants={fadeInOnScroll(0.2, 0.6)}
          initial="hidden"
          whileInView="visible"
          className="flex"
        >
          {Array.from({ length: 2 }, (_, i) => (
            <li key={i}>
              <motion.ul
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex"
              >
                {testimonialsData.map((testimonial) => (
                  <li key={testimonial.id} className="mr-12">
                    <TestimonialCard testimonial={testimonial} />
                  </li>
                ))}
              </motion.ul>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};
