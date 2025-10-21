import { Variants, Transition } from "framer-motion";

export const fadeInOnScroll = (delay: number, duration: number): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      delay: delay,
      duration: duration,
      ease: [0.42, 0, 0.58, 1],
    } as Transition,
  },
});

export const fadeInUpSpring = (delay: number, duration: number): Variants => ({
  hidden: { opacity: 0, y: 60, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      delay: delay,
      duration: duration,
      stiffness: 100,
      ease: [0.6, -0.05, 0.01, 0.99],
    } as Transition,
  },
});
