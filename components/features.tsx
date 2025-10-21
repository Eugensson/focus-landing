"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";

import { featuresData } from "@/lib/data";

export const Features = () => {
  const [index, setIndex] = useState<number>(0);
  const [imgIndex, setImgIndex] = useState<number>(0);

  useEffect(() => {
    setImgIndex(index);
  }, [index]);

  return (
    <section className="relative pt-32 ">
      <div className="container">
        <div className="flex gap-16">
          <motion.div
            key={imgIndex + 1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.4,
              ease: [0.6, -0.05, 0.01, 0.99],
              delay: 0.2,
            }}
            className="hidden sticky top-[calc(50%-240px)] w-full h-120 xl:flex flex-1 justify-center"
          >
            <div className="relative h-full w-full">
              <Image
                src={featuresData[index].imgSrc}
                fill
                alt="Analytics Dashboard"
                className="h-full object-contain"
              />
            </div>
          </motion.div>

          <ul className="flex flex-1 flex-col gap-24">
            {featuresData.map(
              ({ title, description, highlight }, itemIndex) => (
                <motion.li
                  key={itemIndex}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ amount: "all" }}
                  onViewportEnter={() => setIndex(itemIndex)}
                  className="h-auto xl:h-120 w-full flex items-center"
                >
                  <div className="w-[80vw] xl:w-auto mx-auto xl:mx-0">
                    <h2 className="h2 mb-4">{title}</h2>
                    <p className="lead mb-8">{description}</p>
                    <ul className="flex flex-col gap-5">
                      {highlight.map((highlight, index) => (
                        <li key={index} className="flex items-center gap-4">
                          <FaRegCheckCircle
                            size={24}
                            className="text-accent-secondary"
                          />
                          <p>{highlight}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.li>
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};
