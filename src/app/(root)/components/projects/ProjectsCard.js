"use client";
import React from "react";
import { FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

const ProjectsCard = ({ title, des, src, link, stack = [], outcome }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      className="premium-card project-card w-full p-4 xl:px-8 h-auto xl:py-8 rounded-lg flex flex-col group"
    >
      <div className="premium-card-line" aria-hidden="true" />
      <div className="relative z-10 w-full h-[220px] overflow-hidden rounded-lg border border-white/10 project-media">
        <Image
          className="w-full h-60 object-cover group-hover:scale-[1.045] duration-500 cursor-pointer"
          src={src}
          alt={`${title} project preview`}
          sizes="(min-width: 1280px) 42vw, (min-width: 768px) 45vw, 100vw"
        />
      </div>
      <div className="relative z-10 w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-base uppercase text-designColor font-semibold leading-6">
              {title}
            </h3>
            <div className="flex gap-2">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${title}`}
                className="text-lg w-10 h-10 rounded-full bg-white/10 inline-flex justify-center items-center text-white/70 hover:text-white duration-300 cursor-pointer border border-white/10"
              >
                <FaGlobe aria-hidden="true" />
              </a>
            </div>
          </div>
          {outcome && (
            <p className="mt-3 text-sm font-semibold text-white">{outcome}</p>
          )}
          <p className="text-sm leading-7 tracking-wide mt-3 hover:text-gray-100 duration-300 text-white/70">
            {des}
          </p>
          {stack.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                >
                  {item}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsCard;
