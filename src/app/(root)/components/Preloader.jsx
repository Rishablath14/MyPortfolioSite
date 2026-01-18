"use client";
import React from "react";
import { motion } from "framer-motion";

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, pointerEvents: "none" }}
      transition={{ delay: 1.2, duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[99999999999] flex items-center justify-center bg-[#0b0f12]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,180,87,0.18),transparent_55%),radial-gradient(circle_at_20%_80%,rgba(87,230,200,0.14),transparent_60%)]" />
      <motion.div
        initial={{ opacity: 0, y: 18, letterSpacing: "0.6em" }}
        animate={{ opacity: 1, y: 0, letterSpacing: "0.2em" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center"
      >
        <div className="text-xs uppercase tracking-[0.6em] text-white/60">
          Portfolio
        </div>
        <div className="text-4xl md:text-5xl font-titleFont font-bold gradient-text">
          Rishab Lath
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: [0, 1, 0] }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
          className="mx-auto mt-6 h-[2px] w-48 bg-gradient-to-r from-[#ff6a3d] via-[#ffb457] to-[#57e6c8]"
          style={{ transformOrigin: "left" }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
