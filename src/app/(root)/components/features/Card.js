"use client";
import React from "react";
import { motion } from "framer-motion";

const Card = ({ title, des, icon }) => {
  return (
    <motion.div
      initial={{ y: 18, opacity: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
      whileInView={{ y: 0, opacity: 1 }}
      className="service-card w-full px-6 md:px-8 min-h-72 py-8 rounded-lg flex items-center group"
    >
      <div className="service-card-shine" aria-hidden="true" />
      <div className="service-card-corner" aria-hidden="true" />
      <div className="relative z-10">
        <div className="flex h-full flex-col gap-8">
          <div className="service-icon w-12 h-12 flex items-center justify-center">
            {icon ? (
              <span className="text-5xl text-designColor">{icon}</span>
            ) : (
              <>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">
              {title}
            </h2>
            <p className="text-base leading-7 text-white/70">{des}</p>
          </div>
        </div>
      </div>
      <span className="service-card-index" aria-hidden="true">
        {title.slice(0, 2)}
      </span>
    </motion.div>
  );
};

export default Card;
