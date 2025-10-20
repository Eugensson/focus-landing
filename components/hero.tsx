"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import { Header } from "@/components/header";
import { ButtonPrimary } from "@/components/button-primary";

export const Hero = () => {
  const { scrollY } = useScroll();

  const imgTopPosition = useTransform(scrollY, [0, 400], ["480px", "240px"]);
  const imgScale = useTransform(scrollY, [0, 200, 1300], [1, 1.4, 1]);
  const textOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const textScale = useTransform(scrollY, [0, 200], [1, 0.8]);
  const textDisplay = useTransform(scrollY, [0, 800], ["flex", "none"]);

  return (
    <section className="relative h-screen xl:h-400 overflow-x-clip">
      <Header />
      <div className="container h-full flex items-center xl:items-start">
        <motion.div
          className="fixed left-0 right-0 mt-24 xl:mt-40 flex flex-col items-center justify-center gap-6 text-center"
          style={{
            opacity: textOpacity,
            scale: textScale,
            display: textDisplay,
          }}
        >
          <h1 className="max-w-200 xl:max-w-max text-6xl font-bold tracking-[-0.5px] leading-none capitalize">
            Boost your productivity instantly
          </h1>
          <p className="px-8 xl:px-0 mb-2 max-w-170 text-xl text-white/80 font-light">
            Streamline tasks and manage your time effortlessly with our
            powerful, intuitive, all-in-one productivity platform.
          </p>
          <ButtonPrimary btnText="Join today" />
        </motion.div>
        <motion.div
          className="sticky left-0 right-0 hidden xl:block h-130 w-full max-w-240 mx-auto bg-hero bg-no-repeat bg-contain bg-center"
          style={{ top: imgTopPosition, scale: imgScale }}
        />
      </div>
    </section>
  );
};
