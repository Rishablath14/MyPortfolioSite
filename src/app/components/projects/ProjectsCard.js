"use client"
import React from 'react'
import { FaGlobe } from "react-icons/fa";
import {motion} from "framer-motion"
import Image from 'next/image';
const ProjectsCard = ({ title, des, src, link }) => {
  return (
    <motion.div 
    initial={{opacity:0.4,y:100}}
    viewport={{ once: true }}
    transition={{type: "spring",damping:8,stiffness: 80,duration:1}}
    whileInView={{opacity:1,y:0}}
    className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full h-[220px] overflow-hidden rounded-lg">
        <Image
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="Projects Image"
        />
      </div>
      <div className="w-full mt-5 flex flex-col  gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <a href={link} target='_blank' rel='noopener noreferrer'><FaGlobe /></a>
              </span>
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300 text-justify">
            {des}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectsCard
