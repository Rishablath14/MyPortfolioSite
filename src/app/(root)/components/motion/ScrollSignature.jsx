"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ScrollSignature = () => {
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    mass: 0.5,
  });
  const opacity = useTransform(scrollYProgress, [0, 0.08, 0.92, 1], [0.35, 1, 1, 0.2]);

  return (
    <motion.svg
      className="scroll-signature"
      viewBox="0 0 1200 3200"
      fill="none"
      aria-hidden="true"
      style={{ opacity }}
    >
      <motion.path
        d="M1015 45C781 236 474 168 314 380C118 640 516 773 718 558C902 362 1052 621 806 878C561 1134 199 1062 156 1320C108 1606 655 1517 789 1744C932 1986 511 2074 378 2294C253 2501 523 2610 709 2488C932 2341 1046 2641 811 2878C662 3029 432 3071 255 3156"
        stroke="url(#scroll-gradient)"
        strokeWidth="4"
        strokeLinecap="round"
        pathLength="1"
        style={{ pathLength }}
      />
      <defs>
        <linearGradient id="scroll-gradient" x1="1020" y1="45" x2="255" y2="3156">
          <stop stopColor="#FFB457" />
          <stop offset="0.48" stopColor="#57E6C8" />
          <stop offset="1" stopColor="#FF6A3D" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};

export default ScrollSignature;
