"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const AmbientWow = () => {
  const { scrollYProgress } = useScroll();
  const spring = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    mass: 0.4,
  });
  const rotate = useTransform(spring, [0, 1], [0, 110]);
  const y = useTransform(spring, [0, 1], ["0%", "-22%"]);

  return (
    <div className="ambient-wow" aria-hidden="true">
      <motion.div className="ambient-rings" style={{ rotate }} />
      <motion.div className="ambient-rings ambient-rings-secondary" style={{ rotate }} />
      <motion.div className="ambient-thread" style={{ y }}>
        <svg viewBox="0 0 220 920" fill="none">
          <motion.path
            d="M154 12C59 118 199 200 102 302C10 399 188 477 101 590C22 693 163 750 70 908"
            stroke="url(#ambient-thread-gradient)"
            strokeWidth="2"
            strokeLinecap="round"
            pathLength="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <defs>
            <linearGradient id="ambient-thread-gradient" x1="154" y1="12" x2="70" y2="908">
              <stop stopColor="#FFB457" />
              <stop offset="0.5" stopColor="#57E6C8" />
              <stop offset="1" stopColor="#FF6A3D" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
      <motion.div
        className="kinetic-slice kinetic-slice-one"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55 }}
      />
      <motion.div
        className="kinetic-slice kinetic-slice-two"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.12, duration: 0.55 }}
      />
      <motion.div
        className="kinetic-slice kinetic-slice-three"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.24, duration: 0.55 }}
      />
      <div className="kinetic-rule kinetic-rule-one" />
      <div className="kinetic-rule kinetic-rule-two" />
    </div>
  );
};

export default AmbientWow;
